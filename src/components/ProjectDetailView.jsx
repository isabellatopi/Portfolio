import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Calendar, MapPin, User, Zap, Award, Building } from 'lucide-react';

// Imports de imágenes Disney Home
import dis1 from '../assets/images/Disney home/dis1.jpg';
import dis2 from '../assets/images/Disney home/dis2.jpg';
import dis3 from '../assets/images/Disney home/dis3.jpg';
import dis4 from '../assets/images/Disney home/dis4.jpg';
import dis5 from '../assets/images/Disney home/dis5.jpg';

// Imports de imágenes Vivienda VIS
import vis1 from '../assets/images/vivienda vis/vis1.jpg';
import vis2 from '../assets/images/vivienda vis/vis2.jpg';
import vis3 from '../assets/images/vivienda vis/vis3.jpg';
import vis4 from '../assets/images/vivienda vis/vis4.jpg';
import vis5 from '../assets/images/vivienda vis/vis5.jpg';

// Imports de imágenes CAZU
import cazu1 from '../assets/images/cazu/cazu1.jpg';
import cazu2 from '../assets/images/cazu/cazu2.jpg';
import cazu3 from '../assets/images/cazu/cazu3.png';
import cazu4 from '../assets/images/cazu/cazu4.jpg';
import cazu5 from '../assets/images/cazu/cazu5.jpg';

// Imports de imágenes ECO-VIDA
import eco1 from '../assets/images/eco-vida/eco1.png';
import eco2 from '../assets/images/eco-vida/eco2.png';
import eco3 from '../assets/images/eco-vida/eco3.jpg';
import eco4 from '../assets/images/eco-vida/eco4.jpg';

// Imports de imágenes Casa La Corazza
import corazza1 from '../assets/images/casa la corazza/corazza1.jpg';
import corazza2 from '../assets/images/casa la corazza/corazza2.jpg';
import corazza3 from '../assets/images/casa la corazza/corazza3.jpg';
import corazza4 from '../assets/images/casa la corazza/corazza4.jpg';
import corazza5 from '../assets/images/casa la corazza/corazza5.jpg';
import corazza6 from '../assets/images/casa la corazza/corazza6.jpg';

// Imports de imágenes Alcoba Principal
import alcoba1 from '../assets/images/alcoba principal/imagen 1 cuarto.png';
import alcoba2 from '../assets/images/alcoba principal/imagen 2 cuarto.png';
import alcoba3 from '../assets/images/alcoba principal/imagen 3 cuarto.png';
import alcoba4 from '../assets/images/alcoba principal/imagen 4 cuarto.png';
import alcoba5 from '../assets/images/alcoba principal/imagen 5 cuarto.png';
import alcoba6 from '../assets/images/alcoba principal/imagen 6 cuarto.png';

const ProjectDetailView = ({ project, onClose, onProjectChange, allProjects }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  // Data completa de proyectos basada en el PDF
  const projectsData = {
    1: {
      title: "DISNEY HOME",
      subtitle: "Proyecto Arrendamiento",
      location: "Orlando, FL",
      year: "2024",
      type: "Residencial • Interiorismo",
      description: "Fusión única entre funcionalidad y creatividad. Cada espacio diseñado para maximizar potencial y crear experiencias memorables con detalles temáticos sutiles que evocan la magia de Disney sin comprometer la elegancia del diseño contemporáneo.",
      details: [
        "Optimización estratégica de espacios residenciales",
        "Selección cuidadosa de mobiliario multifuncional", 
        "Paleta de colores armoniosa con temática Disney sutil",
        "Creación de ambientes versátiles y acogedores",
        "Elementos decorativos que añaden personalidad única"
      ],
      quote: "Todo diseño requiere de una buena planificación",
      author: "Isabella Torres",
      stats: [
        { label: "Área Intervenida", value: "120m²" },
        { label: "Habitaciones", value: "3" },
        { label: "Tiempo Proyecto", value: "2 meses" },
        { label: "Satisfacción Cliente", value: "100%" }
      ],
      images: [
        dis1,
        dis2, 
        dis3,
        dis4,
        dis5
      ],
      color: "#F8BBD9",
      gradient: "from-rose-400 to-pink-500"
    },
    2: {
      title: "CASA LA CORAZZA",
      subtitle: "Rehabilitación Patrimonial", 
      location: "Centro Histórico, Barranquilla",
      year: "2025",
      type: "Patrimonio • Restauración",
      description: "Proyecto de grado enfocado en la restauración y rehabilitación del patrimonio arquitectónico del centro histórico de Barranquilla, respetando la identidad cultural e histórica del lugar.",
      details: [
        "Análisis detallado del patrimonio existente",
        "Técnicas de restauración especializadas",
        "Respeto por la identidad histórica original",
        "Integración de servicios contemporáneos",
        "Conservación de elementos arquitectónicos únicos"
      ],
      quote: "El patrimonio es nuestra responsabilidad hacia el futuro",
      author: "Isabella Torres", 
      stats: [
        { label: "Año Construcción", value: "1920" },
        { label: "Área Restaurada", value: "450m²" },
        { label: "Elementos Patrimoniales", value: "12" },
        { label: "Valor Histórico", value: "Incalculable" }
      ],
      images: [
        corazza1,
        corazza2,
        corazza3, 
        corazza4,
        corazza5,
        corazza6
      ],
      color: "#AD1457",
      gradient: "from-rose-400 to-pink-500"
    },
    3: {
      title: "DISEÑO ALCOBA PRINCIPAL",
      subtitle: "Interiorismo Residencial", 
      location: "Barranquilla, Colombia",
      year: "2024",
      type: "Interiorismo • Diseño Nórdico",
      description: "Diseño de alcoba principal con estilo nórdico y minimalista, creando un espacio sereno y funcional con acabados impecables y modernos que reflejan sofisticación y comodidad en cada detalle del ambiente.",
      details: [
        "Paleta de colores neutros y naturales",
        "Mobiliario de líneas limpias y funcionales",
        "Materiales naturales: madera clara y textiles orgánicos", 
        "Iluminación cálida y estratégicamente distribuida",
        "Espacios de almacenamiento integrados y discretos"
      ],
      quote: "La simplicidad es la máxima sofisticación",
      author: "Isabella Torres",
      stats: [
        { label: "Área Diseñada", value: "22m²" },
        { label: "Elementos Diseñados", value: "8" },
        { label: "Tiempo Proyecto", value: "6 semanas" },
        { label: "Estilo", value: "Nórdico Minimalista" }
      ],
      images: [
        alcoba1,
        alcoba2,
        alcoba3, 
        alcoba4,
        alcoba5,
        alcoba6
      ],
      color: "#880E4F", 
      gradient: "from-rose-400 to-pink-500"
    },
    4: {
      title: "VIVIENDA VIS",
      subtitle: "Proyecto Residencial",
      location: "El Banco, Magdalena", 
      year: "2024",
      type: "Vivienda Social • Urbanismo",
      description: "Vivienda de interés social con distribución eficiente que maximiza uso del terreno, incluyendo áreas comunes y espacios recreativos que fomentan la interacción con el entorno y la comunidad local.",
      details: [
        "Optimización del uso del terreno disponible",
        "Distribución eficiente de espacios habitacionales",
        "Incorporación de áreas comunes estratégicas",
        "Espacios recreativos para interacción comunitaria",
        "Adaptación al contexto climático y cultural regional"
      ],
      quote: "La arquitectura es primordialmente un servicio a la humanidad",
      author: "Francis Kéré",
      stats: [
        { label: "Unidades", value: "24" },
        { label: "Área Lote", value: "2,850m²" },
        { label: "Área Construida", value: "89m²" },
        { label: "Familias Beneficiadas", value: "96" }
      ],
      images: [
        vis1,
        vis2,
        vis3,
        vis4,
        vis5
      ],
      color: "#F48FB1",
      gradient: "from-rose-400 to-pink-500"
    },
    5: {
      title: "CAZU",
      subtitle: "Proyecto Residencial + Espacio Público",
      location: "Corregimiento la Playa",
      year: "2023", 
      type: "Vivienda Social • Conectividad Ambiental",
      description: "Simbiosis entre entorno y naturaleza. Integración con la Ciénaga de Mallorquín a través de propuestas como muelle y conectividad sostenible. Inspirado en el cangrejo azul, animal emblemático de la zona.",
      details: [
        "Conexión directa con la Ciénaga de Mallorquín",
        "Diseño inspirado en el cangrejo azul local", 
        "Muelle para actividades pesqueras comunitarias",
        "Barrera de manglar como hábitat natural",
        "Unidades habitacionales con formas orgánicas"
      ],
      quote: "La naturaleza es la mejor arquitecta",
      author: "Isabella Torres",
      stats: [
        { label: "Tipos de Unidades", value: "3" },
        { label: "Capacidad Máxima", value: "12 personas" },
        { label: "Área Muelle", value: "200m²" },
        { label: "Cobertura Manglar", value: "1,500m²" }
      ],
      images: [
        cazu1,
        cazu2,
        cazu3,
        cazu4,
        cazu5
      ],
      color: "#F06292",
      gradient: "from-rose-400 to-pink-500"
    },
    6: {
      title: "ECO-VIDA", 
      subtitle: "Ecoparque, Sostenibilidad Integral",
      location: "Corregimiento la Playa",
      year: "2023",
      type: "Paisajismo • Sostenibilidad",
      description: "Enfoque integral en sostenibilidad ambiental y coexistencia con naturaleza. Destacando la importancia del mangle en la ecología de la ciénaga, creando espacios de conexión y enriquecimiento comunitario.",
      details: [
        "Intervención sostenible del arroyo existente",
        "Conservación y potenciación de áreas verdes",
        "Espacios estratégicos para interacción comunitaria",
        "Senderos ecológicos de madera", 
        "Zonas de contemplación y recreación"
      ],
      quote: "La arquitectura sostenible no se trata de moda, se trata de supervivencia",
      author: "Bjarke Ingels",
      stats: [
        { label: "Área Intervenida", value: "3,000m²" },
        { label: "Senderos", value: "500m" },
        { label: "Zonas Recreativas", value: "5" },
        { label: "Especies Conservadas", value: "15+" }
      ],
      images: [
        eco1,
        eco2, 
        eco3,
        eco4
      ],
      color: "#E91E63",
      gradient: "from-rose-400 to-pink-500"
    },

  };

  const currentProject = projectsData[project?.id];

  useEffect(() => {
    if (project) {
      setIsVisible(true);
      setCurrentImageIndex(0);
      setIsAutoPlaying(true);
      setIsPaused(false);
    } else {
      setIsVisible(false);
    }
  }, [project]);

  // Auto-play carrusel
  useEffect(() => {
    if (!isAutoPlaying || isPaused || !currentProject) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => 
        prev === currentProject.images.length - 1 ? 0 : prev + 1
      );
    }, 4000); // Cambia cada 4 segundos

    return () => clearInterval(interval);
  }, [isAutoPlaying, isPaused, currentProject]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === currentProject.images.length - 1 ? 0 : prev + 1
    );
    // Pausa temporalmente el autoplay al interactuar manualmente
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 8000); // Reanuda después de 8 segundos
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? currentProject.images.length - 1 : prev - 1
    );
    // Pausa temporalmente el autoplay al interactuar manualmente
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 8000); // Reanuda después de 8 segundos
  };

  const handleImageSelect = (index) => {
    setCurrentImageIndex(index);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 8000); // Reanuda después de 8 segundos
  };

  const handleProjectChange = (direction) => {
    const currentIndex = allProjects.findIndex(p => p.id === project.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = currentIndex === allProjects.length - 1 ? 0 : currentIndex + 1;
    } else {
      newIndex = currentIndex === 0 ? allProjects.length - 1 : currentIndex - 1;
    }
    
    onProjectChange(allProjects[newIndex]);
  };

  if (!project || !currentProject) return null;

  return (
    <div className={`fixed inset-0 z-40 transition-all duration-700 ${
      isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
    }`}>
      
      {/* SPLIT SCREEN CONTAINER - Desktop only */}
      <div className="flex h-full">
        
        {/* LEFT SIDE - Portfolio Dimmed - Hidden on mobile */}
        <div className={`hidden lg:block lg:w-1/2 transition-all duration-700 ${
          isVisible ? 'opacity-30 scale-95' : 'opacity-100 scale-100'
        }`}>
          {/* Overlay para dimming - Clickeable para cerrar */}
          <div 
            className="absolute inset-0 bg-neutral-900/20 z-10 cursor-pointer" 
            onClick={onClose}
          />
        </div>

        {/* RIGHT SIDE - Project Detail - Full width on mobile, half on desktop */}
        <div className={`w-full lg:w-1/2 bg-white shadow-2xl transition-all duration-700 ${
          isVisible ? 'translate-x-0' : 'translate-x-full'
        } overflow-y-auto`}>
          
          {/* Header del proyecto */}
          <div className={`bg-gradient-to-br ${currentProject.gradient} p-4 sm:p-6 lg:p-8 relative`}>
            
            {/* Controles superiores */}
            <div className="flex justify-between items-center mb-6 lg:mb-8">
              {/* Project Navigation */}
              <div className="flex gap-2">
                <button
                  onClick={() => handleProjectChange('prev')}
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </button>
                <button
                  onClick={() => handleProjectChange('next')}
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </button>
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </button>
            </div>

            {/* Project Info */}
            <div>
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-2 py-1 sm:px-3 sm:py-1 rounded-full mb-3 lg:mb-4">
                <span className="text-white text-xs tracking-[0.2em] font-light">
                  {currentProject.type}
                </span>
              </div>
              
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extralight tracking-[0.05em] text-white mb-2">
                {currentProject.title}
              </h1>
              
              <p className="text-base sm:text-lg text-white/90 font-light mb-3 lg:mb-4">
                {currentProject.subtitle}
              </p>

              <div className="flex flex-wrap gap-2 sm:gap-4 text-white/80 text-xs sm:text-sm">
                <div className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>{currentProject.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>{currentProject.year}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="p-4 sm:p-6 lg:p-8">
            
            {/* Image Gallery */}
            <div className="mb-6 lg:mb-8">
              <div className="relative group mb-3 lg:mb-4">
                <div className="aspect-[16/10] sm:aspect-[16/10] rounded-lg lg:rounded-xl overflow-hidden bg-gradient-to-br from-neutral-100 to-neutral-200">
                  <div className="relative w-full h-full">
                    <img 
                      src={currentProject.images[currentImageIndex]}
                      alt={`${currentProject.title} - Imagen ${currentImageIndex + 1}`}
                      className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
                      onMouseEnter={() => setIsPaused(true)}
                      onMouseLeave={() => setIsPaused(false)}
                    />
                    
                    {/* Overlay gradiente sutil */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Indicador de autoplay */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className={`w-2 h-2 rounded-full ${isAutoPlaying && !isPaused ? 'bg-green-400 animate-pulse' : 'bg-neutral-400'}`}></div>
                    </div>
                  </div>
                </div>
                
                {/* Image Navigation - Más elegantes */}
                <button
                  onClick={prevImage}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-white hover:scale-110"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-700" />
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-white hover:scale-110"
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-700" />
                </button>

                {/* Progress bar para autoplay */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                  <div 
                    className={`h-full bg-gradient-to-r from-rose-400 to-pink-500 transition-all duration-100 ${
                      isAutoPlaying && !isPaused ? 'animate-pulse' : ''
                    }`}
                    style={{
                      width: `${((currentImageIndex + 1) / currentProject.images.length) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>

              {/* Image Indicators - Más sofisticados */}
              <div className="flex justify-center gap-2">
                {currentProject.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleImageSelect(index)}
                    className={`group relative transition-all duration-300 ${
                      index === currentImageIndex 
                        ? 'w-8 h-2' 
                        : 'w-2 h-2 hover:w-3'
                    }`}
                  >
                    <div className={`w-full h-full rounded-full transition-all duration-300 ${
                      index === currentImageIndex 
                        ? 'bg-gradient-to-r from-rose-500 to-pink-500 shadow-md' 
                        : 'bg-neutral-300 hover:bg-rose-300 group-hover:shadow-sm'
                    }`}></div>
                    
                    {/* Efecto de brillo */}
                    {index === currentImageIndex && (
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-400 to-pink-400 animate-pulse opacity-50"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="mb-6 lg:mb-8">
              <h3 className="text-xl sm:text-2xl font-light text-neutral-800 mb-3 lg:mb-4 flex items-center">
                Descripción
                <div className="ml-3 w-8 h-0.5 bg-gradient-to-r from-rose-400 to-transparent"></div>
              </h3>
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-4 lg:mb-6">
                {currentProject.description}
              </p>
              
              <h4 className="text-base sm:text-lg font-medium text-neutral-800 mb-2 lg:mb-3 flex items-center">
                Características
                <div className="ml-3 w-6 h-0.5 bg-gradient-to-r from-rose-300 to-transparent"></div>
              </h4>
              <ul className="space-y-2 lg:space-y-3">
                {currentProject.details.slice(0, 3).map((detail, index) => (
                  <li key={index} className="flex items-start gap-3 group">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r from-rose-400 to-pink-500 mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-neutral-600 text-xs sm:text-sm group-hover:text-neutral-700 transition-colors duration-300">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stats */}
            <div className="mb-6 lg:mb-8">
              <h3 className="text-xl sm:text-2xl font-light text-neutral-800 mb-3 lg:mb-4 flex items-center">
                Datos Clave
                <div className="ml-3 w-8 h-0.5 bg-gradient-to-r from-rose-400 to-transparent"></div>
              </h3>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {currentProject.stats.map((stat, index) => (
                  <div key={index} className="group bg-gradient-to-br from-neutral-50 to-neutral-100 p-4 sm:p-5 rounded-xl border border-neutral-200/50 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-default">
                    <div className="text-xl sm:text-2xl font-light text-rose-500 group-hover:text-rose-600 transition-colors duration-300">{stat.value}</div>
                    <div className="text-neutral-600 text-xs group-hover:text-neutral-700 transition-colors duration-300">{stat.label}</div>
                    <div className="w-full h-0.5 bg-gradient-to-r from-rose-200 to-transparent mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote */}
            <div className="bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100 p-6 sm:p-8 rounded-2xl border border-rose-200/50 shadow-sm hover:shadow-md transition-shadow duration-300 relative overflow-hidden">
              {/* Efecto de brillo sutil */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 w-1/3 h-full -left-full animate-[shimmer_3s_ease-in-out_infinite]"></div>
              
              <blockquote className="text-base sm:text-lg italic text-neutral-700 mb-3 lg:mb-4 leading-relaxed">
                "{currentProject.quote}"
              </blockquote>
              <cite className="text-rose-600 font-medium text-sm sm:text-base flex items-center">
                — {currentProject.author}
                <div className="ml-3 w-6 h-0.5 bg-gradient-to-r from-rose-400 to-transparent"></div>
              </cite>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailView;