import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import gsap from 'gsap';

// Only import ScrollTrigger on the client side
let ScrollTrigger: any;
if (typeof window !== 'undefined') {
  import('gsap/ScrollTrigger').then(module => {
    ScrollTrigger = module.default;
    gsap.registerPlugin(ScrollTrigger);
  });
}

const communityValues = [
  {
    id: 'regeneration',
    title: 'Regeneration',
    description: 'We design systems that enhance the health and vitality of natural ecosystems, ensuring our actions build rather than deplete.'
  },
  {
    id: 'sovereignty',
    title: 'Sovereignty',
    description: 'We honor the autonomy of each individual while recognizing our interdependence within the larger community and ecosystem.'
  },
  {
    id: 'reciprocity',
    title: 'Reciprocity',
    description: 'We build relationships based on mutual benefit, ensuring fair exchange that respects all beings, including the land itself.'
  },
  {
    id: 'integration',
    title: 'Integration',
    description: 'We embrace the full spectrum of human experience, weaving together inner and outer work, traditional wisdom and modern knowledge.'
  }
];

const governanceStructures = [
  {
    title: "Sociocracy",
    description: "Our decision-making framework based on consent rather than consensus, ensuring all voices are heard while enabling effective action.",
    color: "bg-forest-50",
    borderColor: "border-forest-200",
    textColor: "text-forest-800"
  },
  {
    title: "Working Circles",
    description: "Self-organizing teams focused on specific domains of community life, from land stewardship to educational programming.",
    color: "bg-earth-50",
    borderColor: "border-earth-200",
    textColor: "text-earth-800"
  },
  {
    title: "Council Gatherings",
    description: "Regular community-wide meetings where we share information, make collective decisions, and deepen our connections.",
    color: "bg-amber-50",
    borderColor: "border-amber-200",
    textColor: "text-amber-900"
  }
];

// Timeline phases
const timelinePhases = [
  {
    id: "phase1",
    title: "Phase 1",
    description: "Land acquisition and initial infrastructure development. Formation of founding member council and early adopters.",
    date: "Current"
  },
  {
    id: "phase2",
    title: "Phase 2",
    description: "First residential buildings, communal spaces, and permaculture systems established. Initial educational programs launched.",
    date: "Year 1"
  },
  {
    id: "year2",
    title: "Year 2",
    description: "Integration of technological infrastructure, renewable energy systems, and community governance refined.",
    date: "Year 2"
  },
  {
    id: "year3",
    title: "Year 3",
    description: "Full community established with integrated educational programs, visitor options, and expanded impact initiatives.",
    date: "Year 3"
  }
];

export default function CommunitySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const governanceRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const daoRef = useRef<HTMLDivElement>(null);
  
  // Lower the threshold for mobile to make content more visible
  const isInView = useInView(sectionRef, { 
    once: false, 
    amount: 0.05, // Reduced threshold - only need 5% in view to trigger
    margin: "0px 0px -20% 0px" // Negative bottom margin to trigger earlier
  });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  
  // GSAP animations
  useEffect(() => {
    if (typeof ScrollTrigger === 'undefined') {
      return;
    }
    
    // Check if we're on mobile
    const isMobile = window.innerWidth < 768;
    
    // Adjust the start position for mobile to trigger animations earlier
    const startPosition = isMobile ? "top 90%" : "top 75%";
    
    // Animate values cards with adjusted trigger
    if (valuesRef.current) {
      const valueCards = valuesRef.current.querySelectorAll('.value-card');
      gsap.fromTo(
        valueCards,
        { y: isMobile ? 40 : 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: isMobile ? 0.1 : 0.15,
          duration: isMobile ? 0.5 : 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: valuesRef.current,
            start: startPosition,
            toggleActions: "play none none none" // Changed to not reverse on scroll up
          }
        }
      );
    }
    
    // Animate governance structures with adjusted trigger
    if (governanceRef.current) {
      const governanceItems = governanceRef.current.querySelectorAll('.governance-item');
      gsap.fromTo(
        governanceItems,
        { x: isMobile ? -25 : -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: isMobile ? 0.1 : 0.2,
          duration: isMobile ? 0.6 : 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: governanceRef.current,
            start: startPosition,
            toggleActions: "play none none none" // Changed to not reverse on scroll up
          }
        }
      );
    }
    
    // Animate timeline with adjusted trigger
    if (timelineRef.current) {
      const timelineItems = timelineRef.current.querySelectorAll('.timeline-item');
      const timelineLine = timelineRef.current.querySelector('.timeline-line');
      
      if (timelineLine) {
        gsap.fromTo(
          timelineLine,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: isMobile ? 1 : 1.5,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: timelineRef.current,
              start: startPosition,
              toggleActions: "play none none none" // Changed to not reverse on scroll up
            }
          }
        );
      }
      
      gsap.fromTo(
        timelineItems,
        { y: isMobile ? 30 : 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: isMobile ? 0.15 : 0.25,
          duration: isMobile ? 0.6 : 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: startPosition,
            toggleActions: "play none none none" // Changed to not reverse on scroll up
          }
        }
      );
    }
    
    // Animate DAO section with adjusted trigger
    if (daoRef.current) {
      const elements = daoRef.current.querySelectorAll('.dao-item');
      gsap.fromTo(
        elements,
        { y: isMobile ? 20 : 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: isMobile ? 0.1 : 0.15,
          duration: isMobile ? 0.5 : 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: daoRef.current,
            start: startPosition,
            toggleActions: "play none none none" // Changed to not reverse on scroll up
          }
        }
      );
    }
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id="community"
      className="py-16 md:py-32 relative overflow-hidden"
    >
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="mb-16 max-w-3xl mx-auto text-center">
          <motion.span 
            className="inline-block text-black-600 uppercase tracking-wider text-sm font-semibold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Living Together
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our Community Structure
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-gray-600 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We're looking to offer shelter for those dedicated to supporting the collective and fighting for truth & dignity. Our governance systems draw from ancient wisdom and modern organizational design to create a structure that's both resilient and adaptive.
          </motion.p>
        </div>
        
        {/* Core Values */}
        <div className="mb-16 md:mb-24">
          <motion.h3 
            className="text-xl sm:text-2xl font-serif text-earth-900 mb-12 md:mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }} // Use whileInView instead of animate + isInView
            viewport={{ once: false, amount: 0.1 }} // Very low threshold to make it visible sooner
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Core Community Values
          </motion.h3>
          
          <div ref={valuesRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {communityValues.map((value, index) => (
              <div key={value.id} className="value-card">
                <div className="rounded-2xl border border-gray-200 shadow-lg p-6 md:p-8 h-full hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group">
                  <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-4 group-hover:text-black-600 transition-colors duration-300">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Project Timeline */}
        <div className="mb-16 md:mb-24">
          <motion.h3 
            className="text-xl sm:text-2xl font-serif text-earth-900 mb-12 md:mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }} // Use whileInView instead of animate + isInView
            viewport={{ once: false, amount: 0.1 }} // Very low threshold to make it visible sooner
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Development Timeline
          </motion.h3>
          
          <div ref={timelineRef} className="relative">
            {/* Timeline connector line */}
            
            {/* Timeline steps */}
            <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8 md:pt-16">
              {timelinePhases.map((phase, index) => (
                <div key={phase.id} className="timeline-item relative">
                  {/* Phase circle - only visible on md screens and up */}
                  {/* <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full border-4 border-black-600 flex items-center justify-center hidden md:flex">
                    <div className="text-black-600 font-bold">
                      {index + 1}
                    </div>
                  </div> */}
                  
                  {/* Phase content */}
                  <div className="rounded-2xl border border-gray-200 shadow-lg p-6 h-full hover:shadow-xl transition-all duration-300">
                    {/* Mobile view icon and phase */}
                    <div className="flex items-center mb-3 md:hidden">
                      <div className="w-8 h-8 mr-3 rounded-full border-2 border-black-600 flex items-center justify-center flex-shrink-0">
                        <div className="text-black-600 font-bold text-sm">
                          {index + 1}
                        </div>
                      </div>
                      <div className="text-gray-500 text-sm font-medium">{phase.date}</div>
                    </div>
                    
                    {/* Desktop date - hidden on mobile */}
                    <div className="text-gray-500 text-sm font-medium mb-2 hidden md:block">{phase.date}</div>
                    
                    <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-3">{phase.title}</h4>
                    <p className="text-gray-600 text-sm">{phase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Governance Structure */}
        <div>
          <motion.h3 
            className="text-xl sm:text-2xl font-serif text-earth-900 mb-12 md:mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }} // Use whileInView instead of animate + isInView
            viewport={{ once: false, amount: 0.1 }} // Very low threshold to make it visible sooner
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our Governance Structure
          </motion.h3>
          
          <div ref={governanceRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 md:mb-24">
            {governanceStructures.map((structure, index) => (
              <div key={structure.title} className="governance-item">
                <div className="rounded-2xl border border-gray-200 shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                  <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-3">{structure.title}</h4>
                  <p className="text-gray-600 text-sm">{structure.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* DAO and Contribution Section */}
        <div ref={daoRef} className="mb-16">
          <motion.h3 
            className="text-xl sm:text-2xl font-serif text-earth-900 mb-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }} // Use whileInView instead of animate + isInView
            viewport={{ once: false, amount: 0.1 }} // Very low threshold to make it visible sooner
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Structure Rooted in Trust & Transparency
          </motion.h3>
          
          <div className="max-w-4xl mx-auto mt-10">
            <div className="dao-item text-center p-8 rounded-2xl border border-gray-200 shadow-lg">
              <p className="text-lg md:text-xl text-gray-800 italic">
                "Using blockchain technology to provide full transparency around decision-making and resource flow — from investors to participants."
              </p>
            </div>
            
            <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="dao-item p-6 md:p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-4">Decentralized Governance</h4>
                <p className="text-gray-600 mb-4">Our DAO (Decentralized Autonomous Organization) enables transparent voting, resource allocation, and decision-making for all community members.</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-black-600 mr-2">•</span>
                    <span>Transparent voting mechanisms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black-600 mr-2">•</span>
                    <span>Resource allocation tracking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black-600 mr-2">•</span>
                    <span>Multi-signature treasury management</span>
                  </li>
                </ul>
              </div>
              
              <div className="dao-item p-6 md:p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-4">Contribution Paths</h4>
                <p className="text-gray-600 mb-4">Multiple ways to participate in and contribute to our community, with varying levels of commitment and involvement.</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-black-600 mr-2">•</span>
                    <span>Core founding members</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black-600 mr-2">•</span>
                    <span>Resident contributors</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black-600 mr-2">•</span>
                    <span>Program participants and visitors</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black-600 mr-2">•</span>
                    <span>Remote contributors and supporters</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="dao-item mt-12 md:mt-16 text-center">
              <p className="text-gray-600 text-lg">
                Together, they will form the Council of Founding Members.
              </p>
            </div>
          </div>
        </div>
        
        {/* Community Call to Action */}
        <motion.div 
          className="text-center mt-12 md:mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }} // Use whileInView instead of animate + isInView
          viewport={{ once: false, amount: 0.1 }} // Very low threshold to make it visible sooner
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <a 
            href="mailto:info@proyectosalvaje.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 md:px-8 py-3 text-black-600  rounded-full hover:bg-black-700 transition-colors shadow-md hover:shadow-lg"
          >
            Join Our Community
          </a>
        </motion.div>
      </div>
    </section>
  );
} 