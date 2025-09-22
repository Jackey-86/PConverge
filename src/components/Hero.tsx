import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Transform Your Life with
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Expert Coaching
              </span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              Unlock your potential and achieve your goals with personalized coaching sessions designed to create lasting change in your personal and professional life.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start Your Journey
                <ArrowRight className="ml-2" size={20} />
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                <Play className="mr-2" size={20} />
                Learn More
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-400 shadow-2xl transform rotate-3 hover:rotate-6 transition-transform duration-300">
              <div className="absolute inset-4 bg-white rounded-xl flex items-center justify-center p-8">
                <img
                  src="https://media.licdn.com/dms/image/v2/C4D0BAQE7tgZ1VWHjyA/company-logo_200_200/company-logo_200_200/0/1679762149154/petroconverge_logo?e=1755734400&v=beta&t=SOx5rUlCdKKbQqJql1Dx0wWtOmLm9CO8FYjtb01QsZU"
                  alt="PConverge Logo"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;