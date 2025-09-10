import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Indigenous wisdom quotes
const indigenousWisdom = [
  {
    quote: "We are the land, and the land is us. What we do to the land, we do to ourselves.",
    attribution: "Indigenous wisdom"
  },
  {
    quote: "We do not inherit the earth from our ancestors; we borrow it from our children.",
    attribution: "Native American proverb"
  },
  {
    quote: "The land is sacred. These words are at the core of your being. The land is our mother, the rivers our blood, the air our breath and the forest our mind.",
    attribution: "Ancestral teaching"
  }
];

// Indigenous collaboration principles
const collaborationPrinciples = [
  {
    id: "employment",
    title: "Employment",
    description: "Offering meaningful employment opportunities to local indigenous community members."
  },
  {
    id: "workshops",
    title: "Free Workshops",
    description: "Providing free access to workshops and educational programs for indigenous participants."
  },
  {
    id: "education",
    title: "Educational Offerings",
    description: "Creating educational offerings for children and adults including permaculture, health, and trade skills."
  },
  {
    id: "fundraising",
    title: "Community Fundraisers",
    description: "Hosting community fundraiser events that benefit local indigenous initiatives."
  }
];

// Ceremony-based approaches
const ceremonialPractices = [
  {
    id: "land",
    title: "Land Ceremonies",
    description: "Rituals to honor and connect with the land before making changes to it."
  },
  {
    id: "seasons",
    title: "Seasonal Celebrations",
    description: "Marking the turning of seasons and natural cycles with community gatherings."
  },
  {
    id: "transitions",
    title: "Transition Rites",
    description: "Ceremonies that honor significant personal and community transitions."
  },
  {
    id: "gratitude",
    title: "Gratitude Practices",
    description: "Regular expressions of thanks to the land, waters, and all beings."
  }
];

export default function IndigenousStewardshipSection() {
  const sectionRef = useRef(null);
  const quoteRef = useRef(null);
  const principlesRef = useRef(null);
  const practicesRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Register ScrollTrigger plugin (only run on client)
    gsap.registerPlugin(ScrollTrigger);
    
    // Animate the wisdom quote
    const quoteElements = quoteRef.current.querySelectorAll('.wisdom-quote');
    
    gsap.fromTo(quoteElements, 
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: quoteRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Animate the principles
    const principleElements = principlesRef.current.querySelectorAll('.principle-card');
    
    gsap.fromTo(principleElements, 
      { opacity: 0, x: -30 },
      { 
        opacity: 1, 
        x: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: principlesRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Animate the ceremonial practices
    const practiceElements = practicesRef.current.querySelectorAll('.practice-card');
    
    gsap.fromTo(practiceElements, 
      { opacity: 0, x: 30 },
      { 
        opacity: 1, 
        x: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: practicesRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Animate the image
    gsap.fromTo(imageRef.current, 
      { opacity: 0, scale: 0.9 },
      { 
        opacity: 1, 
        scale: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      }
    );

    return () => {
      // Clean up ScrollTriggers
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="indigenous-integration" className="py-24 relative overflow-hidden">
      
      <div className="max-w-6xl mx-auto px-4" ref={sectionRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-black-600 uppercase tracking-wider text-sm font-semibold mb-6">Ancient Wisdom, Modern Times</span>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">Indigenous Integration</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are committed to respectful and reciprocal relationships with local communities. Our integration 
            approach focuses on mutual benefit and genuine cross-cultural exchange.
          </p>
        </motion.div>

        {/* Wisdom Quotes Carousel with enhanced mobile styling */}
        <div className="mb-20 relative" ref={quoteRef}>
          <div className="max-w-4xl mx-auto px-6 md:px-8 py-10 md:py-12 rounded-2xl border border-gray-200 shadow-lg">
            {indigenousWisdom.map((item, index) => (
              <div key={index} className="wisdom-quote text-center mb-8 last:mb-0">
                <p className="text-xl md:text-2xl italic text-gray-800 mb-4 leading-relaxed">"{item.quote}"</p>
                <p className="text-gray-600 font-medium">{item.attribution}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Text content with better structure and visual elements */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          {/* Left column - Our Values */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="p-6 md:p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Values</h3>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              We approach our relationship with indigenous wisdom with deep reverence and a commitment to ethical 
              collaboration. This project stands firmly against cultural appropriation and extraction, 
              seeking instead to honor indigenous sovereignty and build reciprocal relationships.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              Our core values include respect for traditional knowledge, recognition of indigenous land 
              stewardship, and a commitment to fair exchange that benefits the communities we learn from.
            </p>
          </motion.div>
          
          {/* Right column - Our Approach */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="p-6 md:p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Approach</h3>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              We are stepping out of various forms of cultural appropriation and looking for sustainable ways to engage 
              in a decolonized dialogue with indigenous communities and repressed minorities, reclaiming a grounded approach 
              to the sacred.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              Through ceremony, sustainable practices, and deep listening, we aim to reintegrate the spiritual 
              dimension of land stewardship that has been preserved by indigenous cultures worldwide.
            </p>
          </motion.div>
        </div>

        {/* Principles and Practices with mobile-optimized grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Collaboration Principles */}
          <div ref={principlesRef} className="mb-10 md:mb-0">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Guiding Principles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {collaborationPrinciples.map((principle, index) => (
                <div 
                  key={principle.id}
                  className="principle-card p-5 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{principle.title}</h4>
                  <p className="text-gray-600 text-sm">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Ceremonial Practices */}
          <div ref={practicesRef}>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Ceremonial Practices</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ceremonialPractices.map((practice, index) => (
                <div 
                  key={practice.id}
                  className="practice-card p-5 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{practice.title}</h4>
                  <p className="text-gray-600 text-sm">{practice.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Added image with natural elements */}
        <div className="mt-16 text-center" ref={imageRef}>
          <div className="inline-block relative">
            <div className="w-full md:w-[80%] max-w-2xl mx-auto h-[300px] bg-[url('/photos/D55D941D-553E-4EAF-B84B-6173EDF65E4A.jpg')] bg-cover bg-center rounded-2xl shadow-lg overflow-hidden">
              <div className="absolute inset-0 bg-gray-900/20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 