
import { ArrowRight, Shield, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative bg-white py-20 md:py-28 overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-radial from-accent/5 via-transparent to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float animate-delay-200"></div>
      
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 opacity-0 animate-fade-in animate-fill-both">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-800">
              IT Infrastructure Solutions, Management & Consultancy
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-2xl">
              Empowering enterprises with cutting-edge technologies in the field of enterprise computing, e-Business, IoT solutions, and web development.
            </p>
            
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3 opacity-0 animate-fade-in animate-delay-200 animate-fill-both hover-scale group">
                <Shield className="text-primary animate-pulse-light" size={24} />
                <span className="font-medium text-gray-700 group-hover:text-primary transition-colors">Secure Solutions</span>
              </div>
              <div className="flex items-center space-x-3 opacity-0 animate-fade-in animate-delay-300 animate-fill-both hover-scale group">
                <Users className="text-primary animate-pulse-light" size={24} />
                <span className="font-medium text-gray-700 group-hover:text-primary transition-colors">Expert Consultants</span>
              </div>
              <div className="flex items-center space-x-3 opacity-0 animate-fade-in animate-delay-500 animate-fill-both hover-scale group">
                <Zap className="text-primary animate-pulse-light" size={24} />
                <span className="font-medium text-gray-700 group-hover:text-primary transition-colors">Fast Delivery</span>
              </div>
            </div>
            
            <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/contact"
                className="bg-primary text-white hover:bg-primary/90 transition-all duration-300 px-6 py-3 rounded-md font-medium flex items-center justify-center hover-scale hover-glow group"
              >
                Get Started
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="border border-primary/50 text-primary hover:bg-primary/10 transition-all duration-300 px-6 py-3 rounded-md font-medium flex items-center justify-center hover-scale"
              >
                Our Services
              </Link>
            </div>
          </div>
          
          <div className="md:col-span-5 opacity-0 animate-slide-in-right animate-delay-200 animate-fill-both">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-lg blur-md"></div>
              <div className="relative rounded-lg overflow-hidden shadow-2xl bg-white hover-lift transition-all duration-500">
                <img
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800"
                  alt="Modern IT Infrastructure visualization"
                  className="w-full h-auto rounded-md hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
