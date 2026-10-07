import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star, Zap } from 'lucide-react';

// Replace these placeholders with real client reviews (with the client's permission).
const reviews = [
  {
    name: 'Client Name',
    program: 'HYROX Race Preparation',
    quote: 'Add a real client review here — what they achieved and what it was like training with Althaf.',
    result: 'e.g. First HYROX finished in 1:25',
  },
  {
    name: 'Client Name',
    program: 'Fat Loss & Body Transformation',
    quote: 'Add a real client review here — what they achieved and what it was like training with Althaf.',
    result: 'e.g. Lost 8 kg in 12 weeks',
  },
  {
    name: 'Client Name',
    program: 'Muscle Building & Strength',
    quote: 'Add a real client review here — what they achieved and what it was like training with Althaf.',
    result: 'e.g. Deadlift up 40 kg',
  },
  {
    name: 'Client Name',
    program: 'Running Performance',
    quote: 'Add a real client review here — what they achieved and what it was like training with Althaf.',
    result: 'e.g. 10K personal best by 6 minutes',
  },
];

const AUTOPLAY_MS = 6000;

const Testimonials: React.FC = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const go = (delta: number) => setActive((i) => (i + delta + reviews.length) % reviews.length);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => go(1), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, active]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
    touchStartX.current = null;
  };

  return (
    <section id="testimonials" className="py-20 bg-black">
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

        <div
          className="max-w-4xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div className="overflow-hidden border-2 border-white/15">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {reviews.map((review, i) => (
                <div key={i} className="w-full flex-shrink-0 p-8 md:p-12 relative" aria-hidden={i !== active}>
                  <Quote className="absolute top-6 right-6 w-16 h-16 text-white/10" />

                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="w-5 h-5 text-white fill-white" />
                    ))}
                  </div>

                  <p className="text-white/90 text-lg md:text-2xl leading-relaxed mb-8">"{review.quote}"</p>

                  <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 border-t border-white/15 pt-6">
                    <div>
                      <h4 className="text-xl font-display text-white">{review.name}</h4>
                      <p className="text-white/50 text-sm uppercase tracking-wide">{review.program}</p>
                    </div>
                    <div className="bg-white text-black px-4 py-2 text-sm font-bold uppercase tracking-wide self-start sm:self-auto">
                      {review.result}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between mt-6">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous review"
              className="w-12 h-12 border-2 border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Go to review ${i + 1}`}
                  className={`h-1 transition-all duration-300 ${i === active ? 'w-10 bg-white' : 'w-5 bg-white/25 hover:bg-white/50'}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next review"
              className="w-12 h-12 border-2 border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
