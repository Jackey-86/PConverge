import React, { useState } from 'react';
import { ArrowLeft, Plus, Minus, HelpCircle } from 'lucide-react';

// FAQ PAGE COMPONENT
// Comprehensive FAQ page with expandable questions and answers
// All content is customizable for coaching business needs

interface FAQProps {
  onBack: () => void; // Function to navigate back to main site
}

const FAQ: React.FC<FAQProps> = ({ onBack }) => {
  // STATE FOR MANAGING EXPANDED FAQ ITEMS
  // Tracks which FAQ items are currently expanded/collapsed
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  // FUNCTION TO TOGGLE FAQ ITEM EXPANSION
  // Adds or removes item from expanded items array
  const toggleItem = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  // FAQ DATA STRUCTURE
  // Organized by categories with questions and detailed answers
  const faqCategories = [
    {
      title: 'Getting Started',
      questions: [
        {
          question: 'What is life coaching and how can it help me?',
          answer: `Life coaching is a collaborative partnership focused on helping you achieve your personal and professional goals. Unlike therapy, which often focuses on healing past wounds, coaching is forward-focused and action-oriented. Our coaches help you identify what you want, create a plan to get there, and provide accountability and support along the way. Whether you're looking to advance your career, improve relationships, build confidence, or create better work-life balance, coaching provides the tools and guidance to make lasting positive changes.`
        },
        {
          question: 'How do I know if coaching is right for me?',
          answer: `Coaching is ideal if you're motivated to make positive changes in your life, willing to take action, and open to new perspectives. You might benefit from coaching if you feel stuck in certain areas, want to achieve specific goals, need accountability, or desire to maximize your potential. During our free consultation, we'll discuss your situation and determine if coaching aligns with your needs and goals.`
        },
        {
          question: 'What\'s the difference between coaching and therapy?',
          answer: `While both are valuable, they serve different purposes. Therapy typically focuses on healing past traumas, treating mental health conditions, and understanding why certain patterns exist. Coaching is future-focused, concentrating on where you want to go and how to get there. Coaches help you set goals, develop strategies, and maintain accountability. If you're dealing with serious mental health issues, we recommend starting with therapy and can provide referrals to qualified therapists.`
        }
      ]
    },
    {
      title: 'Coaching Process',
      questions: [
        {
          question: 'What happens during a typical coaching session?',
          answer: `Each session is tailored to your needs, but typically includes: reviewing progress since the last session, discussing current challenges or opportunities, exploring new insights or perspectives, setting specific action steps, and planning for accountability. Sessions are conversational and collaborative - you set the agenda based on what's most important to you. We use proven coaching techniques, powerful questions, and practical tools to help you gain clarity and move forward.`
        },
        {
          question: 'How long does the coaching process take?',
          answer: `The duration varies based on your goals and preferences. Some clients see significant progress in 3-6 months, while others prefer longer-term partnerships. We offer flexible arrangements from single sessions to year-long programs. During our initial consultation, we'll discuss your goals and recommend a timeframe that makes sense for your situation. Remember, coaching is an investment in yourself, and lasting change often takes time.`
        },
        {
          question: 'How often do we meet and for how long?',
          answer: `Most clients meet weekly or bi-weekly for 45-60 minutes. This frequency provides enough time between sessions to implement action steps while maintaining momentum. Some clients prefer monthly sessions for ongoing support, while others benefit from more intensive weekly meetings during periods of significant change. We'll work together to find a schedule that fits your needs and lifestyle.`
        }
      ]
    },
    {
      title: 'Practical Information',
      questions: [
        {
          question: 'Do you offer virtual coaching sessions?',
          answer: `Yes! We offer both in-person and virtual coaching sessions via secure video conferencing. Many clients prefer virtual sessions for their convenience and flexibility. Virtual coaching is just as effective as in-person sessions and allows us to work together regardless of location. We use professional video conferencing platforms that ensure privacy and high-quality audio/video.`
        },
        {
          question: 'What are your rates and payment options?',
          answer: `Our coaching rates vary based on the program and duration. We offer individual sessions, package deals, and monthly programs to fit different budgets and needs. Payment can be made via credit card, bank transfer, or payment plans for longer programs. We believe coaching should be accessible, so we're happy to discuss options that work for your financial situation. Contact us for detailed pricing information.`
        },
        {
          question: 'What if I need to cancel or reschedule a session?',
          answer: `We understand that life happens! We ask for at least 24 hours notice for cancellations or rescheduling to avoid charges. Emergency situations are handled case-by-case. Our goal is to be flexible while maintaining the structure that makes coaching effective. We'll work together to find alternative times that work for both of us.`
        }
      ]
    },
    {
      title: 'Results & Expectations',
      questions: [
        {
          question: 'What kind of results can I expect from coaching?',
          answer: `Results vary based on your goals, commitment level, and willingness to take action. Common outcomes include: increased clarity about goals and priorities, improved confidence and self-awareness, better work-life balance, enhanced communication skills, career advancement, stronger relationships, and reduced stress. The key to success is your commitment to the process and willingness to step outside your comfort zone.`
        },
        {
          question: 'What if I don\'t see progress?',
          answer: `Progress in coaching isn't always linear, and sometimes breakthroughs happen after periods of seeming stagnation. If you're not seeing the progress you'd like, we'll reassess your goals, adjust our approach, and explore what might be blocking your progress. Sometimes the issue is unrealistic expectations, and sometimes we need to try different strategies. Open communication about your experience is crucial for coaching success.`
        },
        {
          question: 'Is coaching confidential?',
          answer: `Absolutely. Everything discussed in our coaching sessions is strictly confidential. We adhere to professional coaching ethics and will never share your information without your explicit consent, except in rare cases where there's imminent danger to yourself or others. This confidentiality creates a safe space for you to explore challenges, fears, and goals openly and honestly.`
        }
      ]
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
            <HelpCircle className="text-white" size={32} />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our coaching services, process, and what you can expect from working with PConverge.
          </p>
        </div>

        {/* FAQ CATEGORIES AND QUESTIONS */}
        {/* Organized by category with expandable question/answer pairs */}
        <div className="space-y-12">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8">
              {/* CATEGORY TITLE */}
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                {category.title}
              </h2>
              
              {/* QUESTIONS IN CATEGORY */}
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const globalIndex = categoryIndex * 100 + questionIndex; // Unique index across all categories
                  const isExpanded = expandedItems.includes(globalIndex);
                  
                  return (
                    <div key={questionIndex} className="bg-white rounded-xl shadow-sm border border-gray-100">
                      {/* QUESTION BUTTON */}
                      {/* Clickable header that toggles answer visibility */}
                      <button
                        onClick={() => toggleItem(globalIndex)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 rounded-xl"
                      >
                        <h3 className="text-lg font-semibold text-gray-900 pr-4">
                          {faq.question}
                        </h3>
                        {/* EXPAND/COLLAPSE ICON */}
                        {isExpanded ? (
                          <Minus className="text-blue-600 flex-shrink-0" size={24} />
                        ) : (
                          <Plus className="text-blue-600 flex-shrink-0" size={24} />
                        )}
                      </button>
                      
                      {/* ANSWER CONTENT */}
                      {/* Conditionally rendered based on expanded state */}
                      {isExpanded && (
                        <div className="px-6 pb-6">
                          <div className="pt-4 border-t border-gray-100">
                            <p className="text-gray-700 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* CONTACT SECTION */}
        {/* Encourages users to reach out with additional questions */}
        <div className="mt-16 bg-white border-2 border-blue-100 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            We're here to help! If you don't see your question answered above, please don't hesitate to reach out. 
            We offer free 30-minute consultations to discuss your specific situation and how coaching might help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200">
              Schedule Free Consultation
            </button>
            <button 
              onClick={onBack}
              className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-200"
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* BACK TO HOME BUTTON */}
        {/* Additional navigation option at bottom of page */}
        <div className="mt-12 text-center">
          <button
            onClick={onBack}
            className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors duration-200"
          >
            <ArrowLeft className="mr-2" size={20} />
            Return to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;