
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import PartnersSection from "../components/PartnersSection";
import ClientsSection from "../components/ClientsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import SecureContactForm from "../components/SecureContactForm";
import StatsSection from "../components/StatsSection";
import CTASection from "../components/CTASection";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>V Technologies - IT Infrastructure Solutions & Consultancy</title>
        <meta name="description" content="V Technologies provides cutting-edge IT infrastructure solutions, management & consultancy services based in Pune, India. We offer hardware solutions, software development and system integration services." />
        <meta name="keywords" content="IT infrastructure, IT consultancy, system integration, hardware solutions, software development, IT security, Pune, India" />
        <meta property="og:title" content="V Technologies - IT Infrastructure Solutions & Consultancy" />
        <meta property="og:description" content="V Technologies provides cutting-edge IT infrastructure solutions, management & consultancy services based in Pune, India." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vtechnologies.com" />
      </Helmet>
      
      <Navbar />
      
      <main>
        <HeroSection />
        
        <StatsSection />
        
        <ServicesSection />
        
        <div className="container mx-auto px-4 md:px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-vtech-gray mb-6">Get in Touch with Us</h2>
              <p className="text-lg text-gray-600 mb-8">
                Have questions or ready to start improving your IT infrastructure? Our team is here to help you with any inquiries.
              </p>
              <p className="text-gray-600 mb-8">
                At V Technologies, we believe in building long-term relationships with our clients based on honesty, sincerity, and integrity. Reach out to us to discuss how we can help your business thrive in the digital era.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 mb-8">
                <h3 className="font-medium text-xl mb-3">Our Mission</h3>
                <p className="italic text-gray-600">
                  "Honesty, sincerity and integrity is the foundation for long-mutual relationships"
                </p>
              </div>
            </div>
            
            <div>
              <SecureContactForm />
            </div>
          </div>
        </div>
        
        <TestimonialsSection />
        
        <PartnersSection />
        
        <ClientsSection />
        
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
