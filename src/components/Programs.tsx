import React from 'react';
import { Zap } from 'lucide-react';

const programs = [
  'Fat Loss & Body Transformation',
  'Muscle Building & Strength',
  'Hybrid Performance',
  'HYROX Race Preparation',
  'Running Performance',
  'Athletic Development',
  'Mobility & Recovery',
];

const Programs: React.FC = () => {
  return (
    <section id="programs" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-hyrox-500/20 border border-hyrox-500/30 px-4 py-2 text-hyrox-400 text-sm font-bold uppercase tracking-widest mb-6">
            <Zap className="w-4 h-4" />
            Choose Your Goal
          </div>
          <h2 className="text-4xl md:text-5xl font-display text-white mb-4">
            Training <span className="text-hyrox-500">Programs</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Choose your goal. Your training plan will be customised to you.
          </p>
        </div>

        <div className="max-w-4xl mx-auto border-t-2 border-white/15">
          {programs.map((program, index) => (
            <div
              key={program}
              className="group flex items-baseline gap-6 md:gap-10 py-6 border-b-2 border-white/15 hover:border-white transition-colors duration-300"
            >
              <span className="font-display text-3xl md:text-4xl text-white/30 group-hover:text-white transition-colors duration-300 w-12 md:w-16 flex-shrink-0">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="font-display text-2xl md:text-4xl text-white leading-tight">{program}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
