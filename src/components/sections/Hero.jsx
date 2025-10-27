import { Button } from "../ui/button"
import { Badge } from "../ui/badge"
import { motion } from 'motion/react'
import heroImage from "../../assets/hero.png"

function Hero() {
  return (
    <section id="eligibility" className="min-h-[60vh] md:min-h-screen flex items-center justify-center relative overflow-hidden pt-6 pb-0 md:py-0">
      {/* Germany Flag Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-20 bg-cover bg-center bg-no-repeat sm:bg-cover"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      />

      {/* Animated Germany Icons Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="star star-1 text-orange-500"
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 360 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >⭐</motion.div>
        <motion.div 
          className="star star-2 text-yellow-400"
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 360 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >⭐</motion.div>
        <motion.div 
          className="star star-3 text-black"
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 360 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.6 }}
        >⭐</motion.div>
        <motion.div 
          className="star star-4 text-orange-500"
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 360 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.8 }}
        >⭐</motion.div>
        <motion.div 
          className="star star-5 text-yellow-500"
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 360 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 1.0 }}
        >⭐</motion.div>
        <motion.div 
          className="star star-6 text-orange-400"
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 360 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 1.2 }}
        >⭐</motion.div>
      </div>
      
      {/* Content Container */}
      <motion.div 
        className="relative z-10 text-center px-4 md:px-8 max-w-4xl mx-auto py-8 md:py-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Headline */}
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Work, Study & Settle in{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
            Germany
          </span>
        </motion.h1>
        
        {/* Subheadline */}
        <motion.div 
          className="mb-6 md:mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-2 px-2">
            No IELTS • Work from Day 1 • Age 22–45 • 1-Year Extendable Visa
          </p>
          <div className="w-20 sm:w-24 md:w-32 h-0.5 mx-auto bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
        </motion.div>
        
        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-2 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button 
            variant="default" 
            size="sm"
            className="w-auto sm:w-auto sm:h-14 h-10 sm:px-6 px-3 sm:py-3 py-2 text-xs sm:text-base font-semibold"
          >
            Chat On WhatsApp
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            className="w-auto sm:w-auto sm:h-14 h-10 sm:px-6 px-3 sm:py-3 py-2 text-xs sm:text-base font-semibold"
          >
            Check Your Eligibility →
          </Button>
        </motion.div>
      </motion.div>
      
      {/* Animated Badge - Bottom Corner */}
      <motion.div 
        className="absolute top-4 bottom-auto right-4 sm:bottom-8 sm:top-auto sm:right-8 z-10"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <Badge variant="default" className="shadow-2xl animate-pulse text-[10px] sm:text-sm py-1 sm:py-2 px-2 sm:px-4">
          🔥 New Batches Starting Soon!
        </Badge>
      </motion.div>
    </section>
  )
}

export default Hero

