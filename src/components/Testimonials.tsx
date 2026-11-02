import React, { useState } from 'react';
import { Quote, Star, Zap } from 'lucide-react';

const reviews = [
  {
    name: 'Ahmed Al Mansoori',
    quote:
      "Training finally fits into my busy schedule. Every session has a clear purpose, and I'm feeling stronger and more confident each week.",
  },
  {
    name: 'Priya Menon',
    quote:
      'As a beginner, I felt nervous about lifting weights. The patient guidance and focus on proper technique helped me feel comfortable and enjoy my workouts.',
  },
  {
    name: 'Arjun Sharma',
    quote:
      'I used to train without a proper plan. Having a structured routine and someone keeping me accountable has made it much easier to stay consistent.',
  },
  {
    name: 'Omar Hassan',
    quote:
      "What I appreciate most is the personal attention. My workouts are adjusted to my progress, and I'm always challenged without feeling overwhelmed.",
  },
  {
    name: 'Vishal Nair',
    quote:
      'I used to change my workout whenever I saw something new online. Sticking to a plan felt boring at first, but seeing my lifts improve week by week finally convinced me.',
  },
  {
    name: 'Youssef Khalil',
    quote:
      "I ask a lot of questions, and I've never felt rushed through an answer. Understanding why I'm doing each exercise has made me much more confident training on my own too.",
  },
];

const ReviewCard: React.FC<{ review: (typeof reviews)[number]; hidden?: boolean }> = ({ review, hidden }) => (
  <div
    aria-hidden={hidden}
    className="w-[320px] sm:w-[380px] flex-shrink-0 border-2 border-white/15 p-8 bg-black relative"
  >
    <Quote className="absolute top-6 right-6 w-10 h-10 text-white/10" />

    <div className="flex gap-1 mb-5">
      {Array.from({ length: 5 }).map((_, s) => (
        <Star key={s} className="w-4 h-4 text-white fill-white" />
      ))}
    </div>

    <p className="text-white/90 text-base leading-relaxed mb-6 min-h-[140px]">"{review.quote}"</p>

    <div className="border-t border-white/15 pt-4">
      <h4 className="text-lg font-display text-white">{review.name}</h4>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  const [paused, setPaused] = useState(false);
  const track = [...reviews, ...reviews];

  return (
    <section id="testimonials" className="py-20 bg-black overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-hyrox-500/20 border border-hyrox-500/30 px-4 py-2 text-hyrox-400 text-sm font-bold uppercase tracking-widest mb-6">
            <Zap className="w-4 h-4" />
            Client Reviews
          </div>
          <h2 className="text-4xl md:text-5xl font-display text-white mb-4">
            Success <span className="text-hyrox-500">Stories</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">Real results from real clients.</p>
        </div>
      </div>

      <div
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
      >
        {/* Edge fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-black to-transparent z-10" />

        <div
          className="flex gap-6 w-max animate-marquee"
          style={{ animationPlayState: paused ? 'paused' : 'running' }}
        >
          {track.map((review, i) => (
            <ReviewCard key={i} review={review} hidden={i >= reviews.length} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
