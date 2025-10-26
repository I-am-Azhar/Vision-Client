function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">About</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your gateway to work, study, and settle in Germany. We help you navigate the journey with expert guidance and support.
            </p>
          </div>
          
          {/* Quick Links Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#eligibility" className="text-gray-400 hover:text-orange-500 transition-colors text-sm scroll-smooth">
                  Check Eligibility
                </a>
              </li>
              <li>
                <a href="#programs" className="text-gray-400 hover:text-orange-500 transition-colors text-sm scroll-smooth">
                  Programs
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-orange-500 transition-colors text-sm scroll-smooth">
                  Success Stories
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">
                Email: info@example.com
              </li>
              <li className="text-gray-400 text-sm">
                WhatsApp: +91 XXX XXX XXX
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Client Vision. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
