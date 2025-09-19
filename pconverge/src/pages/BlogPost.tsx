import React from 'react';
import { ArrowLeft, Calendar, User, Clock, Share2, Linkedin, Twitter, Facebook } from 'lucide-react';

interface BlogPostProps {
  postId: string;
  onBack: () => void;
}

const BlogPost: React.FC<BlogPostProps> = ({ postId, onBack }) => {
  // Blog post data - in a real app, this would come from a CMS or API
  const blogPosts = {
    'peak-performance-habits': {
      title: '5 Essential Habits for Peak Performance',
      excerpt: 'Discover the daily practices that high achievers use to maintain excellence and overcome challenges in their professional and personal lives.',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
      author: 'PConverge Team',
      date: '2024-01-15',
      category: 'Performance',
      readTime: '5 min read',
      content: `
        <p>Peak performance isn't about working harder—it's about working smarter and developing sustainable habits that compound over time. After coaching hundreds of high achievers, I've identified five essential habits that consistently separate top performers from the rest.</p>

        <h3>1. Morning Ritual Mastery</h3>
        <p>The most successful people I coach all have one thing in common: they own their mornings. This isn't about waking up at 4 AM (though some do), but about creating a consistent morning routine that sets the tone for the entire day.</p>
        
        <p>Your morning ritual should include:</p>
        <ul>
          <li>Mindfulness or meditation practice (even 5 minutes makes a difference)</li>
          <li>Physical movement to energize your body</li>
          <li>Reviewing your top 3 priorities for the day</li>
          <li>Consuming positive, educational content</li>
        </ul>

        <h3>2. Energy Management Over Time Management</h3>
        <p>Time is finite, but energy is renewable. High performers understand their natural energy rhythms and schedule their most important work during peak energy hours. They also know when to rest, recharge, and say no to energy-draining activities.</p>

        <h3>3. Continuous Learning Mindset</h3>
        <p>The best performers are perpetual students. They read, listen to podcasts, attend seminars, and seek feedback constantly. They view challenges as learning opportunities rather than obstacles.</p>

        <h3>4. Systems Thinking</h3>
        <p>Instead of relying on motivation or willpower, peak performers create systems and processes that make success inevitable. They automate decisions, create templates, and build routines that reduce cognitive load.</p>

        <h3>5. Recovery and Renewal</h3>
        <p>Contrary to popular belief, high performers are excellent at recovery. They understand that rest isn't laziness—it's a strategic investment in future performance. They prioritize sleep, take real vacations, and have hobbies outside of work.</p>

        <h3>Implementation Strategy</h3>
        <p>Don't try to implement all five habits at once. Choose one that resonates most with you and commit to it for 30 days. Once it becomes automatic, add the next habit. Remember, sustainable change happens gradually, not overnight.</p>

        <p>Which habit will you start with? I'd love to hear about your journey on LinkedIn—tag me in your posts about implementing these strategies!</p>
      `
    },
    'goal-setting-science': {
      title: 'The Science of Goal Setting: Why Most People Fail',
      excerpt: 'Learn evidence-based strategies for setting and achieving goals that actually stick, based on psychological research and coaching best practices.',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
      author: 'PConverge Team',
      date: '2024-01-12',
      category: 'Goal Setting',
      readTime: '7 min read',
      content: `
        <p>Research shows that only 8% of people achieve their New Year's resolutions. The problem isn't lack of motivation—it's lack of proper goal-setting methodology. Let's explore what science tells us about effective goal achievement.</p>

        <h3>The SMART Goals Limitation</h3>
        <p>While SMART goals (Specific, Measurable, Achievable, Relevant, Time-bound) are better than vague intentions, they're missing crucial psychological components that drive sustained action.</p>

        <h3>The POWER Framework</h3>
        <p>Based on decades of research, I use the POWER framework with my coaching clients:</p>

        <h4>P - Purpose-Driven</h4>
        <p>Your goals must connect to your deeper values and life purpose. Without this emotional connection, you'll abandon your goals when things get difficult.</p>

        <h4>O - Outcome and Process Focused</h4>
        <p>Set both outcome goals (what you want to achieve) and process goals (what you'll do daily). Process goals are more controllable and build momentum.</p>

        <h4>W - Written and Visualized</h4>
        <p>Writing goals down increases achievement probability by 42%. Visualization activates the same neural pathways as actual performance, priming your brain for success.</p>

        <h4>E - Emotionally Compelling</h4>
        <p>Goals must evoke strong positive emotions. If thinking about your goal doesn't excite you, it won't sustain you through challenges.</p>

        <h4>R - Regularly Reviewed</h4>
        <p>Weekly goal reviews are non-negotiable. This keeps goals top-of-mind and allows for course corrections.</p>

        <h3>The Implementation Intention Strategy</h3>
        <p>Research by Peter Gollwitzer shows that "if-then" planning doubles your chances of goal achievement. Instead of just deciding what to do, decide when and where you'll do it.</p>

        <p>Example: "If it's 6 AM on a weekday, then I will go to the gym before checking my phone."</p>

        <h3>Common Goal-Setting Mistakes</h3>
        <ul>
          <li>Setting too many goals at once (stick to 2-3 maximum)</li>
          <li>Focusing only on outcome, not process</li>
          <li>Not planning for obstacles and setbacks</li>
          <li>Lacking accountability systems</li>
          <li>Not celebrating small wins along the way</li>
        </ul>

        <h3>Your Next Steps</h3>
        <p>Choose one important goal and apply the POWER framework. Write it down, create implementation intentions, and schedule weekly reviews. Remember, goal achievement is a skill that improves with practice.</p>

        <p>What goal will you tackle using these strategies? Share your commitment on LinkedIn and tag me for accountability support!</p>
      `
    },
    'mindful-leadership': {
      title: 'Mindful Leadership in the Digital Age',
      excerpt: 'How modern leaders can cultivate presence, emotional intelligence, and authentic connections in an increasingly connected world.',
      image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
      author: 'PConverge Team',
      date: '2024-01-10',
      category: 'Leadership',
      readTime: '6 min read',
      content: `
        <p>In our hyperconnected world, leaders face unprecedented challenges: constant distractions, information overload, and the pressure to make rapid decisions. Mindful leadership offers a path to navigate these challenges while maintaining authenticity and effectiveness.</p>

        <h3>What is Mindful Leadership?</h3>
        <p>Mindful leadership is the practice of leading with full presence, awareness, and intentionality. It's about being fully engaged in the moment while maintaining perspective on the bigger picture.</p>

        <h3>The Four Pillars of Mindful Leadership</h3>

        <h4>1. Self-Awareness</h4>
        <p>Mindful leaders understand their emotions, triggers, strengths, and blind spots. They regularly check in with themselves and can recognize when stress or emotions might cloud their judgment.</p>

        <h4>2. Present-Moment Attention</h4>
        <p>In meetings, conversations, and decision-making, mindful leaders give their full attention. They resist the urge to multitask and truly listen to understand, not just to respond.</p>

        <h4>3. Emotional Regulation</h4>
        <p>When faced with challenging situations, mindful leaders pause before reacting. They create space between stimulus and response, allowing for more thoughtful and effective actions.</p>

        <h4>4. Compassionate Communication</h4>
        <p>Mindful leaders communicate with empathy and clarity. They consider the impact of their words and choose language that builds rather than breaks down.</p>

        <h3>Practical Strategies for Busy Leaders</h3>

        <h4>The 2-Minute Reset</h4>
        <p>Between meetings, take two minutes to breathe deeply and center yourself. This simple practice prevents the accumulation of stress throughout the day.</p>

        <h4>Mindful Meetings</h4>
        <p>Start meetings with a brief moment of silence or intention-setting. This helps everyone transition from their previous activities and be fully present.</p>

        <h4>The STOP Technique</h4>
        <p>When facing difficult situations:</p>
        <ul>
          <li><strong>S</strong>top what you're doing</li>
          <li><strong>T</strong>ake a breath</li>
          <li><strong>O</strong>bserve your thoughts and emotions</li>
          <li><strong>P</strong>roceed with awareness and intention</li>
        </ul>

        <h4>Digital Boundaries</h4>
        <p>Create technology-free zones and times. This might mean no phones during meals, designated email-free hours, or walking meetings without devices.</p>

        <h3>The Business Case for Mindful Leadership</h3>
        <p>Research shows that mindful leaders:</p>
        <ul>
          <li>Make better decisions under pressure</li>
          <li>Have more engaged and productive teams</li>
          <li>Experience less burnout and stress-related illness</li>
          <li>Build stronger relationships with stakeholders</li>
          <li>Navigate change and uncertainty more effectively</li>
        </ul>

        <h3>Building Your Mindful Leadership Practice</h3>
        <p>Start small. Choose one mindful leadership practice and commit to it for a week. Notice the impact on your stress levels, decision-making, and relationships. Gradually add more practices as they become habitual.</p>

        <p>Remember, mindful leadership isn't about perfection—it's about awareness and continuous improvement. Every moment offers a new opportunity to lead with presence and intention.</p>

        <p>How are you incorporating mindfulness into your leadership style? I'd love to connect and discuss your experiences on LinkedIn!</p>
      `
    }
  };

  const post = blogPosts[postId as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Post Not Found</h2>
          <button
            onClick={onBack}
            className="inline-flex items-center text-blue-600 hover:text-blue-700"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  // Function to share on LinkedIn - primary social platform
  const shareOnLinkedIn = () => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(post.title);
    const summary = encodeURIComponent(post.excerpt);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}&title=${title}&summary=${summary}`, '_blank');
  };

  // Function to share on other platforms
  const shareOnTwitter = () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(`${post.title} - ${post.excerpt}`);
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
  };

  const shareOnFacebook = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header with back button */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={onBack}
            className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-200"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Blog
          </button>
        </div>
      </header>

      {/* Hero image and title section */}
      <div className="relative">
        <div className="aspect-[21/9] overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>
        
        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                {post.category}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              {post.title}
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl">
              {post.excerpt}
            </p>
          </div>
        </div>
      </div>

      {/* Article content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Article meta information */}
        <div className="flex flex-wrap items-center justify-between mb-8 pb-8 border-b border-gray-200">
          <div className="flex items-center space-x-6 mb-4 sm:mb-0">
            <div className="flex items-center text-gray-600">
              <User size={18} className="mr-2" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Calendar size={18} className="mr-2" />
              <span>{new Date(post.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Clock size={18} className="mr-2" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Social sharing buttons - LinkedIn prominently featured */}
          <div className="flex items-center space-x-3">
            <span className="text-gray-600 text-sm mr-2">Share:</span>
            {/* LinkedIn sharing - primary platform */}
            <button
              onClick={shareOnLinkedIn}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
              title="Share on LinkedIn - Our primary platform"
            >
              <Linkedin size={18} className="mr-2" />
              LinkedIn
            </button>
            {/* Other social platforms */}
            <button
              onClick={shareOnTwitter}
              className="p-2 text-gray-600 hover:text-blue-400 transition-colors duration-200"
              title="Share on Twitter"
            >
              <Twitter size={18} />
            </button>
            <button
              onClick={shareOnFacebook}
              className="p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
              title="Share on Facebook"
            >
              <Facebook size={18} />
            </button>
          </div>
        </div>

        {/* Article content with proper typography */}
        <div 
          className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700 prose-strong:text-gray-900"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Call-to-action section */}
        <div className="mt-12 p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Life?
          </h3>
          <p className="text-gray-700 mb-6">
            If this article resonated with you, let's connect! I'd love to hear about your journey and discuss how coaching can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200">
              <Linkedin className="mr-2" size={20} />
              Connect on LinkedIn
            </button>
            <button 
              onClick={onBack}
              className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-200"
            >
              Read More Articles
            </button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;