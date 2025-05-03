
import React from 'react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Helmet } from "react-helmet";
import { Code } from 'lucide-react';

const SoftwareDevelopment = () => {
  const services = [
    {
      category: "Web Development",
      items: [
        "Responsive Website Design",
        "E-commerce Platforms",
        "Progressive Web Apps",
        "Web Portal Development",
        "Content Management Systems",
        "Custom Web Applications"
      ],
      technologies: ["React", "Angular", "Vue.js", "Node.js", "PHP", "ASP.NET"]
    },
    {
      category: "Mobile Development",
      items: [
        "iOS Applications",
        "Android Applications",
        "Cross-platform Apps",
        "Mobile UI/UX Design",
        "Mobile App Testing",
        "App Store Optimization"
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Xamarin", "Ionic"]
    },
    {
      category: "Enterprise Solutions",
      items: [
        "Enterprise Resource Planning (ERP)",
        "Customer Relationship Management (CRM)",
        "Business Intelligence Solutions",
        "Supply Chain Management",
        "Human Resource Management",
        "Inventory Management Systems"
      ],
      technologies: [".NET", "Java", "Python", "Oracle", "SAP", "Microsoft Dynamics"]
    },
    {
      category: "Software Services",
      items: [
        "Software Installation & Configuration",
        "Software Integration",
        "Legacy System Migration",
        "Software Upgrades & Updates",
        "Technical Support & Maintenance",
        "User Training & Documentation"
      ],
      technologies: ["Microsoft Office", "Adobe Creative Suite", "QuickBooks", "AutoCAD", "Accounting Software", "Industry-specific Software"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Software Development - V Technologies</title>
      </Helmet>
      
      <Navbar />
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-vtech-gray mb-8 animate-fade-in">Software Solutions</h1>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow animate-fade-in">
                <Code className="text-vtech-blue mb-4" size={24} />
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

export default SoftwareDevelopment;
