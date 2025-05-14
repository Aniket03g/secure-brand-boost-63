
import React, { useEffect } from 'react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Helmet } from "react-helmet";
import { Server } from 'lucide-react';

const ITInfrastructure = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const services = [
    {
      category: "Office Setup & Infrastructure",
      items: [
        "Complete Office IT Setup",
        "Server Room Design & Installation",
        "Workstation Configuration",
        "Power & Cooling Solutions",
        "Structured Cabling",
        "Physical Security Systems"
      ],
      providers: ["Dell", "HP", "IBM", "Lenovo", "APC"]
    },
    {
      category: "Network Infrastructure",
      items: [
        "LAN/WAN Design & Implementation",
        "Wireless Network Solutions",
        "VPN & Remote Access Setup",
        "Network Security Configuration",
        "Voice & Video Systems",
        "Internet Service Management"
      ],
      providers: ["Cisco", "Juniper", "HP", "Aruba", "Ubiquiti"]
    },
    {
      category: "Server & Storage Infrastructure",
      items: [
        "Server Installation & Configuration",
        "Virtualization Solutions",
        "SAN/NAS Setup",
        "Backup & Recovery Systems",
        "Disaster Recovery Planning",
        "High Availability Solutions"
      ],
      providers: ["Dell EMC", "HP", "IBM", "Dell", "VMware"]
    },
    {
      category: "IT Infrastructure Management",
      items: [
        "24/7 Infrastructure Monitoring",
        "Preventive Maintenance",
        "Regular Health Checks",
        "IT Asset Management",
        "Performance Optimization",
        "Infrastructure Documentation"
      ],
      providers: ["Microsoft", "ServiceNow", "Splunk", "Nagios", "PRTG", "Zabbix"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>IT Infrastructure - V Technologies</title>
      </Helmet>
      
      <Navbar />
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
            <div className="animate-fade-in">
              <h1 className="text-4xl font-bold gradient-text mb-6">IT Infrastructure Solutions</h1>
              <p className="text-lg text-gray-700 mb-6">
                We design, implement, and manage robust IT infrastructure that forms the backbone of your business operations. 
                From server rooms to network systems, we ensure your infrastructure is scalable, secure, and reliable.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">Server Design</span>
                <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">Network Infrastructure</span>
                <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">Structured Cabling</span>
                <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">24/7 Monitoring</span>
              </div>
            </div>
            <div className="relative animate-slide-in-right">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-lg blur-md"></div>
              <div className="relative rounded-lg overflow-hidden shadow-2xl bg-white hover-lift transition-all duration-500">
                <img
                  src="/lovable-uploads/53b0f49d-ff75-4d5f-afa8-dfa9fbce8b73.png"
                  alt="IT Infrastructure Networking"
                  className="w-full h-auto rounded-md hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                <Server className="text-primary mb-4" size={24} />
                <h2 className="text-xl font-semibold mb-4">{service.category}</h2>
                <ul className="space-y-2 mb-4">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <h3 className="text-sm font-medium text-gray-500">Technology Partners</h3>
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

export default ITInfrastructure;
