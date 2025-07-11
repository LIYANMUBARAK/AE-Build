import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CheckCircle, Target, Clock, Users, Star, Zap, Award, TrendingUp, ArrowRight, Play, Calendar, Heart, Dumbbell, Trophy, Activity, BookOpen, MessageCircle } from 'lucide-react';
import Header from '../components/Header';

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
    detailedDescription: 'Our Strength & Conditioning program is built on scientific principles of progressive overload and periodization. This comprehensive approach focuses on developing functional strength, muscle mass, and power through compound movements and targeted accessory work. The program systematically progresses from foundational movement patterns to advanced strength techniques, ensuring continuous adaptation and growth. We emphasize proper form, movement mechanics, and individualized programming based on your current fitness level, goals, and available equipment.',
    image: 'https://images.pexels.com/photos/2261485/pexels-photo-2261485.jpeg',
    benefits: [
      'Progressive overload workouts with systematic strength increases',
      'Form correction support through video analysis',
      'Customized split routines based on your schedule',
      'Goal-based tracking with measurable progress metrics',
      'Compound movement mastery for functional strength',
      'Periodization planning for peak performance'
    ],
    target: ['Beginners looking to build foundation', 'Intermediate lifters breaking plateaus', 'Athletes seeking strength gains'],
    schedule: [
      'Monday: Upper Body Power - Focus on compound pressing and pulling movements',
      'Tuesday: Lower Body Strength - Squats, deadlifts, and unilateral work',
      'Wednesday: Active Recovery - Mobility, light cardio, and movement prep',
      'Thursday: Upper Body Hypertrophy - Volume-focused muscle building',
      'Friday: Lower Body Power - Explosive movements and athletic development',
      'Saturday: Full Body Integration - Compound movements and conditioning',
      'Sunday: Complete Rest'
    ],
    stats: { difficulty: 'Intermediate', duration: '8-12 weeks', intensity: 'High' },
    color: 'from-blue-600 to-purple-700',
    methodology: 'Based on proven strength training principles including linear periodization, autoregulation, and movement quality assessment.',
    expectedResults: 'Significant strength gains (15-30% increase in major lifts), improved muscle mass, better movement quality, and enhanced athletic performance.',
    equipment: 'Barbell, dumbbells, resistance bands, and basic gym equipment. Can be adapted for home gym setups.',
    nutrition: 'Includes macro guidance for muscle building, meal timing strategies, and supplement recommendations for strength athletes.'
  },
  'fat-loss': {
    title: 'Fat Loss Transformation',
    description: 'Drop body fat and increase energy through intense metabolic training and sustainable nutrition strategies.',
    detailedDescription: 'Our Fat Loss Transformation program combines high-intensity interval training, metabolic conditioning, and strategic nutrition to optimize body composition. This comprehensive approach focuses on creating a sustainable caloric deficit while preserving lean muscle mass. The program utilizes various training modalities including HIIT, circuit training, and resistance work to maximize calorie burn both during and after workouts. We emphasize lifestyle modifications, meal planning, and behavioral changes that support long-term fat loss success.',
    image: 'https://images.pexels.com/photos/4720796/pexels-photo-4720796.jpeg',
    benefits: [
      'HIIT circuits for maximum calorie burn and metabolic boost',
      'Fat-burning cardio with heart rate zone training',
      'Comprehensive meal guidance and macro tracking',
      'Progress tracking with body composition analysis',
      'Metabolic conditioning for improved fitness',
      'Sustainable lifestyle habit formation'
    ],
    target: ['Individuals with weight loss goals', 'Busy professionals seeking efficiency', 'Those wanting body recomposition'],
    schedule: [
      'Monday: HIIT Training - High-intensity intervals with recovery periods',
      'Tuesday: Metabolic Resistance - Circuit training with weights',
      'Wednesday: Active Recovery - Low-intensity cardio and mobility',
      'Thursday: Cardio + Core - Endurance work with core strengthening',
      'Friday: Full Body Metabolic - Compound movements with minimal rest',
      'Saturday: Outdoor Activity - Hiking, cycling, or sports',
      'Sunday: Rest and Meal Prep'
    ],
    stats: { difficulty: 'Beginner-Friendly', duration: '6-8 weeks', intensity: 'High' },
    color: 'from-orange-500 to-red-600',
    methodology: 'Combines metabolic training principles with evidence-based nutrition strategies for sustainable fat loss.',
    expectedResults: 'Significant fat loss (1-2 lbs per week), improved cardiovascular fitness, increased energy levels, and better body composition.',
    equipment: 'Minimal equipment needed - bodyweight, resistance bands, and basic cardio equipment.',
    nutrition: 'Detailed meal plans, calorie and macro targets, meal timing strategies, and sustainable eating habits.'
  },
  'hybrid-hyrox-training': {
    title: 'Hybrid / HYROX Training',
    description: 'Prepare for high-performance competitions or overall athletic development with hybrid endurance and strength.',
    detailedDescription: 'Our Hybrid HYROX Training program is specifically designed for the demands of functional fitness competitions and comprehensive athletic development. This program merges cardiovascular endurance with functional strength training, creating athletes who excel across multiple fitness domains. The training methodology focuses on the eight HYROX stations while building the aerobic base and strength foundation needed for peak performance. We emphasize movement efficiency, pacing strategies, and race-specific preparation to ensure you perform at your best when it matters most.',
    image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg',
    benefits: [
      'Endurance development with aerobic base building',
      'Functional strength for HYROX-specific movements',
      'Sport-specific skill development and technique refinement',
      'Race simulation and pacing strategy training',
      'Comprehensive mobility and recovery protocols',
      'Mental preparation and competition mindset development'
    ],
    target: ['HYROX competition athletes', 'Functional fitness enthusiasts', 'Athletes seeking comprehensive fitness'],
    schedule: [
      'Monday: Aerobic Base - Long, steady-state cardio for engine development',
      'Tuesday: Strength Foundation - Compound movements and power development',
      'Wednesday: HYROX Skills - Station-specific technique and efficiency work',
      'Thursday: Recovery & Mobility - Active recovery with movement quality focus',
      'Friday: Metabolic Conditioning - High-intensity intervals and lactate threshold work',
      'Saturday: Race Simulation - Full or partial HYROX workout practice',
      'Sunday: Complete Rest and Recovery'
    ],
    stats: { difficulty: 'Advanced', duration: '12-16 weeks', intensity: 'Extreme' },
    color: 'from-purple-600 to-indigo-700',
    methodology: 'Periodized approach combining aerobic base building, strength development, and sport-specific skill training.',
    expectedResults: 'Improved HYROX performance, enhanced endurance capacity, increased functional strength, and competitive readiness.',
    equipment: 'Full gym access required including rowing machine, ski erg, sandbags, kettlebells, and sled.',
    nutrition: 'Performance-focused nutrition with carbohydrate periodization, race-day fueling strategies, and recovery nutrition.'
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
        <Header />
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
            {['overview', 'details', 'schedule', 'pricing'].map((tab) => (
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
            {/* Program Description */}
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-3xl p-8 border border-white/10">
              <div className="flex items-center mb-6">
                <BookOpen className="w-8 h-8 text-yellow-400 mr-3" />
                <h2 className="text-3xl font-bold text-white">Program Overview</h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">{data.detailedDescription}</p>
            </div>

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

        {/* Details Tab */}
        {activeTab === 'details' && (
          <div className="space-y-12 animate-fadeIn">
            {/* Methodology */}
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-3xl p-8 border border-white/10">
              <div className="flex items-center mb-6">
                <Activity className="w-8 h-8 text-yellow-400 mr-3" />
                <h2 className="text-3xl font-bold text-white">Training Methodology</h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">{data.methodology}</p>
            </div>

            {/* Expected Results */}
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-3xl p-8 border border-white/10">
              <div className="flex items-center mb-6">
                <TrendingUp className="w-8 h-8 text-yellow-400 mr-3" />
                <h2 className="text-3xl font-bold text-white">Expected Results</h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">{data.expectedResults}</p>
            </div>

            {/* Equipment & Nutrition */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-3xl p-8 border border-white/10">
                <div className="flex items-center mb-6">
                  <Dumbbell className="w-8 h-8 text-yellow-400 mr-3" />
                  <h2 className="text-2xl font-bold text-white">Equipment</h2>
                </div>
                <p className="text-gray-300 leading-relaxed">{data.equipment}</p>
              </div>
              
              <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-3xl p-8 border border-white/10">
                <div className="flex items-center mb-6">
                  <Heart className="w-8 h-8 text-yellow-400 mr-3" />
                  <h2 className="text-2xl font-bold text-white">Nutrition</h2>
                </div>
                <p className="text-gray-300 leading-relaxed">{data.nutrition}</p>
              </div>
            </div>
          </div>
        )}

        {/* Schedule Tab */}
        {activeTab === 'schedule' && (
          <div className="animate-fadeIn">
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-3xl p-8 border border-white/10">
              <div className="flex items-center mb-6">
                <Calendar className="w-8 h-8 text-yellow-400 mr-3" />
                <h2 className="text-3xl font-bold text-white">Weekly Schedule</h2>
              </div>
              <div className="space-y-4">
                {data.schedule.map((day: string, i: number) => (
                  <div key={i} className="flex items-start p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-black font-bold mr-4 flex-shrink-0 ${
                      day.includes('Rest') ? 'bg-gray-400' : 'bg-gradient-to-r from-yellow-400 to-orange-500'
                    }`}>
                      {day.includes('Rest') ? '😴' : day.includes('Recovery') ? '🧘' : '💪'}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white text-lg mb-1">
                        {day.split(' - ')[0]}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {day.split(' - ')[1] || 'Optimized for maximum results'}
                      </p>
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
              <MessageCircle className="w-5 h-5 mr-2" />
              Start Your Journey
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramDetail;