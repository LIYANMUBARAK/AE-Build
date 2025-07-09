//components/Blog.tsx
import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

type BlogCardProps = {
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string; // or Date if you're working with Date objects
  category: string;
};

const BlogCard: React.FC<BlogCardProps> = ({ title, excerpt, image, author, date, category }) => {
  return (
    <div className="bg-gray-900 rounded-sm overflow-hidden group transition-transform duration-300 hover:-translate-y-2">
      <div className="h-56 overflow-hidden relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 bg-gold-500 text-black text-xs font-bold px-3 py-1 rounded-sm">
          {category}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-white/60 mb-3">
          <div className="flex items-center mr-4">
            <Calendar size={14} className="mr-1" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <User size={14} className="mr-1" />
            <span>{author}</span>
          </div>
        </div>
        <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-gold-500 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-white/70 mb-4 line-clamp-3">
          {excerpt}
        </p>
        <div className="flex items-center text-gold-500 font-medium hover:text-gold-400 transition-colors duration-300 group-hover:translate-x-1">
          <span>Read More</span>
          <ArrowRight size={16} className="ml-2" />
        </div>
      </div>
    </div>
  );
};

const Blog = () => {
  const posts = [
    {
      title: "10 Effective Ways to Build Muscle and Burn Fat Simultaneously",
      excerpt: "Discover the science-backed strategies to optimize your body composition. Learn how to build lean muscle while reducing body fat through strategic training and nutrition.",
      image: "https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      author: "Alex Morgan",
      date: "June 15, 2023",
      category: "Training"
    },
    {
      title: "The Ultimate Guide to Nutrition for Optimal Performance",
      excerpt: "Nutrition is the foundation of fitness success. This comprehensive guide covers macronutrients, meal timing, supplements, and personalized nutrition strategies for different fitness goals.",
      image: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      author: "Sarah Johnson",
      date: "May 22, 2023",
      category: "Nutrition"
    },
    {
      title: "How to Stay Motivated on Your Fitness Journey",
      excerpt: "Maintaining motivation is essential for long-term fitness success. Learn practical strategies to stay committed to your goals, overcome plateaus, and develop a sustainable fitness mindset.",
      image: "https://images.pexels.com/photos/2294354/pexels-photo-2294354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      author: "Marcus Chen",
      date: "April 8, 2023",
      category: "Mindset"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Fitness <span className="text-gold-500">Insights</span></h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Stay updated with the latest fitness tips, trends, and expert advice from our elite trainers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="border-2 border-gold-500 text-white px-6 py-3 rounded-sm font-bold hover:bg-gold-500 hover:text-black transition-all duration-300">
            View All Articles
          </button>
        </div>
        
        <div className="mt-20 bg-gradient-to-r from-gray-900 via-gray-900 to-black rounded-sm p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Subscribe to Our Newsletter</h3>
              <p className="text-white/70 mb-6">
                Get the latest fitness tips, special offers, and exclusive content delivered directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-black/50 border border-white/20 text-white px-4 py-3 rounded-sm focus:outline-none focus:border-gold-500 flex-grow"
                />
                <button className="bg-gold-500 text-black px-6 py-3 rounded-sm font-bold hover:bg-gold-600 transition-colors duration-300 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
              <p className="text-white/50 text-sm mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Fitness newsletter" 
                className="rounded-sm h-64 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;