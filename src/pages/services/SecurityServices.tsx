
import React, { useEffect, useRef, useState } from 'react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Helmet } from "react-helmet";
import { Shield, Lock, Globe, Database } from 'lucide-react';

const SecurityServices = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const services = [
    {
      category: "Endpoint Security",
      icon: <Shield />,
      items: [
        "Antivirus Solutions",
        "Anti-malware Protection",
        "Endpoint Detection and Response (EDR)",
        "Device Control Management",
        "Data Encryption",
        "Remote Device Management"
      ],
      providers: ["Kaspersky", "McAfee", "Norton", "Bitdefender", "ESET", "Avast"]
    },
    {
      category: "Network Security",
      icon: <Globe />,
      items: [
        "Firewall Solutions",
        "Intrusion Detection Systems",
        "VPN Solutions",
        "Network Access Control",
        "Web Application Firewalls",
        "DDoS Protection"
      ],
      providers: ["Cisco", "Fortinet", "Palo Alto", "SonicWall", "Check Point", "Juniper"]
    },
    {
      category: "Data Security",
      icon: <Database />,
      items: [
        "Data Encryption",
        "Data Loss Prevention",
        "Secure File Sharing",
        "Backup Solutions",
        "Database Security",
        "Cloud Security"
      ],
      providers: ["Symantec", "Microsoft", "IBM", "Trend Micro", "Sophos", "Veeam"]
    },
    {
      category: "Security Services",
      icon: <Lock />,
      items: [
        "Security Audits & Assessments",
        "Vulnerability Management",
        "Security Awareness Training",
        "Incident Response Planning",
        "Compliance Management",
        "24/7 Security Monitoring"
      ],
      providers: ["CrowdStrike", "Rapid7", "Tenable", "KnowBe4", "Qualys", "Trustwave"]
    }
  ];

  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Security Services - V Technologies</title>
      </Helmet>
      
      <Navbar />
      
      <div className="relative py-20 bg-gradient-to-b from-[#090D1B] to-background">
        <div className="container mx-auto px-4">
          <div className="relative z-10">
            <h1 className="text-5xl font-bold gradient-text mb-4 animate-fade-in">Security Services</h1>
            <p className="text-xl text-foreground/70 max-w-3xl animate-fade-in animate-delay-200">
              Comprehensive security solutions to protect your business from evolving threats
            </p>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        </div>
      </div>
      
      <main className="py-10" ref={sectionRef}>
        <div className="container mx-auto px-4">          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`glass-card rounded-lg p-6 hover:shadow-lg hover:shadow-accent/10 transition-all duration-500 opacity-0 ${
                  isVisible ? 'animate-fade-in' : ''
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-accent mb-4">{service.icon}</div>
                <h2 className="text-xl font-semibold mb-4 gradient-text">{service.category}</h2>
                <ul className="space-y-3 mb-6">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-foreground/80 hover-scale">
                      <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <h3 className="text-sm font-medium text-foreground/60">Solution Providers</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {service.providers.map((provider, idx) => (
                      <span key={idx} className="bg-muted px-3 py-1 rounded-full text-sm hover:bg-accent/20 transition-all cursor-pointer">
                        {provider}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SecurityServices;
