
import { ArrowRight, Shield, Clock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

const CTASection = () => {
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
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[#080B17]"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 gradient-text opacity-0 ${isVisible ? 'animate-fade-in' : ''}`}>
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className={`text-lg text-foreground/80 mb-8 opacity-0 ${isVisible ? 'animate-fade-in animate-delay-200' : ''}`}>
              Get in touch with our team of experts to discuss how we can help your business leverage technology for growth and efficiency.
            </p>
            
            <div className="space-y-4">
              <div className={`flex items-center opacity-0 ${isVisible ? 'animate-slide-in-left animate-delay-300' : ''}`}>
                <div className="mr-4 bg-accent bg-opacity-20 p-2 rounded">
                  <Shield size={20} className="text-accent" />
                </div>
                <span className="text-foreground/90">Secure and reliable IT solutions</span>
              </div>
              
              <div className={`flex items-center opacity-0 ${isVisible ? 'animate-slide-in-left animate-delay-400' : ''}`}>
                <div className="mr-4 bg-accent bg-opacity-20 p-2 rounded">
                  <Clock size={20} className="text-accent" />
                </div>
                <span className="text-foreground/90">Quick response and efficient service</span>
              </div>
              
              <div className={`flex items-center opacity-0 ${isVisible ? 'animate-slide-in-left animate-delay-500' : ''}`}>
                <div className="mr-4 bg-accent bg-opacity-20 p-2 rounded">
                  <CheckCircle size={20} className="text-accent" />
                </div>
                <span className="text-foreground/90">Tailored solutions for your specific needs</span>
              </div>
            </div>
            
            <div className={`mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 opacity-0 ${isVisible ? 'animate-fade-in animate-delay-600' : ''}`}>
              <Link
                to="/contact"
                className="bg-accent text-white hover:bg-accent/80 transition-all duration-300 px-6 py-3 rounded-md font-medium flex items-center justify-center hover-scale hover-glow group"
              >
                Contact Us Now
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="border border-primary/50 text-primary hover:bg-primary/10 transition-all duration-300 px-6 py-3 rounded-md font-medium flex items-center justify-center hover-scale"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
          
          <div className={`lg:flex justify-center hidden opacity-0 ${isVisible ? 'animate-slide-in-right animate-delay-300' : ''}`}>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent to-primary rounded-lg blur-md opacity-70"></div>
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600"
                alt="IT Consultancy"
                className="relative rounded-lg shadow-2xl max-w-md hover-scale transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
