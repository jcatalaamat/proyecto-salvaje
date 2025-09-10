import React, { useState } from 'react';
import { motion } from 'framer-motion';

const timelinePhases = [
  {
    id: 'phase1',
    title: 'Phase 1',
    period: 'April to February',
    items: [
      'Finding aligned investment and partnerships',
      "Creation of the project's web platform",
      'Formation of the NGO and DAO structures',
      'May 1: $50K payment to secure the land',
      'September 1: $200K payment for full legal title',
      'Legal structure to manage land and DAO integration'
    ],
    active: true
  },
  {
    id: 'phase2',
    title: 'Phase 2',
    period: 'February to May',
    items: [
      'First buildings begin — starting with three private houses',
      'Continued development of foundational infrastructure'
    ]
  },
  {
    id: 'year2',
    title: 'Year 2',
    period: '',
    items: [
      'Construction of the larger community infrastructure begins'
    ]
  },
  {
    id: 'year3',
    title: 'Year 3',
    period: '',
    items: [
      'Launch of immersive workshops and full educational programming'
    ]
  }
];

export default function JoinSection() {
  const [activePhase, setActivePhase] = useState('phase1');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: 'general',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to email instead of form submission
    const subject = `${formData.interest} - Interest from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AInterest: ${formData.interest}%0D%0A%0D%0A${formData.message}`;
    window.open(`mailto:info@proyectosalvaje.com?subject=${encodeURIComponent(subject)}&body=${body}`, '_blank');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      interest: 'general',
      message: ''
    });
  };

  return (
    <section id="join" className="py-24 relative overflow-hidden">
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-black-600 uppercase tracking-wider text-sm font-semibold mb-6">The Sacred Invitation</span>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">Join Our Community</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed italic">
          This is a call to those who feel the fire — to stand for truth, to care for the land, and to embody sacred leadership.
          If you feel the resonance, there are many ways to offer your gifts and become part of this living vision.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Timeline & Phases
          </h3>
          
          {/* Timeline navigation */}
          <div className="flex justify-between mb-8 overflow-x-auto py-2">
            {timelinePhases.map((phase, index) => (
              <button
                key={phase.id}
                onClick={() => setActivePhase(phase.id)}
                className={`relative flex-shrink-0 flex flex-col items-center min-w-[100px] px-3 py-2 transition-all ${
                  activePhase === phase.id ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <span className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${
                  activePhase === phase.id ? 'bg-gray-200 text-black-600' : 'bg-gray-200 text-gray-700'
                }`}
                >
                  {index + 1}
                </span>
                <span className="font-medium text-sm">{phase.title}</span>
                {phase.period && (
                  <span className="text-xs">{phase.period}</span>
                )}
                
                {/* Connector line */}
                {index < timelinePhases.length - 1 && (
                  <div className="absolute top-5 left-[calc(50%+18px)] w-[calc(100%-36px)] h-0.5 bg-gray-200">
                    <div 
                      className={`h-full transition-all text-black-600 ${
                        timelinePhases.findIndex(p => p.id === activePhase) > index ? 'w-full' : 'w-0'
                      }`}
                    />
                  </div>
                )}
              </button>
            ))}
          </div>
          
          {/* Active phase content */}
          <div className="rounded-2xl border border-gray-200 shadow-lg p-8">
            {timelinePhases.map((phase) => (
              <div 
                key={phase.id}
                className={`transition-opacity duration-300 ${
                  activePhase === phase.id ? 'block' : 'hidden'
                }`}
              >
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  {phase.title} {phase.period && `(${phase.period})`}
                </h4>
                
                <ul className="space-y-3">
                  {phase.items.map((item, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.15 }}
                      className="flex items-start"
                    >
                      <span className="text-black-600 font-bold mr-2">→</span>
                      <span className="text-gray-600">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Contact form and info */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            id="contact-form"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Structure & Contributions
            </h3>
            
            <p className="text-gray-600 mb-6">
              The legal structure will consist of a Mexican non-profit organization and a DAO (Decentralized Autonomous Organization), 
              using blockchain technology to provide full transparency around decision-making and resource flow.
            </p>
            
            <p className="text-gray-600 mb-6">
              We are calling for three founding families as land stewards ($180K each), 10 contributors 
              ($50K-$75K), and aligned impact investors to support key infrastructure development.
            </p>
            
            {/* Enhanced form with softer styling and note */}
            <div className="p-6 md:p-8 rounded-2xl border border-gray-200 shadow-lg">
              {/* Added note above form */}
              <div className="flex items-center mb-6 text-gray-600 text-sm italic">
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>We read every message with care and intention</span>
              </div>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-5">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition-all duration-300 hover:border-gray-300"
                  />
                </div>
                
                <div className="mb-5">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition-all duration-300 hover:border-gray-300"
                  />
                </div>
                
                <div className="mb-5">
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Interest
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition-all duration-300 hover:border-gray-300"
                  >
                    <option value="general">General Interest</option>
                    <option value="community">Community Member</option>
                    <option value="investor">Aligned Investor</option>
                    <option value="partner">Strategic Partner</option>
                    <option value="land-steward">Land Steward</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Tell us what draws you to this project..."
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition-all duration-300 hover:border-gray-300"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full md:w-auto px-8 py-3 text-black-600 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <span className="relative z-10">Send Message</span>
                  <span className="absolute inset-0 bg-white opacity-0 rounded-full transition-opacity duration-300 hover:opacity-10"></span>
                </button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Ways to Participate
            </h3>
            
            <div className="space-y-6">
              <div className="p-6 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Founding Land Stewards</h4>
                <p className="text-gray-600">
                  For those ready to live on the land and contribute to building our regenerative village from the ground up. 
                  Requires financial commitment and long-term dedication.
                </p>
              </div>
              
              <div className="p-6 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Aligned Investors</h4>
                <p className="text-gray-600">
                  Support our vision financially while earning a return in alignment with regenerative principles.
                  Investments start at $10,000 with various participation levels.
                </p>
              </div>
              
              <div className="p-6 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Community Contributors</h4>
                <p className="text-gray-600">
                  Share your skills, time, and wisdom to help our community thrive. From permaculture
                  design to governance to education, we welcome your gifts.
                </p>
              </div>
              
              <div className="p-6 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Future Visitors & Participants</h4>
                <p className="text-gray-600">
                  Join us for educational programs, retreats, and experiences once our village is established.
                  Subscribe to stay informed about upcoming opportunities.
                </p>
              </div>
            </div>
            
            <div className="mt-8 p-6 rounded-2xl border border-gray-200 shadow-lg">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Connect With Us</h4>
              <div className="flex space-x-4">
                <a 
                  href="mailto:info@proyectosalvaje.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z" />
                  </svg>
                </a>
                <a 
                  href="mailto:info@proyectosalvaje.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a 
                  href="mailto:info@proyectosalvaje.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a 
                  href="mailto:info@proyectosalvaje.com"
                  target="_blank" 
                  rel="noopener noreferrer"  
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a 
                  href="mailto:info@proyectosalvaje.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 