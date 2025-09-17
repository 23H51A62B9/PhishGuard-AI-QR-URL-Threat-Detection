
import React from 'react';
import { ShieldCheckIcon } from './IconComponents';

export const Header: React.FC = () => {
  return (
    <header className="flex flex-col sm:flex-row items-center justify-center text-center sm:text-left">
        <ShieldCheckIcon className="w-16 h-16 text-brand-accent mb-4 sm:mb-0 sm:mr-6" />
      <div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
          PhishGuard <span className="text-brand-accent">AI</span>
        </h1>
        <h2 className="text-lg text-gray-400 mt-1">
          Real-Time Phishing Detection & Prevention
        </h2>
      </div>
    </header>
  );
};
   