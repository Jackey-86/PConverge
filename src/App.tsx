import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BlogPost from './pages/BlogPost';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  // State to manage blog post navigation
  const [currentView, setCurrentView] = useState<'home' | 'blog-post'>('home');
  const [currentPostId, setCurrentPostId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'testimonials', 'blog', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Function to navigate to individual blog post
  const handleReadMore = (postId: string) => {
    setCurrentPostId(postId);
    setCurrentView('blog-post');
    // Scroll to top when navigating to blog post
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Function to navigate back to main page
  const handleBackToBlog = () => {
    setCurrentView('home');
    setCurrentPostId('');
    // Scroll to blog section when returning
    setTimeout(() => {
      scrollToSection('blog');
    }, 100);
  };

  // Render blog post page if viewing individual post
  if (currentView === 'blog-post') {
    return <BlogPost postId={currentPostId} onBack={handleBackToBlog} />;
  }

  // Render main website
  return (
    <div className="min-h-screen bg-white">
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />
      <main>
        <Hero scrollToSection={scrollToSection} />
        <About />
        <Testimonials />
        <Blog onReadMore={handleReadMore} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;