export enum AnalysisState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

export type RiskLevel = 'SAFE' | 'SUSPICIOUS' | 'MALICIOUS' | 'UNKNOWN';
export type PreventionStatus = 'ALLOW' | 'WARN' | 'BLOCK';
export type InputType = 'QR' | 'URL' | 'Email' | 'SMS' | 'Text';
export type SandboxResult = 'Safe' | 'Malicious' | 'NotTested';

// Analysis Details sub-types
export interface QrCodeAnalysisDetails {
  decodedData: string;
  encodingType: string;
  obfuscationDetected: boolean;
}

export interface DomainAnalysisDetails {
  domainAge: string;
  sslValid: boolean;
  redirects: number;
  homoglyphDetected: boolean;
}

export interface EmailAnalysisDetails {
  urgentKeywordsDetected: boolean;
  brandImpersonation: boolean;
  grammarErrors: number;
}

// Wrapper for all analysis details
export interface AnalysisDetails {
  QrCodeAnalysis?: QrCodeAnalysisDetails;
  DomainAnalysis?: DomainAnalysisDetails;
  EmailAnalysis?: EmailAnalysisDetails;
}

// New types for enhanced analysis
export type SignalSeverity = 'info' | 'warning' | 'critical';

export interface ThreatSignal {
    title: string;
    description: string;
    severity: SignalSeverity;
}

export type ThreatIntelStatus = 'CLEAN' | 'SUSPICIOUS' | 'MALICIOUS' | 'UNKNOWN';

export interface ThreatIntelligenceSource {
    source: string;
    status: ThreatIntelStatus;
}


// Main report structure
export interface AnalysisReport {
  inputType: InputType;
  riskLevel: RiskLevel;
  overallRiskScore: number;
  analysisDetails: AnalysisDetails;
  preventionStatus: PreventionStatus;
  userActionRequired: string;
  sandboxResult: SandboxResult;
  explanation: string;
  // New enhanced fields
  detectedSignals: ThreatSignal[];
  threatIntelligenceSummary: ThreatIntelligenceSource[];
}
