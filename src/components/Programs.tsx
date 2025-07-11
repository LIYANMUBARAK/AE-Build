import React, { useState } from 'react';
import { CheckCircle, Clock, Flame, Trophy, Target, Dumbbell, Zap, Star, ArrowRight, ChevronRight } from 'lucide-react';
import hyrox from './shared/assets/images/hyrox3rd.jpg'

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
    color: "bg-green-600"
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
    color: "bg-yellow-600"
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
    color: "bg-red-600",
    popular: true
  }
];

interface ProgramCardProps {
  title: string;
  description: string;
  features: string[];
  image: string;
  featured?: boolean;
  slug: string;
  onLearnMore: (slug: string) => void;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ 
  title, 
  description, 
  features, 
  image, 
  featured = false, 
  slug, 
  onLearnMore 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative">
      {/* Featured badge - positioned outside the card */}
      {featured && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
          <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black text-xs font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-1">
            <Star className="w-3 h-3" />
            MOST POPULAR
          </div>
        </div>
      )}
      
      <div 
        className={`group relative bg-black rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 cursor-pointer border border-gray-800 ${
          featured 
            ? 'ring-2 ring-yellow-500 shadow-2xl shadow-yellow-500/20 mt-4' 
            : 'hover:shadow-2xl hover:shadow-yellow-500/10'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Image container */}
        <div className="relative h-64 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          
          {/* Floating elements */}
          <div className="absolute top-4 right-4 w-12 h-12 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Zap className="w-6 h-6 text-yellow-500" />
          </div>
        </div>
        
        {/* Content */}
        <div className="p-8 relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
            <h3 className="text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
              {title}
            </h3>
          </div>
          
          <p className="text-white/70 mb-6 leading-relaxed">{description}</p>
          
          {/* Features list */}
          <div className="space-y-3 mb-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="flex items-start"
              >
                <CheckCircle className="text-yellow-500 h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-white/80">
                  {feature}
                </span>
              </div>
            ))}
          </div>
          
          {/* CTA Button */}
          <button
            onClick={() => onLearnMore(slug)}
            className={`group/btn relative w-full py-4 font-bold rounded-xl transition-all duration-300 overflow-hidden ${
              featured 
                ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-black hover:from-yellow-600 hover:to-yellow-700 shadow-lg hover:shadow-xl' 
                : 'bg-white/10 text-white hover:bg-white/20 border border-white/20 hover:border-white/40'
            }`}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Learn More
              <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-200" />
            </span>
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

const Programs: React.FC = () => {
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);

  const programs = [
     {
      slug: 'hybrid-hyrox-training',
      title: "Hybrid / HYROX Training",
      description: "A training program that combines endurance, strength, and functional movement into one powerful system.",
      features: [
        "Endurance (Engine Work)",
        "Strength & Power",
        "MetCon (Conditioning)",
        "Movement Skills",
        "Recovery & Resilience"
      ],
      image: hyrox,
      featured: true
    },
    { 
      slug: 'strength-conditioning',
      title: "Strength & Conditioning",
      description: "Build lean muscle and increase your strength with progressive resistance training.",
      features: [
        "Customized workout plans",
        "Form correction",
        "Progressive overload",
        "Nutrition guidance"
      ],
      image: "https://images.pexels.com/photos/2261485/pexels-photo-2261485.jpeg"
    },
    {
      slug: 'fat-loss',
      title: "Fat Loss",
      description: "Transform your body composition with targeted fat loss programming.",
      features: [
        "HIIT workouts",
        "Metabolic conditioning",
        "Nutritional support",
        "Progress tracking"
      ],
      image: " https://images.pexels.com/photos/4720796/pexels-photo-4720796.jpeg"


    },
   
  ];

  // const features = [
  //   {
  //     icon: Trophy,
  //     title: "HYROX Ready",
  //     description: "Specialized training to prepare you for HYROX competition success.",
  //     color: "text-yellow-500"
  //   },
  //   {
  //     icon: Target,
  //     title: "Goal Focused",
  //     description: "Personalized programs aligned with your specific fitness objectives.",
  //     color: "text-blue-500"
  //   },
  //   {
  //     icon: Dumbbell,
  //     title: "Expert Guidance",
  //     description: "Professional coaching with certified personal training experience.",
  //     color: "text-green-500"
  //   },
  //   {
  //     icon: Flame,
  //     title: "Results Driven",
  //     description: "Proven methods to help you achieve your desired transformation.",
  //     color: "text-red-500"
  //   }
  // ];

  return (
    <section id="programs" className="relative py-20 bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-yellow-500/20 backdrop-blur-sm border border-yellow-500/30 px-4 py-2 rounded-full text-yellow-400 text-sm font-medium mb-6">
            <Trophy className="w-4 h-4" />
            Premium Training Programs
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Transformational{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              Programs
            </span>
          </h2>
          
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Choose from our specialized training programs designed to help you achieve your specific fitness goals with expert guidance and proven results.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {programs.map((program, index) => (
            <div 
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <ProgramCard 
                {...program} 
                onLearnMore={(slug) => window.location.href = `/programs/${slug}`} 
              />
            </div>
          ))}
        </div>

     
      </div>
    </section>
  );
};

export default Programs;