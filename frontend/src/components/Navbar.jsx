import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { restaurantInfo } from '../data/mockData';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-3xl font-bold" style={{ fontFamily: "'Crimson Text', serif" }}>
              <span className="text-black">Angara</span>
              <span className="text-2xl ml-2 text-gray-600">{restaurantInfo.nameHindi}</span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-black transition-colors font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-black transition-colors font-medium">
              About
            </button>
            <button onClick={() => scrollToSection('menu')} className="text-gray-700 hover:text-black transition-colors font-medium">
              Menu
            </button>
            <button onClick={() => scrollToSection('reviews')} className="text-gray-700 hover:text-black transition-colors font-medium">
              Reviews
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-black transition-colors font-medium">
              Gallery
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-black transition-colors font-medium">
              Contact
            </button>
            <a href={`tel:${restaurantInfo.phone}`} className="btn-primary flex items-center gap-2">
              <Phone size={18} />
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-black transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-black transition-colors font-medium py-2">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-black transition-colors font-medium py-2">
                About
              </button>
              <button onClick={() => scrollToSection('menu')} className="text-gray-700 hover:text-black transition-colors font-medium py-2">
                Menu
              </button>
              <button onClick={() => scrollToSection('reviews')} className="text-gray-700 hover:text-black transition-colors font-medium py-2">
                Reviews
              </button>
              <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-black transition-colors font-medium py-2">
                Gallery
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-black transition-colors font-medium py-2">
                Contact
              </button>
              <a href={`tel:${restaurantInfo.phone}`} className="btn-primary flex items-center justify-center gap-2 mt-2">
                <Phone size={18} />
                Call Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
