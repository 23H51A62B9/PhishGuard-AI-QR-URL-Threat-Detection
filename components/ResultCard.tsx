
import React from 'react';

interface ResultCardProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  hasPadding?: boolean;
}

export const ResultCard: React.FC<ResultCardProps> = ({ title, icon, children, hasPadding = true }) => {
  return (
    <div className="bg-brand-secondary rounded-lg shadow-lg border border-gray-700 h-full flex flex-col">
      <div className="flex items-center p-4 border-b border-gray-700/80">
        {icon && <div className="text-brand-accent mr-3">{icon}</div>}
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      <div className={`text-gray-400 flex-grow ${hasPadding ? 'p-4' : ''}`}>
        {children}
      </div>
    </div>
  );
};
