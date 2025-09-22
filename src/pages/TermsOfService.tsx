import React from 'react';
import { ArrowLeft, FileText, Scale, AlertTriangle, CheckCircle } from 'lucide-react';

// TERMS OF SERVICE PAGE COMPONENT
// Comprehensive terms of service for coaching business
// All content is customizable and follows standard legal structure

interface TermsOfServiceProps {
  onBack: () => void; // Function to navigate back to main site
}

const TermsOfService: React.FC<TermsOfServiceProps> = ({ onBack }) => {
  // TERMS OF SERVICE SECTIONS
  // Each section covers different legal aspects of the coaching relationship
  const sections = [
    {
      icon: FileText,
      title: 'Service Description',
      content: `
        <p>PConverge provides professional life and business coaching services designed to help clients achieve personal and professional goals. Our services include:</p>
        <ul>
          <li>One-on-one coaching sessions via video conference or in-person</li>
          <li>Goal setting and accountability support</li>
          <li>Personal development strategies and tools</li>
          <li>Career transition and leadership coaching</li>
          <li>Educational resources and materials</li>
        </ul>
        <p>Coaching is not therapy, counseling, or medical treatment. We do not diagnose or treat mental health conditions.</p>
      `
    },
    {
      icon: Scale,
      title: 'Client Responsibilities',
      content: `
        <p>As a coaching client, you agree to:</p>
        <ul>
          <li>Participate actively and honestly in coaching sessions</li>
          <li>Complete agreed-upon action steps between sessions</li>
          <li>Communicate openly about challenges and progress</li>
          <li>Arrive on time for scheduled sessions</li>
          <li>Provide 24-hour notice for cancellations when possible</li>
          <li>Take full responsibility for your decisions and actions</li>
          <li>Respect the coaching process and professional boundaries</li>
        </ul>
        <p>Your success in coaching depends largely on your commitment to the process and willingness to take action.</p>
      `
    },
    {
      icon: AlertTriangle,
      title: 'Limitations & Disclaimers',
      content: `
        <p>Please understand the following limitations of our coaching services:</p>
        <ul>
          <li>Coaching is not a substitute for professional medical, legal, or financial advice</li>
          <li>Results cannot be guaranteed and vary based on individual effort and circumstances</li>
          <li>We are not licensed therapists, counselors, or healthcare providers</li>
          <li>Coaching does not treat mental health conditions or psychological disorders</li>
          <li>You are responsible for implementing coaching insights and strategies</li>
        </ul>
        <p>If you are experiencing mental health issues, we strongly recommend consulting with a licensed mental health professional.</p>
      `
    },
    {
      icon: CheckCircle,
      title: 'Payment & Cancellation Policy',
      content: `
        <p>Payment and cancellation terms:</p>
        <ul>
          <li>Payment is due at the time of booking or as agreed in your coaching package</li>
          <li>We accept major credit cards and bank transfers</li>
          <li>Refunds are considered on a case-by-case basis within 7 days of purchase</li>
          <li>24-hour notice is required for session cancellations to avoid charges</li>
          <li>No-shows will be charged the full session fee</li>
          <li>Package sessions expire 12 months from purchase date</li>
        </ul>
        <p>We reserve the right to terminate the coaching relationship if payment terms are not met or if the relationship is not productive for either party.</p>
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
            <Scale className="text-white" size={32} />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These terms govern your use of PConverge coaching services. Please read them carefully before engaging our services.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Last updated: January 15, 2024
          </p>
        </div>

        {/* TERMS OF SERVICE SECTIONS */}
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

        {/* ADDITIONAL TERMS SECTION */}
        {/* Important legal clauses and agreements */}
        <div className="mt-16 space-y-8">
          <div className="bg-white border-2 border-amber-200 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <AlertTriangle className="text-amber-500 mr-3" size={28} />
              Important Legal Information
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong>Confidentiality:</strong> All information shared during coaching sessions is confidential and will not be disclosed to third parties without your written consent, except as required by law.
              </p>
              <p>
                <strong>Intellectual Property:</strong> All coaching materials, methodologies, and resources provided remain the intellectual property of PConverge and may not be reproduced or distributed without permission.
              </p>
              <p>
                <strong>Limitation of Liability:</strong> PConverge's liability is limited to the amount paid for coaching services. We are not liable for indirect, consequential, or punitive damages.
              </p>
              <p>
                <strong>Governing Law:</strong> These terms are governed by the laws of New York State. Any disputes will be resolved through binding arbitration.
              </p>
            </div>
          </div>

          {/* AGREEMENT ACKNOWLEDGMENT */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Agreement Acknowledgment
            </h2>
            <p className="text-gray-700 mb-6">
              By engaging PConverge coaching services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. You also confirm that you are at least 18 years old and have the legal capacity to enter into this agreement.
            </p>
            <p className="text-gray-700">
              If you do not agree with any part of these terms, please do not use our services. We reserve the right to update these terms at any time, and continued use of our services constitutes acceptance of any changes.
            </p>
          </div>
        </div>

        {/* CONTACT INFORMATION SECTION */}
        {/* How users can contact regarding terms questions */}
        <div className="mt-16 bg-white border-2 border-blue-100 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Questions About These Terms?
          </h2>
          <p className="text-gray-700 mb-6">
            If you have any questions about these Terms of Service or need clarification on any points, please contact us:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-blue-600">legal@pconverge.com</p>
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
              <p className="text-gray-700">We respond to legal inquiries within 48 hours</p>
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

export default TermsOfService;