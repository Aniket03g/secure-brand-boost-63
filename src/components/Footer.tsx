import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin, Lock, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-vtech-darkBlue text-white">
      <div className="container mx-auto pt-10 pb-6 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <p className="mt-4 text-sm leading-relaxed opacity-80">
              A System Integration company providing global IT infrastructure solutions, hardware, software, and consultancy services based in Pune, India.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com" className="text-white hover:text-vtech-lightBlue" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="text-white hover:text-vtech-lightBlue" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" className="text-white hover:text-vtech-lightBlue" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="opacity-80 hover:opacity-100 hover:text-vtech-lightBlue transition-colors">Home</Link></li>
              <li><Link to="/about" className="opacity-80 hover:opacity-100 hover:text-vtech-lightBlue transition-colors">About Us</Link></li>
              <li><Link to="/services" className="opacity-80 hover:opacity-100 hover:text-vtech-lightBlue transition-colors">Services</Link></li>
              <li><Link to="/products" className="opacity-80 hover:opacity-100 hover:text-vtech-lightBlue transition-colors">Products</Link></li>
              <li><Link to="/clients" className="opacity-80 hover:opacity-100 hover:text-vtech-lightBlue transition-colors">Clients</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-medium mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/infrastructure" className="opacity-80 hover:opacity-100 hover:text-vtech-lightBlue transition-colors">IT Infrastructure</Link></li>
              <li><Link to="/services/consulting" className="opacity-80 hover:opacity-100 hover:text-vtech-lightBlue transition-colors">IT Consultancy</Link></li>
              <li><Link to="/services/automation" className="opacity-80 hover:opacity-100 hover:text-vtech-lightBlue transition-colors">Automation Solutions</Link></li>
              <li><Link to="/services/security" className="opacity-80 hover:opacity-100 hover:text-vtech-lightBlue transition-colors">Security Services</Link></li>
              <li><Link to="/services/outsourcing" className="opacity-80 hover:opacity-100 hover:text-vtech-lightBlue transition-colors">IT Outsourcing</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-medium mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin size={18} className="mr-2 mt-0.5 flex-shrink-0" />
                <span className="opacity-80">Pune, India</span>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <span className="opacity-80">+91 (Contact Number)</span>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <span className="opacity-80">info@vtechnologies.com</span>
              </div>
              <div className="flex items-center text-vtech-lightBlue">
                <Shield size={18} className="mr-2 flex-shrink-0" />
                <span>Secure Contact</span>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 my-6" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm opacity-80 mb-4 md:mb-0">
            © {currentYear} V Technologies. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <Link to="/privacy-policy" className="opacity-80 hover:opacity-100 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="opacity-80 hover:opacity-100 transition-colors">Terms of Service</Link>
            <div className="flex items-center text-vtech-lightBlue">
              <Lock size={16} className="mr-1" />
              <span>Secured Site</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
