import React from 'react';
import { ArrowLeft, Shield, Eye, Lock, UserCheck } from 'lucide-react';

// PRIVACY POLICY PAGE COMPONENT
// This page contains PConverge's privacy policy with comprehensive sections
// All content is customizable and follows standard privacy policy structure

interface PrivacyPolicyProps {
  onBack: () => void; // Function to navigate back to main site
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
  // PRIVACY POLICY SECTIONS
  // Each section covers different aspects of data privacy and user rights
  const sections = [
    {
      icon: Eye,
      title: 'Information We Collect',
      content: `
        <p>We collect information you provide directly to us, such as when you:</p>
        <ul>
          <li>Fill out our contact forms or schedule consultations</li>
          <li>Subscribe to our newsletter or blog updates</li>
          <li>Participate in coaching sessions or programs</li>
          <li>Communicate with us via email, phone, or social media</li>
        </ul>
        <p>This may include your name, email address, phone number, and any information you choose to share during our coaching relationship.</p>
      `
    },
    {
      icon: Lock,
      title: 'How We Use Your Information',
      content: `
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide, maintain, and improve our coaching services</li>
          <li>Communicate with you about appointments, programs, and updates</li>
          <li>Send you newsletters and educational content (with your consent)</li>
          <li>Respond to your inquiries and provide customer support</li>
          <li>Analyze usage patterns to enhance our website and services</li>
        </ul>
        <p>We will never sell, rent, or share your personal information with third parties for marketing purposes without your explicit consent.</p>
      `
    },
    {
      icon: Shield,
      title: 'Data Protection & Security',
      content: `
        <p>We implement appropriate technical and organizational measures to protect your personal information against:</p>
        <ul>
          <li>Unauthorized access, alteration, disclosure, or destruction</li>
          <li>Accidental loss or damage</li>
          <li>Unlawful processing</li>
        </ul>
        <p>Our security measures include encrypted data transmission, secure servers, and regular security assessments. However, no method of transmission over the internet is 100% secure.</p>
      `
    },
    {
      icon: UserCheck,
      title: 'Your Rights & Choices',
      content: `
        <p>You have the right to:</p>
        <ul>
          <li>Access, update, or delete your personal information</li>
          <li>Opt-out of marketing communications at any time</li>
          <li>Request a copy of the data we hold about you</li>
          <li>Object to processing of your personal information</li>
          <li>Lodge a complaint with relevant data protection authorities</li>
        </ul>
        <p>To exercise these rights, please contact us at privacy@pconverge.com or use the contact information provided below.</p>
      `
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* HEADER SECTION */}
      {/* Fixed header with back navigation and page title */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={onBack}
            className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-200"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Home
          </button>
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* PAGE TITLE SECTION */}
        {/* Hero-style title with icon and description */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="text-white" size={32} />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how PConverge collects, uses, and protects your personal information.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Last updated: January 15, 2024
          </p>
        </div>

        {/* PRIVACY POLICY SECTIONS */}
        {/* Each section has an icon, title, and detailed content */}
        <div className="space-y-12">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {section.title}
                  </h2>
                </div>
                <div 
                  className="prose prose-lg max-w-none prose-p:text-gray-700 prose-li:text-gray-700 prose-ul:space-y-2"
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
              </div>
            );
          })}
        </div>

        {/* CONTACT INFORMATION SECTION */}
        {/* How users can contact regarding privacy concerns */}
        <div className="mt-16 bg-white border-2 border-blue-100 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Contact Us About Privacy
          </h2>
          <p className="text-gray-700 mb-6">
            If you have any questions about this Privacy Policy or our data practices, please contact us:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-blue-600">privacy@pconverge.com</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-700">+1 (555) 123-4567</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
              <p className="text-gray-700">
                PConverge Coaching<br />
                New York, NY<br />
                United States
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Response Time</h3>
              <p className="text-gray-700">We respond to privacy inquiries within 48 hours</p>
            </div>
          </div>
        </div>

        {/* BACK TO HOME BUTTON */}
        {/* Additional navigation option at bottom of page */}
        <div className="mt-12 text-center">
          <button
            onClick={onBack}
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            <ArrowLeft className="mr-2" size={20} />
            Return to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;