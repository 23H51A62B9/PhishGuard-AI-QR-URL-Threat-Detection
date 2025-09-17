import React, { useRef } from 'react';
import { CameraIcon, QrCodeIcon } from './IconComponents';

interface AnalysisInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onAnalyze: () => void;
  isLoading: boolean;
  onFileUpload: (file: File) => void;
  onScanWithCamera: () => void;
}

export const AnalysisInput: React.FC<AnalysisInputProps> = ({ value, onChange, onAnalyze, isLoading, onFileUpload, onScanWithCamera }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onFileUpload(file);
    }
     // Reset file input to allow uploading the same file again
    if(event.target) {
        event.target.value = '';
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="mt-8 max-w-3xl mx-auto">
      <div className="relative">
        <textarea
          value={value}
          onChange={onChange}
          placeholder="e.g., https://example.com or use a QR code option below..."
          className="w-full h-32 p-4 bg-brand-secondary border-2 border-gray-600 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition-colors duration-200 resize-none text-gray-200 placeholder-gray-500"
          disabled={isLoading}
        />
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          className="hidden"
          disabled={isLoading}
        />
        <button
          onClick={handleUploadClick}
          disabled={isLoading}
          className="flex items-center justify-center w-full sm:w-auto px-6 py-3 bg-brand-secondary text-gray-200 font-semibold rounded-lg border border-gray-600 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <QrCodeIcon className="w-5 h-5 mr-2" />
          Upload QR Code
        </button>
        <button
          onClick={onScanWithCamera}
          disabled={isLoading}
          className="flex items-center justify-center w-full sm:w-auto px-6 py-3 bg-brand-secondary text-gray-200 font-semibold rounded-lg border border-gray-600 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <CameraIcon className="w-5 h-5 mr-2" />
          Scan with Camera
        </button>
      </div>
      <div className="flex justify-center mt-6">
        <button
          onClick={onAnalyze}
          disabled={isLoading || !value}
          className="px-8 py-3 bg-brand-accent text-brand-primary font-bold rounded-lg shadow-lg hover:bg-opacity-80 disabled:bg-gray-600 disabled:text-gray-400 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-primary focus:ring-brand-accent"
        >
          {isLoading ? 'Analyzing...' : 'Analyze Content'}
        </button>
      </div>
    </div>
  );
};