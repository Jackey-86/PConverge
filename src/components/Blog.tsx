import React from 'react';
import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react';

interface BlogProps {
  onReadMore: (postId: string) => void;
}

const Blog: React.FC<BlogProps> = ({ onReadMore }) => {
  const blogPosts = [
    {
      id: 'peak-performance-habits', // Unique ID for routing to individual post
      title: '5 Essential Habits for Peak Performance',
      excerpt: 'Discover the daily practices that high achievers use to maintain excellence and overcome challenges in their professional and personal lives.',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      author: 'PConverge Team',
      date: '2024-01-15',
      category: 'Performance',
      readTime: '5 min read'
    },
    {
      id: 'goal-setting-science', // Unique ID for routing to individual post
      title: 'The Science of Goal Setting: Why Most People Fail',
      excerpt: 'Learn evidence-based strategies for setting and achieving goals that actually stick, based on psychological research and coaching best practices.',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      author: 'PConverge Team',
      date: '2024-01-12',
      category: 'Goal Setting',
      readTime: '7 min read'
    },
    {
      id: 'mindful-leadership', // Unique ID for routing to individual post
      title: 'Mindful Leadership in the Digital Age',
      excerpt: 'How modern leaders can cultivate presence, emotional intelligence, and authentic connections in an increasingly connected world.',
      image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      author: 'PConverge Team',
      date: '2024-01-10',
      category: 'Leadership',
      readTime: '6 min read'
    },
    {
      id: 'limiting-beliefs', // Unique ID for routing to individual post
      title: 'Breaking Through Limiting Beliefs',
      excerpt: 'Identify and overcome the mental barriers that prevent you from reaching your full potential and living the life you truly desire.',
      image: 'https://images.pexels.com/photos/1181456/pexels-photo-1181456.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      author: 'PConverge Team',
      date: '2024-01-08',
      category: 'Mindset',
      readTime: '8 min read'
    },
    {
      id: 'work-life-integration', // Unique ID for routing to individual post
      title: 'The Art of Work-Life Integration',
      excerpt: 'Move beyond balance to integration. Learn how to create harmony between your professional ambitions and personal fulfillment.',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      author: 'PConverge Team',
      date: '2024-01-05',
      category: 'Life Balance',
      readTime: '6 min read'
    },
    {
      id: 'building-resilience', // Unique ID for routing to individual post
      title: 'Building Resilience in Uncertain Times',
      excerpt: 'Develop the mental strength and adaptability needed to thrive during challenges and emerge stronger from setbacks.',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      author: 'PConverge Team',
      date: '2024-01-03',
      category: 'Resilience',
      readTime: '7 min read'
    }
  ];

  const categories = ['All', 'Performance', 'Goal Setting', 'Leadership', 'Mindset', 'Life Balance', 'Resilience'];

  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Coaching Insights & Resources
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Practical advice, research-backed strategies, and inspiring stories to support your personal and professional growth journey.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                index === 0
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-blue-100 hover:text-blue-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <User size={16} className="mr-1" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500">
                    <BookOpen size={16} className="mr-1" />
                    <span className="text-sm">{post.readTime}</span>
                  </div>
                  {/* Read More button - navigates to individual blog post page */}
                  <button 
                    onClick={() => onReadMore(post.id)}
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200"
                  >
                    Read More
                    <ArrowRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Stay Updated with Our Newsletter
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Get weekly insights, coaching tips, and exclusive resources delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
              <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;