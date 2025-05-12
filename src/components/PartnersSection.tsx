
import { useState, useEffect, useRef } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const PartnersSection = () => {
  const partners = [
    { name: "HP", logo: "/lovable-uploads/f922908d-fde3-4166-8180-7c89af63174f.png", className: "max-h-24" }, // Increased the HP logo size
    { name: "Dell", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Dell_logo_2016.svg/1200px-Dell_logo_2016.svg.png", className: "max-h-12" },
    { name: "Lenovo", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Lenovo_logo_2015.svg/1280px-Lenovo_logo_2015.svg.png", className: "max-h-12" },
    { name: "Cisco", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1280px-Cisco_logo_blue_2016.svg.png", className: "max-h-12" },
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1280px-Microsoft_logo.svg.png", className: "max-h-12" },
    { name: "Acer", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Acer_2011.svg/1280px-Acer_2011.svg.png", className: "max-h-12" },
    { name: "D-Link", logo: "/lovable-uploads/f02ab59d-32d1-4b93-a13f-b075b8a8d960.png", className: "max-h-12" },
    { name: "Quick Heal", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Quick_Heal_logo.svg/1200px-Quick_Heal_logo.svg.png", className: "max-h-12" },
    { name: "Net Protector", logo: "https://www.netprotector.com/images/net-protector-logo.png", className: "max-h-12" },
  ];

  const [api, setApi] = useState<any>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  // Auto-rotate the carousel
  useEffect(() => {
    if (!api) return;
    
    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);
    
    return () => clearInterval(interval);
  }, [api]);

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
    <section ref={sectionRef} className="py-20 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold gradient-text mb-3 opacity-0 ${isVisible ? 'animate-fade-in' : ''}`}>
            Our Technology Partners
          </h2>
          <div className={`w-24 h-1 bg-accent mx-auto mt-4 mb-6 opacity-0 ${isVisible ? 'animate-fade-in animate-delay-100' : ''}`}></div>
          <p className={`text-lg text-foreground/70 max-w-3xl mx-auto opacity-0 ${isVisible ? 'animate-fade-in animate-delay-200' : ''}`}>
            We partner with leading technology providers to deliver the best solutions to our clients.
          </p>
        </div>
        
        <div className={`relative px-10 opacity-0 ${isVisible ? 'animate-fade-in animate-delay-300' : ''}`}>
          <Carousel 
            setApi={setApi}
            className="mx-auto max-w-6xl"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {partners.map((partner, index) => (
                <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/3">
                  <div className="glass-card mx-2 p-6 flex items-center justify-center h-32 rounded-lg hover:shadow-inner transition-shadow hover-lift">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className={`${partner.className} max-w-full filter brightness-[1.15] hover:brightness-150 transition-all duration-300`}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
