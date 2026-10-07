import React from 'react';
import { ArrowRight, Zap, Trophy, Clock, Users,Apple  } from 'lucide-react';
import HomePic2 from './shared/assets/images/HeroSection2-web.jpg';

interface StatItem {
  value: string;
  label: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
}

const Hero: React.FC = () => {
  const stats: StatItem[] = [
    { value: '8+', label: 'Years Experience', icon: Clock },
    { value: '400+', label: 'Clients Trained', icon: Users },
    { value: '15k+', label: 'Training Hours', icon: Zap },
        {value: "24/7", label: 'Nutrition Guidance', icon: Apple},

    // { value: '100%', label: 'Dedication', icon: Trophy },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 bg-black overflow-hidden">
      {/* Background overlay: darker on mobile (text sits on the photo), gradient from the left on desktop */}
      <div className="absolute inset-0 bg-black/70 md:bg-transparent md:bg-gradient-to-r md:from-black/85 md:via-black/50 md:to-transparent z-10"></div>

      {/* Desktop: blurred copy of the photo fills the whole section so the left side isn't flat black */}
      <div className="hidden md:block absolute inset-0 z-0 overflow-hidden">
        <img
          src={HomePic2}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-[67%_30%] scale-110 blur-2xl opacity-40"
        />
      </div>

      {/* Background image: full-bleed on mobile, right side on desktop with a soft left edge */}
      <div className="absolute inset-0 md:left-auto md:w-[60%] z-0 hero-photo-fade">
        <img
          src={HomePic2}
          alt="Fitness background"
          className="w-full h-full object-cover object-[67%_30%] opacity-60 md:opacity-90"
        />
      </div>

      {/* Bottom fade into the next section */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-black z-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 z-20 relative">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-hyrox-500/20 border border-hyrox-500/40 px-4 py-2 text-hyrox-400 text-sm font-bold uppercase tracking-widest mb-6">
            <Zap className="w-4 h-4" />
            Elite Performance Coach
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display text-white leading-none mb-6">
            Transform Your Body,{' '}
            <span className="text-hyrox-500">
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
              className="group relative bg-hyrox-500 text-black px-8 py-4 font-bold uppercase tracking-wide hover:bg-hyrox-600 transition-all duration-300 flex items-center justify-center border-2 border-hyrox-500"
            >
              <span className="flex items-center">
                View Programs
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </span>
            </a>
            <a
              href="/apply"
              className="group relative border-2 border-white text-white px-8 py-4 font-bold uppercase tracking-wide hover:text-black hover:bg-white transition-all duration-300 flex items-center justify-center"
            >
              Apply Now
            </a>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center border-l-2 border-hyrox-500/40 pl-4">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-hyrox-500/10 border border-hyrox-500/40 mb-4">
                    <IconComponent className="w-7 h-7 text-hyrox-500" />
                  </div>
                  <p className="text-white text-3xl md:text-4xl font-display mb-2">{stat.value}</p>
                  <p className="text-white/60 text-xs md:text-sm font-semibold uppercase tracking-wide">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

        {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="relative">
          <div className="h-16 w-10 rounded-full border-2 border-hyrox-500/50 flex justify-center bg-black/20 backdrop-blur-sm">
            <div className="h-3 w-3 bg-hyrox-500 rounded-full mt-3 animate-pulse"></div>
          </div>
          <div className="absolute -top-2 -left-2 w-14 h-20 rounded-full border border-hyrox-500/20 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
