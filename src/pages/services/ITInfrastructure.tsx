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
      category: "Server Infrastructure",
      items: [
        "Server Setup & Configuration",
        "Virtualization Solutions",
        "Data Center Management",
        "Server Maintenance"
      ],
      providers: ["Dell", "HP", "IBM", "Lenovo"]
    },
    {
      category: "Network Infrastructure",
      items: [
        "Network Design & Implementation",
        "WAN/LAN Setup",
        "Network Security",
        "Wi-Fi Solutions"
      ],
      providers: ["Cisco", "Juniper", "HP", "Aruba"]
    },
    {
      category: "Storage Solutions",
      items: [
        "SAN/NAS Solutions",
        "Backup Systems",
        "Data Recovery",
        "Storage Management"
      ],
      providers: ["NetApp", "EMC", "HP", "IBM"]
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
          <h1 className="text-4xl font-bold text-vtech-gray mb-8 animate-fade-in">IT Infrastructure</h1>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow animate-fade-in">
                <Server className="text-vtech-blue mb-4" size={24} />
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
                  <h3 className="text-sm font-medium text-gray-500">Providers</h3>
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
