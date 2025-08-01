import React from 'react';

const NavigationDots = ({ currentSection, scrollProgress }) => {
  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
      <div className="flex flex-col space-y-6">
        {['INICIO', 'PROYECTOS', 'EXPERIENCIA', 'CONTACTO'].map((label, index) => (
          <div key={index} className="relative group cursor-pointer">
            <div
              className={`w-2 h-2 rounded-full border transition-all duration-700 ${
                currentSection === index
                  ? 'bg-rose-400 border-rose-400 scale-150'
                  : 'border-rose-300 hover:border-rose-400 hover:scale-125'
              }`}
            />
            {currentSection === index && (
              <div className="absolute inset-0 w-2 h-2 rounded-full bg-rose-400 animate-ping"></div>
            )}
            <div className="absolute right-6 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md text-xs tracking-wider text-neutral-600 shadow-sm">
                {label}
              </div>
            </div>
          </div>
        ))}
        
        <div className="absolute left-1/2 top-0 w-0.5 h-full bg-rose-200 transform -translate-x-1/2 -z-10 rounded-full">
          <div 
            className="w-full bg-gradient-to-b from-rose-300 to-pink-300 transition-all duration-500 ease-out rounded-full"
            style={{ height: `${scrollProgress * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default NavigationDots;
