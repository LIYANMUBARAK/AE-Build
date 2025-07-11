import React from 'react';
import { ArrowRight, Zap, Trophy, Clock, Users,Apple  } from 'lucide-react';
import HomePic2 from './shared/assets/images/HeroSection2.jpeg';

interface StatItem {
  value: string;
  label: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
}

const Hero: React.FC = () => {
  const stats: StatItem[] = [
    { value: '6+', label: 'Years Experience', icon: Clock },
    { value: '50+', label: 'Clients Trained', icon: Users },
    // { value: '15k+', label: 'Training Hours', icon: Zap },
        {value: "24/7", label: 'Nutrition Guidance', icon: Apple},

    { value: '100%', label: 'Dedication', icon: Trophy },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 bg-black overflow-hidden">
      {/* Simple background overlay */}
      <div className="absolute inset-0 bg-black/70 z-10"></div>

      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={HomePic2}
          alt="Fitness background" 
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      <div className="container mx-auto px-4 z-20 relative">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-yellow-500/20 border border-yellow-500/30 px-4 py-2 rounded-full text-yellow-400 text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            Elite Performance Coach
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
            Transform Your Body,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              Transform Your Life
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl font-light leading-relaxed">
            Ready to achieve your fitness goals? As your dedicated performance coach, I'll create a customized program that fits your lifestyle and helps you reach your full potential.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a 
              href="#programs" 
              className="group relative bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-8 py-4 rounded-xl font-bold hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 flex items-center justify-center"
            >
              <span className="flex items-center">
                View Programs 
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </span>
            </a>
            <a 
              href="#contact" 
              className="group relative border-2 border-yellow-500 text-white px-8 py-4 rounded-xl font-bold hover:text-black hover:bg-yellow-500 transition-all duration-300 flex items-center justify-center"
            >
              Free Consultation
            </a>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-500/10 border border-yellow-500/30 mb-4">
                    <IconComponent className="w-8 h-8 text-yellow-500" />
                  </div>
                  <p className="text-yellow-500 text-3xl md:text-4xl font-black mb-2">{stat.value}</p>
                  <p className="text-white/80 text-sm md:text-base font-medium">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

        {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="relative">
          <div className="h-16 w-10 rounded-full border-2 border-yellow-500/50 flex justify-center bg-black/20 backdrop-blur-sm">
            <div className="h-3 w-3 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full mt-3 animate-pulse"></div>
          </div>
          <div className="absolute -top-2 -left-2 w-14 h-20 rounded-full border border-yellow-500/20 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
