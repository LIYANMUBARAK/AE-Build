import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CheckCircle, Target, Clock, Users, Star, Zap, Award, TrendingUp, ArrowRight, Play } from 'lucide-react';

const phoneNumber = "971565974353";

const pricingPackages = [
  {
    name: "Basic",
    price: "99 AED/month",
    tagline: "Start strong with a structured foundation.",
    description: "Perfect for beginners who want to establish good fitness habits with professional guidance.",
    features: [
      "3 sessions/week",
      "4-6 week PDF plan (goal-based)",
      "Basic nutrition guide",
      "WhatsApp onboarding + end check-in",
      "No ongoing support/check-ins"
    ],
    color: "from-green-500 to-emerald-600",
    icon: "🚀"
  },
  {
    name: "Premium",
    price: "249 AED/month",
    tagline: "More structure, more accountability.",
    description: "Ideal for those who want regular guidance and personalized nutrition support.",
    features: [
      "6 sessions/week",
      "Plan adjusted to your gym/equipment & schedule",
      "Personalized macros + food list",
      "Weekly check-ins (WhatsApp)",
      "1-2 video form reviews/week",
      "Mid-plan adjustment if needed"
    ],
    color: "from-yellow-500 to-orange-600",
    icon: "⚡"
  },
  {
    name: "Elite",
    price: "499 AED/month",
    tagline: "Complete coaching with full performance support.",
    description: "Perfect for athletes, competitors, or those who want full structure and accountability.",
    features: [
      "Daily or unlimited sessions (HYROX prep, athlete split, or full custom)",
      "Weekly updated plan based on results",
      "Advanced nutrition (macro timing, food types, refeeds)",
      "Weekly 1:1 feedback review (photos, weight, biofeedback)",
      "Daily WhatsApp access (Mon-Sat)",
      "2-3 video reviews/week",
      "Supplement + recovery + peak week guidance",
      "End-phase plan or race strategy"
    ],
    color: "from-red-500 to-pink-600",
    icon: "🏆",
    popular: true
  }
];

const programDetails: Record<string, any> = {
  'strength-conditioning': {
    title: 'Strength & Conditioning',
    description: 'Build lean muscle and increase your strength with structured resistance training tailored to your goals.',
    image: 'https://images.pexels.com/photos/2261485/pexels-photo-2261485.jpeg',
    benefits: [
      'Progressive overload workouts',
      'Form correction support',
      'Customized split routines',
      'Goal-based tracking',
    ],
    target: ['Beginners', 'Athletes', 'Those wanting muscle gain'],
    schedule: ['Mon: Upper Body', 'Tue: Conditioning', 'Wed: Lower Body', 'Thu: Rest', 'Fri: Full Body'],
    stats: { difficulty: 'Intermediate', duration: '8-12 weeks', intensity: 'High' },
    color: 'from-blue-600 to-purple-700'
  },
  'fat-loss': {
    title: 'Fat Loss',
    description: 'Drop body fat and increase energy through intense metabolic training and sustainable nutrition strategies.',
    image: 'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg',
    benefits: ['HIIT circuits', 'Fat-burning cardio', 'Meal guidance', 'Progress tracking'],
    target: ['Weight loss seekers', 'Busy professionals', 'Postpartum fitness'],
    schedule: ['Mon: HIIT', 'Tue: Cardio + Core', 'Wed: Rest', 'Thu: MetCon', 'Fri: Full Body Burn'],
    stats: { difficulty: 'Beginner-Friendly', duration: '6-8 weeks', intensity: 'High' },
    color: 'from-orange-500 to-red-600'
  },
  'hybrid-hyrox-training': {
    title: 'Hybrid / HYROX Training',
    description: 'Prepare for high-performance competitions or overall athletic development with hybrid endurance and strength.',
    image: 'https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg',
    benefits: ['Strength & Power', 'Endurance', 'Mobility & Recovery', 'Race simulation'],
    target: ['HYROX Athletes', 'Cross-trainers', 'Fitness Enthusiasts'],
    schedule: ['Mon: Engine', 'Tue: Strength', 'Wed: Skills', 'Thu: Rest', 'Fri: MetCon', 'Sat: Simulation'],
    stats: { difficulty: 'Advanced', duration: '12-16 weeks', intensity: 'Extreme' },
    color: 'from-purple-600 to-indigo-700'
  },
};

const ProgramDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = programDetails[slug || ''];
  const [activeTab, setActiveTab] = useState('overview');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="text-center">
          <div className="text-6xl mb-4">🏃‍♂️</div>
          <p className="text-2xl font-bold">Program not found</p>
          <p className="text-gray-400 mt-2">The program you're looking for doesn't exist</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white min-h-screen">
      {/* Hero Section with Parallax Effect */}
      <div className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 z-20"></div>
        
        <img 
          src={data.image} 
          className="w-full h-full object-cover transform scale-105 transition-transform duration-[3s] hover:scale-110" 
          alt={data.title}
        />
        
        <div className="absolute inset-0 z-30 flex items-end px-6 pb-16">
          <div className={`max-w-4xl mx-auto w-full transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex items-center space-x-4 mb-6">
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${data.color} flex items-center justify-center text-white font-bold text-2xl shadow-lg`}>
                {data.title[0]}
              </div>
              <div>
                <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-yellow-400">
                  {data.title}
                </h1>
                <p className="text-xl text-gray-300 mt-2">{data.description}</p>
              </div>
            </div>
            
            {/* Stats Bar */}
            <div className="flex space-x-8 bg-black/50 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">{data.stats.difficulty}</div>
                <div className="text-sm text-gray-400 flex items-center justify-center">
                  <Target className="w-4 h-4 mr-1" />
                  Difficulty
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">{data.stats.duration}</div>
                <div className="text-sm text-gray-400 flex items-center justify-center">
                  <Clock className="w-4 h-4 mr-1" />
                  Duration
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">{data.stats.intensity}</div>
                <div className="text-sm text-gray-400 flex items-center justify-center">
                  <Zap className="w-4 h-4 mr-1" />
                  Intensity
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="sticky top-0 bg-black/90 backdrop-blur-md border-b border-white/10 z-40">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex space-x-8">
            {['overview', 'schedule', 'pricing'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-2 font-semibold text-sm uppercase tracking-wider transition-all duration-300 border-b-2 ${
                  activeTab === tab 
                    ? 'text-yellow-400 border-yellow-400' 
                    : 'text-gray-400 border-transparent hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-12 animate-fadeIn">
            {/* Benefits Section */}
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-3xl p-8 border border-white/10">
              <div className="flex items-center mb-6">
                <Award className="w-8 h-8 text-yellow-400 mr-3" />
                <h2 className="text-3xl font-bold text-white">Key Benefits</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.benefits.map((benefit: string, i: number) => (
                  <div key={i} className="flex items-start space-x-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                    <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-black font-bold text-sm">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{benefit}</h3>
                      <p className="text-gray-400 text-sm mt-1">Expertly designed to maximize your results</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Target Audience */}
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-3xl p-8 border border-white/10">
              <div className="flex items-center mb-6">
                <Users className="w-8 h-8 text-yellow-400 mr-3" />
                <h2 className="text-3xl font-bold text-white">Perfect For</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {data.target.map((target: string, i: number) => (
                  <div key={i} className="text-center p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/10 hover:from-white/10 hover:to-white/5 transition-all duration-300 transform hover:scale-105">
                    <div className="text-4xl mb-4">
                      {i === 0 ? '🎯' : i === 1 ? '🏆' : '💪'}
                    </div>
                    <h3 className="font-semibold text-white">{target}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Schedule Tab */}
        {activeTab === 'schedule' && (
          <div className="animate-fadeIn">
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-3xl p-8 border border-white/10">
              <div className="flex items-center mb-6">
                <Clock className="w-8 h-8 text-yellow-400 mr-3" />
                <h2 className="text-3xl font-bold text-white">Weekly Schedule</h2>
              </div>
              <div className="space-y-4">
                {data.schedule.map((day: string, i: number) => (
                  <div key={i} className="flex items-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-black font-bold mr-4 ${
                      day.includes('Rest') ? 'bg-gray-400' : 'bg-gradient-to-r from-yellow-400 to-orange-500'
                    }`}>
                      {day.includes('Rest') ? '😴' : '💪'}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-lg">{day}</h3>
                      <p className="text-gray-400 text-sm">Optimized for maximum results</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Pricing Tab */}
        {activeTab === 'pricing' && (
          <div className="animate-fadeIn">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Choose Your Package</h2>
              <p className="text-xl text-gray-400">Select the perfect plan for your fitness journey</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPackages.map((plan, i) => (
                <div
                  key={i}
                  className={`relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-3xl p-8 border transition-all duration-500 transform hover:scale-105 ${
                    plan.popular 
                      ? 'border-yellow-400 shadow-2xl shadow-yellow-400/20' 
                      : 'border-white/10 hover:border-white/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-full text-sm font-bold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="text-6xl mb-4">{plan.icon}</div>
                    <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                    <div className="text-3xl font-bold text-yellow-400 mt-2">{plan.price}</div>
                    <p className="text-gray-400 italic mt-2">{plan.tagline}</p>
                  </div>

                  <p className="text-gray-300 text-center mb-6">{plan.description}</p>

                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle className="text-green-400 w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(`Hi, I'm interested in the ${data.title} program with the ${plan.name} package (${plan.price}). Can you share more details?`)}`}
                    className={`block text-center font-bold py-4 px-6 rounded-full transition-all duration-300 transform hover:scale-105 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-500 hover:to-orange-600' 
                        : 'bg-gradient-to-r from-gray-600 to-gray-700 text-white hover:from-gray-500 hover:to-gray-600'
                    }`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="flex items-center justify-center">
                      Get Started
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Fitness?</h2>
          <p className="text-xl mb-8 opacity-90">Join thousands of satisfied clients who have achieved their goals with our proven programs.</p>
          <div className="flex justify-center space-x-6">
            <a
              href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(`Hi, I'm interested in the ${data.title} program. Can you share more details?`)}`}
              className="bg-black text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Play className="w-5 h-5 mr-2" />
              Start Your Journey
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramDetail;