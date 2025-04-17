
import { ArrowRight, Shield, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-vtech-darkBlue to-vtech-blue text-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              IT Infrastructure Solutions, Management & Consultancy
            </h1>
            <p className="mt-6 text-lg md:text-xl opacity-90 max-w-2xl">
              Empowering enterprises with cutting-edge technologies in the field of enterprise computing, e-Business, and web solutions.
            </p>
            
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300">
                <Shield className="text-vtech-lightBlue animate-pulse" size={24} />
                <span className="font-medium">Secure Solutions</span>
              </div>
              <div className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300">
                <Users className="text-vtech-lightBlue animate-pulse" size={24} />
                <span className="font-medium">Expert Consultants</span>
              </div>
              <div className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300">
                <Zap className="text-vtech-lightBlue animate-pulse" size={24} />
                <span className="font-medium">Fast Delivery</span>
              </div>
            </div>
            
            <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/contact"
                className="bg-white text-vtech-blue hover:bg-opacity-90 transition-all duration-300 px-6 py-3 rounded-md font-medium flex items-center justify-center hover:scale-105 group"
              >
                Get Started
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="border border-white text-white hover:bg-white hover:bg-opacity-10 transition-all duration-300 px-6 py-3 rounded-md font-medium flex items-center justify-center hover:scale-105"
              >
                Our Services
              </Link>
            </div>
          </div>
          
          <div className="md:col-span-5 animate-fade-in">
            <div className="rounded-lg overflow-hidden shadow-2xl bg-white p-2 hover:shadow-3xl transition-shadow duration-300 transform hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&w=800"
                alt="IT Consultancy Services"
                className="rounded-md w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
