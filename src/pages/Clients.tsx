
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import TestimonialsSection from "../components/TestimonialsSection";
import { Globe, Users, Building, Shield } from "lucide-react";

interface ClientCategoryProps {
  title: string;
  icon: React.ReactNode;
  clients: string[];
}

const ClientCategory: React.FC<ClientCategoryProps> = ({ title, icon, clients }) => {
  return (
    <div className="mb-12">
      <div className="flex items-center mb-6">
        <div className="bg-vtech-blue bg-opacity-10 p-3 rounded-full mr-3">
          {icon}
        </div>
        <h3 className="text-2xl font-semibold text-vtech-gray">{title}</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {clients.map((client, index) => (
          <div 
            key={index}
            className="py-3 px-4 border-l-4 border-vtech-blue bg-gray-50 hover:bg-vtech-blue hover:text-white transition-colors"
          >
            {client}
          </div>
        ))}
      </div>
    </div>
  );
};

const Clients = () => {
  const clientCategories = [
    {
      title: "Government & Defense",
      icon: <Shield size={24} className="text-vtech-blue" />,
      clients: [
        "College of Military Engineering - CME Dhapodi, Pune (DEF)",
        "GREF Centre &RECORDS (Border Roads Org) Pune (DEF)",
        "Army Air Defense 145 Lt Regt. (DEF)",
        "MCO Pune 164 MET/DET, (DEF)",
        "HEMRL – DRDO Establishment. Pune (DEF)",
        "CDA Pashan, Pune, (DEF)",
        "DIAT–DRDO Establishment. (DEF)",
        "DGS&D Pune"
      ]
    },
    {
      title: "Manufacturing & Industrial",
      icon: <Building size={24} className="text-vtech-blue" />,
      clients: [
        "Tata Ficosa Automotive Systems Ltd. Pune",
        "Deepak Fertilizers & Petrochemicals Ltd Pune",
        "Lumax Automotive System Ltd. Pune",
        "Turbo Gears India Pvt. Ltd Ranjangoan, Pune",
        "Kirloskar Pneumatic Ltd. Pune",
        "Kirloskar Oil Engine Ltd. Pune",
        "Praj Industries Ltd. Pune",
        "Alfa Laval India Ltd. Pune"
      ]
    },
    {
      title: "Technology & IT",
      icon: <Globe size={24} className="text-vtech-blue" />,
      clients: [
        "Symantec Pune",
        "Aftek Infosys Ltd Pune",
        "CMS Computers Ltd. Pune",
        "NCRA /TIFR Pune",
        "Blue Crest S/W & Consultancy Services, Pune USA Based MNC",
        "MBO Computers Pvt. Ltd Pune",
        "Prompt Computer Services, Pune",
        "Blue Chip Semiconductors Pvt. Ltd Pune",
        "Romax Solutions Pvt. Ltd Pune UK Based MNC",
        "E-q Technologic India Pvt. Ltd USA Based MNC"
      ]
    },
    {
      title: "International Clients",
      icon: <Users size={24} className="text-vtech-blue" />,
      clients: [
        "Flexible Accounting Ltd. London, UK.",
        "Earth Solutions Ltd, Kenya, Africa",
        "Reval Analytical Services, Pune USA Based MNC",
        "Blue Crest S/W & Consultancy Services, Pune USA Based MNC",
        "Romax Solutions Pvt. Ltd Pune UK Based MNC",
        "E-q Technologic India Pvt. Ltd USA Based MNC",
        "Pier burg India Pvt. Ltd. German Based MNC"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Our Clients - V Technologies</title>
        <meta name="description" content="V Technologies serves a diverse range of clients from government agencies to multinational corporations. View our client list and testimonials." />
        <meta property="og:title" content="Our Clients - V Technologies" />
        <meta property="og:description" content="Discover our impressive client portfolio including government agencies, manufacturing companies, IT firms, and international businesses." />
      </Helmet>
      
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-vtech-darkBlue to-vtech-blue text-white py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Clients</h1>
              <p className="text-xl opacity-90">
                Trusted by government organizations, corporations, and businesses worldwide.
              </p>
            </div>
          </div>
        </section>
        
        {/* Client List */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-vtech-gray">Our Client Portfolio</h2>
              <div className="w-24 h-1 bg-vtech-blue mx-auto mt-4 mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We're proud to serve a diverse range of clients across various industries.
              </p>
            </div>
            
            {clientCategories.map((category, index) => (
              <ClientCategory 
                key={index}
                title={category.title}
                icon={category.icon}
                clients={category.clients}
              />
            ))}
          </div>
        </section>
        
        {/* Testimonials */}
        <TestimonialsSection />
        
        {/* Trust Badges */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-vtech-gray">Why Clients Trust Us</h2>
              <div className="w-24 h-1 bg-vtech-blue mx-auto mt-4 mb-6"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-vtech-blue bg-opacity-10 text-vtech-blue rounded-full mb-4">
                  <Shield size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Trusted Security</h3>
                <p className="text-gray-600">
                  We implement robust security measures that our clients can rely on.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-vtech-blue bg-opacity-10 text-vtech-blue rounded-full mb-4">
                  <Users size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                <p className="text-gray-600">
                  Our professionals have deep industry experience and technical expertise.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-vtech-blue bg-opacity-10 text-vtech-blue rounded-full mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-vtech-blue">
                    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
                <p className="text-gray-600">
                  Rigorous quality control at all stages of product development and service delivery.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-vtech-blue bg-opacity-10 text-vtech-blue rounded-full mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-vtech-blue">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Proven Track Record</h3>
                <p className="text-gray-600">
                  Years of successful project completions and satisfied clients across industries.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Clients;
