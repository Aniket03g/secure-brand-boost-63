
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Server, Network, Shield, Cpu, Users, Code } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="inline-block p-3 rounded-lg bg-vtech-blue bg-opacity-10 text-vtech-blue mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link 
        to={link} 
        className="text-vtech-blue hover:text-vtech-darkBlue font-medium inline-flex items-center"
      >
        Learn More
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: "IT Infrastructure",
      description: "Complete IT infrastructure design, implementation and management solutions tailored to your business needs. We help you build and maintain robust, scalable, and secure IT environments.",
      icon: <Server size={24} />,
      link: "/services/infrastructure"
    },
    {
      title: "Networking Solutions",
      description: "Design and implementation of networking solutions using hardware from top vendors like Cisco, HP, D-Link and more. From small office networks to enterprise-grade infrastructure.",
      icon: <Network size={24} />,
      link: "/services/networking"
    },
    {
      title: "Security Services",
      description: "Comprehensive security solutions including firewalls, intrusion detection, security audits, and policy implementation to protect your business from evolving cyber threats.",
      icon: <Shield size={24} />,
      link: "/services/security"
    },
    {
      title: "Hardware Solutions",
      description: "Premium hardware solutions from trusted brands like HP, Dell, Lenovo, and Acer. We provide servers, workstations, laptops, storage solutions and more.",
      icon: <Cpu size={24} />,
      link: "/services/hardware"
    },
    {
      title: "IT Consultancy",
      description: "Expert advice and strategic planning for your IT requirements. Our consultants help you make informed decisions about your IT investments and infrastructure needs.",
      icon: <Users size={24} />,
      link: "/services/consultancy"
    },
    {
      title: "Software Development",
      description: "Custom software development and integration services to meet your specific business requirements. We develop and implement solutions that streamline your operations.",
      icon: <Code size={24} />,
      link: "/services/software"
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Our Services - V Technologies</title>
        <meta name="description" content="V Technologies offers a wide range of IT services including infrastructure solutions, networking, security, hardware procurement, IT consultancy and software development." />
        <meta property="og:title" content="Our Services - V Technologies" />
        <meta property="og:description" content="Explore our comprehensive IT services including infrastructure solutions, networking, security, hardware procurement, consultancy and software development." />
      </Helmet>
      
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-vtech-darkBlue to-vtech-blue text-white py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
              <p className="text-xl opacity-90">
                Comprehensive IT solutions to help your business thrive in the digital era.
              </p>
            </div>
          </div>
        </section>
        
        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard 
                  key={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  link={service.link}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Custom Solutions Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-vtech-gray mb-6">Custom IT Solutions</h2>
                <p className="text-lg text-gray-600 mb-4">
                  Don't see exactly what you're looking for? We specialize in creating custom IT solutions tailored to your specific business requirements.
                </p>
                <p className="text-gray-600 mb-6">
                  Our team of experts will work closely with you to understand your unique challenges and develop a solution that addresses your specific needs. Whether you need a combination of our services or something completely different, we're here to help.
                </p>
                <Link
                  to="/contact"
                  className="bg-vtech-blue text-white hover:bg-vtech-darkBlue transition-colors px-6 py-3 rounded-md font-medium inline-flex items-center"
                >
                  Discuss Your Requirements
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              
              <div className="lg:pl-10">
                <img
                  src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800"
                  alt="Custom IT Solutions"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
