import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Zap, CheckCircle } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1000);
  };

  return (
    <div className="relative bg-gray-900 rounded-2xl p-8 border border-yellow-400/20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent rounded-2xl"></div>
      <div className="absolute top-4 right-4 w-16 h-16 bg-yellow-400/5 rounded-full blur-xl animate-pulse"></div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
            <MessageCircle className="w-5 h-5 text-black" />
          </div>
          <h3 className="text-2xl font-bold text-white">Get In Touch</h3>
        </div>
        
        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-400" />
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Message Sent!</h4>
            <p className="text-gray-300">Thank you for reaching out. We'll get back to you within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-black border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-all duration-300 hover:border-white/40"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-black border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-all duration-300 hover:border-white/40"
                  placeholder="Your email"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-white font-medium mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-black border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-all duration-300 hover:border-white/40"
                placeholder="Subject"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-white font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full bg-black border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-all duration-300 hover:border-white/40 resize-none"
                placeholder="Tell us about your fitness goals and how we can help you achieve them..."
                required
              ></textarea>
            </div>
            
            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-4 rounded-xl font-bold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <div className="flex items-center">
                  <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin mr-2"></div>
                  Sending...
                </div>
              ) : (
                <>
                  Send Message
                  <Send size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Number",
      content: "+971 56 597 4353",
      subtext: "Available 24/7 for emergencies"
    },
    {
      icon: Mail,
      title: "Email Address",
      content: "info@aebuild.com",
      subtext: "We'll respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Dubai, UAE",
      subtext: "Available for in-person consultations"
    },
    {
      icon: Clock,
      title: "Operating Hours",
      content: "Mon-Sat: 6:00 AM - 10:00 PM",
      subtext: "Sunday: 8:00 AM - 6:00 PM"
    }
  ];

  return (
    <section id="contact" className="relative py-20 bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-yellow-500/20 backdrop-blur-sm border border-yellow-500/30 px-4 py-2 rounded-full text-yellow-400 text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            Get In Touch
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Ready to Start Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              Transformation?
            </span>
          </h2>
          
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Take the first step towards your fitness goals. Whether you have questions about our programs or want to schedule a consultation, we're here to help you succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            <ContactForm />
          </div>
          
          {/* Contact Information */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div 
                    key={index} 
                    className="group bg-gray-900 rounded-2xl p-6 border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-lg mb-1">{info.title}</h4>
                        <p className="text-yellow-400 font-semibold mb-1">{info.content}</p>
                        <p className="text-gray-400 text-sm">{info.subtext}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Free Consultation CTA */}
            <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-2xl p-8 border border-yellow-400/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent"></div>
              <div className="absolute top-4 right-4 w-20 h-20 bg-yellow-400/10 rounded-full blur-xl animate-pulse"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4">Free Consultation</h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Ready to transform your fitness journey? Book a complimentary 30-minute consultation with our expert performance coach to discuss your goals and create a personalized plan.
                </p>
                
                <div className="space-y-3 mb-6">
                  {[
                    "Fitness assessment & goal setting",
                    "Personalized program overview",
                    "Nutrition guidance basics",
                    "Q&A session with our coach"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="text-yellow-400 h-5 w-5 mr-3 flex-shrink-0" />
                      <span className="text-white/80">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-4 rounded-xl font-bold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group">
                  <Phone className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  Book Free Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;