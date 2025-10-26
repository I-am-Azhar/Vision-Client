import { Button } from "../ui/button"
import { ScrollSection, ScrollFade, ScrollSlide } from '../ScrollSection'

function HeroCTA() {
  return (
    <ScrollSection className="py-24 px-4 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black to-black" />
      
      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Main Heading */}
        <ScrollFade delay={0}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Ready to Work or Study in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
              Germany?
            </span>
          </h2>
        </ScrollFade>
        
        {/* Flow Process */}
        <div className="mb-12 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 px-4">
          {/* Step 1 */}
          <ScrollFade delay={0.1}>
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-6 py-3">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-500 font-semibold text-lg md:text-xl">Get Free Consultation</span>
            </div>
          </ScrollFade>
          
          {/* Arrow 1 */}
          <ScrollFade delay={0.3}>
            <div className="hidden md:block text-orange-400 text-2xl font-bold">
              →
            </div>
          </ScrollFade>
          
          {/* Step 2 */}
          <ScrollFade delay={0.2}>
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-6 py-3">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-500 font-semibold text-lg md:text-xl">Learn German</span>
            </div>
          </ScrollFade>
          
          {/* Arrow 2 */}
          <ScrollFade delay={0.4}>
            <div className="hidden md:block text-orange-400 text-2xl font-bold">
              →
            </div>
          </ScrollFade>
          
          {/* Step 3 */}
          <ScrollFade delay={0.3}>
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-6 py-3">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-500 font-semibold text-lg md:text-xl">Apply for Visa</span>
            </div>
          </ScrollFade>
          
          {/* Arrow 3 */}
          <ScrollFade delay={0.5}>
            <div className="hidden md:block text-orange-400 text-2xl font-bold">
              →
            </div>
          </ScrollFade>
          
          {/* Step 4 */}
          <ScrollFade delay={0.4}>
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-6 py-3">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-500 font-semibold text-lg md:text-xl">Start Working</span>
            </div>
          </ScrollFade>
        </div>
        
        {/* WhatsApp Button */}
        <ScrollFade delay={1.0}>
          <div className="flex justify-center">
            <Button 
              variant="default" 
              size="lg"
              className="min-w-[280px] h-16 text-lg font-bold bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-[0_0_30px_rgba(34,197,94,0.5)] hover:shadow-[0_0_40px_rgba(34,197,94,0.7)] transition-all duration-300"
            >
              🟢 Chat on WhatsApp Now
            </Button>
          </div>
        </ScrollFade>
      </div>
    </ScrollSection>
  )
}

export default HeroCTA

