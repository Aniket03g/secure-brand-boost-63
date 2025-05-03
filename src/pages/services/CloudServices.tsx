
import React from 'react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Helmet } from "react-helmet";
import { Cloud } from 'lucide-react';

const CloudServices = () => {
  const services = [
    {
      category: "Cloud Infrastructure",
      items: [
        "Infrastructure as a Service (IaaS)",
        "Virtual Machines",
        "Cloud Storage Solutions",
        "Backup and Disaster Recovery",
        "Hybrid Cloud Solutions",
        "Multi-Cloud Management"
      ],
      providers: ["AWS (Amazon Web Services)", "Microsoft Azure", "Google Cloud Platform", "IBM Cloud"]
    },
    {
      category: "Cloud Applications",
      items: [
        "Software as a Service (SaaS)",
        "Email and Communication",
        "Productivity Tools",
        "Collaboration Platforms",
        "Customer Relationship Management",
        "Enterprise Resource Planning"
      ],
      providers: ["Microsoft 365", "Google Workspace", "Salesforce", "Dropbox Business", "Slack", "Zoom"]
    },
    {
      category: "Cloud Management",
      items: [
        "Cloud Migration Services",
        "Cloud Security",
        "Performance Monitoring",
        "Cost Optimization",
        "Auto-scaling Solutions",
        "DevOps Implementation"
      ],
      providers: ["VMware", "Citrix", "Red Hat", "CloudFlare", "New Relic", "Datadog"]
    },
    {
      category: "Cloud Consulting",
      items: [
        "Cloud Strategy Development",
        "Architecture Design",
        "Cloud Readiness Assessment",
        "Compliance & Governance",
        "Staff Training & Knowledge Transfer",
        "24/7 Cloud Support"
      ],
      providers: ["AWS Partner Network", "Microsoft Azure Experts", "Google Cloud Partners", "IBM Business Partners"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Cloud Services - V Technologies</title>
      </Helmet>
      
      <Navbar />
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-vtech-gray mb-8 animate-fade-in">Cloud Services</h1>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow animate-fade-in">
                <Cloud className="text-vtech-blue mb-4" size={24} />
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
                  <h3 className="text-sm font-medium text-gray-500">Available Platforms</h3>
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

export default CloudServices;
