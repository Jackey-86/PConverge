import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BlogPost from './pages/BlogPost';
import PrivacyPolicy from './pages/PrivacyPolicy';
import FAQ from './pages/FAQ';
import TermsOfService from './pages/TermsOfService';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  // State to manage blog post navigation
  const [currentView, setCurrentView] = useState<'home' | 'blog-post' | 'privacy' | 'faq' | 'terms'>('home');
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
  const handleBackToHome = () => {
    setCurrentView('home');
    setCurrentPostId('');
    // Scroll to top when returning to home
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  // Function to navigate to legal pages
  const handleNavigateToPage = (page: string) => {
    setCurrentView(page as 'privacy' | 'faq' | 'terms');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render blog post page if viewing individual post
  if (currentView === 'blog-post') {
    return <BlogPost postId={currentPostId} onBack={handleBackToHome} />;
  }

  // Render legal pages
  if (currentView === 'privacy') {
    return <PrivacyPolicy onBack={handleBackToHome} />;
  }

  if (currentView === 'faq') {
    return <FAQ onBack={handleBackToHome} />;
  }

  if (currentView === 'terms') {
    return <TermsOfService onBack={handleBackToHome} />;
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
      <Footer onNavigate={handleNavigateToPage} />
    </div>
  );
}

export default App;