import { Button } from "../ui/button"
import { ScrollSection, ScrollFade, ScrollSlide } from '../ScrollSection'

function HeroCTA() {
  return (
    <ScrollSection className="py-8 md:py-16 lg:py-24 px-4 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black to-black" />
      
      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Main Heading */}
        <ScrollFade delay={0}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-8 leading-tight">
            Ready to Work or Study in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
              Germany?
            </span>
          </h2>
        </ScrollFade>
        
        {/* Flow Process - Mobile with 2x2 grid and timeline */}
        <div className="mb-8 md:mb-12">
          {/* Mobile: 2x2 Grid with Timeline */}
          <div className="md:hidden relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-1/2 top-6 bottom-6 w-0.5 bg-gradient-to-b from-orange-500 via-yellow-500 to-orange-500 transform -translate-x-1/2"></div>
            
            {/* Steps Grid */}
            <div className="grid grid-cols-2 gap-4 relative">
              {/* Step 1 - Get Free Consultation */}
              <ScrollFade delay={0.1}>
                <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-4 py-3 relative">
                  {/* Timeline dot */}
                  <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 border-2 border-black shadow-lg"></div>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-500 font-semibold text-sm">Get Free Consultation</span>
                </div>
              </ScrollFade>
              
              {/* Step 2 - Learn German */}
              <ScrollFade delay={0.2}>
                <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-4 py-3 relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 border-2 border-black shadow-lg"></div>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-500 font-semibold text-sm">Learn German</span>
                </div>
              </ScrollFade>
              
              {/* Step 3 - Apply for Visa */}
              <ScrollFade delay={0.3}>
                <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-4 py-3 relative">
                  {/* Timeline dot */}
                  <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 border-2 border-black shadow-lg"></div>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-500 font-semibold text-sm">Apply for Visa</span>
                </div>
              </ScrollFade>
              
              {/* Step 4 - Start Working */}
              <ScrollFade delay={0.4}>
                <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-4 py-3 relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 border-2 border-black shadow-lg"></div>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-500 font-semibold text-sm">Start Working</span>
                </div>
              </ScrollFade>
            </div>
          </div>
          
          {/* Desktop: Horizontal Flow with Arrows */}
          <div className="hidden md:flex items-center justify-center gap-6 px-4">
            {/* Step 1 */}
            <ScrollFade delay={0.1}>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-6 py-3">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-500 font-semibold text-xl">Get Free Consultation</span>
              </div>
            </ScrollFade>
            
            {/* Arrow 1 */}
            <ScrollFade delay={0.3}>
              <div className="text-orange-400 text-2xl font-bold">
                →
              </div>
            </ScrollFade>
            
            {/* Step 2 */}
            <ScrollFade delay={0.2}>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-6 py-3">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-500 font-semibold text-xl">Learn German</span>
              </div>
            </ScrollFade>
            
            {/* Arrow 2 */}
            <ScrollFade delay={0.4}>
              <div className="text-orange-400 text-2xl font-bold">
                →
              </div>
            </ScrollFade>
            
            {/* Step 3 */}
            <ScrollFade delay={0.3}>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-6 py-3">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-500 font-semibold text-xl">Apply for Visa</span>
              </div>
            </ScrollFade>
            
            {/* Arrow 3 */}
            <ScrollFade delay={0.5}>
              <div className="text-orange-400 text-2xl font-bold">
                →
              </div>
            </ScrollFade>
            
            {/* Step 4 */}
            <ScrollFade delay={0.4}>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-6 py-3">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-500 font-semibold text-xl">Start Working</span>
              </div>
            </ScrollFade>
          </div>
        </div>
        
        {/* WhatsApp Button */}
        <ScrollFade delay={1.0}>
          <div className="flex justify-center">
            <Button 
              variant="default" 
              size="lg"
              className="min-w-[200px] md:min-w-[280px] h-12 md:h-16 text-base md:text-lg font-bold bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-[0_0_30px_rgba(34,197,94,0.5)] hover:shadow-[0_0_40px_rgba(34,197,94,0.7)] transition-all duration-300"
              asChild
            >
              <a 
                href="https://wa.me/919059053439?text=I%27m%20ready%20to%20start%20my%20journey%20to%20Germany!%20How%20can%20we%20begin?" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => {
                  if (typeof fbq !== 'undefined') {
                    fbq('track', 'Contact');
                  }
                }}
              >
                🟢 Chat on WhatsApp Now
              </a>
            </Button>
          </div>
        </ScrollFade>
      </div>
    </ScrollSection>
  )
}

export default HeroCTA

