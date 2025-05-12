
import { Server, Shield, Cpu, Cloud, ShoppingCart, Code, Users, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, link }) => {
  return (
    <div className="glass-card rounded-lg p-6 hover:shadow-lg transition-shadow animate-fade-in hover-lift">
      <div className="inline-block p-3 rounded-lg bg-accent bg-opacity-10 text-accent mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-foreground">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <Link 
        to={link} 
        className="text-accent hover:text-accent/80 font-medium inline-flex items-center group"
      >
        Learn More
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: "Hardware Solutions",
      description: "Complete range of hardware including laptops, desktops, servers, all-in-one PCs, peripherals and networking equipment from leading brands.",
      icon: <Cpu size={24} />,
      link: "/services/hardware-solutions"
    },
    {
      title: "Security Services",
      description: "Comprehensive security solutions including antiviruses, firewalls, endpoint protection, and advanced network security infrastructure.",
      icon: <Shield size={24} />,
      link: "/services/security-services"
    },
    {
      title: "Cloud Services",
      description: "Cloud computing solutions with AWS, Azure, Google Cloud and other providers for storage, infrastructure and application hosting.",
      icon: <Cloud size={24} />,
      link: "/services/cloud-services"
    },
    {
      title: "Microsoft Solutions",
      description: "Licensed Microsoft products including Windows 11, Office 365, Microsoft 365, and enterprise solutions with official support.",
      icon: <ShoppingCart size={24} />,
      link: "/services/microsoft-solutions"
    },
    {
      title: "IT Infrastructure",
      description: "Complete office setup from designing server rooms to implementing networks, structured cabling, and full office IT environments.",
      icon: <Server size={24} />,
      link: "/services/it-infrastructure"
    },
    {
      title: "Software Solutions",
      description: "Software delivery, installation, configuration, and custom development services for web, mobile and enterprise applications.",
      icon: <Code size={24} />,
      link: "/services/software-development"
    },
    {
      title: "IT Consultancy",
      description: "Expert advice and strategic planning for your IT requirements and digital transformation initiatives.",
      icon: <Users size={24} />,
      link: "/services/it-consultancy"
    },
    {
      title: "Core Banking Services",
      description: "Comprehensive banking solutions including transaction processing, account management, loans, deposits and financial reporting systems.",
      icon: <Database size={24} />,
      link: "/services/core-banking-services"
    }
  ];

  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text">Our Services</h2>
          <div className="w-24 h-1 bg-accent mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
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
            className="bg-accent text-white hover:bg-accent/90 transition-colors px-6 py-3 rounded-md font-medium inline-flex items-center hover-scale hover-glow"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
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
