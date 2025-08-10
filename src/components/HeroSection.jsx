import React from 'react';

const HeroSection = ({ scrollProgress }) => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Elementos arquitectónicos flotantes sutiles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute transition-transform duration-1000 ease-out"
            style={{
              left: `${20 + i * 12}%`,
              top: `${25 + (i % 2) * 25}%`,
              transform: `translateY(${scrollProgress * -10 - i * 3}px) rotate(45deg)`,
              opacity: Math.max(0, 1 - scrollProgress * 0.5)
            }}
          >
            <div className="w-0.5 h-16 bg-gradient-to-b from-rose-200/30 to-transparent"/>
          </div>
        ))}
      </div>
      
      <div className="text-center z-10 max-w-6xl mx-auto px-8"
           style={{
             transform: `translateY(${scrollProgress * -20}px)`,
             opacity: Math.max(0, 1 - scrollProgress * 0.5)
           }}>
        
        <div className="mb-16 opacity-0 animate-[fadeInUp_1.5s_ease-out_0.8s_forwards]">
          <div className="inline-block px-6 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-rose-200 mb-8">
            <span className="text-rose-700 text-sm tracking-[0.3em] font-light">PORTFOLIO 2025</span>
          </div>
          
          <h1 className="text-7xl md:text-9xl font-extralight tracking-[0.08em] mb-8 leading-none">
            <span className="bg-gradient-to-r from-neutral-800 via-rose-600 to-pink-500 bg-clip-text text-transparent">
              ISABELLA
            </span>
            <br />
            <span className="text-rose-500 block transform translate-x-8">TORRES</span>
          </h1>
          
          <div className="text-2xl md:text-3xl text-neutral-600 font-light tracking-[0.25em] mb-12">
            ARQUITECTURA • INNOVACIÓN • SOSTENIBILIDAD
          </div>
          
          <div className="text-base text-neutral-500 font-light tracking-[0.1em] mb-4">
            Universidad del Norte • Graduada Distinguida
          </div>
        </div>

        <div className="opacity-0 animate-[fadeInUp_1.5s_ease-out_1.3s_forwards]">
          <p className="text-xl text-neutral-500 max-w-4xl mx-auto mb-16 leading-relaxed">
            Arquitecta enfocada en
            <span className="text-rose-600 font-medium"> diseño integral de interiores y exteriores y desarrollo sostenible</span>, 
            interés en transformar el tejido urbano desde lo social, ambiental y económico y comprometida con la creación de espacios funcionales y sensibles al contexto.
          </p>
          {/*
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <button className="group px-12 py-6 bg-gradient-to-r from-rose-500 to-pink-400 text-white hover:from-rose-600 hover:to-pink-500 transition-all duration-500 tracking-[0.15em] text-base shadow-xl hover:shadow-2xl transform hover:-translate-y-2 font-medium">
              <span className="mr-3">CONTRATAR AHORA</span>
              <span className="inline-block transform group-hover:translate-x-2 transition-transform duration-300">→</span>
            </button>
            
            <button className="px-12 py-6 border-2 border-rose-500 text-rose-600 hover:bg-rose-50 transition-all duration-500 tracking-[0.15em] text-base group font-medium">
              <span className="mr-3">VER PROYECTOS</span>
              <span className="inline-block transform group-hover:translate-y-[-2px] transition-transform duration-300">↓</span>
            </button>
          </div>
          */}
        </div>
      </div>

      {/* Scroll indicator profesional con flecha elegante - Solo visible en desktop */}
      <div className="hidden md:block absolute bottom-12 left-1/2 -translate-x-1/2 text-center opacity-0 animate-[fadeIn_2s_ease-out_2s_forwards]">
        {/* Flecha elegante animada */}
        <div className="flex flex-col items-center space-y-1">
          
          {/* Línea vertical */}
          <div className="w-px h-9 bg-gradient-to-b from-rose-300 to-rose-500"></div>
          
          {/* Punta de flecha */}
          <div className="relative flex justify-center">
            <div className="w-3 h-3 border-r-4 border-b-4 border-rose-500 transform rotate-45 animate-pulse"></div>
            
            {/* Efecto de brillo sutil */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-6 h-10 bg-gradient-to-b from-rose-200/20 to-transparent animate-pulse pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
