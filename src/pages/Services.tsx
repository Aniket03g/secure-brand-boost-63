
import React, { useEffect } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Server, Shield, Cpu, Users, Code, Cloud, ShoppingCart, Database } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, link }) => {
  return (
    <div className="glass-card rounded-lg p-6 hover:shadow-lg transition-shadow animate-fade-in hover-lift">
      <div className="inline-block p-3 rounded-lg bg-accent/10 text-accent mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link 
        to={link} 
        className="text-accent hover:text-accent/80 font-medium inline-flex items-center group"
      >
        Learn More
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: "IT Infrastructure",
      description: "Complete IT infrastructure design, implementation and management solutions tailored to your business needs. We help you build and maintain robust, scalable, and secure IT environments, from setting up office server rooms to implementing network solutions.",
      icon: <Server size={24} />,
      link: "/services/it-infrastructure"
    },
    {
      title: "Software Solutions",
      description: "Software delivery, installation, configuration, and custom development services. We provide web development, mobile applications, enterprise solutions and software services to meet your specific business requirements.",
      icon: <Code size={24} />,
      link: "/services/software-development"
    },
    {
      title: "Security Services",
      description: "Comprehensive security solutions including firewalls, antiviruses, intrusion detection systems, security audits, and policy implementation to protect your business from evolving cyber threats.",
      icon: <Shield size={24} />,
      link: "/services/security-services"
    },
    {
      title: "Hardware Solutions",
      description: "Premium hardware solutions including laptops, desktops, servers, all-in-one PCs, peripherals, and networking equipment from trusted brands like HP, Dell, Lenovo, and Acer.",
      icon: <Cpu size={24} />,
      link: "/services/hardware-solutions"
    },
    {
      title: "Cloud Services",
      description: "Cloud computing solutions with AWS, Azure, Google Cloud and other providers for storage, infrastructure, and application hosting with expert implementation and management.",
      icon: <Cloud size={24} />,
      link: "/services/cloud-services"
    },
    {
      title: "Microsoft Solutions",
      description: "Licensed Microsoft products including Windows 11, Office 365, Microsoft 365, and enterprise solutions with official support and implementation services.",
      icon: <ShoppingCart size={24} />,
      link: "/services/microsoft-solutions"
    },
    {
      title: "IT Consultancy",
      description: "Expert advice and strategic planning for your IT requirements. Our consultants help you make informed decisions about your IT investments and infrastructure needs.",
      icon: <Users size={24} />,
      link: "/services/it-consultancy"
    },
    {
      title: "Core Banking Services",
      description: "Comprehensive banking solutions including transaction processing, account management, loans, deposits and financial reporting systems for financial institutions.",
      icon: <Database size={24} />,
      link: "/services/core-banking-services"
    }
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Our Services - V Technologies</title>
        <meta name="description" content="V Technologies offers a wide range of IT services including infrastructure solutions, networking, security, hardware procurement, IT consultancy and software development." />
        <meta property="og:title" content="Our Services - V Technologies" />
        <meta property="og:description" content="Explore our comprehensive IT services including infrastructure solutions, networking, security, hardware procurement, consultancy and software development." />
      </Helmet>
      
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="bg-blue-50 text-gray-800 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text animate-fade-in">Our Services</h1>
              <p className="text-xl text-gray-700 animate-fade-in animate-delay-200">
                Comprehensive IT solutions to help your business thrive in the digital era.
              </p>
            </div>
          </div>
        </section>
        
        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="opacity-0 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <ServiceCard 
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                    link={service.link}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Custom Solutions Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="opacity-0 animate-slide-in-left animate-fill-both">
                <h2 className="text-3xl font-bold gradient-text mb-6">Custom IT Solutions</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Don't see exactly what you're looking for? We specialize in creating custom IT solutions tailored to your specific business requirements.
                </p>
                <p className="text-gray-600 mb-6">
                  Our team of experts will work closely with you to understand your unique challenges and develop a solution that addresses your specific needs. Whether you need a combination of our services or something completely different, we're here to help.
                </p>
                <Link
                  to="/contact"
                  className="bg-accent text-white hover:bg-accent/90 transition-colors px-6 py-3 rounded-md font-medium inline-flex items-center hover-scale hover-glow group"
                >
                  Discuss Your Requirements
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              
              <div className="lg:pl-10 opacity-0 animate-slide-in-right animate-delay-200 animate-fill-both">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-lg blur-md"></div>
                  <div className="relative rounded-lg overflow-hidden shadow-2xl bg-white hover-lift transition-all duration-500">
                    <img
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800"
                      alt="Custom IT Solutions"
                      className="w-full h-auto rounded-md hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
