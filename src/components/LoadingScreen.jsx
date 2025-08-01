import React from 'react';

const LoadingScreen = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100 flex items-center justify-center z-50 overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-rose-300 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      <div className="text-center z-10">
        <div className="mb-16">
          <div className="relative">
            <div className="w-32 h-32 rounded-full border border-rose-200 mx-auto mb-12 relative overflow-hidden">
              <div className="absolute inset-0 rounded-full border-2 border-rose-400 border-t-transparent animate-spin"></div>
              <div className="absolute inset-4 rounded-full border border-pink-300 border-b-transparent animate-spin" style={{ animationDuration: '3s', animationDirection: 'reverse' }}></div>
            </div>
          </div>
          
          <div className="text-neutral-800 text-3xl md:text-5xl font-light tracking-[0.3em] mb-4">
            ISABELLA TORRES
          </div>
          <div className="text-rose-600 text-sm tracking-[0.4em] mb-6">
            A R Q U I T E C T A  •  V I S I O N A R I A
          </div>
          
        </div>
        
        <div className="w-80 h-1 bg-rose-200 rounded-full mx-auto overflow-hidden">
          <div className="h-full bg-gradient-to-r from-rose-300 via-pink-300 to-rose-400 rounded-full animate-pulse transform scale-x-0 animate-[scaleX_3s_ease-in-out_infinite] origin-left"></div>
        </div>

      </div>
    </div>
  );
};

export default LoadingScreen;
