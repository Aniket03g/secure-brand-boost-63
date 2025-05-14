
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

const CTASection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gradient-to-r from-primary to-accent">
      <div className="container mx-auto px-4 md:px-6">
        <div 
          ref={ref} 
          className={`relative max-w-4xl mx-auto text-center transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-10 shadow-xl border border-white/20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Upgrade Your IT Infrastructure?
            </h2>
            <p className="text-xl text-white/90 mb-8 mx-auto max-w-2xl">
              Get in touch with us today to discuss how V Technologies can help elevate your business with tailored IT solutions.
            </p>
            <Link
              to="/contact"
              className="bg-white text-primary hover:bg-primary/10 hover:text-white border border-white/50 transition-all duration-300 px-8 py-3 rounded-md font-medium inline-flex items-center hover-scale"
            >
              Contact Us
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
