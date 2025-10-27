import { useState, useEffect } from "react";
import GlareHover from "../ui/GlareHover";
import { ScrollFade } from '../ScrollSection';
import workFromDay1 from "../../assets/workfromday1.png";
import extendableVisa from "../../assets/Extendablevisa.png";
import ielts from "../../assets/ielts.png";
import studyWork1 from "../../assets/Study&WorkOptions1.png";
import studyWork2 from "../../assets/Study&WorkOptions2.png";
import partTime from "../../assets/parttime.png";

function WhyGermany() {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 1024; // lg breakpoint
    }
    return false;
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };
    
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const getMobileDelay = (baseDelay) => isMobile ? baseDelay + 1.0 : baseDelay;
  const benefits = [
    {
      icon: workFromDay1,
      title: "Work from Day 1",
      isDual: false,
    },
    {
      icon: extendableVisa,
      title: "1-Year & Extendable Visa",
      isDual: false,
    },
    {
      icon: ielts,
      title: "No IELTS Required",
      isDual: false,
    },
    {
      icon: studyWork1,
      icon2: studyWork2,
      title: "Study & Work Options",
      isDual: true,
    },
    {
      icon: partTime,
      title: "Part-Time & Full-Time Jobs",
      isDual: false,
    },
  ];

  return (
    <div className="py-0 px-4 md:py-12 lg:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <ScrollFade delay={getMobileDelay(0)}>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-10 lg:mb-16">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
              Why Germany?
            </span>
          </h2>
        </ScrollFade>

        {/* Cards Grid */}
        <div className="space-y-6 lg:space-y-8">
          {/* Top Row - 2 Cards on mobile, 3 on desktop */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {benefits.slice(0, 2).map((benefit, index) => (
              <ScrollFade key={index} delay={getMobileDelay(index * 0.1)}>
                <div className="h-[160px] lg:h-[280px]">
              <GlareHover
                width="100%"
                height="100%"
                background="rgba(17, 24, 39, 0.3)"
                borderColor="rgba(107, 114, 128, 0.5)"
                borderRadius="16px"
                glareColor="#ffffff"
                glareOpacity={0.3}
                glareAngle={-30}
                glareSize={300}
                transitionDuration={800}
                playOnce={false}
                style={{
                  backdropFilter: "blur(12px)",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 0 60px rgba(251, 146, 60, 0.1), inset 0 0 40px rgba(234, 179, 8, 0.05)",
                }}
              >
                <div className="flex flex-col items-center justify-center h-full p-4 lg:p-8 space-y-2 md:space-y-4">
                  {/* Icon - Centered vertically on mobile, top on desktop */}
                  <div className="w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 flex items-center justify-center mx-auto">
                    <img
                      src={benefit.icon}
                      alt={benefit.title}
                      className="w-full h-full object-contain brightness-[0.4] contrast-125 drop-shadow-[0_0_15px_rgba(251,146,60,0.6)]"
                    />
                  </div>

                  {/* Title - Below icon on mobile, bottom on desktop */}
                  <h3 className="text-center text-sm md:text-lg lg:text-xl xl:text-2xl font-semibold text-white flex-none">
                    {benefit.title}
                  </h3>
                </div>
              </GlareHover>
                </div>
              </ScrollFade>
            ))}
            {/* No IELTS - Hidden on mobile, visible on desktop in 3rd column of top row */}
            {benefits.slice(2, 3).map((benefit, index) => (
              <ScrollFade key={index + 2} delay={getMobileDelay(index * 0.1)}>
                <div className="hidden lg:block h-[280px]">
              <GlareHover
                width="100%"
                height="100%"
                background="rgba(17, 24, 39, 0.3)"
                borderColor="rgba(107, 114, 128, 0.5)"
                borderRadius="16px"
                glareColor="#ffffff"
                glareOpacity={0.3}
                glareAngle={-30}
                glareSize={300}
                transitionDuration={800}
                playOnce={false}
                style={{
                  backdropFilter: "blur(12px)",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 0 60px rgba(251, 146, 60, 0.1), inset 0 0 40px rgba(234, 179, 8, 0.05)",
                }}
              >
                <div className="flex flex-col items-center justify-center h-full p-8 space-y-4">
                  <div className="w-28 h-28 flex items-center justify-center mx-auto">
                    <img
                      src={benefit.icon}
                      alt={benefit.title}
                      className="w-full h-full object-contain brightness-[0.4] contrast-125 drop-shadow-[0_0_15px_rgba(251,146,60,0.6)]"
                    />
                  </div>
                  <h3 className="text-center text-xl xl:text-2xl font-semibold text-white flex-none">
                    {benefit.title}
                  </h3>
                </div>
              </GlareHover>
                </div>
              </ScrollFade>
            ))}
          </div>

          {/* Bottom Row - 2 Cards: No IELTS + Study & Work on mobile, Study & Work + Part-Time on desktop */}
          <div className="grid grid-cols-2 gap-6 lg:gap-8 mx-auto lg:max-w-5xl max-w-5xl">
            {/* No IELTS - Visible only on mobile (hidden on desktop as it's in top row) */}
            {benefits.slice(2, 3).map((benefit, index) => (
              <ScrollFade key={index + 2} delay={0}>
                <div className="h-[160px] lg:hidden">
              <GlareHover
                width="100%"
                height="100%"
                background="rgba(17, 24, 39, 0.3)"
                borderColor="rgba(107, 114, 128, 0.5)"
                borderRadius="16px"
                glareColor="#ffffff"
                glareOpacity={0.3}
                glareAngle={-30}
                glareSize={300}
                transitionDuration={800}
                playOnce={false}
                style={{
                  backdropFilter: "blur(12px)",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 0 60px rgba(251, 146, 60, 0.1), inset 0 0 40px rgba(234, 179, 8, 0.05)",
                }}
              >
                <div className="flex flex-col items-center justify-center h-full p-4 space-y-2">
                  <div className="w-16 h-16 flex items-center justify-center mx-auto">
                    <img
                      src={benefit.icon}
                      alt={benefit.title}
                      className="w-full h-full object-contain brightness-[0.4] contrast-125 drop-shadow-[0_0_15px_rgba(251,146,60,0.6)]"
                    />
                  </div>
                  <h3 className="text-center text-sm font-semibold text-white flex-none">
                    {benefit.title}
                  </h3>
                </div>
              </GlareHover>
                </div>
              </ScrollFade>
            ))}
            {/* Empty space on desktop to push Study & Work to left */}
            <div className="hidden lg:block"></div>
            {/* Study & Work Options - Mobile visible, Desktop visible */}
            {benefits.slice(3, 4).map((benefit, index) => (
              <ScrollFade key={index + 3} delay={0}>
                <div className="h-[160px] md:h-[200px] lg:h-[280px]">
              <GlareHover
                width="100%"
                height="100%"
                background="rgba(17, 24, 39, 0.3)"
                borderColor="rgba(107, 114, 128, 0.5)"
                borderRadius="16px"
                glareColor="#ffffff"
                glareOpacity={0.3}
                glareAngle={-30}
                glareSize={300}
                transitionDuration={800}
                playOnce={false}
                style={{
                  backdropFilter: "blur(12px)",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 0 60px rgba(251, 146, 60, 0.1), inset 0 0 40px rgba(234, 179, 8, 0.05)",
                }}
              >
                <div className="flex flex-col items-center justify-center h-full p-4 lg:p-8 space-y-2 md:space-y-4">
                  {/* Icons - Show single icon on mobile, dual icons on tablet+ for isDual cards */}
                  {benefit.isDual ? (
                    <>
                      {/* Dual icons - hidden on mobile, visible on tablet+ */}
                      <div className="hidden md:flex flex-row items-center justify-center gap-2 lg:gap-4 flex-shrink-0">
                        <div className="w-24 h-24 lg:w-28 lg:h-32 flex items-center justify-center">
                          <img
                            src={benefit.icon}
                            alt={`${benefit.title} - option 1`}
                            className="w-full h-full object-contain brightness-[0.4] contrast-125 drop-shadow-[0_0_15px_rgba(251,146,60,0.6)]"
                          />
                        </div>
                        <div className="w-24 h-24 lg:w-28 lg:h-32 flex items-center justify-center">
                          <img
                            src={benefit.icon2}
                            alt={`${benefit.title} - option 2`}
                            className="w-full h-full object-contain brightness-[0.4] contrast-125 drop-shadow-[0_0_15px_rgba(251,146,60,0.6)]"
                          />
                        </div>
                      </div>
                      {/* Single icon on mobile only for dual cards */}
                      <div className="md:hidden w-16 h-16 flex items-center justify-center mx-auto">
                        <img
                          src={benefit.icon2}
                          alt={benefit.title}
                          className="w-full h-full object-contain brightness-[0.4] contrast-125 drop-shadow-[0_0_15px_rgba(251,146,60,0.6)]"
                        />
                      </div>
                    </>
                  ) : (
                    <div className="w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 flex items-center justify-center mx-auto">
                      <img
                        src={benefit.icon}
                        alt={benefit.title}
                        className="w-full h-full object-contain brightness-[0.4] contrast-125 drop-shadow-[0_0_15px_rgba(251,146,60,0.6)]"
                      />
                    </div>
                  )}

                  {/* Title - Below icon on mobile, bottom on desktop */}
                  <h3 className="text-center text-sm md:text-lg lg:text-xl xl:text-2xl font-semibold text-white flex-none">
                    {benefit.title}
                  </h3>
                </div>
              </GlareHover>
                </div>
              </ScrollFade>
            ))}
            {/* Part-Time & Full-Time Jobs - Hidden on mobile and tablet, visible on desktop only in bottom row */}
            {benefits.slice(4, 5).map((benefit, index) => (
              <ScrollFade key={index + 4} delay={getMobileDelay(index * 0.1)}>
                <div className="hidden lg:block h-[280px]">
              <GlareHover
                width="100%"
                height="100%"
                background="rgba(17, 24, 39, 0.3)"
                borderColor="rgba(107, 114, 128, 0.5)"
                borderRadius="16px"
                glareColor="#ffffff"
                glareOpacity={0.3}
                glareAngle={-30}
                glareSize={300}
                transitionDuration={800}
                playOnce={false}
                style={{
                  backdropFilter: "blur(12px)",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 0 60px rgba(251, 146, 60, 0.1), inset 0 0 40px rgba(234, 179, 8, 0.05)",
                }}
              >
                <div className="flex flex-col items-center justify-center h-full p-8 space-y-4">
                  <div className="w-28 h-28 flex items-center justify-center mx-auto">
                    <img
                      src={benefit.icon}
                      alt={benefit.title}
                      className="w-full h-full object-contain brightness-[0.4] contrast-125 drop-shadow-[0_0_15px_rgba(251,146,60,0.6)]"
                    />
                  </div>

                  {/* Title - Below icon on mobile, bottom on desktop */}
                  <h3 className="text-center text-xl xl:text-2xl font-semibold text-white flex-none">
                    {benefit.title}
                  </h3>
                </div>
              </GlareHover>
                </div>
              </ScrollFade>
            ))}
          </div>
        </div>

        {/* WhatsApp CTA Button */}
        <ScrollFade delay={0}>
          <div className="flex justify-center mt-12">
            <button className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-semibold text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors duration-200 shadow-lg">
              💬 Get Free Consultation on WhatsApp
            </button>
          </div>
        </ScrollFade>
      </div>
    </div>
  );
}

export default WhyGermany;

