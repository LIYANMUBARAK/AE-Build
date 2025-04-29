import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Jennifer Williams",
    role: "Marketing Executive",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    quote: "Elite Fitness transformed my life completely. I've lost 30 pounds in 4 months and gained incredible confidence. The trainers are knowledgeable and truly care about your success.",
    results: "Lost 30 pounds in 4 months"
  },
  {
    id: 2,
    name: "Michael Thompson",
    role: "Software Engineer",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    quote: "As someone with a busy schedule, I was skeptical about finding a fitness program that would work for me. Elite Fitness tailored everything to fit my lifestyle, and I've never felt better.",
    results: "Gained 15 pounds of muscle"
  },
  {
    id: 3,
    name: "Rebecca Chen",
    role: "Healthcare Professional",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    quote: "The nutrition coaching at Elite Fitness was a game-changer for me. I finally understand how to fuel my body properly. My energy levels are through the roof, and my performance has improved dramatically.",
    results: "Improved marathon time by 20 minutes"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Success <span className="text-gold-500">Stories</span></h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Hear from our clients who have transformed their bodies and lives with Elite Fitness programs.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gray-900 rounded-sm p-8 md:p-12">
            <div className="absolute top-6 left-6 opacity-10">
              <Quote size={80} className="text-gold-500" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <div className="h-64 w-64 mx-auto rounded-full overflow-hidden border-4 border-gold-500">
                  <img 
                    src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="md:col-span-2">
                <p className="text-white/90 text-lg italic mb-6 relative z-10">
                  "{testimonials[activeIndex].quote}"
                </p>
                <div className="border-t border-white/10 pt-4">
                  <h4 className="text-xl font-bold text-white">{testimonials[activeIndex].name}</h4>
                  <p className="text-gold-500">{testimonials[activeIndex].role}</p>
                  <p className="text-white/70 mt-2">Result: {testimonials[activeIndex].results}</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-4">
              <button 
                onClick={prevTestimonial}
                className="bg-gray-800 hover:bg-gold-500 text-white hover:text-black rounded-full p-2 transition-colors duration-300"
              >
                <ChevronLeft size={24} />
              </button>
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-3 w-3 rounded-full transition-colors duration-300 ${
                      index === activeIndex ? 'bg-gold-500' : 'bg-gray-700 hover:bg-gray-600'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <button 
                onClick={nextTestimonial}
                className="bg-gray-800 hover:bg-gold-500 text-white hover:text-black rounded-full p-2 transition-colors duration-300"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Results grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { number: "500+", label: "Happy Clients" },
            { number: "8,500+", label: "Training Sessions" },
            { number: "15,000+", label: "Pounds Lost" },
            { number: "98%", label: "Satisfaction Rate" }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="bg-gray-900 p-8 rounded-sm text-center hover:-translate-y-2 transition-transform duration-300"
            >
              <h3 className="text-gold-500 text-4xl font-bold mb-2">{stat.number}</h3>
              <p className="text-white text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;