import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import LoadingScreen from './components/LoadingScreen';
import NavigationDots from './components/NavigationDots';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import ProjectDetailView from './components/ProjectDetailView';

const App = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);

  // Sistema 3D arquitectónico elegante y suave
  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvasRef.current, 
      alpha: true,
      antialias: true,
      powerPreference: "high-performance"
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    
    // Geometrías arquitectónicas ultra-sutiles
    const architecturalElements = [];
    
    // Crear elementos arquitectónicos ultra-lite
    for (let i = 0; i < 6; i++) {
      const geometry = new THREE.BoxGeometry(0.1, 3, 0.1);
      const material = new THREE.MeshBasicMaterial({ 
        color: 0xF8BBD9,
        transparent: true, 
        opacity: 0.06
      });
      
      const mesh = new THREE.Mesh(geometry, material);
      
      // Distribución simple y amplia
      const radius = 40;
      const angle = (i / 6) * Math.PI * 2;
      mesh.position.x = Math.cos(angle) * radius;
      mesh.position.y = (Math.random() - 0.5) * 20;
      mesh.position.z = Math.sin(angle) * radius;
      
      scene.add(mesh);
      architecturalElements.push({
        mesh,
        originalPos: { ...mesh.position }
      });
    }

    camera.position.z = 30;
    sceneRef.current = { scene, camera, renderer, architecturalElements };

    const clock = new THREE.Clock();

    const animate = () => {
      requestAnimationFrame(animate);
      const time = clock.getElapsedTime();
      
      architecturalElements.forEach((element, index) => {
        const { mesh, originalPos } = element;
        
        // Solo movimiento Y ultra-suave
        const floatOffset = Math.sin(time * 0.2 + index) * 0.3;
        mesh.position.y = originalPos.y + floatOffset - scrollProgress * 2;
      });

      // Movimiento de cámara simple
      camera.position.y = scrollProgress * -3;

      renderer.render(scene, camera);
    };
    
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, [scrollProgress]);

  // Sistema de scroll suave
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollTop / docHeight, 1);
      
      setScrollProgress(progress);
      setCurrentSection(Math.floor(progress * 4));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Loading elegante
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      
      <div className="relative bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100 text-neutral-800 overflow-x-hidden">
        {/* 3D Background Canvas - Ultra Smooth */}
        <canvas
          ref={canvasRef}
          className="fixed inset-0 z-0 pointer-events-none"
        />

        {/* Dots de navegación profesionales */}
        <NavigationDots currentSection={currentSection} scrollProgress={scrollProgress} />

        {/* Hero Section - Diseñado para CONTRATAR */}
        <HeroSection scrollProgress={scrollProgress} />

        {/* Projects Section - Rediseñado para IMPRESIONAR */}
        <ProjectsSection 
          scrollProgress={scrollProgress} 
          onProjectSelect={setSelectedProject}
          selectedProject={selectedProject}
        />

        {/* Experience Timeline Profesional */}
        <ExperienceSection scrollProgress={scrollProgress} />

        {/* Contact Section - Call to Action Premium */}
        <ContactSection scrollProgress={scrollProgress} />

        {/* Project Detail View - Split Screen Experience */}
        <ProjectDetailView 
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onProjectChange={setSelectedProject}
          allProjects={[
            { id: 1, title: "DISNEY HOME" },
            { id: 2, title: "VIVIENDA VIS" },
            { id: 3, title: "CAZU" },
            { id: 4, title: "ECO-VIDA" },
            { id: 5, title: "CASA LA CORAZZA" },
            { id: 6, title: "DISEÑO ALCOBA PRINCIPAL" }
          ]}
        />

        {/* Estilos CSS */}
        <style jsx>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          @keyframes scaleX {
            0%, 100% { transform: scaleX(0); }
            50% { transform: scaleX(1); }
          }

          @keyframes shimmer {
            0% { left: -100%; }
            100% { left: 100%; }
          }
        `}</style>
      </div>
    </>
  );
};

export default App;