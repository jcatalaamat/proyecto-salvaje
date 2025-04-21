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
    title: "Sacred Community Growth",
    description: "Stepping beyond capitalization into a balanced exchange where equitable access and mutual support are valued over economic profit.",
    symbol: (
      <svg width="80" height="80" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="hand-drawn">
        <circle cx="32" cy="32" r="20" stroke="currentColor" strokeWidth="1" strokeDasharray="1 2" />
        <path d="M32 12V52" stroke="currentColor" strokeWidth="1" />
        <path d="M22 22L42 42" stroke="currentColor" strokeWidth="1" />
        <path d="M22 42L42 22" stroke="currentColor" strokeWidth="1" />
        <circle cx="32" cy="32" r="5" fill="currentColor" fillOpacity="0.2" />
      </svg>
    ),
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L14.5 9H22L16 13.5L18.5 20.5L12 16L5.5 20.5L8 13.5L2 9H9.5L12 2Z" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1" />
      </svg>
    ),
    color: "bg-gradient-to-br from-earth-50 to-earth-100 border-l-4 border-earth-500",
    texture: "bg-[url('/images/textures/handmade-paper.png')]"
  },
  {
    title: "Human-Centered Healing",
    description: "Cultivating a third way focused on the human factor — how to heal and support each other while living in reciprocity with the Earth's rhythms.",
    symbol: (
      <svg width="80" height="80" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="hand-drawn">
        <circle cx="32" cy="32" r="20" stroke="currentColor" strokeWidth="1" strokeDasharray="1 2" />
        <circle cx="32" cy="32" r="10" stroke="currentColor" strokeWidth="1" />
        <path d="M32 12V52" stroke="currentColor" strokeWidth="1" />
        <path d="M12 32H52" stroke="currentColor" strokeWidth="1" />
        <circle cx="32" cy="32" r="4" fill="currentColor" fillOpacity="0.2" />
      </svg>
    ),
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1" />
        <path d="M12 7V17M7 12H17" stroke="currentColor" strokeWidth="1" />
      </svg>
    ),
    color: "bg-gradient-to-br from-forest-50 to-forest-100 border-l-4 border-forest-500",
    texture: "bg-[url('/images/textures/papyrus.png')]"
  },
  {
    title: "Indigenous Wisdom",
    description: "Engaging with indigenous knowledge systems in sustainable ways, honoring ancestral wisdom while reclaiming a grounded approach to the sacred.",
    symbol: (
      <svg width="80" height="80" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="hand-drawn">
        <path d="M32 12C20.9543 12 12 20.9543 12 32C12 43.0457 20.9543 52 32 52" stroke="currentColor" strokeWidth="1" strokeDasharray="1 2" />
        <path d="M32 52C43.0457 52 52 43.0457 52 32C52 20.9543 43.0457 12 32 12" stroke="currentColor" strokeWidth="1" strokeDasharray="1 2" />
        <path d="M32 2L32 22" stroke="currentColor" strokeWidth="1" />
        <path d="M28 6L32 2L36 6" stroke="currentColor" strokeWidth="1" />
        <path d="M32 62L32 42" stroke="currentColor" strokeWidth="1" />
        <path d="M36 58L32 62L28 58" stroke="currentColor" strokeWidth="1" />
        <circle cx="32" cy="32" r="4" fill="currentColor" fillOpacity="0.2" />
      </svg>
    ),
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 3C8 5.20914 9.79086 7 12 7C14.2091 7 16 5.20914 16 3" stroke="currentColor" strokeWidth="1" />
        <path d="M12 7V21" stroke="currentColor" strokeWidth="1" />
        <path d="M8 21C8 18.7909 9.79086 17 12 17C14.2091 17 16 18.7909 16 21" stroke="currentColor" strokeWidth="1" />
      </svg>
    ),
    color: "bg-gradient-to-br from-gold-100 to-gold-200 border-l-4 border-gold-500",
    texture: "bg-[url('/images/textures/sand-grain.png')]"
  },
  {
    title: "Sovereignty & Autonomy",
    description: "Enhancing self-sufficiency beyond external power structures, creating a sovereign community aligned with natural law.",
    symbol: (
      <svg width="80" height="80" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="hand-drawn">
        <path d="M32 8L52 18V32C52 43.0457 43.0457 52 32 52C20.9543 52 12 43.0457 12 32V18L32 8Z" stroke="currentColor" strokeWidth="1" strokeDasharray="1 2" />
        <circle cx="32" cy="32" r="10" stroke="currentColor" strokeWidth="1" />
        <path d="M32 22V42" stroke="currentColor" strokeWidth="1" />
        <path d="M22 32H42" stroke="currentColor" strokeWidth="1" />
        <circle cx="32" cy="32" r="4" fill="currentColor" fillOpacity="0.2" />
      </svg>
    ),
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L20 8V16L12 22L4 16V8L12 2Z" stroke="currentColor" strokeWidth="1" />
        <path d="M12 8V16" stroke="currentColor" strokeWidth="1" />
        <path d="M8 12H16" stroke="currentColor" strokeWidth="1" />
      </svg>
    ),
    color: "bg-gradient-to-br from-ocean-50 to-ocean-100 border-l-4 border-ocean-500",
    texture: "bg-[url('/images/textures/handmade-paper.png')]"
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
    <section ref={sectionRef} id="about" className="py-32 relative overflow-hidden sacred-gradient-moon">
      {/* Background organic shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 opacity-[0.07]">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path fill="var(--color-night-earth)" d="M48.2,-63.8C62.7,-55.9,74.9,-42.8,78.2,-27.7C81.5,-12.7,75.9,4.2,69.3,19.2C62.7,34.1,55.1,47.1,43.4,54.6C31.7,62.1,15.9,64,-0.2,64.3C-16.2,64.5,-32.5,63.1,-45.4,55.3C-58.3,47.6,-67.9,33.4,-72.4,17.5C-76.8,1.6,-76.2,-16,-68.7,-29C-61.2,-42.1,-46.8,-50.6,-32.9,-58.5C-19,-66.5,-5.5,-73.9,8.3,-73.5C22.2,-73.1,33.7,-71.8,48.2,-63.8Z" transform="translate(100 100)" />
          </svg>
        </div>
        
        <div className="absolute bottom-0 left-0 w-3/5 h-3/5 opacity-[0.05]">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path fill="var(--color-clay)" d="M44.9,-64.2C58.3,-53.9,69.5,-41.1,74,-26.3C78.5,-11.5,76.5,5.4,71.5,20.8C66.5,36.2,58.5,50.1,46.5,60.1C34.5,70.1,18.5,76.1,1.1,74.7C-16.3,73.3,-35,64.5,-50.9,52.2C-66.8,39.9,-80,24.1,-83.2,6.7C-86.4,-10.7,-79.5,-29.7,-67.2,-43.3C-54.9,-56.9,-37.1,-65.1,-21,-69.5C-4.9,-73.9,9.5,-74.6,23.3,-71.9C37.1,-69.3,50.3,-63.4,63.5,-53.5Z" transform="translate(100 100)" />
          </svg>
        </div>
      </div>

      {/* Enhanced decorative sacred circles and elements */}
      <div className="absolute left-[15%] top-[15%] w-32 h-32 border-2 border-gold-500/20 rounded-full rotate-45 opacity-60 mix-blend-overlay"></div>
      <div className="absolute right-[10%] bottom-[20%] w-40 h-40 border border-gold-500/20 rounded-full rotate-12 opacity-40 mix-blend-overlay"></div>
      <div className="absolute left-[3%] bottom-[15%] w-20 h-20 border border-gold-500/30 rounded-full animate-pulse opacity-20 mix-blend-overlay"></div>
      <div className="absolute right-[25%] top-[10%] w-24 h-24 border-2 border-earth-500/10 rounded-full opacity-30 mix-blend-overlay"></div>
      
      {/* Enhanced Sacred glyph */}
      <div className="sacred-glyph left-[5%] top-[30%] w-40 h-40 opacity-40 mix-blend-overlay">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="40" fill="none" stroke="var(--color-clay)" strokeWidth="0.5" />
          <path d="M50 10 L50 90 M10 50 L90 50" stroke="var(--color-clay)" strokeWidth="0.5" fill="none" />
          <path d="M29 29 L71 71 M29 71 L71 29" stroke="var(--color-clay)" strokeWidth="0.5" fill="none" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-earth-600 uppercase tracking-[0.25em] text-sm font-medium mb-4">Our Vision</span>
          <h2 ref={titleRef} className="section-heading">A Holistic Vision for Regenerative Living</h2>
          <p ref={introRef} className="text-lg md:text-xl text-earth-800 max-w-3xl mx-auto leading-relaxed">
            Through integrating indigenous wisdom, holistic wellness, community economics, and ecological 
            restoration, we are creating a place where humanity can remember and re-establish its sacred 
            connection to the land and each other.
          </p>
        </div>
        
        {/* Quote box with enhanced styling for mobile */}
        <div 
          ref={quoteRef} 
          className="sacred-callout mb-16 text-center backdrop-blur-sm relative overflow-hidden"
        >
          {/* Added decorative symbol behind the quote for visual richness */}
          <div className="absolute -top-10 -right-10 w-40 h-40 opacity-5 text-earth-900">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <path d="M50 5 L50 95 M5 50 L95 50 M15 15 L85 85 M15 85 L85 15" stroke="currentColor" strokeWidth="0.3" />
            </svg>
          </div>
          
          <blockquote className="p-0 border-0 bg-transparent">
            <p className="text-xl md:text-2xl text-earth-800 font-light font-serif leading-relaxed">
              "This is a regenerative, heart-led social project connecting a network of individuals and communities 
              who are invested in creating a more resilient, sustainable, and integrated way of living."
            </p>
          </blockquote>
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
              className={`rounded-xl overflow-hidden ${pillar.color} p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-500 backdrop-blur-sm min-h-[280px] md:even:mt-4 lg:even:mt-0 ${pillar.texture} bg-blend-overlay`}
            >
              <div className="flex justify-center mb-5">
                <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center text-earth-600">
                  {pillar.symbol}
                </div>
              </div>
              
              <h3 className="text-xl md:text-2xl font-serif font-medium text-earth-900 mb-4 text-center">
                {pillar.title}
              </h3>
              
              <p className="text-earth-700 leading-relaxed text-center">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 