import React, { useState } from 'react';
import { Facebook, Instagram, Twitter, Youtube, Dumbbell, Mail, MapPin, Phone, Send, Heart } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-black via-gray-900 to-black border-t border-yellow-400/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_2rem_4rem,rgba(255,255,255,0.1),transparent)] animate-pulse"></div>
      </div>

      <div className="relative container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center group">
              <div className="relative">
                <Dumbbell className="text-yellow-400 h-10 w-10 mr-3 transform group-hover:rotate-12 transition-transform duration-300" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
              </div>
              <span className="text-white font-bold text-2xl">
                AE<span className="text-yellow-400">BUILD</span>
              </span>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              Transforming lives through expert training, personalized nutrition, and unwavering commitment to your success.
            </p>
            
            <div className="flex space-x-4">
              {[
                { icon: <Facebook size={20} />, href: "#", color: "hover:bg-blue-600" },
                { icon: <Instagram size={20} />, href: "#", color: "hover:bg-pink-600" },
                { icon: <Twitter size={20} />, href: "#", color: "hover:bg-blue-400" },
                { icon: <Youtube size={20} />, href: "#", color: "hover:bg-red-600" }
              ].map((social, index) => (
                <a 
                  key={index} 
                  href={social.href} 
                  className={`group bg-gray-800 text-white h-12 w-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${social.color} hover:shadow-lg`}
                >
                  <div className="transform group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-xl mb-6 relative">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-8 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
            </h4>
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
                    className="text-gray-300 hover:text-yellow-400 transition-all duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-yellow-400 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Programs */}
          <div>
            <h4 className="text-white font-bold text-xl mb-6 relative">
              Our Programs
              <div className="absolute -bottom-2 left-0 w-8 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Personal Training", href: "#programs", icon: "🏋️" },
                { name: "Group Fitness", href: "#programs", icon: "👥" },
                { name: "Nutrition Coaching", href: "#programs", icon: "🥗" },
                { name: "Weight Loss", href: "#programs", icon: "⚖️" },
                { name: "Strength & Conditioning", href: "#programs", icon: "💪" },
                { name: "HYROX Training", href: "#programs", icon: "🏃" }
              ].map((program, index) => (
                <li key={index}>
                  <a 
                    href={program.href} 
                    className="text-gray-300 hover:text-yellow-400 transition-all duration-300 flex items-center group"
                  >
                    <span className="text-lg mr-3 group-hover:scale-110 transition-transform duration-300">
                      {program.icon}
                    </span>
                    {program.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold text-xl mb-6 relative">
              Stay Connected
              <div className="absolute -bottom-2 left-0 w-8 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
            </h4>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Get the latest fitness tips, exclusive offers, and motivation delivered straight to your inbox.
            </p>
            
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="relative">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email" 
                  className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-yellow-400 transition-all duration-300 pr-12"
                />
                <Mail className="absolute right-3 top-3.5 text-gray-400 w-5 h-5" />
              </div>
              
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-lg font-bold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
              >
                <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                Subscribe
              </button>
            </form>
            
            {isSubscribed && (
              <div className="mt-4 p-3 bg-green-900/30 border border-green-400 rounded-lg text-green-400 text-sm flex items-center animate-fadeIn">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                Thank you for subscribing!
              </div>
            )}
            
            <p className="text-gray-400 text-sm mt-4">
              We respect your privacy. Unsubscribe anytime with one click.
            </p>
          </div>
        </div>
        
        {/* Contact Info Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center text-gray-300">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mr-3">
                <Phone className="w-5 h-5 text-black" />
              </div>
              <div>
                <div className="text-sm text-gray-400">Call Us</div>
                <div className="font-semibold">+971 56 597 4353</div>
              </div>
            </div>
            
            <div className="flex items-center text-gray-300">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mr-3">
                <Mail className="w-5 h-5 text-black" />
              </div>
              <div>
                <div className="text-sm text-gray-400">Email Us</div>
                <div className="font-semibold">info@aebuild.com</div>
              </div>
            </div>
            
            <div className="flex items-center text-gray-300">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mr-3">
                <MapPin className="w-5 h-5 text-black" />
              </div>
              <div>
                <div className="text-sm text-gray-400">Visit Us</div>
                <div className="font-semibold">Dubai, UAE</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            &copy; {new Date().getFullYear()} AE Build. Made with 
            <Heart className="w-4 h-4 text-red-500 mx-1 animate-pulse" /> 
            in Dubai. All rights reserved.
          </p>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400/5 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-orange-500/5 rounded-full blur-xl animate-pulse delay-1000"></div>
    </footer>
  );
};

export default Footer;