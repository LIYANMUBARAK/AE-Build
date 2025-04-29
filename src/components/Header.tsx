import React, { useState, useEffect } from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black bg-opacity-95 shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Dumbbell className="text-gold-500 h-8 w-8 mr-2" />
            <span className="text-white font-bold text-xl">AE<span className="text-gold-500">BUILD</span></span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['Home', 'Programs', 'About', 'Testimonials', 'Pricing', 'Blog', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-gold-500 transition-colors duration-300 font-medium"
              >
                {item}
              </a>
            ))}
            <button className="bg-gold-500 text-black px-4 py-2 rounded-sm font-bold hover:bg-gold-600 transition-colors duration-300">
              Book Now
            </button>
          </nav>

          {/* Mobile Navigation Toggle */}
          <button 
            className="md:hidden text-white hover:text-gold-500 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black bg-opacity-95 border-t border-gold-500/30">
            <div className="flex flex-col space-y-4 p-4">
              {['Home', 'Programs', 'About', 'Testimonials', 'Pricing', 'Blog', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white hover:text-gold-500 transition-colors duration-300 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="bg-gold-500 text-black px-4 py-2 rounded-sm font-bold hover:bg-gold-600 transition-colors duration-300 mt-2">
                Book Now
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;