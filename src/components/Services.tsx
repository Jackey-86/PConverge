import React from 'react';
import { User, Briefcase, Users, Brain, Clock, CheckCircle } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: User,
      title: 'Personal Life Coaching',
      description: 'One-on-one sessions focused on personal growth, relationships, and life balance.',
      features: ['Goal Setting & Achievement', 'Mindset Transformation', 'Work-Life Balance', 'Confidence Building'],
      price: 'From $150/session',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Briefcase,
      title: 'Career Development',
      description: 'Professional coaching to accelerate your career and leadership potential.',
      features: ['Leadership Skills', 'Career Transition', 'Performance Optimization', 'Executive Presence'],
      price: 'From $200/session',
      gradient: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: Users,
      title: 'Team Coaching',
      description: 'Group sessions designed to improve team dynamics and organizational culture.',
      features: ['Team Building', 'Communication Skills', 'Conflict Resolution', 'Culture Development'],
      price: 'From $500/session',
      gradient: 'from-amber-500 to-amber-600'
    },
    {
      icon: Brain,
      title: 'Mindfulness & Wellness',
      description: 'Holistic approach to mental well-being and stress management.',
      features: ['Stress Reduction', 'Mindfulness Training', 'Emotional Intelligence', 'Resilience Building'],
      price: 'From $120/session',
      gradient: 'from-emerald-500 to-emerald-600'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Coaching Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive coaching solutions tailored to your unique needs and goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${service.gradient}`} />
                <div className="p-8">
                  <div className={`w-16 h-16 mb-6 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center`}>
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={20} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900">
                      {service.price}
                    </span>
                    <button className={`px-6 py-3 bg-gradient-to-r ${service.gradient} text-white font-semibold rounded-lg hover:opacity-90 transition-opacity duration-200`}>
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Clock className="text-blue-600 mr-3" size={32} />
              <h3 className="text-2xl font-bold text-gray-900">
                Flexible Scheduling Options
              </h3>
            </div>
            <p className="text-gray-600 mb-6">
              Choose from in-person sessions, virtual meetings, or hybrid coaching programs that fit your lifestyle and preferences.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">60-90</div>
                <div className="text-gray-600">Minutes per session</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-600 mb-2">24/7</div>
                <div className="text-gray-600">Support availability</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 mb-2">100%</div>
                <div className="text-gray-600">Satisfaction guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;