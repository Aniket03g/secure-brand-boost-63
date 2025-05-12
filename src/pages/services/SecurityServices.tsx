
import React, { useEffect } from 'react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Helmet } from "react-helmet";
import { Shield, Lock, AlertTriangle, Eye } from 'lucide-react';

const SecurityServices = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const securityServices = [
    {
      category: "Network Security",
      icon: <Shield size={24} className="text-vtech-blue" />,
      items: [
        "Firewalls Setup & Configuration",
        "Intrusion Detection & Prevention Systems",
        "VPN Configuration",
        "Network Access Control",
        "Network Traffic Analysis",
        "DMZ Setup"
      ],
      technologies: ["Cisco", "Fortinet", "SonicWall", "Palo Alto Networks"]
    },
    {
      category: "Endpoint Security",
      icon: <Lock size={24} className="text-vtech-blue" />,
      items: [
        "Antivirus Solutions",
        "Endpoint Detection & Response",
        "Data Loss Prevention",
        "Device Control & Encryption",
        "Mobile Device Management",
        "Email Security"
      ],
      technologies: ["Quick Heal", "Net Protector", "Microsoft Defender", "Norton", "McAfee"]
    },
    {
      category: "Security Assessment",
      icon: <AlertTriangle size={24} className="text-vtech-blue" />,
      items: [
        "Vulnerability Assessment",
        "Penetration Testing",
        "Security Audits",
        "Compliance Checks",
        "Risk Assessment",
        "Security Architecture Review"
      ],
      technologies: ["Industry Standard Tools", "Proprietary Frameworks"]
    },
    {
      category: "Security Monitoring",
      icon: <Eye size={24} className="text-vtech-blue" />,
      items: [
        "Security Operations Center (SOC)",
        "Security Information & Event Management",
        "Threat Intelligence",
        "Incident Response",
        "24/7 Monitoring",
        "Breach Detection"
      ],
      technologies: ["SIEM Platforms", "Monitoring Tools", "Threat Intelligence Feeds"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Security Services - V Technologies</title>
      </Helmet>
      
      <Navbar />
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-vtech-gray mb-8 animate-fade-in">Security Services</h1>
          <p className="text-lg text-gray-600 mb-10 max-w-4xl mx-auto animate-fade-in animate-delay-100">
            Our comprehensive security services help protect your organization's data, infrastructure, and reputation from evolving cyber threats with proven solutions from trusted technology partners.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow animate-fade-in">
                <div className="inline-block p-3 bg-vtech-blue bg-opacity-10 rounded-full mb-4">
                  {service.icon}
                </div>
                <h2 className="text-xl font-semibold mb-4">{service.category}</h2>
                <ul className="space-y-2 mb-4">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-vtech-blue rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <h3 className="text-sm font-medium text-gray-500">Technologies</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {service.technologies.map((tech, idx) => (
                      <span key={idx} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                        {tech}
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
