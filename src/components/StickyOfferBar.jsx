import { useState, useEffect } from 'react';
import { Button } from './ui/button';

function StickyOfferBar() {
  const [timeLeft, setTimeLeft] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [shouldPulse, setShouldPulse] = useState(false);
  const [shouldJerk, setShouldJerk] = useState(false);

  useEffect(() => {
    const getDeadline = () => {
      const stored = localStorage.getItem('offerDeadline');
      if (stored) {
        return parseInt(stored);
      }
      const deadline = Date.now() + 30 * 60 * 1000; // 30 minutes from now
      localStorage.setItem('offerDeadline', deadline.toString());
      return deadline;
    };

    const calculateTimeLeft = () => {
      const deadline = getDeadline();
      const now = Date.now();
      const difference = deadline - now;

      if (difference <= 0) {
        setTimeLeft('00:00');
        return;
      }

      // Calculate minutes and seconds from milliseconds
      const minutes = Math.floor(difference / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      const formattedMinutes = minutes.toString().padStart(2, '0');
      const formattedSeconds = seconds.toString().padStart(2, '0');

      setTimeLeft(`${formattedMinutes}:${formattedSeconds}`);
    };

    // Calculate immediately
    calculateTimeLeft();

    // Update every second
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Show the sticky bar after 5 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isVisible) {
      // Trigger animation after component is visible
      const animationTimer = setTimeout(() => {
        setShouldAnimate(true);
      }, 50);
      
      // Start pulsing after 2 seconds
      const pulseTimer = setTimeout(() => {
        setShouldPulse(true);
      }, 2500);
      
      return () => {
        clearTimeout(animationTimer);
        clearTimeout(pulseTimer);
      };
    }
  }, [isVisible]);

  useEffect(() => {
    if (shouldPulse) {
      // Trigger jerk animation after pulse starts, then every 3 seconds
      const jerkOnce = setTimeout(() => {
        setShouldJerk(true);
        setTimeout(() => setShouldJerk(false), 800); // Reset after animation completes
      }, 3000);

      const jerkInterval = setInterval(() => {
        setShouldJerk(true);
        setTimeout(() => setShouldJerk(false), 800);
      }, 3000);

      return () => {
        clearTimeout(jerkOnce);
        clearInterval(jerkInterval);
      };
    }
  }, [shouldPulse]);

  return (
    <>
      {/* Mobile Version */}
      <div className={`fixed bottom-4 left-4 right-4 z-[100] md:hidden backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl rounded-2xl transition-all duration-700 ease-out ${!isVisible ? 'translate-y-full opacity-0' : shouldAnimate ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'} ${shouldPulse ? 'animate-scale-pulse' : ''}`}>
        <div className="flex items-center justify-between px-4 py-3 gap-2">
          {/* Timer Text */}
          <div className="flex flex-col flex-1">
            <span className="text-[10px] font-semibold text-white">
              Limited Offer Ends In
            </span>
            <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 tabular-nums">
              {timeLeft}
            </span>
          </div>

          {/* WhatsApp Button */}
          <Button
            size="sm"
            className={`bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold px-3 py-2 text-xs whitespace-nowrap shadow-lg ${shouldJerk ? 'animate-random-jerk' : ''}`}
            asChild
          >
            <a 
              href="https://wa.me/919059053439?text=Hi!%20I%20saw%20the%20limited%20offer%20and%20I%27m%20interested%20in%20getting%20started." 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5"
            >
              <span>💬</span>
              <span>Chat on WhatsApp</span>
            </a>
          </Button>
        </div>
      </div>

      {/* Desktop Version */}
      <div className={`md:flex hidden fixed bottom-4 right-4 z-[100] backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl rounded-2xl transition-all duration-700 ease-out ${!isVisible ? 'translate-y-full opacity-0' : shouldAnimate ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'} ${shouldPulse ? 'animate-scale-pulse' : ''}`}>
        <div className="flex items-center justify-between px-6 py-4 gap-4">
          {/* Timer Text */}
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-white">
              Limited Offer Ends In
            </span>
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 tabular-nums">
              {timeLeft}
            </span>
          </div>

          {/* WhatsApp Button */}
          <Button
            size="sm"
            className={`bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold px-4 py-2.5 text-xs whitespace-nowrap shadow-lg ${shouldJerk ? 'animate-random-jerk' : ''}`}
            asChild
          >
            <a 
              href="https://wa.me/919059053439?text=Hi!%20I%20saw%20the%20limited%20offer%20and%20I%27m%20interested%20in%20getting%20started." 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <span>💬</span>
              <span>Chat on WhatsApp</span>
            </a>
          </Button>
        </div>
      </div>
    </>
  );
}

export default StickyOfferBar;

