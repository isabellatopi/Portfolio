import React from 'react';

const ExperienceSection = ({ scrollProgress }) => {
  const experiences = [
    {
      year: "2025",
      title: "PREGRADO EN ARQUITECTURA",
      company: "Universidad del Norte",
      description: "Graduada como estudiante distinguida en Arquitectura, Urbanismo y Diseño.",
      highlight: "PROMEDIO DISTINGUIDO"
    },
    {
      year: "2024",
      title: "DISEÑO DE INTERIORES",
      company: "Orlando, FL",
      description: "Optimización de espacios residenciales con temática Disney. Fusión entre funcionalidad y creatividad, maximizando potencial de cada espacio con enfoque en experiencia del usuario.",
      highlight: "PROYECTO INTERNACIONAL"
    },
    {
      year: "2024",
      title: "ARQUITECTA",
      company: "El Banco, Magdalena",
      description: "Visualización arquitectónica y corrección de medidas. Adaptación de diseños residenciales para nuevos lotes con enfoque en optimización espacial y sostenibilidad.",
      highlight: "DESARROLLO LOCAL"
    }
  ];

  return (
    <section className="min-h-screen py-32 relative bg-gradient-to-b from-transparent to-rose-50/50">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-24"
             style={{
               opacity: scrollProgress > 0.5 ? 1 : 0,
               transform: `translateY(${Math.max(0, (scrollProgress - 0.5) * -25)}px)`
             }}>
          <h2 className="text-5xl md:text-7xl font-extralight tracking-[0.1em] mb-8">
            <span className="text-neutral-800">MI</span>
            <br />
            <span className="text-rose-600">TRAYECTORIA</span>
          </h2>
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
            Trayectoria sólida respaldada por formación distinguida y proyectos de impacto real.
          </p>
        </div>

        <div className="space-y-20">
          {experiences.map((item, index) => (
            <div 
              key={index}
              className="flex flex-col md:flex-row items-start gap-12 group relative"
              style={{
                opacity: scrollProgress > 0.55 + index * 0.03 ? 1 : 0,
                transform: `translateX(${Math.max(0, (scrollProgress - (0.55 + index * 0.03)) * -30)}px)`
              }}
            >
              <div className="flex flex-col items-center md:items-start">
                <div className="text-5xl font-extralight text-rose-500 mb-2 group-hover:text-rose-600 transition-colors duration-500">
                  {item.year}
                </div>
                <div className="bg-rose-100 text-rose-600 px-3 py-1 rounded-full text-xs font-medium tracking-wider">
                  {item.highlight}
                </div>
              </div>
              
              <div className="flex-1 bg-white/60 backdrop-blur-sm p-8 rounded-2xl border border-rose-100 group-hover:shadow-lg transition-shadow duration-500">
                <h3 className="text-2xl font-light text-neutral-800 mb-2 group-hover:text-rose-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-rose-600 text-sm tracking-[0.1em] mb-4 font-medium">
                  {item.company}
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
