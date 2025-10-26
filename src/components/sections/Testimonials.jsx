import GlareHover from "../ui/GlareHover";
import { ScrollSection, ScrollFade } from '../ScrollSection';

function Testimonials() {
  const testimonials = [
    {
      name: "Rohit",
      location: "Hyderabad",
      text: "Visas Vision helped me secure my German student visa within 2 months!"
    },
    {
      name: "Varun",
      location: "Hyderabad",
      text: "The team guided me through every step of the visa process with exceptional support."
    },
    {
      name: "Khan",
      location: "Hyderabad",
      text: "Best consultation experience! I got my work visa approved faster than expected."
    }
  ];

  return (
    <ScrollSection id="testimonials" className="pt-12 pb-0 px-4 relative">
      {/* Animated Stars Decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="star star-1 text-yellow-300">✨</div>
        <div className="star star-2 text-orange-300">✨</div>
        <div className="star star-3 text-white">✨</div>
        <div className="star star-4 text-yellow-200">✨</div>
        <div className="star star-5 text-orange-200">✨</div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 pb-0">
        {/* Section Heading */}
        <ScrollFade delay={0}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
              What Our Students Say
            </span>
          </h2>
        </ScrollFade>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollFade key={index} delay={index * 0.15}>
              <div>
              <GlareHover
                width="100%"
                height="auto"
                background="rgba(17, 24, 39, 0.3)"
                borderColor="rgba(251, 146, 60, 0.4)"
                borderRadius="16px"
                glareColor="#ffffff"
                glareOpacity={0.4}
                glareAngle={-30}
                glareSize={300}
                transitionDuration={800}
                playOnce={false}
                style={{
                  backdropFilter: "blur(12px)",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 0 60px rgba(251, 146, 60, 0.15), inset 0 0 40px rgba(234, 179, 8, 0.08), 0 0 20px rgba(251, 146, 60, 0.3)",
                  display: "block",
                }}
              >
                <div className="flex flex-col px-6 py-4">
                  {/* Five Orange Stars */}
                  <div className="mb-3 flex gap-1">
                    <span className="text-orange-500 text-xl">★★★★★</span>
                  </div>
                  
                  {/* Testimonial Text */}
                  <p className="text-white/90 text-sm md:text-base lg:text-lg leading-relaxed mb-3">
                    {testimonial.text}
                  </p>
                  
                  {/* Author Info - Right Corner */}
                  <div className="text-right pb-2">
                    <div className="text-white/60 text-sm md:text-base">
                      – {testimonial.name}
                    </div>
                    <div className="text-orange-400/60 text-xs md:text-sm">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </GlareHover>
              </div>
            </ScrollFade>
          ))}
        </div>
      </div>
    </ScrollSection>
  );
}

export default Testimonials;

