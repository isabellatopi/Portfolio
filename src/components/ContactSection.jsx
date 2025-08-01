import React from 'react';

const ContactSection = ({ scrollProgress }) => {
  const contacts = [
    { 
      label: "EMAIL DIRECTO", 
      value: "isabellatopi75@gmail.com", 
      icon: "✉", 
      link: "mailto:isabellatopi75@gmail.com",
      description: "Respuesta en 24 horas"
    },
    { 
      label: "WHATSAPP", 
      value: "+57 310 437 1531", 
      icon: "📱", 
      link: "https://wa.me/573104371531?text=Hola%20Isabella",
      description: "Respuesta inmediata"
    },
    { 
      label: "UBICACIÓN", 
      value: "Barranquilla, Colombia", 
      icon: "📍", 
      link: null,
      description: "Proyectos nacionales e internacionales"
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative py-16 bg-gradient-to-br from-rose-50 to-pink-100">
      <div className="text-center max-w-5xl mx-auto px-8"
           style={{
             opacity: scrollProgress > 0.7 ? 1 : 0,
             transform: `scale(${0.95 + Math.min(0.05, (scrollProgress - 0.7) * 0.2)})`
           }}>
        
        <h2 className="text-5xl md:text-7xl font-extralight tracking-[0.1em] mb-12">
          <span className="text-neutral-800">INICIEMOS</span>
          <br />
          <span className="bg-gradient-to-r from-rose-600 to-pink-500 bg-clip-text text-transparent">CONTÁCTAME</span>
        </h2>
        
        <p className="text-xl text-neutral-600 mb-8 leading-relaxed max-w-3xl mx-auto">
          Cada proyecto es una oportunidad para crear espacios extraordinarios que transforman vidas 
          y conectan con el entorno de manera sostenible.
        </p>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-rose-200 mb-12 max-w-2xl mx-auto">
          <p className="text-neutral-700 italic text-lg leading-relaxed">
            "Mi compromiso es entregar soluciones arquitectónicas que superen expectativas, 
            fusionando innovación, sostenibilidad y excelencia en cada detalle."
          </p>
          <div className="text-rose-600 font-medium mt-4">— Isabella Torres</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contacts.map((contact, index) => {
            const CardContent = (
              <>
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {contact.icon}
                </div>
                <div className="text-rose-600 text-sm tracking-[0.2em] mb-2 font-medium">{contact.label}</div>
                <div className="text-neutral-700 font-medium group-hover:text-rose-600 transition-colors mb-2">
                  {contact.value}
                </div>
                <div className="text-neutral-500 text-xs">
                  {contact.description}
                </div>
              </>
            );

            return contact.link ? (
              <a 
                key={index} 
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center group cursor-pointer bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-rose-100 hover:shadow-lg transition-all duration-300 block"
              >
                {CardContent}
              </a>
            ) : (
              <div 
                key={index} 
                className="text-center group bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-rose-100 hover:shadow-lg transition-all duration-300"
              >
                {CardContent}
              </div>
            );
          })}
        </div>

        <div className="space-y-6">
          
          
          <p className="text-neutral-500 text-sm">
            Transformemos tu visión en realidad arquitectónica
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
