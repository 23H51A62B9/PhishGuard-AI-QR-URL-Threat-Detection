import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { AnalysisInput } from './components/AnalysisInput';
import { AnalysisResult } from './components/AnalysisResult';
import { analyzeContent } from './services/geminiService';
import type { AnalysisReport } from './types';
import { AnalysisState } from './types';
import { ErrorDisplay } from './components/ErrorDisplay';
import { LoadingSpinner } from './components/LoadingSpinner';
import { QrScanner } from './components/QrScanner';

// Make jsQR available from the global scope (loaded via script tag)
declare const jsQR: any;

const App: React.FC = () => {
  const [analysisInput, setAnalysisInput] = useState<string>('');
  const [analysisResult, setAnalysisResult] = useState<AnalysisReport | null>(null);
  const [analysisState, setAnalysisState] = useState<AnalysisState>(AnalysisState.IDLE);
  const [error, setError] = useState<string | null>(null);
  const [isFromQrCode, setIsFromQrCode] = useState<boolean>(false);
  const [isScannerOpen, setIsScannerOpen] = useState<boolean>(false);

  const handleAnalyze = useCallback(async () => {
    if (!analysisInput.trim()) {
      setError('Please enter content or use a QR code to analyze.');
      return;
    }

    setAnalysisState(AnalysisState.LOADING);
    setAnalysisResult(null);
    setError(null);

    try {
      const result = await analyzeContent(analysisInput);
      setAnalysisResult(result);
      setAnalysisState(AnalysisState.SUCCESS);
    } catch (err) {
      console.error(err);
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred during analysis.';
      setError(`Analysis Failed: ${errorMessage}`);
      setAnalysisState(AnalysisState.ERROR);
    } finally {
        setIsFromQrCode(false); // Reset after analysis
    }
  }, [analysisInput]);

  const handleCodeDetected = (data: string | null) => {
      if(data) {
          setAnalysisInput(data);
          setIsFromQrCode(true);
          setIsScannerOpen(false);
          setError(null);
      } else {
          setError("Could not decode a QR code from the provided source.");
      }
      // Ensure scanner is closed even if no code is found but the process completes
      if(isScannerOpen) setIsScannerOpen(false);
  }

  const handleFileUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
        const image = new Image();
        image.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = image.width;
            canvas.height = image.height;
            const ctx = canvas.getContext('2d');
            if (!ctx) {
                setError("Could not process image.");
                return;
            }
            ctx.drawImage(image, 0, 0, image.width, image.height);
            const imageData = ctx.getImageData(0, 0, image.width, image.height);
            const code = jsQR(imageData.data, imageData.width, imageData.height);
            handleCodeDetected(code?.data || null);
        };
        image.onerror = () => {
            setError("The selected file could not be read as an image.");
        };
        image.src = e.target?.result as string;
    };
    reader.onerror = () => {
        setError("Failed to read the selected file.");
    };
    reader.readAsDataURL(file);
  };


  return (
    <div className="min-h-screen bg-brand-primary text-gray-200 font-sans p-4 sm:p-6 lg:p-8">
      {isScannerOpen && (
        <QrScanner 
            onCodeDetected={handleCodeDetected}
            onClose={() => setIsScannerOpen(false)}
        />
      )}
      <div className="max-w-7xl mx-auto">
        <Header />
        <main className="mt-8">
          <p className="text-center text-gray-400 max-w-2xl mx-auto">
            Paste content, upload a QR code image, or use your camera to scan a QR code. Our AI will perform a multi-modal analysis to detect sophisticated phishing threats in real-time.
          </p>
          <AnalysisInput
            value={analysisInput}
            onChange={(e) => {
                setAnalysisInput(e.target.value);
                setIsFromQrCode(false); // User is typing, so it's not from a QR scan anymore
            }}
            onAnalyze={handleAnalyze}
            isLoading={analysisState === AnalysisState.LOADING}
            onFileUpload={handleFileUpload}
            onScanWithCamera={() => setIsScannerOpen(true)}
          />
          <div className="mt-12">
            {analysisState === AnalysisState.LOADING && <LoadingSpinner />}
            {analysisState === AnalysisState.ERROR && error && <ErrorDisplay message={error} />}
            {analysisState === AnalysisState.SUCCESS && analysisResult && <AnalysisResult report={analysisResult} />}
            {analysisState === AnalysisState.IDLE && (
                <div className="text-center text-gray-500 pt-10">
                    <p>Analysis results will be displayed here.</p>
                </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
