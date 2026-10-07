//components/Pricing.tsx

import React, { useState } from 'react';
import { Check, Zap } from 'lucide-react';


type Duration = {
  duration: string;
  months: number;
  total: number;
  perMonth: number;
  save: number | null;
};

type Tier = {
  name: string;
  tagline: string;
  durations: Duration[];
  features: string[];
  highlighted?: boolean;
};

const tiers: Tier[] = [
  {
    name: "Gold",
    tagline: "Structured online coaching to build momentum.",
    durations: [
      { duration: "1 month", months: 1, total: 599, perMonth: 599, save: null },
      { duration: "2 months", months: 2, total: 1099, perMonth: 550, save: 99 },
      { duration: "4 months", months: 4, total: 2099, perMonth: 525, save: 297 },
      { duration: "8 months", months: 8, total: 3799, perMonth: 475, save: 993 },
    ],
    features: [
      "Custom training plan",
      "Goal-based programming",
      "Nutrition guidance",
      "WhatsApp check-ins",
    ],
  },
  {
    name: "Platinum",
    tagline: "Full performance coaching with daily support.",
    durations: [
      { duration: "1 month", months: 1, total: 999, perMonth: 999, save: null },
      { duration: "2 months", months: 2, total: 1849, perMonth: 925, save: 149 },
      { duration: "4 months", months: 4, total: 3499, perMonth: 875, save: 497 },
      { duration: "8 months", months: 8, total: 6399, perMonth: 800, save: 1593 },
    ],
    features: [
      "Everything in Gold",
      "Weekly 1:1 feedback review",
      "Video form reviews",
      "Daily WhatsApp access",
      "Advanced nutrition & macro coaching",
    ],
    highlighted: true,
  },
];

const PricingTier: React.FC<{ tier: Tier }> = ({ tier }) => {
  const [selected, setSelected] = useState(tier.durations.length - 1);
  const active = tier.durations[selected];

  return (
    <div
      className={`relative bg-gray-950 overflow-hidden transition-all duration-300 ${
        tier.highlighted
          ? 'border-2 border-hyrox-500 shadow-2xl shadow-hyrox-500/10'
          : 'border-2 border-white/10 hover:border-white/20'
      }`}
    >
      {tier.highlighted && (
        <div className="bg-hyrox-500 text-black text-xs font-bold uppercase tracking-widest text-center py-2 flex items-center justify-center gap-1">
          <Zap className="w-3 h-3" />
          Most Committed
        </div>
      )}

      <div className="p-8">
        <h3 className="text-3xl font-display text-white mb-1">{tier.name}</h3>
        <p className="text-white/60 mb-6">{tier.tagline}</p>

        {/* Duration selector */}
        <div className="grid grid-cols-4 gap-2 mb-6">
          {tier.durations.map((d, i) => (
            <button
              key={d.duration}
              onClick={() => setSelected(i)}
              className={`relative py-2 text-xs font-bold uppercase tracking-wide transition-all duration-200 border-2 ${
                selected === i
                  ? 'bg-hyrox-500 border-hyrox-500 text-black'
                  : 'border-white/15 text-white/60 hover:border-white/40 hover:text-white'
              }`}
            >
              {d.months}mo
              {d.save && (
                <span className="absolute -top-2 -right-2 bg-white text-black text-[9px] font-bold px-1 leading-tight">
                  -{d.save}
                </span>
              )}
            </button>
          ))}
        </div>

        <div className="mb-6">
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-display text-white">AED {active.perMonth}</span>
            <span className="text-white/50">/month</span>
          </div>
          <p className="text-white/50 text-sm mt-1">
            AED {active.total.toLocaleString()} total for {active.duration}
            {active.save ? ` — you save AED ${active.save.toLocaleString()}` : ''}
          </p>
        </div>

        <ul className="space-y-3 mb-8">
          {tier.features.map((feature) => (
            <li key={feature} className="flex items-start">
              <Check className="text-hyrox-500 h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-white/90">{feature}</span>
            </li>
          ))}
        </ul>

        <a
          href="/apply"
          className={`block text-center w-full py-3 font-bold uppercase tracking-wide transition-colors duration-300 ${
            tier.highlighted
              ? 'bg-hyrox-500 text-black hover:bg-hyrox-600'
              : 'bg-white/10 text-white hover:bg-white/20'
          }`}
        >
          Choose {tier.name}
        </a>
      </div>
    </div>
  );
};

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-hyrox-500/20 border border-hyrox-500/30 px-4 py-2 text-hyrox-400 text-sm font-bold uppercase tracking-widest mb-6">
            <Zap className="w-4 h-4" />
            Online Coaching
          </div>
          <h2 className="text-4xl md:text-5xl font-display text-white mb-4">
            Coaching <span className="text-hyrox-500">Plans</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Pick a tier, then choose how many months you want to commit to — longer plans cost less per month.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {tiers.map((tier) => (
            <PricingTier key={tier.name} tier={tier} />
          ))}
        </div>

        <div className="mt-20 bg-gray-950 border border-white/10 p-8 max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-display text-white mb-2">Frequently Asked Questions</h3>
            <p className="text-white/70">Get answers to common questions about coaching plans.</p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "What's the difference between Gold and Platinum?",
                answer: "Gold covers a custom training plan and nutrition guidance with regular check-ins. Platinum adds weekly 1:1 feedback, video form reviews, daily WhatsApp access, and advanced nutrition coaching for full performance support."
              },
              {
                question: "Can I switch plans mid-term?",
                answer: "Yes — message us on WhatsApp and we'll adjust your plan and pricing accordingly for your next billing period."
              },
              {
                question: "Do longer plans really cost less?",
                answer: "Yes. Every plan is billed as a single upfront payment for the chosen duration, and the per-month rate drops the longer you commit — see the savings shown on each duration option."
              }
            ].map((faq) => (
              <div key={faq.question} className="border-b border-white/10 pb-6">
                <h4 className="text-lg font-bold text-white mb-2">{faq.question}</h4>
                <p className="text-white/70">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
