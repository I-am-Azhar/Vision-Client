import GlareHover from "../ui/GlareHover";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ScrollSection, ScrollFade } from '../ScrollSection';

function LearnGerman() {
  const levels = [
    {
      name: "A1 – Beginner",
      badges: ["Words", "Grammar", "Speaking"],
      description: "Start your German journey with basic vocabulary and essential phrases.",
    },
    {
      name: "A2 – Elementary",
      badges: ["Conversation", "Writing", "Reading"],
      description: "Build confidence in everyday conversations and written communication.",
    },
    {
      name: "B1 – Intermediate",
      badges: ["Business", "Grammar", "Culture"],
      description: "Master professional communication and complex grammatical structures.",
    },
    {
      name: "B2 – Advanced",
      badges: ["Fluency", "Expressions", "Academic"],
      description: "Achieve near-native fluency for work, study, and daily life in Germany.",
    },
  ];

  const getWhatsappUrl = (level) => {
    const message = `I want to enroll in ${level} German course`;
    return `https://wa.me/919059053439?text=${encodeURIComponent(message)}`;
  };

  return (
    <ScrollSection className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <ScrollFade>
          <div className="text-center mb-6 md:mb-8 lg:mb-12 px-4 sm:px-0">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <div className="block md:inline">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
                  Learn German
                </span>
                <span className="text-white"> —</span>
              </div>
              <span className="block md:inline text-white ml-0 md:ml-2"> A1 to B2 Levels</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-white/60">
              Certified Trainers • Fast-Track Courses<br className="sm:hidden" /> 100% Visa Oriented
            </p>
          </div>
        </ScrollFade>

        {/* Level Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {levels.map((level, index) => (
            <ScrollFade key={index} delay={index * 0.1}>
              <div className="h-auto">
              <GlareHover
                width="100%"
                height="100%"
                background="rgba(17, 24, 39, 0.3)"
                borderColor="rgba(107, 114, 128, 0.5)"
                borderRadius="16px"
                glareColor="#ffffff"
                glareOpacity={0.2}
                glareAngle={-30}
                glareSize={250}
                transitionDuration={600}
                playOnce={false}
                style={{
                  backdropFilter: "blur(12px)",
                  boxShadow:
                    "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 0 60px rgba(251, 146, 60, 0.1), inset 0 0 40px rgba(234, 179, 8, 0.05)",
                }}
              >
                <div className="flex flex-col h-full p-6 sm:p-7 md:p-8 lg:p-10">
                  {/* Level Name - Single Line */}
                  <h3 className="text-2xl sm:text-2xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-8 text-center md:text-left whitespace-nowrap">
                    <span className="text-3xl sm:text-3xl md:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">{level.name.split(' – ')[0]}</span>
                    <span className="text-lg sm:text-xl md:text-xl lg:text-2xl text-white/60"> – {level.name.split(' – ')[1]}</span>
                  </h3>

                  {/* Badges - All 3 in one row on all screen sizes */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-1.5 mb-6 md:mb-8 justify-center md:justify-start">
                    {level.badges.map((badge, badgeIndex) => (
                      <Badge
                        key={badgeIndex}
                        variant="outline"
                        className="text-xs sm:text-sm md:text-[10px] lg:text-xs py-1 px-2 sm:py-1.5 sm:px-2 md:py-1 md:px-1 lg:px-1.5 w-auto text-center whitespace-nowrap"
                      >
                        {badge}
                      </Badge>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-white/70 mb-6 md:mb-8 flex-grow leading-relaxed text-left sm:text-center">
                    {level.description}
                  </p>

                  {/* Enroll Button */}
                  <Button
                    variant="default"
                    size="default"
                    className="w-auto bg-green-600 hover:bg-green-700 text-white py-3 sm:py-4 md:py-6 px-6 sm:px-8 md:px-10 text-sm sm:text-base md:text-lg font-semibold mx-auto md:mx-0"
                    asChild
                  >
                    <a 
                      href={getWhatsappUrl(level.name)} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={() => {
                        if (typeof fbq !== 'undefined') {
                          fbq('track', 'Lead');
                        }
                      }}
                    >
                      Enroll Now
                    </a>
                  </Button>
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

export default LearnGerman;
