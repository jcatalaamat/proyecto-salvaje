import React, { useEffect, useState } from 'react'
import './base.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import VisionSection from './components/VisionSection'
import LandSection from './components/LandSection'
import ProgramsSection from './components/ProgramsSection'
import CommunitySection from './components/CommunitySection'
import IndigenousStewardshipSection from './components/IndigenousStewardshipSection'
import JoinSection from './components/JoinSection'
import HeroSection from './components/HeroSection'

// Import framer-motion for page transitions
import { motion } from 'framer-motion'

export default function Index() {
  const [isMounted, setIsMounted] = useState(false);

  // Scroll restoration when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMounted(true);
    
    // Add scroll offset for hash links
    const handleHashLinkScroll = () => {
      const { hash } = window.location;
      if (hash !== '') {
        // Wait a bit for DOM to be fully rendered
        setTimeout(() => {
          const id = hash.replace('#', '');
          const element = document.getElementById(id);
          if (element) {
            const yOffset = -100; // 250px offset from the top, showing content higher in viewport
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }, 300);
      }
    };

    // Initial call for when page loads with hash
    handleHashLinkScroll();
    
    // Add event listener for when hash changes without page reload
    window.addEventListener('hashchange', handleHashLinkScroll);
    
    return () => {
      window.removeEventListener('hashchange', handleHashLinkScroll);
    };
  }, []);
  
  return (
    <div className="bg-white">
      <Navbar />
      
      {/* We're nesting components that together create a flowing, cohesive experience */}
      <main>
        {isMounted ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Hero />
            
            
            <VisionSection />
            
            
            <LandSection />
            
            
            {/* <ProgramsSection /> */}
            
            
            <CommunitySection />
            
            
            
            <IndigenousStewardshipSection />
            
            
            <JoinSection />
          </motion.div>
        ) : (
          /* Show a minimal loading state before client-side hydration */
          <div className="h-screen flex items-center justify-center">
            <div className="w-16 h-16 border-4 border-gray-900 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  )
}
