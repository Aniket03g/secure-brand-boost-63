
import { ArrowRight, Shield, Clock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-16 bg-vtech-darkBlue text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your IT Infrastructure?</h2>
            <p className="text-lg opacity-90 mb-8">
              Get in touch with our team of experts to discuss how we can help your business leverage technology for growth and efficiency.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="mr-4 bg-vtech-blue bg-opacity-20 p-2 rounded">
                  <Shield size={20} className="text-vtech-lightBlue" />
                </div>
                <span>Secure and reliable IT solutions</span>
              </div>
              
              <div className="flex items-center">
                <div className="mr-4 bg-vtech-blue bg-opacity-20 p-2 rounded">
                  <Clock size={20} className="text-vtech-lightBlue" />
                </div>
                <span>Quick response and efficient service</span>
              </div>
              
              <div className="flex items-center">
                <div className="mr-4 bg-vtech-blue bg-opacity-20 p-2 rounded">
                  <CheckCircle size={20} className="text-vtech-lightBlue" />
                </div>
                <span>Tailored solutions for your specific needs</span>
              </div>
            </div>
            
            <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/contact"
                className="bg-vtech-blue text-white hover:bg-vtech-lightBlue transition-colors px-6 py-3 rounded-md font-medium flex items-center justify-center"
              >
                Contact Us Now
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link
                to="/about"
                className="border border-white text-white hover:bg-white hover:bg-opacity-10 transition-colors px-6 py-3 rounded-md font-medium flex items-center justify-center"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
          
          <div className="lg:flex justify-center hidden">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600"
              alt="IT Consultancy"
              className="rounded-lg shadow-2xl max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
