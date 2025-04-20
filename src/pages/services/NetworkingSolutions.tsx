
import React, { useEffect } from 'react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Helmet } from "react-helmet";
import { Network } from 'lucide-react';

const NetworkingSolutions = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const services = [
    {
      category: "Network Infrastructure",
      items: [
        "LAN/WAN Setup & Configuration",
        "Wireless Networking Solutions",
        "Network Management",
        "Network Optimization"
      ],
      providers: ["Cisco", "HP", "Juniper", "D-Link"]
    },
    {
      category: "Network Security",
      items: [
        "Firewall Implementation",
        "VPN Solutions",
        "Network Monitoring",
        "Intrusion Detection Systems"
      ],
      providers: ["Cisco", "Fortinet", "Palo Alto", "SonicWall"]
    },
    {
      category: "Enterprise Solutions",
      items: [
        "Enterprise Wi-Fi Solutions",
        "Software-Defined Networking",
        "Network Virtualization",
        "Cloud Connectivity"
      ],
      providers: ["Cisco", "Aruba", "Ubiquiti", "Meraki"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Networking Solutions - V Technologies</title>
      </Helmet>
      
      <Navbar />
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-vtech-gray mb-8 animate-fade-in">Networking Solutions</h1>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow animate-fade-in">
                <Network className="text-vtech-blue mb-4" size={24} />
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

export default NetworkingSolutions;
