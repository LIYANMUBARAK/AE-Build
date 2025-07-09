import React from 'react';
import { ArrowRight, Zap, Trophy, Clock, Users } from 'lucide-react';
import HomePic from './shared/assets/images/HeroSection.jpeg'
import HomePic2 from './shared/assets/images/HeroSection2.jpeg'

interface StatItem {
  value: string;
  label: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
}

const Hero: React.FC = () => {
  const stats: StatItem[] = [
    { value: '10+', label: 'Years Experience', icon: Clock },
    { value: '500+', label: 'Clients Trained', icon: Users },
    { value: '15k+', label: 'Training Hours', icon: Zap },
    { value: '100%', label: 'Dedication', icon: Trophy }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 bg-black overflow-hidden">
      {/* Dynamic background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black/80 to-black/90 z-10"></div>
      
      {/* Animated gradient overlay for depth */}
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-transparent via-yellow-500/10 to-transparent animate-pulse"></div>
      
      {/* Background image */}
      <div className="absolute inset-0 z-0 transform scale-105 transition-transform duration-1000">
        <img 
          src={HomePic2}
          alt="Fitness background" 
          className="w-full h-full object-cover opacity-60 filter brightness-90 contrast-110"
        />
      </div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 z-5">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-500/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 z-20 relative">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-yellow-500/20 backdrop-blur-sm border border-yellow-500/30 px-4 py-2 rounded-full text-yellow-400 text-sm font-medium mb-6">
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
              className="group relative overflow-hidden bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-8 py-4 rounded-xl font-bold hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 flex items-center justify-center transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/30"
            >
              <span className="relative z-10 flex items-center">
                View Programs 
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </span>
            </a>
            <a 
              href="#contact" 
              className="group relative overflow-hidden border-2 border-yellow-500 text-white px-8 py-4 rounded-xl font-bold hover:text-black transition-all duration-300 flex items-center justify-center transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20 hover:bg-yellow-500"
            >
              <span className="relative z-10">Free Consultation</span>
            </a>
          </div>
          
          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 border border-yellow-500/30 backdrop-blur-sm mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-8 h-8 text-yellow-500" />
                  </div>
                  <p className="text-yellow-500 text-3xl md:text-4xl font-black mb-2 group-hover:text-yellow-400 transition-colors">{stat.value}</p>
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
      
      {/* Floating elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-yellow-500/10 to-transparent rounded-full blur-xl animate-pulse hidden md:block"></div>
      <div className="absolute bottom-32 left-20 w-24 h-24 bg-gradient-to-br from-yellow-500/10 to-transparent rounded-full blur-xl animate-pulse hidden md:block" style={{animationDelay: '1s'}}></div>
    </section>
  );
};

export default Hero;