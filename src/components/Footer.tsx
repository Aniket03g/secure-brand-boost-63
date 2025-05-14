
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin, Lock, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0F1F] text-white border-t border-border/40">
      <div className="container mx-auto pt-16 pb-8 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="animate-fade-in">
            <div className="text-primary text-xl font-bold mb-4">V TECHNOLOGIES</div>
            <p className="text-sm leading-relaxed opacity-90 mb-6">
              A System Integration company providing global IT infrastructure solutions, hardware, software, and consultancy services based in Pune, India.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com" className="text-white/80 hover:text-accent transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="text-white/80 hover:text-accent transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" className="text-white/80 hover:text-accent transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in animate-delay-200">
            <h3 className="text-lg font-medium mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-white/90 hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-white/90 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-white/90 hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/products" className="text-white/90 hover:text-primary transition-colors">Products</Link></li>
              <li><Link to="/clients" className="text-white/90 hover:text-primary transition-colors">Clients</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="animate-fade-in animate-delay-300">
            <h3 className="text-lg font-medium mb-4 text-primary">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/it-infrastructure" className="text-white/90 hover:text-primary transition-colors">IT Infrastructure</Link></li>
              <li><Link to="/services/it-consultancy" className="text-white/90 hover:text-primary transition-colors">IT Consultancy</Link></li>
              <li><Link to="/services/hardware-solutions" className="text-white/90 hover:text-primary transition-colors">Hardware Solutions</Link></li>
              <li><Link to="/services/security-services" className="text-white/90 hover:text-primary transition-colors">Security Services</Link></li>
              <li><Link to="/services/cloud-services" className="text-white/90 hover:text-primary transition-colors">Cloud Services</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="animate-fade-in animate-delay-500">
            <h3 className="text-lg font-medium mb-4 text-primary">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin size={18} className="mr-2 mt-0.5 flex-shrink-0 text-accent" />
                <span className="text-white/90">Pune, India</span>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0 text-accent" />
                <span className="text-white/90">+91 (Contact Number)</span>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0 text-accent" />
                <span className="text-white/90">info@vtechnologies.com</span>
              </div>
              <div className="flex items-center text-accent">
                <Shield size={18} className="mr-2 flex-shrink-0" />
                <span>Secure Contact</span>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-white/80 mb-4 md:mb-0">
            © {currentYear} V Technologies. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <Link to="/privacy-policy" className="text-white/80 hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-white/80 hover:text-primary transition-colors">Terms of Service</Link>
            <div className="flex items-center text-accent">
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
