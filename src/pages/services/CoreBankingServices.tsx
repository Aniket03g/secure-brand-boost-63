
import React, { useEffect } from 'react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Helmet } from "react-helmet";
import { Database, CreditCard, FileText, BarChart4 } from 'lucide-react';

const CoreBankingServices = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const services = [
    {
      category: "Transaction Processing Systems",
      icon: <CreditCard size={24} className="text-vtech-blue" />,
      items: [
        "Real-time Transaction Processing",
        "Multi-currency Support",
        "Payment Gateway Integration",
        "ATM & POS Integration",
        "Mobile Banking Transactions",
        "Transaction Validation & Verification"
      ],
      features: ["Real-time Processing", "Scalable Architecture", "High Availability", "Fraud Detection"]
    },
    {
      category: "Account Management",
      icon: <Database size={24} className="text-vtech-blue" />,
      items: [
        "Customer Account Services",
        "Savings & Current Accounts",
        "Fixed Deposits Management",
        "Loan & Credit Management",
        "Overdraft Facilities",
        "Interest Calculation Systems"
      ],
      features: ["Customer 360° View", "Automated Processes", "Compliance Ready", "Audit Trails"]
    },
    {
      category: "Financial Reporting",
      icon: <BarChart4 size={24} className="text-vtech-blue" />,
      items: [
        "Regulatory Reporting",
        "Financial Statements Generation",
        "Risk Management Reports",
        "Compliance Reports",
        "MIS Reporting",
        "Custom Report Generation"
      ],
      features: ["Automated Generation", "Multiple Export Formats", "Customizable Templates", "Historical Data Access"]
    },
    {
      category: "Banking Operations",
      icon: <FileText size={24} className="text-vtech-blue" />,
      items: [
        "Branch Operations Support",
        "Teller Management Systems",
        "Clearing & Settlement",
        "Remittances & Fund Transfers",
        "Treasury Operations",
        "Back Office Automation"
      ],
      features: ["Process Automation", "Role-based Access", "Integration Capabilities", "Customization Options"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Core Banking Services - V Technologies</title>
      </Helmet>
      
      <Navbar />
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-vtech-gray mb-6 animate-fade-in">Core Banking Services</h1>
          <p className="text-lg text-gray-600 mb-10 max-w-4xl animate-fade-in animate-delay-100">
            Our comprehensive core banking solutions enable financial institutions to streamline operations, enhance customer experience, and ensure regulatory compliance while maintaining security and reliability.
          </p>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow animate-fade-in">
                <div className="inline-block p-3 bg-vtech-blue bg-opacity-10 rounded-full mb-4">
                  {service.icon}
                </div>
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
                  <h3 className="text-sm font-medium text-gray-500">Key Features</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {service.features.map((feature, idx) => (
                      <span key={idx} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-100 animate-fade-in animate-delay-300">
            <h3 className="text-xl font-semibold mb-4">Why Choose Our Core Banking Solutions?</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-medium text-vtech-blue mb-2">Reliability & Scalability</h4>
                <p className="text-sm text-gray-600">
                  Our solutions are designed to handle high transaction volumes with minimal downtime, ensuring business continuity.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-medium text-vtech-blue mb-2">Security & Compliance</h4>
                <p className="text-sm text-gray-600">
                  Built with bank-grade security features and designed to meet regulatory requirements across jurisdictions.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-medium text-vtech-blue mb-2">Integration Capabilities</h4>
                <p className="text-sm text-gray-600">
                  Seamlessly integrates with existing systems through modern APIs and standardized protocols.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CoreBankingServices;
