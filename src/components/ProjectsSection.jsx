import React from 'react';

const ProjectsSection = ({ scrollProgress, onProjectSelect, selectedProject }) => {
  // Proyectos reales del PDF
  const projects = [
    {
      id: 1,
      title: "DISNEY HOME",
      subtitle: "Proyecto Arrendamiento",
      location: "Orlando, FL",
      description: "Fusión única entre funcionalidad y creatividad. Cada espacio diseñado para maximizar potencial y crear experiencias memorables con detalles temáticos sutiles que evocan la magia de Disney sin comprometer la elegancia del diseño contemporáneo.",
      color: "#F8BBD9",
      accent: "#FFF0F5",
      year: "2024"
    },{
      id: 2,
      title: "CASA LA CORAZZA",
      subtitle: "Rehabilitación Patrimonial",
      location: "Centro Histórico, Barranquilla",
      description: "Proyecto de grado enfocado en la restauración y rehabilitación del patrimonio arquitectónico del centro histórico de Barranquilla, respetando la identidad cultural e histórica del lugar.",
      color: "#AD1457",
      accent: "#E91E63",
      year: "2025"
    },
    {
      id: 3,
      title: "DISEÑO ALCOBA PRINCIPAL",
      subtitle: "Interiorismo Residencial",
      location: "Barranquilla, Colombia",
      description: "Diseño de alcoba principal con estilo nórdico y minimalista, creando un espacio sereno y funcional con acabados impecables y modernos que reflejan sofisticación y comodidad en cada detalle.",
      color: "#880E4F",
      accent: "#AD1457",
      year: "2024"
    },
    {
      id: 4,
      title: "VIVIENDA VIS",
      subtitle: "Proyecto Residencial",
      location: "El Banco, Magdalena", 
      description: "Vivienda de interés social con distribución eficiente que maximiza uso del terreno, incluyendo áreas comunes y espacios recreativos que fomentan la interacción con el entorno y la comunidad local.",
      color: "#F48FB1",
      accent: "#FCE4EC",
      year: "2024"
    },
    {
      id: 5,
      title: "CAZU",
      subtitle: "Proyecto Residencial + Espacio Público",
      location: "Corregimiento la Playa",
      description: "Simbiosis entre entorno y naturaleza. Integración con la Ciénaga de Mallorquín a través de propuestas como muelle y conectividad sostenible. Inspirado en el cangrejo azul, animal emblemático de la zona.",
      color: "#F06292",
      accent: "#F8BBD9",
      year: "2023"
    },
    {
      id: 6,
      title: "ECO-VIDA",
      subtitle: "Ecoparque, Sostenibilidad Integral",
      location: "Corregimiento la Playa",
      description: "Enfoque integral en sostenibilidad ambiental y coexistencia con naturaleza. Destacando la importancia del mangle en la ecología de la ciénaga, creando espacios de conexión y enriquecimiento comunitario.",
      color: "#E91E63",
      accent: "#F48FB1",
      year: "2023"
    },
    
  ];

  return (
    <section className="min-h-screen py-32 relative">
      {/* Overlay para split screen effect */}
      {selectedProject && (
        <div className="absolute inset-0 bg-neutral-900/30 z-30 pointer-events-none transition-all duration-700" />
      )}
      
      <div className={`max-w-7xl mx-auto px-8 transition-all duration-700 ${
        selectedProject ? 'opacity-70 scale-98' : 'opacity-100 scale-100'
      }`}>
        <div className="text-center mb-24"
             style={{
               transform: `translateY(${Math.max(0, (scrollProgress - 0.15) * -25)}px)`,
               opacity: scrollProgress > 0.1 ? 1 : 0
             }}>
          <h2 className="text-5xl md:text-7xl font-extralight tracking-[0.1em] mb-8">
            <span className="text-neutral-800">PROYECTOS</span>
            <br />
            <span className="bg-gradient-to-r from-rose-600 to-pink-500 bg-clip-text text-transparent">DESTACADOS</span>
          </h2>
          <div className="w-32 h-0.5 bg-gradient-to-r from-rose-400 to-pink-400 mx-auto rounded-full"></div>
          <p className="text-neutral-600 mt-8 text-lg max-w-2xl mx-auto">
            Cada proyecto representa una solución arquitectónica única, 
            fusionando innovación, sostenibilidad y excelencia en el diseño.
          </p>
        </div>

        {/* Grid de proyectos premium */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const delay = index * 0.01; // Delay mucho más corto entre proyectos
            const showThreshold = 0.12 + delay; // Umbral más temprano
            
            return (
              <div
                key={project.id}
                className="group cursor-pointer relative overflow-hidden rounded-2xl transition-all duration-700 hover:scale-[1.05] hover:shadow-2xl bg-white/80 backdrop-blur-sm border border-rose-100"
                onClick={() => onProjectSelect(project)}
                style={{
                  opacity: scrollProgress > showThreshold ? 1 : 0,
                  transform: `translateY(${Math.max(0, (scrollProgress - showThreshold) * -40)}px)`,
                  transitionDelay: `${delay}s`
                }}
              >
                {/* Indicator de año */}
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-rose-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {project.year}
                  </div>
                </div>
                
                {/* Contenido del proyecto */}
                <div className="relative h-[420px] p-8 flex flex-col justify-between">
                  <div>
                    <div className="text-5xl font-extralight text-neutral-300 group-hover:text-rose-400 transition-colors duration-500 mb-6">
                      {String(project.id).padStart(2, '0')}
                    </div>
                    
                    <h3 className="text-2xl font-light mb-3 text-neutral-800 group-hover:text-rose-600 transition-colors duration-300 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-rose-600 text-sm tracking-[0.1em] mb-3 font-medium">
                      {project.subtitle}
                    </p>
                    <p className="text-neutral-600 text-sm mb-6 flex items-center">
                      <span className="mr-2">📍</span> {project.location}
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-neutral-700 text-sm leading-relaxed mb-6 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                      {project.description.substring(0, 150)}...
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-rose-600 text-sm tracking-[0.1em] group-hover:text-rose-700 font-medium">
                        <span>VER DETALLES</span>
                        <span className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                      </div>
                      
                      <div className="w-12 h-12 rounded-full border-2 border-rose-200 group-hover:border-rose-400 flex items-center justify-center transition-colors duration-300">
                        <span className="text-rose-400 group-hover:text-rose-600 text-lg">+</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Overlay elegante */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl"
                  style={{ backgroundColor: project.color }}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;