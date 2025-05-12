
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Clients from './pages/Clients';
import Products from './pages/Products';
import NotFound from './pages/NotFound';
import Certificates from './pages/Certificates';
import ITInfrastructure from './pages/services/ITInfrastructure';
import SoftwareDevelopment from './pages/services/SoftwareDevelopment';
import SecurityServices from './pages/services/SecurityServices';
import HardwareSolutions from './pages/services/HardwareSolutions';
import ITConsultancy from './pages/services/ITConsultancy';
import CloudServices from './pages/services/CloudServices';
import MicrosoftSolutions from './pages/services/MicrosoftSolutions';
import CoreBankingServices from './pages/services/CoreBankingServices';
import './App.css';

const ScrollToTop = () => {
  const { pathname } = window.location;
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/products" element={<Products />} />
        <Route path="/certificates" element={<Certificates />} />
        
        {/* Service pages */}
        <Route path="/services/it-infrastructure" element={<ITInfrastructure />} />
        <Route path="/services/software-development" element={<SoftwareDevelopment />} />
        <Route path="/services/security-services" element={<SecurityServices />} />
        <Route path="/services/hardware-solutions" element={<HardwareSolutions />} />
        <Route path="/services/it-consultancy" element={<ITConsultancy />} />
        <Route path="/services/cloud-services" element={<CloudServices />} />
        <Route path="/services/microsoft-solutions" element={<MicrosoftSolutions />} />
        <Route path="/services/core-banking-services" element={<CoreBankingServices />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
