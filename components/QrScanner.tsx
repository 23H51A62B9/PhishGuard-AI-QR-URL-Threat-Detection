import React, { useRef, useEffect, useCallback } from 'react';

// Make jsQR available from the global scope (loaded via script tag)
declare const jsQR: any;

interface QrScannerProps {
  onCodeDetected: (data: string | null) => void;
  onClose: () => void;
}

export const QrScanner: React.FC<QrScannerProps> = ({ onCodeDetected, onClose }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const animationFrameIdRef = useRef<number | null>(null);

  const tick = useCallback(() => {
    if (videoRef.current && videoRef.current.readyState === videoRef.current.HAVE_ENOUGH_DATA) {
      const video = videoRef.current;
      const canvasElement = canvasRef.current;
      if (!canvasElement) return;

      const canvas = canvasElement.getContext('2d');
      if (!canvas) return;

      canvasElement.height = video.videoHeight;
      canvasElement.width = video.videoWidth;
      canvas.drawImage(video, 0, 0, canvasElement.width, canvasElement.height);
      const imageData = canvas.getImageData(0, 0, canvasElement.width, canvasElement.height);
      
      const code = jsQR(imageData.data, imageData.width, imageData.height, {
        inversionAttempts: "dontInvert",
      });

      if (code) {
        onCodeDetected(code.data);
        // Do not request another frame, as we found a code
        return;
      }
    }
    // Continue scanning if no code is found
    animationFrameIdRef.current = requestAnimationFrame(tick);
  }, [onCodeDetected]);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } })
      .then(stream => {
        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.setAttribute("playsinline", "true"); // Required for iOS
          videoRef.current.play();
          animationFrameIdRef.current = requestAnimationFrame(tick);
        }
      })
      .catch(err => {
        console.error("Error accessing camera: ", err);
        alert("Could not access the camera. Please ensure you have given permission and are using a secure (HTTPS) connection.");
        onClose();
      });

    return () => {
      // Stop the camera stream
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
      // Cancel the animation frame loop
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, [tick, onClose]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center z-50 animate-fade-in">
      <div className="relative w-full max-w-lg p-4 bg-brand-secondary rounded-lg">
         <video ref={videoRef} className="w-full h-auto rounded-lg shadow-2xl" aria-label="Camera feed for QR code scanning" />
         <div className="absolute inset-4 flex items-center justify-center pointer-events-none">
             <div className="w-2/3 h-2/3 border-4 border-dashed border-brand-accent rounded-lg opacity-75"></div>
         </div>
         <canvas ref={canvasRef} className="hidden" />
      </div>
      <p className="text-white mt-4 font-semibold">Point your camera at a QR code</p>
      <button
        onClick={onClose}
        className="mt-4 px-6 py-2 bg-brand-malicious text-white font-bold rounded-lg shadow-lg hover:bg-opacity-80 transition-colors"
        aria-label="Close QR scanner"
      >
        Cancel
      </button>
    </div>
  );
};