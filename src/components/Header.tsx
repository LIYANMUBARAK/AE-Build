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
    { name: 'Home', href: '/#home' },
    { name: 'Programs', href: '/#programs' },
    { name: 'Pricing', href: '/#pricing' },
    { name: 'About', href: '/#about' },
    { name: 'Contact', href: '/#contact' }
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-black/95 backdrop-blur-md shadow-xl border-b border-hyrox-500/30 py-2'
          : 'bg-gradient-to-b from-black/80 via-black/50 to-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center group cursor-pointer">
            <div className="relative">
              <Dumbbell className="text-hyrox-500 h-10 w-10 mr-3 transform group-hover:rotate-12 transition-all duration-300" />
            </div>
            <a href = '/'>
            <span className="text-white font-display text-2xl tracking-wide transition-all duration-300 group-hover:scale-105">
              AE<span className="text-hyrox-500">BUILD</span>
            </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-white hover:text-hyrox-400 transition-all duration-300 font-semibold uppercase tracking-wide text-sm group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-hyrox-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}

            <div className="flex items-center space-x-4">
              <a href="/apply" className="bg-hyrox-500 text-black px-6 py-3 font-bold uppercase tracking-wide text-sm hover:bg-hyrox-600 transition-all duration-300 flex items-center group border-2 border-hyrox-500">
              <span>Book Now</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </nav>

          {/* Mobile Navigation Toggle */}
          <button
            className="lg:hidden text-white hover:text-hyrox-400 transition-all duration-300 p-2 hover:bg-white/10"
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
          <div className="bg-black/95 backdrop-blur-md mt-4 border border-hyrox-500/20">
            <div className="flex flex-col space-y-2 p-6">
              {navigationItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-hyrox-400 transition-all duration-300 font-semibold uppercase tracking-wide py-3 px-4 hover:bg-white/10 flex items-center group"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-hyrox-500 transition-all duration-300 mr-0 group-hover:mr-3"></span>
                  {item.name}
                </a>
              ))}

              <div className="pt-4 border-t border-white/10">
                <a
                  href="/apply"
                  className="w-full bg-hyrox-500 text-black px-6 py-3 font-bold uppercase tracking-wide hover:bg-hyrox-600 transition-all duration-300 flex items-center justify-center group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      {isScrolled && (
        <div className="absolute top-2 right-20 w-16 h-16 bg-hyrox-500/5 rounded-full blur-xl animate-pulse"></div>
      )}
    </header>
  );
};

export default Header;