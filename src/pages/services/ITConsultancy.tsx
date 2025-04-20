
import React from 'react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Helmet } from "react-helmet";
import { Users } from 'lucide-react';

const ITConsultancy = () => {
  const services = [
    {
      category: "Strategic IT Planning",
      items: [
        "IT Strategy Development",
        "Digital Transformation Planning",
        "Technology Roadmap Creation",
        "IT Budget Planning"
      ],
      offerings: ["Assessment", "Planning", "Implementation", "Review"]
    },
    {
      category: "Business Analysis",
      items: [
        "Requirements Gathering",
        "Process Optimization",
        "System Integration Planning",
        "Technology Stack Assessment"
      ],
      offerings: ["Documentation", "Analysis", "Recommendations", "Implementation Support"]
    },
    {
      category: "Project Management",
      items: [
        "IT Project Management",
        "Resource Allocation",
        "Risk Management",
        "Quality Assurance"
      ],
      offerings: ["Agile", "Waterfall", "Hybrid", "Custom Methodologies"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>IT Consultancy - V Technologies</title>
      </Helmet>
      
      <Navbar />
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-vtech-gray mb-8 animate-fade-in">IT Consultancy Services</h1>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow animate-fade-in">
                <Users className="text-vtech-blue mb-4" size={24} />
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
                  <h3 className="text-sm font-medium text-gray-500">Service Offerings</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {service.offerings.map((offering, idx) => (
                      <span key={idx} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                        {offering}
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

export default ITConsultancy;
