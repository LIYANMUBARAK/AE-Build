import React from 'react';
import { CheckCircle, Clock, Flame, Trophy, Target, Dumbbell } from 'lucide-react';
type ProgramCardProps = {
  title: string;
  description: string;
  features: string[];
  image: string;
  featured?: boolean;
};
const ProgramCard: React.FC<ProgramCardProps>= ({ title, description, features, image, featured = false }) => {
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
        <button className={`w-full py-3 font-bold rounded-sm transition-colors duration-300 ${
          featured 
            ? 'bg-gold-500 text-black hover:bg-gold-600' 
            : 'bg-white/10 text-white hover:bg-white/20'
        }`}>
          Learn More
        </button>
      </div>
    </div>
  );
};

const Programs = () => {
  const programs = [
    // {
    //   title: "HYROX Training",
    //   description: "Specialized training program to prepare you for HYROX competitions and improve your functional fitness.",
    //   features: [
    //     "Competition-specific workouts",
    //     "Endurance building",
    //     "Strength conditioning",
    //     "Race strategy coaching"
    //   ],
    //   image: "https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //   featured: true
    // },
    {
      title: "HYBRID Training",
      description: "A training program that combines endurance, strength, and functional movement into one powerful system. Designed for athletes and everyday movers alike, this program boosts your real-world best.",
      features: [
        "Endurance (Engine Work)",
        "Strength & Power",
        "MetCon (Conditioning)",
        "Movement Skills",
        "Recovery & Resilience"
      ],
      image: "https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      featured: true
    },
    {
      title: "Strength Mastery",
      description: "Build lean muscle and increase your strength with progressive resistance training.",
      features: [
        "Customized workout plans",
        "Form correction",
        "Progressive overload",
        "Nutrition guidance"
      ],
      image: "https://images.pexels.com/photos/2261485/pexels-photo-2261485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title: "Fat Loss",
      description: "Transform your body composition with targeted fat loss programming.",
      features: [
        "HIIT workouts",
        "Metabolic conditioning",
        "Nutritional support",
        "Progress tracking"
      ],
      image: "https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
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
            <ProgramCard key={index} {...program} />
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Trophy className="h-10 w-10 text-gold-500 mb-4" />,
              title: "HYROX Ready",
              description: "Specialized training to prepare you for HYROX competition success."
            },
            {
              icon: <Target className="h-10 w-10 text-gold-500 mb-4" />,
              title: "Goal Focused",
              description: "Personalized programs aligned with your specific fitness objectives."
            },
            {
              icon: <Dumbbell className="h-10 w-10 text-gold-500 mb-4" />,
              title: "Expert Guidance",
              description: "Professional coaching with certified personal training experience."
            },
            {
              icon: <Flame className="h-10 w-10 text-gold-500 mb-4" />,
              title: "Results Driven",
              description: "Proven methods to help you achieve your desired transformation."
            }
          ].map((feature, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-sm text-center hover:bg-gray-800 transition-colors duration-300">
              {feature.icon}
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;