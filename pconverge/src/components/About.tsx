import React from 'react';
import { Award, Users, Target, Heart } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Users, label: 'Clients Helped', value: '500+' },
    { icon: Award, label: 'Years Experience', value: '10+' },
    { icon: Target, label: 'Success Rate', value: '95%' },
    { icon: Heart, label: 'Satisfaction', value: '100%' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About PConverge
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering individuals and organizations to reach their full potential through proven coaching methodologies and personalized guidance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Meet Your Coach
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              With over a decade of experience in personal and professional development, I've dedicated my career to helping people overcome obstacles and achieve their dreams. My approach combines evidence-based techniques with compassionate guidance to create sustainable change.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I believe that everyone has untapped potential waiting to be discovered. Through our coaching partnership, we'll work together to identify your goals, overcome limiting beliefs, and create a roadmap for success that aligns with your values and aspirations.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                Certified Life Coach
              </span>
              <span className="px-4 py-2 bg-cyan-100 text-cyan-800 rounded-full text-sm font-medium">
                Leadership Expert
              </span>
              <span className="px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                Mindfulness Practitioner
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="w-12 h-12 mx-auto mb-4 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Icon className="text-white" size={24} />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;