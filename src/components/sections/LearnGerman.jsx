import GlareHover from "../ui/GlareHover";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ScrollSection, ScrollFade } from '../ScrollSection';

function LearnGerman() {
  const levels = [
    {
      name: "A1 – Beginner",
      badges: ["Vocabulary", "Grammar", "Pronunciation"],
      description: "Start your German journey with basic vocabulary and essential phrases.",
    },
    {
      name: "A2 – Elementary",
      badges: ["Conversation", "Writing", "Reading"],
      description: "Build confidence in everyday conversations and written communication.",
    },
    {
      name: "B1 – Intermediate",
      badges: ["Business German", "Advanced Grammar", "Cultural Context"],
      description: "Master professional communication and complex grammatical structures.",
    },
    {
      name: "B2 – Advanced",
      badges: ["Fluency", "Native Expressions", "Academic German"],
      description: "Achieve near-native fluency for work, study, and daily life in Germany.",
    },
  ];

  const handleEnroll = (level) => {
    const message = `I want to enroll in ${level} German course`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <ScrollSection className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <ScrollFade>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
                Learn German — A1 to B2 Levels
              </span>
            </h2>
            <p className="text-lg md:text-xl text-white/90">
              Certified Trainers • Fast-Track Courses • 100% Visa Oriented
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
                glareOpacity={0.3}
                glareAngle={-30}
                glareSize={300}
                transitionDuration={800}
                playOnce={false}
                style={{
                  backdropFilter: "blur(12px)",
                  boxShadow:
                    "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 0 60px rgba(251, 146, 60, 0.1), inset 0 0 40px rgba(234, 179, 8, 0.05)",
                }}
              >
                <div className="flex flex-col h-full p-8 md:p-10">
                  {/* Level Name - Single Line */}
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center md:text-left">
                    <span className="text-3xl md:text-4xl">{level.name.split(' – ')[0]}</span>
                    <span className="text-xl md:text-2xl text-white/60"> – {level.name.split(' – ')[1]}</span>
                  </h3>

                  {/* Badges - 2 in first line, 1 in second line */}
                  <div className="flex flex-col gap-2 mb-8">
                    {/* First Row - First 2 badges */}
                    <div className="flex gap-2">
                      {level.badges.slice(0, 2).map((badge, badgeIndex) => (
                        <Badge
                          key={badgeIndex}
                          variant="outline"
                          className="text-xs md:text-xs py-1.5 px-2 flex-1 text-center whitespace-nowrap"
                        >
                          {badge}
                        </Badge>
                      ))}
                    </div>
                    {/* Second Row - 3rd badge */}
                    <div className="flex justify-center">
                      <Badge
                        key={level.badges[2]}
                        variant="outline"
                        className="text-xs md:text-xs py-1.5 px-2 flex-initial text-center whitespace-nowrap"
                      >
                        {level.badges[2]}
                      </Badge>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm md:text-base text-white/70 mb-8 flex-grow leading-relaxed text-center">
                    {level.description}
                  </p>

                  {/* Enroll Button */}
                  <Button
                    onClick={() => handleEnroll(level.name)}
                    variant="default"
                    size="default"
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-base md:text-lg font-semibold"
                  >
                    Enroll Now
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
