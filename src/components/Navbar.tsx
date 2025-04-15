
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Logo />
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-vtech-gray"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
          </div>
        </div>
        
        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-2">
            <div className="flex flex-col space-y-3">
              <NavLinks mobile={true} />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

interface NavLinksProps {
  mobile?: boolean;
}

const NavLinks: React.FC<NavLinksProps> = ({ mobile = false }) => {
  const linkClasses = mobile
    ? "block py-2 px-1 text-vtech-gray hover:text-vtech-blue transition-colors"
    : "text-vtech-gray hover:text-vtech-blue transition-colors";

  return (
    <>
      <Link to="/" className={linkClasses}>Home</Link>
      <Link to="/about" className={linkClasses}>About Us</Link>
      <Link to="/services" className={linkClasses}>Services</Link>
      <Link to="/products" className={linkClasses}>Products</Link>
      <Link to="/clients" className={linkClasses}>Clients</Link>
      <Link to="/contact" className={`${linkClasses} ${!mobile ? 'bg-vtech-blue text-white hover:bg-vtech-darkBlue px-4 py-2 rounded' : ''}`}>
        Contact Us
      </Link>
    </>
  );
};

export default Navbar;
