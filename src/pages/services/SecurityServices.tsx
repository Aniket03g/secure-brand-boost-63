
import React from 'react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Helmet } from "react-helmet";
import { Shield } from 'lucide-react';

const SecurityServices = () => {
  const services = [
    {
      category: "Endpoint Security",
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

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Security Services - V Technologies</title>
      </Helmet>
      
      <Navbar />
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-vtech-gray mb-8 animate-fade-in">Security Services</h1>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow animate-fade-in">
                <Shield className="text-vtech-blue mb-4" size={24} />
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
                  <h3 className="text-sm font-medium text-gray-500">Solution Providers</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {service.providers.map((provider, idx) => (
                      <span key={idx} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
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
