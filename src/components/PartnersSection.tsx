
import { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";

const PartnersSection = () => {
  const partners = [
    { name: "HP", logo: "/lovable-uploads/521b9f2a-9956-4900-92ce-1ad23cf28f12.png" },
    { name: "Dell", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Dell_logo_2016.svg/1200px-Dell_logo_2016.svg.png" },
    { name: "Lenovo", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Lenovo_logo_2015.svg/1280px-Lenovo_logo_2015.svg.png" },
    { name: "Cisco", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1280px-Cisco_logo_blue_2016.svg.png" },
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1280px-Microsoft_logo.svg.png" },
    { name: "Acer", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Acer_2011.svg/1280px-Acer_2011.svg.png" },
    { name: "D-Link", logo: "/lovable-uploads/f02ab59d-32d1-4b93-a13f-b075b8a8d960.png" },
  ];

  const isMobile = useIsMobile();
  const [api, setApi] = useState<any>(null);
  
  // Auto-rotate the carousel
  useEffect(() => {
    if (!api) return;
    
    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);
    
    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-vtech-gray">Our Technology Partners</h2>
          <div className="w-24 h-1 bg-vtech-blue mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We partner with leading technology providers to deliver the best solutions to our clients.
          </p>
        </div>
        
        <div className="relative px-10">
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
                  <div className="bg-white p-6 flex items-center justify-center h-32 border border-gray-200 rounded-lg hover:shadow-md transition-shadow mx-2">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="max-h-12 max-w-full hover:opacity-75 transition-all"
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
