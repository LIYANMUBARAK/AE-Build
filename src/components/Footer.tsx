import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Dumbbell } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gold-500/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <Dumbbell className="text-gold-500 h-8 w-8 mr-2" />
              <span className="text-white font-bold text-xl">AE<span className="text-gold-500">BUILD</span></span>
            </div>
            <p className="text-white/70 mb-6">
              Transforming bodies and lives through expert training, nutrition guidance, and personalized fitness programs.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <Facebook size={20} />, href: "#" },
                { icon: <Instagram size={20} />, href: "#" },
                { icon: <Twitter size={20} />, href: "#" },
                { icon: <Youtube size={20} />, href: "#" }
              ].map((social, index) => (
                <a 
                  key={index} 
                  href={social.href} 
                  className="bg-gray-900 text-white hover:text-gold-500 h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "#home" },
                { name: "Programs", href: "#programs" },
                { name: "About Us", href: "#about" },
                { name: "Testimonials", href: "#testimonials" },
                { name: "Pricing", href: "#pricing" },
                { name: "Blog", href: "#blog" },
                { name: "Contact", href: "#contact" }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-white/70 hover:text-gold-500 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Our Programs</h4>
            <ul className="space-y-3">
              {[
                { name: "Personal Training", href: "#programs" },
                { name: "Group Fitness", href: "#programs" },
                { name: "Nutrition Coaching", href: "#programs" },
                { name: "Weight Loss", href: "#programs" },
                { name: "Strength & Conditioning", href: "#programs" },
                { name: "Corporate Wellness", href: "#programs" }
              ].map((program, index) => (
                <li key={index}>
                  <a 
                    href={program.href} 
                    className="text-white/70 hover:text-gold-500 transition-colors duration-300"
                  >
                    {program.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-white/70 mb-4">
              Subscribe to our newsletter for the latest fitness tips and exclusive offers.
            </p>
            <div className="flex mb-4">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-gray-900 border border-white/20 text-white px-4 py-2 rounded-sm focus:outline-none focus:border-gold-500 flex-grow"
              />
              <button className="bg-gold-500 text-black px-4 py-2 rounded-sm font-bold hover:bg-gold-600 transition-colors duration-300 ml-2">
                Send
              </button>
            </div>
            <p className="text-white/50 text-sm">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-white/50">
            &copy; {new Date().getFullYear()} AE Build. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;