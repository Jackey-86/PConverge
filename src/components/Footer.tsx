import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

// FOOTER COMPONENT PROPS
// onNavigate: Function to handle navigation to legal pages (privacy, terms, faq)
interface FooterProps {
  onNavigate?: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Approach', href: '#about' },
      { name: 'Success Stories', href: '#testimonials' },
      { name: 'Blog & Resources', href: '#blog' },
    ],
    support: [
      { name: 'Contact Us', href: '#contact' },
      { name: 'FAQ', href: 'faq' },
      { name: 'Privacy Policy', href: 'privacy' },
      { name: 'Terms of Service', href: 'terms' },
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              PConverge
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Empowering individuals and organizations to reach their full potential through personalized coaching and proven methodologies.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <Mail className="text-blue-400 mr-3" size={18} />
                <span className="text-gray-400">hello@pconverge.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="text-blue-400 mr-3" size={18} />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="text-blue-400 mr-3" size={18} />
                <span className="text-gray-400">New York, NY</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => link.href.startsWith('#') ? 
                      document.getElementById(link.href.slice(1))?.scrollIntoView({ behavior: 'smooth' }) : 
                      onNavigate?.(link.href)
                    }
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-semibold mb-2">Stay Connected</h4>
              <p className="text-gray-400">Get weekly coaching tips and insights delivered to your inbox.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white placeholder-gray-400"
              />
              <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm">
              © {currentYear} PConverge. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button onClick={() => onNavigate?.('privacy')} className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </button>
              <button onClick={() => onNavigate?.('terms')} className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Terms of Service
              </button>
              <button onClick={() => onNavigate?.('faq')} className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                FAQ
              </button>
              <button onClick={() => onNavigate?.('privacy')} className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;