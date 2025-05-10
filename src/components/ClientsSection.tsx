
import { ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const ClientsSection = () => {
  const clients = [
    "College of Military Engineering, Pune (DEF)",
    "GREF Centre & RECORDS, Pune (DEF)",
    "Army Air Defense 145 Lt Regt. (DEF)",
    "Tata Ficosa Automotive Systems Ltd.",
    "Symantec Pune",
    "Deepak Fertilizers & Petrochemicals Ltd",
    "Reliance Industries Ltd.",
    "Kirloskar Oil Engine Ltd.",
    "Flexible Accounting Ltd. London, UK",
    "Earth Solutions Ltd, Kenya, Africa"
  ];

  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-3 opacity-0 animate-fade-in animate-fill-both" style={{ animationDelay: isVisible ? '0ms' : '0ms' }}>Our Trusted Clients</h2>
          <div className="w-24 h-1 bg-accent mx-auto mt-4 mb-6 opacity-0 animate-fade-in animate-fill-both" style={{ animationDelay: isVisible ? '100ms' : '0ms' }}></div>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto opacity-0 animate-fade-in animate-fill-both" style={{ animationDelay: isVisible ? '200ms' : '0ms' }}>
            We serve a diverse range of clients from government agencies to multinational corporations.
          </p>
        </div>
        
        <div className="glass-card rounded-lg p-8 relative overflow-hidden">
          <div className="absolute -top-40 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
            {clients.map((client, index) => (
              <div 
                key={index}
                className={`py-3 px-4 border-l-4 border-accent bg-muted/30 hover:bg-accent/10 transition-all duration-500 hover-lift opacity-0 ${
                  isVisible ? 'animate-fade-in' : ''
                }`}
                style={{ animationDelay: isVisible ? `${index * 100}ms` : '0ms' }}
              >
                {client}
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10 opacity-0 animate-fade-in animate-delay-500 animate-fill-both" style={{ animationDelay: isVisible ? '1000ms' : '0ms' }}>
            <Link to="/clients" className="text-accent hover:text-accent/80 font-medium inline-flex items-center group hover-scale">
              View All Clients
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
