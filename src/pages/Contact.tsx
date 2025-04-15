import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SecureContactForm from "../components/SecureContactForm";
import ChatWidget from "../components/ChatWidget";
import { Mail, Phone, MapPin, Globe, Clock, Shield } from 'lucide-react';
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Contact Us - V Technologies</title>
        <meta name="description" content="Get in touch with V Technologies for IT infrastructure solutions, hardware, software, and consultancy services. Secure contact form available." />
        <meta property="og:title" content="Contact Us - V Technologies" />
        <meta property="og:description" content="Get in touch with V Technologies for IT infrastructure solutions and consultancy services." />
      </Helmet>
      
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-vtech-darkBlue to-vtech-blue text-white py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
              <p className="text-xl opacity-90">
                Get in touch with our team for any inquiries or to discuss your IT requirements.
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Information & Form */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-vtech-gray mb-6">Get in Touch</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Have questions or ready to start improving your IT infrastructure? Our team is here to help you with any inquiries.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="bg-vtech-blue bg-opacity-10 p-3 rounded-md mr-4">
                      <MapPin className="text-vtech-blue" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Our Office</h3>
                      <p className="text-gray-600">
                        V Technologies<br />
                        Pune, Maharashtra, India
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-vtech-blue bg-opacity-10 p-3 rounded-md mr-4">
                      <Mail className="text-vtech-blue" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Email Us</h3>
                      <p className="text-gray-600">
                        info@vtechnologies.com<br />
                        sales@vtechnologies.com
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-vtech-blue bg-opacity-10 p-3 rounded-md mr-4">
                      <Phone className="text-vtech-blue" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Call Us</h3>
                      <p className="text-gray-600">
                        +91 (Phone Number)<br />
                        +91 (Alternative Number)
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-vtech-blue bg-opacity-10 p-3 rounded-md mr-4">
                      <Clock className="text-vtech-blue" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Business Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 9:00 AM - 1:00 PM
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 bg-gray-50 rounded-lg border border-gray-100">
                  <div className="flex items-center mb-4">
                    <Shield className="text-vtech-blue mr-2" size={20} />
                    <h3 className="text-lg font-medium">Secure Communication</h3>
                  </div>
                  <p className="text-gray-600">
                    We take your privacy seriously. All communications through our contact form are encrypted and secure. We've implemented advanced anti-spam measures to ensure legitimate inquiries reach us.
                  </p>
                </div>
              </div>
              
              <div>
                <SecureContactForm />
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section - Placeholder */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Globe size={48} className="text-vtech-blue opacity-50 mx-auto mb-4" />
                <p className="text-gray-600">Map placeholder - Replace with actual Google Maps embed</p>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-2 text-center">
              © OpenStreetMap contributors
            </p>
          </div>
        </section>
        
        <ChatWidget />
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
