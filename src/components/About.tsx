//components/About.tsx
import React from 'react';
import trainingImg1 from './shared/assets/images/1.jpg'
import trainingImg2 from './shared/assets/images/2.jpg'
import trainingImg3 from './shared/assets/images/3.jpeg'
import trainingImg4 from './shared/assets/images/4.jpeg'


const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About <span className="text-gold-500">Me</span></h2>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Althaf Emir | Performance Coach | Founder of AE Build</h3>
            <p className="text-gold-500 italic mb-6">"You are the project."</p>
            <p className="text-white/80 mb-6 leading-relaxed">
              I'm not here to count your reps—I'm here to build your engine, elevate your strength, and help you perform at your absolute best. As a certified <span className="font-bold">Performance Coach</span> and HYROX athlete, I specialize in hybrid training systems that combine endurance, strength, and movement efficiency—designed for both competitors and everyday high-performers.
            </p>
            <p className="text-white/80 mb-6 leading-relaxed">
              Through <span className="font-bold">AE Build</span>, I coach people to unlock their athletic potential with structured programs, performance-driven strategy, and lifestyle accountability. Whether you're preparing for a HYROX event, looking to improve your aerobic engine, or just want to train with purpose—this isn't just fitness. It's performance coaching built around <span className="font-bold">you</span>.
            </p>
            <p className="text-white/80 mb-8 leading-relaxed">
              Let's build the most capable version of you—mentally and physically.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                "Certified Performance Coach",
                "REPS Category A Coach",
                "NSQF Level 4 Fitness Coach",
                "Trauma Response Certified"
              ].map((feature, index) => (
                <div key={index} className="flex items-center">
                  <span className="h-2 w-2 bg-gold-500 rounded-full mr-3"></span>
                  <span className="text-white">{feature}</span>
                </div>
              ))}
            </div>
            
            <button className="border-2 border-gold-500 text-white px-6 py-3 rounded-sm font-bold hover:bg-gold-500 hover:text-black transition-all duration-300">
              Learn More About Me
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-sm h-96">
                <img 
                  src={trainingImg1}
                  alt="Training session" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="overflow-hidden rounded-sm h-80">
                <img 
                  src={trainingImg2}
                  alt="Weight training" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="overflow-hidden rounded-sm h-64">
                <img 
                  src={trainingImg4}
                  alt="Training session" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="overflow-hidden rounded-sm h-96">
                <img 
                  src={trainingImg3}
                  alt="Fitness consultation" 
                  className="w-full h-full object-cover object-[10%_20%] hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;