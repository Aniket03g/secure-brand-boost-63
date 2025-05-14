
import React, { useEffect } from 'react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Helmet } from "react-helmet";
import { Laptop, HardDrive } from 'lucide-react';

const HardwareSolutions = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const products = [
    {
      category: "Laptops & Notebooks",
      items: ["Business Laptops", "Gaming Laptops", "Workstation Laptops", "Ultrabooks", "Budget Laptops", "Student Laptops"],
      brands: ["HP", "Dell", "Lenovo", "Acer", "Microsoft Surface", "ASUS"]
    },
    {
      category: "Desktop Computers",
      items: ["Business Desktops", "Gaming PCs", "Workstations", "Mini PCs", "All-in-One PCs", "Custom Built PCs"],
      brands: ["HP", "Dell", "Lenovo", "Custom Built", "Apple", "ASUS"]
    },
    {
      category: "Peripherals & Accessories",
      items: ["Monitors", "Keyboards", "Mice", "Printers", "Scanners", "External Storage", "Webcams", "Headsets"],
      brands: ["Logitech", "HP", "Dell", "Samsung", "LG", "Corsair"]
    },
    {
      category: "Networking Hardware",
      items: ["Routers", "Switches", "Access Points", "Network Adapters", "Network Cables", "Patch Panels"],
      brands: ["Cisco", "HP", "D-Link", "TP-Link", "Netgear", "Ubiquiti"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Hardware Solutions - V Technologies</title>
      </Helmet>
      
      <Navbar />
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
            <div className="animate-fade-in">
              <h1 className="text-4xl font-bold gradient-text mb-6">Hardware Solutions</h1>
              <p className="text-lg text-gray-700 mb-6">
                We provide premium hardware solutions from leading brands, tailored to meet your business requirements.
                From laptops and desktops to servers and networking equipment, we ensure you have the right tools to succeed.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">Laptops</span>
                <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">Desktops</span>
                <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">Servers</span>
                <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">Networking</span>
              </div>
            </div>
            <div className="relative animate-slide-in-right">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-lg blur-md"></div>
              <div className="relative rounded-lg overflow-hidden shadow-2xl bg-white hover-lift transition-all duration-500">
                <img
                  src="/lovable-uploads/acdac3c8-4901-4620-9af8-36b9ec6bbbff.png"
                  alt="Hardware Solutions"
                  className="w-full h-auto rounded-md hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {products.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                <Laptop className="text-primary mb-4" size={24} />
                <h2 className="text-xl font-semibold mb-4">{category.category}</h2>
                <ul className="space-y-2 mb-4">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <h3 className="text-sm font-medium text-gray-500">Available Brands</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {category.brands.map((brand, idx) => (
                      <span key={idx} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                        {brand}
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

export default HardwareSolutions;
