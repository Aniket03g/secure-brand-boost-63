
import { Server, Network, Shield, Cpu, Users, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

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

const ServicesSection = () => {
  const services = [
    {
      title: "IT Infrastructure",
      description: "Design and implementation of robust IT infrastructure tailored to your business needs.",
      icon: <Server size={24} />,
      link: "/services/infrastructure"
    },
    {
      title: "Networking Solutions",
      description: "Complete networking solutions with hardware from top vendors like Cisco, HP, and more.",
      icon: <Network size={24} />,
      link: "/services/networking"
    },
    {
      title: "Security Services",
      description: "Comprehensive security solutions to protect your business from threats.",
      icon: <Shield size={24} />,
      link: "/services/security"
    },
    {
      title: "Hardware Solutions",
      description: "Premium hardware from trusted brands like HP, Dell, Lenovo, and Acer.",
      icon: <Cpu size={24} />,
      link: "/services/hardware"
    },
    {
      title: "IT Consultancy",
      description: "Expert advice and strategic planning for your IT requirements.",
      icon: <Users size={24} />,
      link: "/services/consultancy"
    },
    {
      title: "Software Development",
      description: "Custom software development and integration services.",
      icon: <Code size={24} />,
      link: "/services/software"
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-vtech-gray">Our Services</h2>
          <div className="w-24 h-1 bg-vtech-blue mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide a wide range of IT services and solutions to help your business thrive in the digital era.
          </p>
        </div>
        
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
        
        <div className="text-center mt-10">
          <Link 
            to="/services" 
            className="bg-vtech-blue text-white hover:bg-vtech-darkBlue transition-colors px-6 py-3 rounded-md font-medium inline-flex items-center"
          >
            View All Services
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
