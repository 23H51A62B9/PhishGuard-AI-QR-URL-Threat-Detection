import React, { useState } from 'react';
import type { AnalysisReport, ThreatSignal, ThreatIntelligenceSource, SignalSeverity, ThreatIntelStatus } from '../types';
import { ScoreGauge } from './ScoreGauge';
import { ResultCard } from './ResultCard';
import { TextIcon, GlobeIcon, QrCodeIcon, ShieldCheckIcon, AlertTriangleIcon, BanIcon, CpuChipIcon, RobotIcon, ChatBubbleIcon, ThumbsUpIcon, ThumbsDownIcon } from './IconComponents';

const preventionMap = {
    BLOCK: {
        bgColor: 'bg-brand-malicious/20 border-brand-malicious/50',
        textColor: 'text-brand-malicious',
        icon: <BanIcon className="w-10 h-10" />
    },
    WARN: {
        bgColor: 'bg-brand-suspicious/20 border-brand-suspicious/50',
        textColor: 'text-brand-suspicious',
        icon: <AlertTriangleIcon className="w-10 h-10" />
    },
    ALLOW: {
        bgColor: 'bg-brand-safe/20 border-brand-safe/50',
        textColor: 'text-brand-safe',
        icon: <ShieldCheckIcon className="w-10 h-10" />
    }
};

const signalSeverityMap: { [key in SignalSeverity]: { color: string; icon: React.ReactNode } } = {
    critical: { color: 'text-brand-malicious', icon: <BanIcon className="w-5 h-5" /> },
    warning: { color: 'text-brand-suspicious', icon: <AlertTriangleIcon className="w-5 h-5" /> },
    info: { color: 'text-blue-400', icon: <ShieldCheckIcon className="w-5 h-5" /> },
};

const intelStatusMap: { [key in ThreatIntelStatus]: string } = {
    CLEAN: 'text-brand-safe',
    SUSPICIOUS: 'text-brand-suspicious',
    MALICIOUS: 'text-brand-malicious',
    UNKNOWN: 'text-gray-400',
};

const Signal: React.FC<{signal: ThreatSignal}> = ({ signal }) => {
    const visual = signalSeverityMap[signal.severity];
    return (
        <div className="flex items-start p-3 bg-brand-primary/50 rounded-md">
            <div className={`mr-3 flex-shrink-0 ${visual.color}`}>{visual.icon}</div>
            <div>
                <h4 className={`font-semibold ${visual.color}`}>{signal.title}</h4>
                <p className="text-sm text-gray-400">{signal.description}</p>
            </div>
        </div>
    );
};

const IntelSource: React.FC<{source: ThreatIntelligenceSource}> = ({ source }) => {
    const color = intelStatusMap[source.status];
    return (
        <div className="flex justify-between items-center text-sm">
            <span className="text-gray-300">{source.source}</span>
            <span className={`font-bold ${color}`}>{source.status}</span>
        </div>
    );
};


export const AnalysisResult: React.FC<{ report: AnalysisReport }> = ({ report }) => {
  const { 
    overallRiskScore,
    preventionStatus,
    userActionRequired,
    explanation,
    analysisDetails: details,
    sandboxResult,
    inputType,
    detectedSignals,
    threatIntelligenceSummary
  } = report;

  const [feedback, setFeedback] = useState<'accurate' | 'inaccurate' | null>(null);

  const preventionVisuals = preventionMap[preventionStatus];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Prevention Status Banner */}
      <div className={`flex items-start rounded-lg p-6 shadow-xl border ${preventionVisuals.bgColor}`}>
        <div className={`mr-4 flex-shrink-0 ${preventionVisuals.textColor}`}>{preventionVisuals.icon}</div>
        <div>
          <h3 className={`text-2xl font-bold ${preventionVisuals.textColor}`}>{preventionStatus}</h3>
          <p className="mt-1 text-gray-200 text-lg">{userActionRequired}</p>
        </div>
      </div>

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-4 space-y-6">
            <ResultCard title="Overall Risk Score" hasPadding={false}>
                 <div className="flex flex-col items-center justify-center p-6">
                    <ScoreGauge score={overallRiskScore} />
                 </div>
            </ResultCard>
             <ResultCard title="Threat Intelligence" icon={<GlobeIcon className="w-6 h-6" />}>
                <div className="space-y-2">
                    {threatIntelligenceSummary.map(source => <IntelSource key={source.source} source={source} />)}
                </div>
            </ResultCard>
        </div>
        
        <div className="lg:col-span-8 space-y-6">
            <ResultCard title="Detailed Explanation" icon={<TextIcon className="w-6 h-6" />}>
                 <p className="text-gray-300 whitespace-pre-wrap">{explanation}</p>
            </ResultCard>
            <ResultCard title="Detected Threat Signals" icon={<AlertTriangleIcon className="w-6 h-6" />}>
                {detectedSignals.length > 0 ? (
                    <div className="space-y-3">
                        {detectedSignals.map(signal => <Signal key={signal.title} signal={signal} />)}
                    </div>
                ) : (
                    <p className="text-gray-400">No specific threat signals were detected.</p>
                )}
            </ResultCard>
        </div>
      </div>

      {/* Detailed Analysis Section */}
      <h2 className="text-2xl font-bold text-center text-white border-b-2 border-brand-accent/30 pb-2">Analysis Breakdown</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <ResultCard title="Key Signals" icon={<CpuChipIcon className="w-6 h-6" />}>
              <ul className="space-y-2 text-sm">
                  <li><strong>Input Type:</strong> <span className="text-gray-300">{inputType}</span></li>
                  <li><strong>Sandbox Result:</strong> <span className="text-gray-300">{sandboxResult}</span></li>
              </ul>
          </ResultCard>

          {details.QrCodeAnalysis && (
              <ResultCard title="QR Code Analysis" icon={<QrCodeIcon className="w-6 h-6" />}>
                  <ul className="space-y-2 text-sm">
                      <li><strong>Decoded Data:</strong> <span className="text-gray-300 font-mono break-all">{details.QrCodeAnalysis.decodedData}</span></li>
                      <li><strong>Encoding Type:</strong> <span className="text-gray-300">{details.QrCodeAnalysis.encodingType}</span></li>
                      <li><strong>Obfuscation Detected:</strong> {details.QrCodeAnalysis.obfuscationDetected ? <span className="text-yellow-400">Yes</span> : <span className="text-green-400">No</span>}</li>
                  </ul>
              </ResultCard>
          )}

          {details.DomainAnalysis && (
              <ResultCard title="Domain Analysis" icon={<GlobeIcon className="w-6 h-6" />}>
                  <ul className="space-y-2 text-sm">
                      <li><strong>Domain Age:</strong> <span className="text-gray-300">{details.DomainAnalysis.domainAge}</span></li>
                      <li><strong>SSL Valid:</strong> {details.DomainAnalysis.sslValid ? <span className="text-green-400">Yes</span> : <span className="text-red-400">No</span>}</li>
                      <li><strong>Redirects:</strong> <span className="text-gray-300">{details.DomainAnalysis.redirects}</span></li>
                      <li><strong>Homoglyph Detected:</strong> {details.DomainAnalysis.homoglyphDetected ? <span className="text-yellow-400">Yes</span> : <span className="text-green-400">No</span>}</li>
                  </ul>
              </ResultCard>
          )}

          {details.EmailAnalysis && (
              <ResultCard title="Email/Text Analysis" icon={<ChatBubbleIcon className="w-6 h-6" />}>
                  <ul className="space-y-2 text-sm">
                      <li><strong>Urgent Keywords:</strong> {details.EmailAnalysis.urgentKeywordsDetected ? <span className="text-yellow-400">Detected</span> : <span className="text-green-400">None</span>}</li>
                      <li><strong>Brand Impersonation:</strong> {details.EmailAnalysis.brandImpersonation ? <span className="text-yellow-400">Detected</span> : <span className="text-green-400">None</span>}</li>
                      <li><strong>Grammar Errors:</strong> <span className="text-gray-300">{details.EmailAnalysis.grammarErrors}</span></li>
                  </ul>
              </ResultCard>
          )}
      </div>

      {/* User Feedback Section */}
      <div className="text-center pt-8 border-t border-gray-700/50">
        <h3 className="text-lg text-gray-400 mb-4">Was this analysis helpful?</h3>
        <div className="flex justify-center items-center gap-4">
            <button onClick={() => setFeedback('accurate')} disabled={!!feedback} className={`flex items-center gap-2 px-5 py-2 rounded-lg transition-colors disabled:opacity-70 ${feedback === 'accurate' ? 'bg-green-500/20 text-green-400 border border-green-500' : 'bg-brand-secondary border border-gray-600 hover:bg-gray-700'}`}>
                <ThumbsUpIcon className="w-5 h-5"/> Accurate
            </button>
            <button onClick={() => setFeedback('inaccurate')} disabled={!!feedback} className={`flex items-center gap-2 px-5 py-2 rounded-lg transition-colors disabled:opacity-70 ${feedback === 'inaccurate' ? 'bg-red-500/20 text-red-400 border border-red-500' : 'bg-brand-secondary border border-gray-600 hover:bg-gray-700'}`}>
                <ThumbsDownIcon className="w-5 h-5"/> Inaccurate
            </button>
        </div>
        {feedback && <p className="text-brand-accent mt-4 text-sm">Thank you for your feedback!</p>}
      </div>
    </div>
  );
};
