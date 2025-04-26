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
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-earth-pattern opacity-20"></div>
        <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px]">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path fill="var(--color-amber-gold)" d="M42.8,-73.2C56.9,-66.7,70.5,-58.2,79.4,-45.5C88.3,-32.7,92.4,-16.3,90.2,-1.3C88.1,13.8,79.7,27.6,70.6,40.4C61.5,53.2,51.8,65,39.5,74.8C27.2,84.7,13.6,92.6,-0.7,93.8C-15,95,-30,89.5,-43.7,81.1C-57.3,72.8,-69.7,61.6,-77.5,47.4C-85.3,33.3,-88.5,16.6,-87.6,0.5C-86.7,-15.6,-81.7,-31.3,-73.1,-44.9C-64.5,-58.6,-52.2,-70.2,-38.3,-76.8C-24.4,-83.4,-12.2,-84.9,1,-86.6C14.2,-88.2,28.6,-79.8,42.8,-73.2Z" transform="translate(100 100)" />
          </svg>
        </div>
        <div className="absolute bottom-[10%] left-[5%] w-[250px] h-[250px]">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path fill="var(--color-clay)" d="M39.7,-51.1C52.9,-45.9,65.9,-36.2,73.4,-22.7C80.8,-9.1,82.7,8.3,77.5,23.1C72.3,37.9,60,50.1,45.7,59.9C31.4,69.7,15.7,77.1,0.7,76.2C-14.3,75.3,-28.5,66.2,-39.9,55.3C-51.3,44.4,-59.8,31.7,-65.4,17.1C-71,2.4,-73.7,-14.1,-67.5,-26.1C-61.3,-38.1,-46.2,-45.6,-32.5,-50.6C-18.8,-55.6,-6.3,-58.1,5.9,-55.8C18,-53.6,26.5,-56.4,39.7,-51.1Z" transform="translate(100 100)" />
          </svg>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4" ref={sectionRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-earth-600 uppercase tracking-[0.25em] text-sm font-medium mb-6">Ancient Wisdom, Modern Times</span>
          <h2 className="section-heading mb-8">Indigenous Integration</h2>
          <p className="text-xl text-earth-800 max-w-3xl mx-auto leading-relaxed font-light">
            We are committed to respectful and reciprocal relationships with local communities. Our integration 
            approach focuses on mutual benefit and genuine cross-cultural exchange.
          </p>
        </motion.div>

        {/* Wisdom Quotes Carousel with enhanced mobile styling */}
        <div className="mb-20 relative" ref={quoteRef}>
          <div className="max-w-4xl mx-auto px-6 md:px-8 py-10 md:py-12 bg-earth-50/80 backdrop-blur-sm rounded-lg border border-earth-100 shadow-inner">
            {indigenousWisdom.map((item, index) => (
              <div key={index} className="wisdom-quote text-center mb-8 last:mb-0">
                <div className="mb-4 opacity-70 mx-auto w-12 h-12">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.4,11c0.3-3.1,1.4-6.3,4.6-6.3c0.3,0,0.5-0.3,0.5-0.6c0-0.3-0.3-0.5-0.6-0.5c-3.4,0-6.4,2.7-6.4,7.8
                     c0,3,1.5,4.9,3.8,4.9c1.8,0,3.2-1.5,3.2-3.6C9.4,10.8,7.5,9.8,4.4,11z M15.4,11c0.3-3.1,1.4-6.3,4.6-6.3
                     c0.3,0,0.5-0.3,0.5-0.6c0-0.3-0.3-0.5-0.6-0.5c-3.4,0-6.4,2.7-6.4,7.8c0,3,1.5,4.9,3.8,4.9c1.8,0,3.2-1.5,3.2-3.6
                     C20.4,10.8,18.5,9.8,15.4,11z" fill="var(--color-amber-gold)"/>
                  </svg>
                </div>
                <p className="text-xl md:text-2xl italic text-earth-800 mb-4 font-serif leading-relaxed">"{item.quote}"</p>
                <p className="text-earth-600 font-medium">{item.attribution}</p>
              </div>
            ))}
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-6 -left-6 w-12 h-12 opacity-30">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="var(--color-earth-900)" strokeWidth="1" />
              <path d="M2 12H22M12 2V22" stroke="var(--color-earth-900)" strokeWidth="1" />
            </svg>
          </div>
          <div className="absolute -bottom-6 -right-6 w-12 h-12 opacity-30">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="var(--color-earth-900)" strokeWidth="1" />
              <path d="M2 12H22M12 2V22" stroke="var(--color-earth-900)" strokeWidth="1" />
            </svg>
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
            className="bg-white/70 backdrop-blur-sm p-6 md:p-8 rounded-lg shadow-sm border border-earth-100"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 mr-4 text-earth-600">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M7.5 12L10.5 15L16.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-medium text-earth-900">Our Values</h3>
            </div>
            
            <p className="text-earth-800 mb-6 leading-relaxed">
              We approach our relationship with indigenous wisdom with deep reverence and a commitment to ethical 
              collaboration. This project stands firmly against cultural appropriation and extraction, 
              seeking instead to honor indigenous sovereignty and build reciprocal relationships.
            </p>
            
            <p className="text-earth-800 leading-relaxed">
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
            className="bg-white/70 backdrop-blur-sm p-6 md:p-8 rounded-lg shadow-sm border border-earth-100"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 mr-4 text-earth-600">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M7.5 12L10.5 15L16.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-medium text-earth-900">Our Approach</h3>
            </div>
            
            <p className="text-earth-800 mb-6 leading-relaxed">
              We are stepping out of various forms of cultural appropriation and looking for sustainable ways to engage 
              in a decolonized dialogue with indigenous communities and repressed minorities, reclaiming a grounded approach 
              to the sacred.
            </p>
            
            <p className="text-earth-800 leading-relaxed">
              Through ceremony, sustainable practices, and deep listening, we aim to reintegrate the spiritual 
              dimension of land stewardship that has been preserved by indigenous cultures worldwide.
            </p>
          </motion.div>
        </div>

        {/* Principles and Practices with mobile-optimized grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Collaboration Principles */}
          <div ref={principlesRef} className="mb-10 md:mb-0">
            <h3 className="text-2xl font-serif font-medium text-earth-900 mb-6 text-center">Guiding Principles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {collaborationPrinciples.map((principle, index) => (
                <div 
                  key={principle.id}
                  className="principle-card bg-earth-50/80 backdrop-blur-sm p-5 rounded-lg shadow-sm border-l-4 border-earth-400"
                >
                  <h4 className="text-lg font-medium text-earth-800 mb-2">{principle.title}</h4>
                  <p className="text-earth-700 text-sm">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Ceremonial Practices */}
          <div ref={practicesRef}>
            <h3 className="text-2xl font-serif font-medium text-earth-900 mb-6 text-center">Ceremonial Practices</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ceremonialPractices.map((practice, index) => (
                <div 
                  key={practice.id}
                  className="practice-card bg-earth-50/80 backdrop-blur-sm p-5 rounded-lg shadow-sm border-l-4 border-amber-400"
                >
                  <h4 className="text-lg font-medium text-earth-800 mb-2">{practice.title}</h4>
                  <p className="text-earth-700 text-sm">{practice.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Added image with natural elements */}
        <div className="mt-16 text-center" ref={imageRef}>
          <div className="inline-block relative">
            <div className="w-full md:w-[80%] max-w-2xl mx-auto h-[300px] bg-[url('/photos/D55D941D-553E-4EAF-B84B-6173EDF65E4A.JPG')] bg-cover bg-center rounded-lg shadow-lg overflow-hidden">
              <div className="absolute inset-0 bg-earth-900/20"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 text-earth-600 opacity-70">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.8" />
                <path d="M50 5 L50 95 M5 50 L95 50" stroke="currentColor" strokeWidth="0.8" fill="none" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 