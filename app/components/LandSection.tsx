import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

// Only import ScrollTrigger on the client side
let ScrollTrigger: any;
if (typeof window !== 'undefined') {
  import('gsap/ScrollTrigger').then(module => {
    ScrollTrigger = module.default;
    gsap.registerPlugin(ScrollTrigger);
  });
}

// Land features data
const landFeatures = [
  {
    title: "Ocean & Mangroves",
    description: "Located on the coast of Oaxaca where the Sierra Madre meets the Pacific Ocean, with proximity to lagoons and mangroves."
  },
  {
    title: "Natural Reserve",
    description: "Nestled in front of a natural reserve with unique topography that makes it perfect for this project."
  },
  {
    title: "Water Access",
    description: "Access to water, flat areas for permaculture, and hills offering open views, perfect for sustainable development."
  },
  {
    title: "Privacy & Connection",
    description: "Spread along small pathways that provide privacy, with a sense of deep peace — being both protected and connected."
  }
];

// Image gallery items
const galleryImages = [
  {
    src: "/photos/IMG_0485.jpg",
    alt: "Aerial view of the property showing forest and valleys",
    caption: "Aerial view showcasing the property's diverse ecosystems"
  },
  {
    src: "/photos/IMG_0489.jpg",
    alt: "Clear stream running through the property",
    caption: "One of three pristine streams flowing through the land"
  },
  {
    src: "/photos/IMG_0491.jpg",
    alt: "Mountain vista from property viewpoint",
    caption: "Panoramic mountain vista from one of our viewpoints"
  },
  {
    src: "/photos/IMG_0495.jpg",
    alt: "Fertile valleys with early permaculture design",
    caption: "Fertile valley being developed with permaculture principles"
  },
  {
    src: "/photos/IMG_0484.jpg",
    alt: "Natural landscape of the property",
    caption: "Natural beauty and biodiversity of the land"
  },
  {
    src: "/photos/IMG_0486.jpg",
    alt: "Lush vegetation and pristine environment",
    caption: "Lush vegetation and untouched natural spaces"
  },
  {
    src: "/photos/5B939699-59CD-4238-938B-F1CDF01F8462.jpg",
    alt: "Aerial view of the landscape",
    caption: "Aerial perspective showcasing the property's location and features"
  },
  {
    src: "/photos/9D053D11-BEDB-49DA-9626-3256F60B3AAB.jpg",
    alt: "Scenic view of the property",
    caption: "Scenic view highlighting the natural beauty of the area"
  },
  {
    src: "/photos/D55D941D-553E-4EAF-B84B-6173EDF65E4A.jpg",
    alt: "Expansive view of the land and surroundings",
    caption: "Expansive view capturing the land's natural features and surroundings"
  }
];

// Land details in 3 columns
const landDetails = [
  {
    title: "Topography & Access",
    details: [
      "12 acres of diverse landscape",
      "Flat areas suitable for permaculture",
      "Hills offering open scenic views",
      "Year-round water access",
      "Private road access to the property"
    ]
  },
  {
    title: "Location & Community",
    details: [
      "Near the town of Mazunte, Oaxaca",
      "1 hour from an international airport",
      "Connected to Oaxaca by highway",
      "Vibrant community of eclectic people",
      "Various collective initiatives nearby"
    ]
  },
  {
    title: "Development Potential",
    details: [
      "Can support 20 small houses",
      "Host around 40 people comfortably",
      "One of the last intact parcels in the area",
      "Rich soil, easy to build on",
      "Access to electricity"
    ]
  }
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.9,
      ease: [0.215, 0.61, 0.355, 1]
    }
  })
};

export default function LandSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [currentImage, setCurrentImage] = useState(0);
  
  // Navigation functions
  const goToNextImage = () => {
    setCurrentImage((prev) => (prev + 1) % galleryImages.length);
  };
  
  const goToPrevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };
  
  // Auto-advance carousel - always on
  useEffect(() => {
    const interval = setInterval(() => {
      goToNextImage();
    }, 5000);
    
    return () => {
      clearInterval(interval);
    };
  }, [currentImage]); // Depend on currentImage to ensure it always continues from current image
  
  // GSAP animations
  useEffect(() => {
    if (typeof ScrollTrigger === 'undefined') return;
    
    // Main title and intro text animations
    if (textRef.current) {
      const elements = textRef.current.querySelectorAll('.animate-gsap');
      
      gsap.fromTo(
        elements,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
    
    // Gallery images staggered appearance and parallax
    if (galleryRef.current) {
      const images = galleryRef.current.querySelectorAll('.gallery-image');
      
      gsap.fromTo(
        images,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: galleryRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
      
      // Apply a subtle parallax effect to each image
      images.forEach((image) => {
        gsap.fromTo(
          image,
          { y: -10 },
          {
            y: 10,
            ease: "none",
            scrollTrigger: {
              trigger: image,
              start: "top bottom",
              end: "bottom top",
              scrub: true
            }
          }
        );
      });
    }
    
    // Parallax effect on background image
    if (parallaxRef.current) {
      gsap.fromTo(
        parallaxRef.current,
        { backgroundPosition: '50% 0%' },
        {
          backgroundPosition: '50% 20%',
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        }
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      id="land"
      className="py-32 lg:py-40 relative overflow-hidden"
    >
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header section */}
        <div ref={textRef} className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-black-600 uppercase tracking-wider text-sm font-semibold mb-4 inline-block animate-gsap">The Sacred Land</span>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6 animate-gsap">The Land Calling Us Home</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6 animate-gsap">
            The project is being birthed in Mexico, a country that upholds a very powerful energy of social resistance, indigenous rights, and integrity, and that holds weight on the global political scene for defending minorities.
          </p>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-gsap">
            This land is surrounded by agricultural fields with old trees and rich soil. It's an area rich in culture and history, with the presence of ocean, lagoon, and mangroves — a place that already hosts various collective initiatives, healing centers, and land regeneration projects.
          </p>
        </div>
        
        {/* Enhanced Land Visualization */}
        <div className="mb-20 relative rounded-xl overflow-hidden shadow-2xl">
          {/* Map overlay with drone images carousel */}
          <div className="relative h-[500px] md:h-[600px] overflow-hidden">
            {/* Map base layer */}
            <div className="absolute inset-0 bg-cover bg-center opacity-30 z-0"
              style={{ backgroundImage: 'url("/photos/IMG_0486.jpg")' }}>
            </div>
            
            {/* Drone image carousel */}
            <div className="absolute inset-0 z-10">
              {galleryImages.map((image, index) => (
                <div 
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentImage ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <p className="text-white text-lg font-serif">{image.caption}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation arrows */}
            <button 
              onClick={() => {
                goToPrevImage();
              }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 
                        bg-black/30 hover:bg-black/50 text-white rounded-full p-3
                        transition-all duration-300 focus:outline-none"
              aria-label="Previous image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={() => {
                goToNextImage();
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 
                        bg-black/30 hover:bg-black/50 text-white rounded-full p-3
                        transition-all duration-300 focus:outline-none"
              aria-label="Next image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {/* Carousel navigation */}
            <div className="absolute bottom-8 right-8 z-20 flex items-center">
              <div className="flex space-x-2">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentImage(index);
                    }}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentImage 
                        ? "bg-white scale-100" 
                        : "bg-white/50 scale-75"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            
            {/* Quote overlay */}
            <div className="absolute top-8 left-8 right-8 z-20 md:max-w-md bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-white/10">
              <p className="text-white text-lg md:text-xl italic font-serif">
                "The land is nestled in front of a natural reserve… offering privacy and deep peace — being both protected and connected."
              </p>
            </div>
          </div>
        </div>
        
        {/* 3 Columns Layout for Land Details */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {landDetails.map((column, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-black-600 mr-2 mt-1">•</span>
                    <span className="text-gray-600">{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        {/* Features section */}
        <div ref={featuresRef} className="mb-28">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {landFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="p-6 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-black-600 transition-colors duration-300">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 