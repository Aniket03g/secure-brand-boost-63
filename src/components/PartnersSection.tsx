
import { useState, useEffect, useRef } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useInView } from 'react-intersection-observer';

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
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });
  
  // Auto-rotate the carousel
  useEffect(() => {
    if (!api) return;
    
    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);
    
    return () => clearInterval(interval);
  }, [api]);

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold text-gray-800 mb-3 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Our Technology Partners
          </h2>
          <div className={`w-24 h-1 bg-primary mx-auto mt-4 mb-6 transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}></div>
          <p className={`text-lg text-gray-600 max-w-3xl mx-auto transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            We partner with leading technology providers to deliver the best solutions to our clients.
          </p>
        </div>
        
        <div className={`relative px-10 transition-all duration-1000 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
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
                  <div 
                    className="bg-white border border-gray-100 shadow-md mx-2 p-6 flex items-center justify-center h-32 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    style={{ 
                      transitionDelay: `${index * 100}ms`,
                      opacity: inView ? 1 : 0,
                      transform: inView ? 'translateY(0)' : 'translateY(20px)'
                    }}
                  >
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className={`${partner.className} max-w-full hover:scale-110 transition-all duration-300`}
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
