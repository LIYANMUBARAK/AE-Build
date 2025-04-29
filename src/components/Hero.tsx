import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 bg-black">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black/80 z-10"></div>
      
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1600" 
          alt="Fitness background" 
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      
      <div className="container mx-auto px-4 z-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Transform Your Body, <span className="text-gold-500">Transform Your Life</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
            Ready to achieve your fitness goals? As your dedicated performance coach, I'll create a customized program that fits your lifestyle and helps you reach your full potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#programs" 
              className="bg-gold-500 text-black px-6 py-3 rounded-sm font-bold hover:bg-gold-600 transition-all duration-300 flex items-center justify-center group"
            >
              View Programs 
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </a>
            <a 
              href="#contact" 
              className="border-2 border-gold-500 text-white px-6 py-3 rounded-sm font-bold hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
            >
              Free Consultation
            </a>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '10+', label: 'Years Experience' },
              { value: '500+', label: 'Clients Trained' },
              { value: '15k+', label: 'Training Hours' },
              { value: '100%', label: 'Dedication' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-gold-500 text-3xl md:text-4xl font-bold">{stat.value}</p>
                <p className="text-white/80 text-sm md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="h-14 w-8 rounded-full border-2 border-gold-500 flex justify-center">
          <div className="h-2 w-2 bg-gold-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;