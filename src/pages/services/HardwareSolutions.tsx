
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
      items: ["Business Laptops", "Gaming Laptops", "Workstation Laptops", "Ultrabooks"],
      brands: ["HP", "Dell", "Lenovo", "Acer"]
    },
    {
      category: "Desktop Computers",
      items: ["Business Desktops", "Gaming PCs", "Workstations", "Mini PCs"],
      brands: ["HP", "Dell", "Lenovo", "Custom Built"]
    },
    {
      category: "All-in-One PCs",
      items: ["Home All-in-Ones", "Business All-in-Ones", "Touch Screen Models"],
      brands: ["HP", "Dell", "Lenovo"]
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
          <h1 className="text-4xl font-bold text-vtech-gray mb-8 animate-fade-in">Hardware Solutions</h1>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow animate-fade-in">
                <h2 className="text-xl font-semibold mb-4">{category.category}</h2>
                <ul className="space-y-2 mb-4">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-vtech-blue rounded-full mr-2"></span>
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
