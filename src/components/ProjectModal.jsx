import React, { useState, useEffect } from 'react';

const ProjectModal = ({ project, isOpen, onClose, projects, onNavigate }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageLoading, setIsImageLoading] = useState(true);

  // Simular imágenes para cada proyecto (en producción vendrían de tu backend/CMS)
  const getProjectImages = (projectId) => {
    const baseImages = [
      '/api/placeholder/800/600', // Imagen principal
      '/api/placeholder/800/600', // Vista exterior
      '/api/placeholder/800/600', // Vista interior
      '/api/placeholder/800/600', // Detalle arquitectónico
      '/api/placeholder/800/600', // Planos/sketches
    ];
    return baseImages.map((img, index) => `${img}?project=${projectId}&view=${index}`);
  };

  const currentImages = project ? getProjectImages(project.id) : [];

  // Reset cuando cambia el proyecto
  useEffect(() => {
    if (project) {
      setCurrentImageIndex(0);
      setIsImageLoading(true);
    }
  }, [project]);

  // Navegación con teclado
  useEffect(() => {
    const handleNextImage = () => {
      setCurrentImageIndex((prev) => (prev + 1) % currentImages.length);
      setIsImageLoading(true);
    };

    const handlePrevImage = () => {
      setCurrentImageIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length);
      setIsImageLoading(true);
    };

    const handleKeyDown = (e) => {
      if (!isOpen) return;
      
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrevImage();
      if (e.key === 'ArrowRight') handleNextImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, currentImages.length]);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % currentImages.length);
    setIsImageLoading(true);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length);
    setIsImageLoading(true);
  };

  const handleNextProject = () => {
    const currentIndex = projects.findIndex(p => p.id === project.id);
    const nextProject = projects[(currentIndex + 1) % projects.length];
    onNavigate(nextProject);
  };

  const handlePrevProject = () => {
    const currentIndex = projects.findIndex(p => p.id === project.id);
    const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];
    onNavigate(prevProject);
  };

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden">
      {/* Backdrop con blur cinematográfico */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-xl transition-all duration-700 ease-out"
        onClick={onClose}
        style={{
          opacity: isOpen ? 1 : 0,
        }}
      />
      
      {/* Modal Container */}
      <div className="relative w-full h-full flex items-center justify-center p-4 md:p-8">
        <div 
          className="relative w-full max-w-7xl h-full max-h-[90vh] bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden transition-all duration-700 ease-out transform"
          style={{
            transform: isOpen ? 'scale(1) translateY(0)' : 'scale(0.8) translateY(50px)',
            opacity: isOpen ? 1 : 0,
          }}
        >
          {/* Header con navegación */}
          <div className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/20 to-transparent p-6 md:p-8">
            <div className="flex items-center justify-between">
              {/* Project Navigation */}
              <div className="flex items-center space-x-4">
                <button
                  onClick={handlePrevProject}
                  className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 group"
                >
                  <span className="transform group-hover:-translate-x-0.5 transition-transform duration-300">←</span>
                </button>
                <div className="text-white/80 text-sm tracking-wider">
                  {projects.findIndex(p => p.id === project.id) + 1} / {projects.length}
                </div>
                <button
                  onClick={handleNextProject}
                  className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 group"
                >
                  <span className="transform group-hover:translate-x-0.5 transition-transform duration-300">→</span>
                </button>
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 group"
              >
                <span className="transform group-hover:rotate-90 transition-transform duration-300">✕</span>
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row h-full">
            {/* Image Gallery Section */}
            <div className="flex-1 relative bg-gradient-to-br from-neutral-100 to-neutral-200">
              {/* Main Image */}
              <div className="relative h-64 lg:h-full overflow-hidden">
                {isImageLoading && (
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center">
                    <div className="w-16 h-16 border-4 border-rose-200 border-t-rose-500 rounded-full animate-spin"></div>
                  </div>
                )}
                <img
                  src={currentImages[currentImageIndex]}
                  alt={`${project.title} - Vista ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover transition-opacity duration-500"
                  onLoad={() => setIsImageLoading(false)}
                  style={{ opacity: isImageLoading ? 0 : 1 }}
                />
                
                {/* Image Navigation */}
                <button
                  onClick={handlePrevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-black/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-black/40 transition-all duration-300 group"
                >
                  <span className="transform group-hover:-translate-x-0.5 transition-transform duration-300">‹</span>
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-black/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-black/40 transition-all duration-300 group"
                >
                  <span className="transform group-hover:translate-x-0.5 transition-transform duration-300">›</span>
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm">
                  {currentImageIndex + 1} / {currentImages.length}
                </div>
              </div>

              {/* Thumbnails */}
              <div className="absolute bottom-4 left-4 right-4 lg:bottom-8 lg:left-8 lg:right-8">
                <div className="flex space-x-2 lg:space-x-3 overflow-x-auto pb-2">
                  {currentImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrentImageIndex(index);
                        setIsImageLoading(true);
                      }}
                      className={`flex-shrink-0 w-16 h-12 lg:w-20 lg:h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                        index === currentImageIndex 
                          ? 'border-white shadow-lg scale-110' 
                          : 'border-white/50 hover:border-white/80'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Project Details Section */}
            <div className="lg:w-[480px] flex flex-col bg-white/95 backdrop-blur-lg">
              <div className="flex-1 p-6 lg:p-8 overflow-y-auto">
                {/* Project Header */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-rose-100 text-rose-600 px-3 py-1 rounded-full text-xs font-medium tracking-wider">
                      {project.year}
                    </div>
                    <div 
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: project.color }}
                    ></div>
                  </div>
                  
                  <h1 className="text-3xl lg:text-4xl font-extralight text-neutral-800 mb-3 leading-tight">
                    {project.title}
                  </h1>
                  <p className="text-rose-600 text-lg tracking-[0.1em] font-medium mb-4">
                    {project.subtitle}
                  </p>
                  <p className="text-neutral-600 flex items-center text-base">
                    <span className="mr-2">📍</span> {project.location}
                  </p>
                </div>

                {/* Project Stats */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-4 rounded-xl border border-rose-100">
                    <div className="text-2xl font-light text-rose-600">2024</div>
                    <div className="text-xs text-neutral-600 tracking-wider">AÑO PROYECTO</div>
                  </div>
                  <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-4 rounded-xl border border-rose-100">
                    <div className="text-2xl font-light text-rose-600">6M</div>
                    <div className="text-xs text-neutral-600 tracking-wider">DURACIÓN</div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <h3 className="text-lg font-medium text-neutral-800 mb-4">Descripción del Proyecto</h3>
                  <p className="text-neutral-700 leading-relaxed text-base">
                    {project.description}
                  </p>
                </div>

                {/* Key Features */}
                <div className="mb-8">
                  <h3 className="text-lg font-medium text-neutral-800 mb-4">Características Clave</h3>
                  <div className="space-y-3">
                    {[
                      'Diseño bioclimático sostenible',
                      'Integración con el entorno natural',
                      'Materiales locales y eco-amigables',
                      'Optimización de espacios',
                      'Innovación tecnológica aplicada'
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center text-neutral-700">
                        <div className="w-2 h-2 bg-rose-400 rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact CTA */}
                <div className="bg-gradient-to-br from-rose-500 to-pink-400 p-6 rounded-xl text-white">
                  <h4 className="text-lg font-medium mb-2">¿Te interesa este proyecto?</h4>
                  <p className="text-rose-100 text-sm mb-4">
                    Hablemos sobre cómo puedo ayudarte a crear algo similar
                  </p>
                  <button className="w-full py-3 bg-white/20 backdrop-blur-sm rounded-lg text-white font-medium hover:bg-white/30 transition-all duration-300 tracking-wider">
                    CONTACTAR AHORA
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
