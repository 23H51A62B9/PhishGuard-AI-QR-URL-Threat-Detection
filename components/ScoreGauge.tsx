
import React from 'react';
import type { RiskLevel } from '../types';

interface ScoreGaugeProps {
  score: number;
}

const getRiskInfo = (score: number): { level: RiskLevel; color: string; } => {
  if (score < 30) return { level: 'SAFE', color: 'stroke-brand-safe' };
  if (score < 70) return { level: 'SUSPICIOUS', color: 'stroke-brand-suspicious' };
  return { level: 'MALICIOUS', color: 'stroke-brand-malicious' };
};

export const ScoreGauge: React.FC<ScoreGaugeProps> = ({ score }) => {
  const { level, color } = getRiskInfo(score);
  const circumference = 2 * Math.PI * 52; // 2 * pi * r
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <div className="relative w-48 h-48">
      <svg className="w-full h-full" viewBox="0 0 120 120">
        <circle
          className="stroke-current text-gray-700"
          cx="60"
          cy="60"
          r="52"
          fill="none"
          strokeWidth="12"
        />
        <circle
          className={`transform -rotate-90 origin-center transition-all duration-1000 ease-out ${color}`}
          cx="60"
          cy="60"
          r="52"
          fill="none"
          strokeWidth="12"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-4xl font-bold text-white">{score}</span>
        <span className={`text-lg font-semibold ${color.replace('stroke-', 'text-')}`}>{level}</span>
      </div>
    </div>
  );
};
   