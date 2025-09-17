import { GoogleGenAI, Type } from "@google/genai";
import type { AnalysisReport, ThreatSignal, ThreatIntelligenceSource } from '../types';

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const threatSignalSchema = {
    type: Type.OBJECT,
    properties: {
        title: { type: Type.STRING, description: "A short, descriptive title for the signal (e.g., 'AI Generated Content')." },
        description: { type: Type.STRING, description: "A brief explanation of what this signal means." },
        severity: { type: Type.STRING, enum: ['info', 'warning', 'critical'], description: "The severity of the signal." }
    },
    required: ["title", "description", "severity"]
};

const threatIntelSourceSchema = {
    type: Type.OBJECT,
    properties: {
        source: { type: Type.STRING, description: "The name of the threat intelligence source (e.g., 'VirusTotal', 'PhishTank')." },
        status: { type: Type.STRING, enum: ['CLEAN', 'SUSPICIOUS', 'MALICIOUS', 'UNKNOWN'], description: "The status from this source." }
    },
    required: ["source", "status"]
};

const responseSchema = {
    type: Type.OBJECT,
    properties: {
        inputType: { type: Type.STRING, enum: ["QR", "URL", "Email", "SMS", "Text"], description: "The detected type of the input content." },
        riskLevel: { type: Type.STRING, enum: ["SAFE", "SUSPICIOUS", "MALICIOUS", "UNKNOWN"], description: "Categorical risk level." },
        overallRiskScore: { type: Type.INTEGER, description: "A score from 0 (safe) to 100 (malicious)." },
        analysisDetails: {
            type: Type.OBJECT,
            properties: {
                QrCodeAnalysis: {
                    type: Type.OBJECT,
                    properties: {
                        decodedData: { type: Type.STRING },
                        encodingType: { type: Type.STRING },
                        obfuscationDetected: { type: Type.BOOLEAN }
                    }
                },
                DomainAnalysis: {
                    type: Type.OBJECT,
                    properties: {
                        domainAge: { type: Type.STRING },
                        sslValid: { type: Type.BOOLEAN },
                        redirects: { type: Type.INTEGER },
                        homoglyphDetected: { type: Type.BOOLEAN }
                    }
                },
                EmailAnalysis: {
                    type: Type.OBJECT,
                    properties: {
                        urgentKeywordsDetected: { type: Type.BOOLEAN },
                        brandImpersonation: { type: Type.BOOLEAN },
                        grammarErrors: { type: Type.INTEGER }
                    }
                }
            }
        },
        preventionStatus: { type: Type.STRING, enum: ["ALLOW", "WARN", "BLOCK"] },
        userActionRequired: { type: Type.STRING },
        sandboxResult: { type: Type.STRING, enum: ["Safe", "Malicious", "NotTested"] },
        explanation: { type: Type.STRING },
        detectedSignals: {
            type: Type.ARRAY,
            items: threatSignalSchema,
            description: "An array of specific threat signals or interesting characteristics found."
        },
        threatIntelligenceSummary: {
            type: Type.ARRAY,
            items: threatIntelSourceSchema,
            description: "Simulated results from various threat intelligence feeds."
        }
    },
    required: ["inputType", "riskLevel", "overallRiskScore", "analysisDetails", "preventionStatus", "userActionRequired", "sandboxResult", "explanation", "detectedSignals", "threatIntelligenceSummary"]
};

export const analyzeContent = async (content: string): Promise<AnalysisReport> => {
  try {
    const prompt = `
      As PhishGuard AI, a real-time cybersecurity analyst, analyze the provided input for phishing threats. The input could be a URL, email body, SMS text, or decoded QR code content. Your analysis must be deep, covering technical and psychological vectors.

      **Core Analysis Directives:**

      1.  **Input Type Identification:** First, determine if the input is a URL, Email, SMS, QR content, or general Text.
      2.  **Multi-Vector Threat Analysis:**
          *   **For URLs/QR Codes:** Analyze for obfuscation (Base64/hex), multi-step redirects, URL shorteners, homoglyph domains, SSL validity, and domain age. Check for suspicious parameters.
          *   **For Email/SMS/Text:** Analyze for social engineering tactics (false urgency, authority claims, emotional manipulation). Detect brand impersonation, grammar/spelling errors, suspicious keywords, and signs of AI-generated text (e.g., overly formal, generic phrasing).
      3.  **Threat Intelligence Simulation:** Simulate checking the primary domain/URL against top-tier threat intelligence feeds (VirusTotal, PhishTank, MISP, OTX). Provide a status for each.
      4.  **Signal Detection:** Identify and list specific, noteworthy signals. Examples: "Social Engineering - Urgency", "AI Generated Content", "URL Obfuscation - Base64", "Homoglyph Domain".
      5.  **Risk Assessment & Prevention:**
          *   Calculate an 'overallRiskScore' (0-100).
          *   Assign a 'riskLevel' (SAFE, SUSPICIOUS, MALICIOUS).
          *   Determine a 'preventionStatus' (ALLOW, WARN, BLOCK).
          *   Write a clear, concise 'userActionRequired' message.
          *   Provide a detailed 'explanation' justifying your findings, referencing the detected signals and intelligence reports.

      **Output Requirements:**
      - You MUST respond with a valid JSON object that strictly adheres to the provided schema.
      - Ensure all required fields are present.
      - If a specific analysis (e.g., QR) is not applicable, omit it from the 'analysisDetails' object, but still include the 'analysisDetails' object itself.

      **Analyze the following input now:**
      \`\`\`
      ${content}
      \`\`\`
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: responseSchema,
        temperature: 0.1,
      },
    });
    
    const rawText = response.text.trim();
    // A simple retry mechanism for occasional parsing errors
    try {
        return JSON.parse(rawText) as AnalysisReport;
    } catch (e) {
        console.warn("Initial JSON parse failed, attempting to fix and re-parse.", rawText);
        const fixedJson = rawText.replace(/,\s*}/g, '}').replace(/,\s*]/g, ']');
        return JSON.parse(fixedJson) as AnalysisReport;
    }

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    if (error instanceof Error && error.message.includes('SAFETY')) {
        throw new Error("The provided content could not be analyzed due to safety restrictions.");
    }
    throw new Error("Failed to get a valid analysis from the AI model.");
  }
};