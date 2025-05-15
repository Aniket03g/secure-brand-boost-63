
import React from 'react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary to-accent relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6 animate-fade-in">
            Get in Touch
          </h2>
          <p className="text-xl text-white mb-8 animate-fade-in animate-delay-100">
            Have questions or ready to start improving your IT infrastructure? Our team is here to help you with any inquiries.
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in animate-delay-200">
            <Link
              to="/contact"
              className="bg-white text-primary hover:bg-gray-100 transition-colors px-8 py-3 rounded-md font-medium inline-flex items-center hover-scale"
            >
              Contact Us
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white hover:bg-white/10 transition-colors px-8 py-3 rounded-md font-medium inline-flex items-center hover-scale"
            >
              Our Services
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white animate-pulse-light"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-white animate-pulse-light animation-delay-500"></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 rounded-full bg-white animate-pulse-light animation-delay-300"></div>
      </div>
    </section>
  );
};

export default CTASection;
