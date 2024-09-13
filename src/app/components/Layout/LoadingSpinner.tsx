// components/LoadingSpinner.tsx
"use client"; // Ensures this is a Client Component

const LoadingSpinner: React.FC = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
    <div className="spinner"></div>
    <style jsx>{`
      .spinner {
        border: 4px solid rgba(0, 0, 0, 0.1);
        border-left-color: #000;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        animation: spin 1s linear infinite;
      }

      @keyframes spin {
        to {
          transform: rotate(360deg);
        }
      }
    `}</style>
  </div>
);

export default LoadingSpinner;
