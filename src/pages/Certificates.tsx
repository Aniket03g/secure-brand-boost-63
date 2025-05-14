import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import HPCertificateCard from '../components/HPCertificateCard';

const Certificates = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Certificates & Partnerships - V Technologies</title>
        <meta name="description" content="V Technologies is proud to display our certifications and partnerships that showcase our commitment to quality and excellence." />
        <meta property="og:title" content="Certificates & Partnerships - V Technologies" />
        <meta property="og:description" content="View V Technologies' certifications and partnerships that showcase our commitment to quality and excellence." />
      </Helmet>
      
      <Navbar />
      
      <main className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text animate-fade-in">
              Our Certificates & Partnerships
            </h1>
            <p className="text-lg text-gray-700 animate-fade-in animate-delay-200">
              We're proud to showcase our industry certifications and strategic partnerships that demonstrate our commitment to excellence and quality.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
            {/* HP Certificate Card */}
            <div className="col-span-1 md:col-span-2">
              <HPCertificateCard />
            </div>
            
            {/* Other certificates would go here */}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Certificates;
