
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Clients", path: "/clients" },
    { name: "Certificates", path: "/certificates" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#0A0F1F] shadow-lg">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center animate-fade-in">
            <Link to="/" onClick={closeMenu} className="hover-scale">
              <Logo />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1 lg:space-x-2">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm lg:text-base font-medium transition-all duration-300 animate-fade-in animate-delay-${index * 100} ${
                  location.pathname === link.path
                    ? "text-white bg-accent/80 hover:bg-accent"
                    : "text-white/80 hover:text-white hover:bg-accent/50"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-accent focus:outline-none transition-colors duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-base font-medium animate-fade-in animate-delay-${index * 100} ${
                    location.pathname === link.path
                      ? "text-white bg-accent/80"
                      : "text-white/80 hover:text-white hover:bg-accent/50"
                  }`}
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
