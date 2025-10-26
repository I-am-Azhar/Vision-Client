import { ScrollSection, ScrollSlide } from '../ScrollSection';

function StudyWorkOpportunities() {
  return (
    <ScrollSection id="programs" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <ScrollSlide direction="up" delay={0}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
              Turn Your German Dream into Reality
            </span>
          </h2>
        </ScrollSlide>

        {/* Two Blocks Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-8">
          {/* Study Block */}
          <ScrollSlide direction="right" delay={0.1}>
            <div className="p-6 md:p-8 rounded-lg border border-gray-700/30 bg-gray-900/20 backdrop-blur-sm hover:border-gray-600/40 transition-colors">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-4xl">🎓</span>
              <h3 className="text-2xl md:text-3xl font-semibold text-white">
                Study in Germany
              </h3>
            </div>
            <p className="text-gray-300 text-lg mb-3 font-medium ml-4">
              Bachelor's / Master's in Top Universities
            </p>
            <ul className="text-gray-400 space-y-2 ml-12">
              <li className="list-disc">World-class universities</li>
              <li className="list-disc">300+ programs in English</li>
              <li className="list-disc">Tuition fees as low as €300/semester</li>
              <li className="list-disc">Direct application support</li>
            </ul>
            </div>
          </ScrollSlide>

          {/* Work Block */}
          <ScrollSlide direction="left" delay={0.2}>
            <div className="p-6 md:p-8 rounded-lg border border-gray-700/30 bg-gray-900/20 backdrop-blur-sm hover:border-gray-600/40 transition-colors">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-4xl">💼</span>
              <h3 className="text-2xl md:text-3xl font-semibold text-white">
                Work in Germany
              </h3>
            </div>
            <p className="text-gray-300 text-lg mb-3 font-medium ml-4">
              Full-Time & Part-Time Jobs Available
            </p>
            <ul className="text-gray-400 space-y-2 ml-12">
              <li className="list-disc">Work 120 full days or 240 half days/year</li>
              <li className="list-disc">High-demand fields: IT, Healthcare, Engineering</li>
              <li className="list-disc">Average salary: €45,000–€70,000</li>
              <li className="list-disc">Blue Card eligibility pathway</li>
            </ul>
            </div>
          </ScrollSlide>
        </div>

        {/* Highlight Line */}
        <ScrollSlide direction="up" delay={0.3}>
          <p className="text-center text-base md:text-lg text-white/60 mb-8 font-medium">
            Start your journey with a 1-Year Visa ⟶ extendable up to 5 years.
          </p>
        </ScrollSlide>

        {/* WhatsApp CTA Button */}
        <ScrollSlide direction="up" delay={0.4}>
          <div className="flex justify-center">
            <button className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-semibold text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors duration-200 shadow-lg">
              💬 Message Us on WhatsApp to Start Your Process
            </button>
          </div>
        </ScrollSlide>
      </div>
    </ScrollSection>
  )
}

export default StudyWorkOpportunities

