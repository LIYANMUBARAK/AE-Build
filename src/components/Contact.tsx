//components/Contact.tsx

import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const ContactForm = () => {
  return (
    <form className="bg-gray-900 rounded-sm p-8">
      <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-white mb-2">Name</label>
          <input
            type="text"
            id="name"
            className="w-full bg-black border border-white/20 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-gold-500"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-white mb-2">Email</label>
          <input
            type="email"
            id="email"
            className="w-full bg-black border border-white/20 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-gold-500"
            placeholder="Your email"
          />
        </div>
      </div>
      
      <div className="mb-6">
        <label htmlFor="subject" className="block text-white mb-2">Subject</label>
        <input
          type="text"
          id="subject"
          className="w-full bg-black border border-white/20 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-gold-500"
          placeholder="Subject"
        />
      </div>
      
      <div className="mb-6">
        <label htmlFor="message" className="block text-white mb-2">Message</label>
        <textarea
          id="message"
          rows={5}
          className="w-full bg-black border border-white/20 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-gold-500"
          placeholder="Your message"
        ></textarea>
      </div>
      
      <button 
        type="submit"
        className="bg-gold-500 text-black px-6 py-3 rounded-sm font-bold hover:bg-gold-600 transition-colors duration-300 flex items-center justify-center"
      >
        Send Message
        <Send size={18} className="ml-2" />
      </button>
    </form>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Contact <span className="text-gold-500">Us</span></h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Have questions or ready to start your fitness journey? Get in touch with our team today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <ContactForm />
          </div>
          
          <div>
            <div className="bg-gray-900 rounded-sm p-8 mb-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="text-gold-500 h-6 w-6 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-medium mb-1">Our Location</h4>
                    <p className="text-white/70">
                      123 Fitness Avenue, <br />
                      San Francisco, CA 94107
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-gold-500 h-6 w-6 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-medium mb-1">Phone Number</h4>
                    <p className="text-white/70">
                      (123) 456-7890
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="text-gold-500 h-6 w-6 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-medium mb-1">Email Address</h4>
                    <p className="text-white/70">
                      info@elitefitness.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="text-gold-500 h-6 w-6 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-medium mb-1">Opening Hours</h4>
                    <p className="text-white/70">
                      Monday - Friday: 6:00 AM - 10:00 PM<br />
                      Saturday - Sunday: 8:00 AM - 8:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-sm p-8">
              <h3 className="text-xl font-bold text-white mb-4">Free Consultation</h3>
              <p className="text-white/70 mb-6">
                Schedule a free 30-minute fitness consultation with one of our expert trainers to discuss your goals.
              </p>
              <button className="bg-gold-500 text-black px-6 py-3 rounded-sm font-bold hover:bg-gold-600 transition-colors duration-300 w-full">
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;