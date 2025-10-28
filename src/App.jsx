import React, { useEffect, useRef } from 'react'
import Hero from './components/sections/Hero'
import WhyGermany from './components/sections/WhyGermany'
import LearnGerman from './components/sections/LearnGerman'
import StudyWorkOpportunities from './components/sections/StudyWorkOpportunities'
import Testimonials from './components/sections/Testimonials'
import HeroCTA from './components/sections/HeroCTA'
import Footer from './components/sections/Footer'
import Squares from './components/ui/Squares'
import StickyOfferBar from './components/StickyOfferBar'
import { useLenis } from './lib/useLenis'

function App() {
  const backgroundRef = useRef(null);
  
  // Initialize Lenis smooth scroll
  useLenis();

  useEffect(() => {
    const handleScroll = () => {
      if (backgroundRef.current) {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5; // Slower than foreground
        const yPos = -(scrolled * parallaxSpeed);
        backgroundRef.current.style.transform = `translateY(${yPos}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full relative bg-black">
      <div className="fixed inset-0 w-full pointer-events-none z-[5] overflow-hidden">
        <div ref={backgroundRef} className="absolute inset-0 w-full h-[400vh]">
          {/* Blue Glow Background at Top */}
          <div
            className="absolute inset-0 z-0"
            style={{
              background: "radial-gradient(ellipse 80% 20% at 50% 0%, rgba(120, 180, 255, 0.25), transparent 70%), #000000",
            }}
          />
          
          {/* Animated Squares Background */}
          <div className="absolute inset-0 z-[5]">
            <Squares 
              speed={0} 
              squareSize={70}
              direction=''
              borderColor='#fff'
              hoverFillColor='#222'
            />
          </div>
        </div>
      </div>
      
      {/* Content Container with relative positioning */}
      <div className="relative z-10 min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Why Germany Section */}
      <WhyGermany />

      {/* Learn German Language Section */}
      <LearnGerman />

      {/* Study & Work Opportunities Section */}
      <StudyWorkOpportunities />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Hero CTA Section */}
      <HeroCTA />
      
      {/* Footer */}
      <Footer />
      
      </div>
      
      {/* Sticky Offer Bar - Mobile Only */}
      <StickyOfferBar />
    </div>
  )
}

export default App


