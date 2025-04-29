
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import StatsSection from '@/components/StatsSection';
import ClientsSection from '@/components/ClientsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PartnersSection from '@/components/PartnersSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet';
import ChatWidget from '@/components/ChatWidget';

const Index = () => {
  return (
    <div>
      <Helmet>
        <title>V Technologies - IT Infrastructure Solutions & Consultancy</title>
        <meta
          name="description"
          content="V Technologies provides cutting-edge IT infrastructure solutions, management & consultancy services based in Pune, India."
        />
      </Helmet>
      <Navbar />
      <div>
        <HeroSection />
        <ServicesSection />
        <StatsSection />
        <ClientsSection />
        <TestimonialsSection />
        <PartnersSection />
        <CTASection />
      </div>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Index;
