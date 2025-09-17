
import React from 'react';
import { AlertTriangleIcon } from './IconComponents';

interface ErrorDisplayProps {
  message: string;
}

export const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ message }) => {
  return (
    <div className="max-w-2xl mx-auto flex items-center p-4 bg-red-900/50 border border-red-500 text-red-300 rounded-lg">
      <AlertTriangleIcon className="w-6 h-6 mr-3 flex-shrink-0" />
      <div>
        <h4 className="font-bold">An Error Occurred</h4>
        <p className="text-sm">{message}</p>
      </div>
    </div>
  );
};
   