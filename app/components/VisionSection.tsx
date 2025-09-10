import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';

// Only import ScrollTrigger on the client side
let ScrollTrigger: any;
if (typeof window !== 'undefined') {
  import('gsap/ScrollTrigger').then(module => {
    ScrollTrigger = module.default;
    gsap.registerPlugin(ScrollTrigger);
  });
}

const visionPillars = [
  {
    title: "Community-Driven Growth",
    description: "Stepping out of the over-capitalization of the wellness industry by prioritizing community-driven growth, equitable access, and mutual support over profit.",
    color: "border border-gray-200 shadow-lg hover:shadow-xl"
  },
  {
    title: "Human-Centered Healing",
    description: "A third way focused on the human factor — on how to heal and support each other as we live in reciprocity with the Earth, grounded in dignity and remembrance of the sacred.",
    color: "border border-gray-200 shadow-lg hover:shadow-xl"
  },
  {
    title: "Indigenous Wisdom",
    description: "Sustainable ways to engage in a decolonized dialogue with indigenous communities and repressed minorities, reclaiming a grounded approach to the sacred.",
    color: "border border-gray-200 shadow-lg hover:shadow-xl"
  },
  {
    title: "Sovereignty & Autonomy",
    description: "Redefining togetherness and enhancing self-sufficiency and sovereignty without reliance on external power structures or obedience to overarching governmental systems.",
    color: "border border-gray-200 shadow-lg hover:shadow-xl"
  }
];

export default function VisionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const pillarRefs = useRef<HTMLDivElement[]>([]);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const introRef = useRef<HTMLParagraphElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  
  // GSAP animations
  useEffect(() => {
    // Make sure ScrollTrigger is loaded and elements exist
    if (typeof ScrollTrigger === 'undefined' || !quoteRef.current) {
      return;
    }
    
    // Animate section title and intro paragraph
    if (titleRef.current && introRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      });
      
      tl.fromTo(
        titleRef.current, 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
      ).fromTo(
        introRef.current, 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
        "-=0.8"
      );
    }
    
    // Animate quote
    if (quoteRef.current) {
      const quote = quoteRef.current;
      
      gsap.fromTo(
        quote, 
        { opacity: 0, y: 30 }, 
        { 
          opacity: 1, 
          y: 0, 
          duration: 1.5, 
          scrollTrigger: {
            trigger: quote,
            start: "top 80%",
            toggleActions: "play none none reverse"
          } 
        }
      );
    }
    
    // Animate each vision pillar paragraph with staggered timing
    pillarRefs.current.forEach((ref, index) => {
      if (!ref) return;
      
      gsap.fromTo(
        ref.querySelector('p'),
        { y: 20 },
        {
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: ref,
            start: "top 75%",
            toggleActions: "play none none reverse"
          },
          delay: 0.2
        }
      );
    });
  }, []);
  
  const addToPillarRefs = (el: HTMLDivElement | null) => {
    if (el && !pillarRefs.current.includes(el)) {
      pillarRefs.current.push(el);
    }
  };

  return (
    <section ref={sectionRef} id="about" className="py-32">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-black-600 uppercase tracking-wider text-sm font-semibold mb-4">Our Vision</span>
          <h2 ref={titleRef} className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">A Regenerative Vision for Sovereign Living</h2>
          <p ref={introRef} className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Creation of an intentional regenerative community dedicated to protecting human integrity and sovereign birthrights: freedom, bodily autonomy, spiritual self-determination, and the right to live in harmony with nature.
          </p>
        </div>
        
        {/* Quote section */}
        <div 
          ref={quoteRef} 
          className="mb-16 text-center p-8 rounded-2xl border border-gray-200 shadow-lg"
        >
          <p className="text-xl md:text-2xl text-gray-800 max-w-2xl mx-auto leading-relaxed font-medium">
            A regenerative, heart-led social project dedicated to future generations and the defense of human integrity. A community made to radiate outward and plant seeds of change, rather than being an isolated bubble.
          </p>
        </div>
        
        {/* Vision pillars with enhanced card styling for mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {visionPillars.map((pillar, index) => (
            <motion.div
              key={index}
              ref={addToPillarRefs}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0,0,0,0.07)" }}
              className={`rounded-2xl ${pillar.color} p-6 md:p-8 transition-all duration-500 min-h-[320px] group hover:-translate-y-2`}
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 flex items-center justify-center text-black-600 rounded-2xl group-hover:bg-blue-50 transition-colors duration-300">
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-black-600 transition-colors duration-300">
                {pillar.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed text-center text-sm md:text-base">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 