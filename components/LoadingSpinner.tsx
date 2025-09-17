
import React from 'react';

export const LoadingSpinner: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center text-center text-gray-400 space-y-4">
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-brand-accent"></div>
            <h3 className="text-xl font-semibold text-white">Performing Analysis...</h3>
            <p className="max-w-md">Our AI is running a multi-vector scan. This includes semantic analysis, domain reputation checks, and structural evaluation. Please wait a moment.</p>
        </div>
    );
};
   