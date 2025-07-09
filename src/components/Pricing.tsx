//components/Pricing.tsx


import React from 'react';
import { Check, X } from 'lucide-react';

const phoneNumber = "971565974353"

type PricingCardProps = {
  title: string;
  price: string | number;
  period: string;
  description: string;
  features: string[];
  notIncluded?: string[];
  buttonText: string;
  highlighted?: boolean;
};

const PricingCard: React.FC<PricingCardProps> = ({
  title, 
  price, 
  period, 
  description, 
  features, 
  notIncluded, 
  buttonText, 
  highlighted = false ,
}) => {
  console.log("Rendering card for:", title)
  return (
    
    <div 
      className={`rounded-sm overflow-hidden transition-transform duration-300 hover:-translate-y-2 ${
        highlighted 
          ? 'bg-gradient-to-b from-gold-500/20 via-gray-900 to-gray-900 border-t-4 border-gold-500' 
          : 'bg-gray-900 border-t-4 border-transparent'
      }`}
    >
      <div className="p-8">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <div className="mb-4">
          <span className="text-4xl font-bold text-white">${price}</span>
          <span className="text-white/70 ml-1">/{period}</span>
        </div>
        <p className="text-white/70 mb-6">{description}</p>
        
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="text-gold-500 h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-white/90">{feature}</span>
            </li>
          ))}
          
          {notIncluded && notIncluded.map((feature, index) => (
            <li key={index} className="flex items-start opacity-50">
              <X className="text-red-500 h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-white/70 line-through">{feature}</span>
            </li>
          ))}
        </ul>
        <a href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    `I want to join the ${title} programme.`
  )}`}
  target="_blank"
  rel="noopener noreferrer"
  className={`block text-center w-full py-3 font-bold rounded-sm transition-colors duration-300 ${
    highlighted 
      ? 'bg-gold-500 text-black hover:bg-gold-600' 
      : 'bg-white/10 text-white hover:bg-white/20'
  }`}
>
  {buttonText}
</a>
      </div>
    </div>
  );
};

const Pricing = () => {
  const plans = [
    {
      title: "Basic",
      price: "49",
      period: "month",
      description: "Perfect for beginners looking to start their fitness journey.",
      features: [
        "2 training sessions per week",
        "Basic fitness assessment",
        "Access to gym facilities",
        "Basic nutrition guide"
      ],
      notIncluded: [
        "Personal training sessions",
        "Advanced nutrition coaching"
      ],
      buttonText: "Get Started",
      
    },
    {
      title: "Premium",
      price: "99",
      period: "month",
      description: "Our most popular plan for serious fitness enthusiasts.",
      features: [
        "Unlimited training sessions",
        "Comprehensive fitness assessment",
        "Personal training (2x/month)",
        "Nutrition coaching",
        "Access to all classes & facilities",
        "Monthly progress review"
      ],
      buttonText: "Join Now",
      highlighted: true
    },
    {
      title: "Elite",
      price: "199",
      period: "month",
      description: "The ultimate fitness experience for maximum results.",
      features: [
        "Unlimited training sessions",
        "Advanced fitness assessment",
        "Personal training (2x/week)",
        "Advanced nutrition coaching",
        "Access to all classes & facilities",
        "Weekly progress reviews",
        "Recovery sessions"
      ],
      buttonText: "Get Elite Access"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Membership <span className="text-gold-500">Plans</span></h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Choose the perfect plan that fits your fitness goals and budget. All plans include access to our premium facilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-white/60 mb-4">Looking for corporate plans or family discounts?</p>
          <a href="#contact" className="text-gold-500 hover:underline font-medium">Contact us for custom pricing</a>
        </div>
        
        <div className="mt-20 bg-gray-900 rounded-sm p-8 max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Frequently Asked Questions</h3>
            <p className="text-white/70">Get answers to common questions about our membership plans.</p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "Can I cancel my membership anytime?",
                answer: "Yes, all our membership plans can be canceled with 30 days notice. There are no long-term contracts or cancellation fees."
              },
              {
                question: "What's included in the fitness assessment?",
                answer: "Our fitness assessment includes body composition analysis, strength testing, cardiovascular fitness evaluation, flexibility assessment, and goal setting consultation."
              },
              {
                question: "Are there any additional fees?",
                answer: "The membership price is all-inclusive. There are no additional fees for the features listed in your plan. Specialized services not included in your plan may be available for an additional fee."
              }
            ].map((faq, index) => (
              <div key={index} className="border-b border-white/10 pb-6">
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