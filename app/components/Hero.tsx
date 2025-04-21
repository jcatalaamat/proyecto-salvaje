import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const circleRefs = useRef<HTMLDivElement[]>([]);
  
  // Create refs for animated sacred geometry elements
  const addToCircles = (el: HTMLDivElement | null) => {
    if (el && !circleRefs.current.includes(el)) {
      circleRefs.current.push(el);
    }
  };
  
  // GSAP animations
  useEffect(() => {
    // Track scroll position
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Initial animation sequence
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    // Animate sacred geometry circles with staggered delay and more organic motion
    tl.fromTo(
      circleRefs.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 0.8, stagger: 0.15, duration: 1.8, ease: "elastic.out(1, 0.65)" },
      0.8
    );
    
    // Animate CTA buttons
    tl.fromTo(
      '.hero-button',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.15, duration: 0.8 },
      1.2
    );
    
    // Animate decorative elements with staggered appearances
    tl.fromTo(
      '.decorative-element',
      { scale: 0.4, opacity: 0 },
      { scale: 1, opacity: 0.6, stagger: 0.2, duration: 1, ease: "back.out(1.7)" },
      1.5
    );
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Split text utility function with enhanced character splitting
  useEffect(() => {
    if (!titleRef.current) return;
    
    // Instead of using character splitting which causes cropping issues, 
    // use a simpler approach with proper line height
    const text = titleRef.current.innerText;
    titleRef.current.innerHTML = text;
    
    // Apply animations to the whole element instead of individual characters
    gsap.fromTo(
      titleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.4, ease: "power3.out", delay: 0.5 }
    );
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen overflow-hidden">
      {/* Enhanced cinematic background with parallax & texture effect */}
      <div className="absolute inset-0 z-0">
        {/* Cinematic video background with overlay - improved for mobile */}
        <div className="absolute inset-0 overflow-hidden">
          <video 
            className="absolute w-full h-full object-cover object-center"
            autoPlay
            muted
            loop
            playsInline
            poster="/images/texture-bg.jpg"
          >
            <source src="/videos/gentle-nature.mp4" type="video/mp4" />
          </video>
          {/* Enhanced overlay for better legibility and ambiance on mobile */}
          <div className="absolute inset-0 bg-gradient-to-b from-earth-50/95 via-earth-100/70 to-earth-100/60 md:from-earth-50/90 md:via-transparent md:to-earth-100/70"></div>
          <div className="absolute inset-0 bg-[url('/images/texture-bg.jpg')] bg-cover bg-center bg-no-repeat mix-blend-overlay opacity-40"></div>
          <div className="absolute inset-0 backdrop-blur-[3px] md:backdrop-blur-[2px]"></div>
        </div>
      </div>
      
      {/* Enhanced sacred geometry background elements with more organic shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Optimized for visibility on mobile */}
        <div ref={el => addToCircles(el)} className="sacred-circle w-[80vw] md:w-[60vw] h-[80vw] md:h-[60vw] left-[-35vw] top-[-30vw] opacity-70 mix-blend-soft-light"></div>
        <div ref={el => addToCircles(el)} className="sacred-circle w-[70vw] md:w-[45vw] h-[70vw] md:h-[45vw] right-[-30vw] top-[5vh] opacity-60 mix-blend-soft-light"></div>
        <div ref={el => addToCircles(el)} className="sacred-circle w-[60vw] md:w-[50vw] h-[60vw] md:h-[50vw] left-[0vw] bottom-[-20vh] opacity-70 mix-blend-soft-light"></div>
        <div ref={el => addToCircles(el)} className="sacred-circle w-[40vw] md:w-[30vw] h-[40vw] md:h-[30vw] right-[5vw] bottom-[-10vh] opacity-60 mix-blend-soft-light"></div>
      </div>
      
      {/* Additional organic decorative elements */}
      <div className="decorative-element absolute left-[15%] top-[25%] w-32 h-32 opacity-30">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 5C74.8528 5 95 25.1472 95 50C95 74.8528 74.8528 95 50 95C25.1472 95 5 74.8528 5 50C5 25.1472 25.1472 5 50 5Z" stroke="currentColor" strokeWidth="0.5"/>
          <path d="M50 20C66.5685 20 80 33.4315 80 50C80 66.5685 66.5685 80 50 80C33.4315 80 20 66.5685 20 50C20 33.4315 33.4315 20 50 20Z" stroke="currentColor" strokeWidth="0.5"/>
          <path d="M65 50C65 58.2843 58.2843 65 50 65C41.7157 65 35 58.2843 35 50C35 41.7157 41.7157 35 50 35C58.2843 35 65 41.7157 65 50Z" stroke="currentColor" strokeWidth="0.5"/>
          <path d="M50 5V95M5 50H95" stroke="currentColor" strokeWidth="0.3"/>
        </svg>
      </div>
      
      <div className="decorative-element absolute right-10 top-32 w-40 h-40 opacity-30 text-earth-700 animate-float">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.8" />
          <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.6" />
          <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="0.4" />
          <path d="M50 5 L50 95 M5 50 L95 50 M15 15 L85 85 M15 85 L85 15" stroke="currentColor" strokeWidth="0.3" fill="none" />
        </svg>
      </div>
      
      {/* Ethereal light rays */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[150px] h-[60vh] bg-gradient-to-b from-earth-100/80 to-transparent transform -rotate-15 blur-lg"></div>
        <div className="absolute top-20 right-1/3 w-[120px] h-[40vh] bg-gradient-to-b from-earth-100/60 to-transparent transform rotate-12 blur-lg"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 pt-28 md:pt-32 pb-24 min-h-screen flex flex-col justify-center">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6"
          >
            <span className="text-earth-600 uppercase tracking-[0.2em] md:tracking-[0.3em] text-sm md:text-base font-medium">Regenerative Village School</span>
          </motion.div>
          
          <h1 
            ref={titleRef}
            className="font-serif text-4xl md:text-7xl text-earth-900 mb-6 leading-relaxed md:leading-tight"
            style={{ wordBreak: 'normal', overflowWrap: 'break-word', hyphens: 'manual' }}
          >
            A regenerative village school for truth, healing, and sovereign living
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-2xl text-earth-800 max-w-3xl mx-auto mb-8 font-serif italic"
          >
            A healing village and real-life school for future generations — rooted in dignity, integrity, and remembrance of the sacred.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap justify-center gap-5 mt-8 md:mt-10"
          >
            <a href="#join" className="hero-button btn-sacred-invite group relative overflow-hidden w-full md:w-auto">
              <span className="relative z-10">Join Our Community</span>
              <span className="absolute inset-0 bg-earth-500 opacity-0 group-hover:opacity-10 transition-opacity duration-700 rounded-full transform group-hover:scale-110"></span>
            </a>
            <a href="#about" className="hero-button btn-secondary group w-full md:w-auto">
              <span>Explore Our Vision</span>
              <svg className="inline-block ml-2 w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 5L21 12M21 12L15 19M21 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </motion.div>
        </div>
        
        {/* Enhanced scroll indicator with centered position and fixed width */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1.5, 
            delay: 1.8,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.8,
            ease: "easeInOut"
          }}
          className="absolute bottom-12 left-0 right-0 mx-auto text-center w-full"
        >
          <span className="block text-earth-600 text-sm tracking-wider mb-2 uppercase">Begin the Journey</span>
          <div className="w-7 h-12 border-2 border-earth-400 rounded-full flex justify-center pt-2 mx-auto">
            <div className="w-1.5 h-1.5 bg-earth-500 rounded-full animate-bounce"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 