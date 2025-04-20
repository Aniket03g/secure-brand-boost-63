
import React from 'react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Helmet } from "react-helmet";
import { ShoppingCart } from 'lucide-react';

const MicrosoftSolutions = () => {
  const products = [
    {
      category: "Operating Systems",
      items: [
        "Windows 11 Pro",
        "Windows 11 Home",
        "Windows 10 Pro",
        "Windows Server"
      ],
      features: ["Genuine License", "Official Support", "Security Updates"]
    },
    {
      category: "Microsoft 365",
      items: [
        "Microsoft 365 Business Basic",
        "Microsoft 365 Business Standard",
        "Microsoft 365 Business Premium",
        "Microsoft 365 Enterprise"
      ],
      features: ["Exchange Email", "SharePoint", "Teams", "Office Applications"]
    },
    {
      category: "Enterprise Solutions",
      items: [
        "Azure Services",
        "Dynamics 365",
        "Power Platform",
        "SQL Server"
      ],
      features: ["Cloud Integration", "Business Intelligence", "Automation"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Microsoft Solutions - V Technologies</title>
      </Helmet>
      
      <Navbar />
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-vtech-gray mb-8 animate-fade-in">Microsoft Solutions</h1>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow animate-fade-in">
                <ShoppingCart className="text-vtech-blue mb-4" size={24} />
                <h2 className="text-xl font-semibold mb-4">{product.category}</h2>
                <ul className="space-y-2 mb-4">
                  {product.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-vtech-blue rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <h3 className="text-sm font-medium text-gray-500">Key Features</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {product.features.map((feature, idx) => (
                      <span key={idx} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                        {feature}
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

export default MicrosoftSolutions;
