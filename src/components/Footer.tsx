import { Facebook, Instagram, Twitter, Youtube, Dumbbell, Mail, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="relative bg-gradient-to-b from-black via-gray-900 to-black border-t border-hyrox-400/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-hyrox-400 via-hyrox-600 to-hyrox-800"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_2rem_4rem,rgba(255,255,255,0.1),transparent)] animate-pulse"></div>
      </div>

      <div className="relative container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center group">
              <div className="relative">
                <Dumbbell className="text-hyrox-400 h-10 w-10 mr-3 transform group-hover:rotate-12 transition-transform duration-300" />
                {/* <div className="absolute -top-1 -right-1 w-3 h-3 bg-hyrox-400 rounded-full animate-pulse"></div> */}
              </div>
              <span className="text-white font-bold text-2xl">
                AE<span className="text-hyrox-400">BUILD</span>
              </span>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              Transforming lives through expert training, personalized nutrition, and unwavering commitment to your success.
            </p>
            
            <div className="flex space-x-4">
              {[
                { icon: <Facebook size={20} />, href: "#", color: "hover:bg-white hover:text-black" },
                { icon: <Instagram size={20} />, href: "#", color: "hover:bg-white hover:text-black" },
                { icon: <Twitter size={20} />, href: "#", color: "hover:bg-white hover:text-black" },
                { icon: <Youtube size={20} />, href: "#", color: "hover:bg-white hover:text-black" }
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
              <div className="absolute -bottom-2 left-0 w-8 h-1 bg-gradient-to-r from-hyrox-400 to-hyrox-600 rounded-full"></div>
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "#home" },
                { name: "Programs", href: "#programs" },
                { name: "About Us", href: "#about" },
                { name: "Testimonials", href: "#testimonials" },
                { name: "Pricing", href: "#pricing" },
                { name: "Contact", href: "#contact" }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-hyrox-400 transition-all duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-hyrox-400 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
        </div>
        
        {/* Contact Info Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-center text-gray-300">
              <div className="w-10 h-10 bg-gradient-to-r from-hyrox-400 to-hyrox-600 rounded-full flex items-center justify-center mr-3">
                <Mail className="w-5 h-5 text-black" />
              </div>
              <div>
                <div className="text-sm text-gray-400">Email Us</div>
                <a href="mailto:aebuild7@gmail.com" className="font-semibold hover:text-white transition-colors duration-300">aebuild7@gmail.com</a>
              </div>
            </div>
            
            <div className="flex items-center text-gray-300">
              <div className="w-10 h-10 bg-gradient-to-r from-hyrox-400 to-hyrox-600 rounded-full flex items-center justify-center mr-3">
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
            <Heart className="w-4 h-4 text-white mx-1 animate-pulse" /> 
            in Dubai. All rights reserved.
          </p>
        </div>
      </div>
      
      {/* Floating Elements
      <div className="absolute top-10 left-10 w-20 h-20 bg-hyrox-400/5 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-hyrox-600/5 rounded-full blur-xl animate-pulse delay-1000"></div> */}
    </footer>
  );
};

export default Footer;