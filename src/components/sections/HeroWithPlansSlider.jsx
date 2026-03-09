import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { Button } from '../ui';
import { QFIT_PLANS_DATA } from '../../constants/plansContent';
import { RightArrowIcon } from '../common/SvgIcons';

const HeroWithPlansSlider = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);
  const sliderRef = useRef(null);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const planColors = {
    'QFit Kavach': 'bg-pink-50',
    'QFit Super': 'bg-cyan-50',
    'QFit Lite': 'bg-green-50',
    'QFit Essential': 'bg-purple-50',
    'QFit Max': 'bg-yellow-50',
  };

  const planRoutes = {
    'QFit Kavach': '/plans/qfit-kavach',
    'QFit Super': '/plans/qfit-super',
    'QFit Lite': '/plans/qfit-lite',
    'QFit Essential': '/plans/qfit-essential',
    'QFit Max': '/plans/qfit-max',
  };

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-play slider
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const next = (prev + 1) % QFIT_PLANS_DATA.length;
        // Scroll to the next slide
        if (sliderRef.current) {
          const cardWidth = isMobile ? 296 : 344; // card width + gap
          sliderRef.current.scrollTo({
            left: next * cardWidth,
            behavior: 'smooth'
          });
        }
        return next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isMobile]);

  // Initial animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      if (badgeRef.current) {
        tl.from(badgeRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.6,
          ease: 'power3.out',
        });
      }

      if (titleRef.current) {
        tl.from(titleRef.current, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: 'power3.out',
        }, '-=0.3');
      }

      if (descRef.current) {
        tl.from(descRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.7,
          ease: 'power3.out',
        }, '-=0.4');
      }

      if (buttonRef.current) {
        tl.from(buttonRef.current, {
          opacity: 0,
          scale: 0.9,
          duration: 0.6,
          ease: 'back.out(1.5)',
        }, '-=0.3');
      }

      if (imageRef.current) {
        tl.from(imageRef.current, {
          opacity: 0,
          x: 50,
          duration: 1,
          ease: 'power3.out',
        }, '-=0.8');
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handlePlanClick = (planName) => {
    navigate(planRoutes[planName]);
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);

    // Scroll to the selected slide
    if (sliderRef.current) {
      const cardWidth = isMobile ? 296 : 344;
      sliderRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
    }

    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#E5F4FF] overflow-hidden"
      style={{
        backgroundImage: 'url(/assets/images/bg/DottedBg.png), url(/assets/images/bg/HowWorksBg.png)',
        backgroundSize: 'auto, cover',
        backgroundPosition: 'center, center',
        backgroundRepeat: 'repeat, no-repeat',
        marginTop: '-80px',
        paddingTop: '100px',
      }}
    >
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12">
          {/* Left Content */}
          <div className="space-y-4 md:space-y-6">
            <div
              ref={badgeRef}
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm"
            >
              <img src="/assets/icons/Heart.svg" alt="Heart" className="w-6 h-6" />
              <span className="text-sm md:text-base font-medium text-[#0072F2]">Your Health, Our Priority</span>
            </div>

            <h1
              ref={titleRef}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              <span className="text-custom-purple">YOUR HEALTH,</span>
              <br />
              <span className="text-custom-dark-text">OUR PRIORITY</span>
            </h1>

            <p
              ref={descRef}
              className="text-custom-dark-text text-base md:text-lg max-w-lg leading-relaxed"
            >
              We provide comprehensive healthcare services with a personal touch, ensuring you receive the best care possible.
            </p>

            <div ref={buttonRef}>
              <Button
                variant="custom"
                className="bg-custom-purple text-white font-bold text-base md:text-lg py-3 px-6 md:px-8 rounded-full hover:bg-purple-700 transition-colors shadow-[5px_5px_5px_0px_rgba(0,0,0,0.25)]"
                onClick={() => navigate('/plans')}
              >
                Explore Wellness Plans
              </Button>
            </div>
          </div>

          {/* Right Illustration */}
          <div
            ref={imageRef}
            className="relative flex justify-center items-center"
          >
            <img
              src="/assets/images/HeroImage.png"
              alt="Healthcare Team"
              className="w-full h-auto object-contain max-w-md md:max-w-lg"
            />
          </div>
        </div>

        {/* Plans Slider Section */}
        <div className="mt-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            <span className="text-custom-dark-text">QFIT PLUS </span>
            <span className="text-custom-dark-text">PLANS</span>
          </h2>

          {/* Slider Container */}
          <div className="relative overflow-hidden">
            <div
              ref={sliderRef}
              className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-4"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              {QFIT_PLANS_DATA.map((plan, index) => (
                <div
                  key={plan.name}
                  className={`flex-shrink-0 w-[280px] md:w-[320px] ${planColors[plan.name]} rounded-3xl p-6 shadow-lg transition-all duration-300 ${index === currentSlide ? 'scale-105 ring-4 ring-purple-400' : 'scale-100'
                    }`}
                >
                  <div className="text-center mb-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-custom-dark-text mb-2">
                      {plan.name.split(' ')[0]}
                    </h3>
                    <h4 className="text-xl md:text-2xl font-bold text-custom-purple">
                      {plan.name.split(' ').slice(1).join(' ')}
                    </h4>
                  </div>

                  <div className="flex justify-center mb-6">
                    <img
                      src={plan.icon}
                      alt={plan.name}
                      className="w-24 h-24 md:w-32 md:h-32 object-contain"
                    />
                  </div>

                  <button
                    onClick={() => handlePlanClick(plan.name)}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-custom-purple text-white rounded-full text-base font-bold hover:bg-purple-700 transition-colors shadow-md"
                  >
                    Learn More
                    <RightArrowIcon color="#ffffff" />
                  </button>
                </div>
              ))}
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {QFIT_PLANS_DATA.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentSlide
                    ? 'bg-custom-purple w-8'
                    : 'bg-gray-400'
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Section Preview */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            <span className="text-custom-dark-text">Why Choose </span>
            <span className="text-custom-purple">RupeeQ?</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="flex flex-col items-center gap-3 bg-cyan-50 rounded-2xl p-6">
              <img src="/assets/icons/Doctor.svg" alt="Doctors" className="w-12 h-12" />
              <p className="font-semibold text-custom-dark-text">Good Doctors Team</p>
            </div>

            <div className="flex flex-col items-center gap-3 bg-purple-50 rounded-2xl p-6">
              <img src="/assets/icons/Care.svg" alt="Care" className="w-12 h-12" />
              <p className="font-semibold text-custom-dark-text">Personalized Care</p>
            </div>

            <div className="flex flex-col items-center gap-3 bg-blue-50 rounded-2xl p-6">
              <img src="/assets/icons/HandShake.svg" alt="Support" className="w-12 h-12" />
              <p className="font-semibold text-custom-dark-text">Claims Concierge support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroWithPlansSlider;
