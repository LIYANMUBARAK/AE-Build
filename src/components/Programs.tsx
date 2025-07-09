// Step 1: Import necessary dependencies
import React, { useState } from 'react';
import { CheckCircle, Clock, Flame, Trophy, Target, Dumbbell } from 'lucide-react';

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
const ProgramCard = ({ title, description, features, image, featured = false, slug, onLearnMore }) => {
  return (
    <div 
      className={`bg-gray-900 rounded-sm overflow-hidden transition-transform duration-300 hover:-translate-y-2 ${
        featured ? 'border-2 border-gold-500' : 'border border-white/10'
      }`}
    >
      <div className="h-52 overflow-hidden relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
        {featured && (
          <div className="absolute top-4 right-4 bg-gold-500 text-black text-xs font-bold px-3 py-1 rounded-sm">
            FEATURED
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-white/70 mb-4">{description}</p>
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="text-gold-500 h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-white/80">{feature}</span>
            </li>
          ))}
        </ul>
        <button
          onClick={() => onLearnMore(slug)}
          className={`block text-center w-full py-3 font-bold rounded-sm transition-colors duration-300 ${
            featured 
              ? 'bg-gold-500 text-black hover:bg-gold-600' 
              : 'bg-white/10 text-white hover:bg-white/20'
          }`}
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

// const Modal = ({ selectedProgram, onClose }) => {
//   return (
//     <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex justify-center items-center px-4">
//       <div className="bg-gray-900 text-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gold-500/30">
//         {/* Header */}
//         <div className="sticky top-0 bg-gray-900 border-b border-gold-500/30 p-6 z-10">
//           <div className="flex justify-between items-center">
//             <div>
//               <h2 className="text-2xl font-bold text-gold-500 mb-2">
//                 {selectedProgram}
//               </h2>
//               <p className="text-white/70">Choose the perfect package for your fitness journey</p>
//             </div>
//             <button
//               onClick={onClose}
//               className="text-white/50 hover:text-white transition-colors text-2xl"
//             >
//               ×
//             </button>
//           </div>
//         </div>

//         {/* Packages Grid */}
//         <div className="p-6">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {pricingPackages.map((plan, index) => (
//               <div 
//                 key={plan.name} 
//                 className={`relative bg-gray-800 rounded-lg p-6 border transition-all duration-300 hover:scale-105 ${
//                   plan.popular 
//                     ? 'border-gold-500 shadow-lg shadow-gold-500/20' 
//                     : 'border-white/10 hover:border-white/20'
//                 }`}
//               >
//                 {/* Popular Badge */}
//                 {plan.popular && (
//                   <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
//                     <div className="bg-gold-500 text-black text-xs font-bold px-3 py-1 rounded-full">
//                       MOST POPULAR
//                     </div>
//                   </div>
//                 )}

//                 {/* Package Header */}
//                 <div className="text-center mb-6">
//                   <div className={`w-16 h-16 ${plan.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
//                     <span className="text-white font-bold text-lg">{plan.name[0]}</span>
//                   </div>
//                   <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
//                   <div className="text-2xl font-bold text-gold-500 mb-2">{plan.price}</div>
//                   <p className="text-white/60 text-sm italic">{plan.tagline}</p>
//                 </div>

//                 {/* Description */}
//                 <p className="text-white/80 text-sm mb-6 text-center">{plan.description}</p>

//                 {/* Features List */}
//                 <div className="space-y-3 mb-6">
//                   {plan.features.map((feature, featureIndex) => (
//                     <div key={featureIndex} className="flex items-start">
//                       <CheckCircle className="text-gold-500 h-4 w-4 mr-3 mt-0.5 flex-shrink-0" />
//                       <span className="text-white/90 text-sm">{feature}</span>
//                     </div>
//                   ))}
//                 </div>

//                 {/* CTA Button */}
//                 <a
//                   href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
//                     `Hi, I'm interested in the ${selectedProgram} program with the ${plan.name} package (${plan.price}). Can you share more details?`
//                   )}`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
//                     plan.popular
//                       ? 'bg-gold-500 text-black hover:bg-gold-600 shadow-lg hover:shadow-xl'
//                       : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
//                   }`}
//                 >
//                   Get Started
//                 </a>
// <a href={`/programs/${selectedProgram}`}>
//   View Full Program Details →
// </a>
//               </div>
//             ))}
//           </div>

//           {/* Footer */}
//           <div className="mt-8 text-center">
//             <p className="text-white/60 text-sm mb-4">
//               Have questions? Need a custom package? Contact us directly.
//             </p>
//             <div className="flex justify-center space-x-4">
//               <a
//                 href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
//                   `Hi, I'd like to know more about the ${selectedProgram} program and discuss my fitness goals.`
//                 )}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors font-medium"
//               >
//                 💬 Chat on WhatsApp
//               </a>
//               <button
//                 onClick={onClose}
//                 className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

const Programs = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);

  const programs = [
    { slug: 'strength-conditioning',
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
      image: "https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg"
    },
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
      image: "https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg",
      featured: true
    },
  ];

  return (
    <section id="programs" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Transformational <span className="text-gold-500">Programs</span></h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Choose from our specialized training programs designed to help you achieve your specific fitness goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
<ProgramCard key={index} {...program} onLearnMore={(slug) => window.location.href = `/programs/${slug}`} />

          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[{
            icon: <Trophy className="h-10 w-10 text-gold-500 mb-4" />, title: "HYROX Ready", description: "Specialized training to prepare you for HYROX competition success."
          },{
            icon: <Target className="h-10 w-10 text-gold-500 mb-4" />, title: "Goal Focused", description: "Personalized programs aligned with your specific fitness objectives."
          },{
            icon: <Dumbbell className="h-10 w-10 text-gold-500 mb-4" />, title: "Expert Guidance", description: "Professional coaching with certified personal training experience."
          },{
            icon: <Flame className="h-10 w-10 text-gold-500 mb-4" />, title: "Results Driven", description: "Proven methods to help you achieve your desired transformation."
          }].map((feature, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-sm text-center hover:bg-gray-800 transition-colors duration-300">
              {feature.icon}
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* {selectedProgram && <Modal selectedProgram={selectedProgram} onClose={() => setSelectedProgram(null)} />} */}
    </section>
  );
};

export default Programs;