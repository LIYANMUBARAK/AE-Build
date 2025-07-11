import React, { useState, useEffect } from 'react';
import { Menu, X, Dumbbell, Zap, ArrowRight } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', href: '#home' },
    { name: 'Programs', href: '#programs' },
    { name: 'About', href: '#about' },
    // { name: 'Testimonials', href: '#testimonials' },
    // { name: 'Pricing', href: '#pricing' },
    // { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-md shadow-xl border-b border-yellow-400/20 py-2' 
          : 'bg-gradient-to-b from-black/80 via-black/50 to-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center group cursor-pointer">
            <div className="relative">
              <Dumbbell className="text-yellow-400 h-10 w-10 mr-3 transform group-hover:rotate-12 transition-all duration-300" />
              {/* <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div> */}
              {/* <Zap className="absolute -bottom-1 -left-1 w-4 h-4 text-orange-400 animate-pulse delay-500" /> */}
            </div>
            <a href = '/'>
            <span className="text-white font-bold text-2xl transition-all duration-300 group-hover:scale-105">
              AE<span className="text-yellow-400">BUILD</span>
            </span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a 
                key={item.name}
                href={item.href}
                className="relative text-white hover:text-yellow-400 transition-all duration-300 font-medium text-lg group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            
            <div className="flex items-center space-x-4">
              <a href="/#contact" className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-full font-bold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 flex items-center group">
              <span>Book Now</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </nav>

          {/* Mobile Navigation Toggle */}
          <button 
            className="lg:hidden text-white hover:text-yellow-400 transition-all duration-300 p-2 rounded-full hover:bg-white/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-500 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-black/95 backdrop-blur-md rounded-2xl mt-4 border border-yellow-400/20">
            <div className="flex flex-col space-y-2 p-6">
              {navigationItems.map((item, index) => (
                <a 
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-yellow-400 transition-all duration-300 font-medium py-3 px-4 rounded-lg hover:bg-white/10 flex items-center group"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-yellow-400 transition-all duration-300 mr-0 group-hover:mr-3"></span>
                  {item.name}
                </a>
              ))}
              
              <div className="pt-4 border-t border-white/10">
                <button 
                  className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-full font-bold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      {isScrolled && (
        <div className="absolute top-2 right-20 w-16 h-16 bg-yellow-400/5 rounded-full blur-xl animate-pulse"></div>
      )}
    </header>
  );
};

export default Header;