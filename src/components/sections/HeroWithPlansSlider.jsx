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
        paddingTop: '150px',
      }}
    >
      <div className="max-w-[1155px] mx-auto">
        <div className="flex flex-row items-center justify-between">
          {/* Left Content */}
          <div className="">
            <h1
              ref={titleRef}
              className="font-extrabold text-[40px] leading-[53px] text-custom-purple mb-5"
            >
              <span className="">YOUR HEALTH,</span>
              <br />
              <span className="">OUR PRIORITY</span>
            </h1>

            <p
              ref={descRef}
              className="text-custom-dark-text font-normal text-[17px] leading-[24px] max-w-[447px] mb-8"
            >
              We provide comprehensive healthcare services with a personal touch, ensuring you receive the best care possible.
            </p>

            <div ref={buttonRef}>
              <Button
                variant="custom"
                className="bg-custom-purple font-bold text-lg leading-[24px] hover:bg-purple-700 transition-colors text-white mb-10"
                onClick={() => navigate('/plans')}
              >
                Explore Wellness Plans
              </Button>
            </div>

            <div
              ref={badgeRef}
              className="flex gap-[10px] items-center"
            >
              <img src="/assets/icons/Heart.svg" alt="Heart" className="" />
              <span className="bg-brand-gradient bg-clip-text text-transparent font-semibold text-xl leading-[120%]">Your Health, Our Priority</span>
            </div>
          </div>

          {/* Right Illustration */}
          <div
            ref={imageRef}
            className="relative flex justify-center items-center"
          >
            <img
              src="/assets/images/HeroImage.svg"
              alt="Healthcare Team"
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Plans Slider Section */}
      <div className="mt-11">
        <h2 className="font-bold text-3xl leading-[35px] text-[#212121] text-center mb-10">
          {/* <span className="">QFIT PLUS </span> */}
          {/* <span className="">PLANS</span> */}
          QFIT PLUS PLANS
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
      <div className="mt-9 text-center">
        <h3 className="font-bold text-[40px] leading-[47px]">
          <span className="text-[#100701]">Why Choose </span>
          <span className="text-custom-purple">RupeeQ?</span>
        </h3>

        {/* Bottom Features Section - Desktop Only */}
        <div className="hidden md:block mt-11">
          <div className="bg-[#DACCFD]/70 rounded-t-3xl p-2">
            <div className="flex items-center justify-around">
              <div className="flex items-center gap-3">
                <img src="/assets/icons/Doctor.svg" alt="Doctor" className="" />
                <span className="text-lg leading-[21px] font-semibold text-custom-dark-text">Good Doctors Team</span>
              </div>
              <div className="flex items-center gap-3">
                <img src="/assets/icons/Care.svg" alt="Care" className="" />
                <span className="text-lg leading-[21px] font-semibold text-custom-dark-text">Personalized Care</span>
              </div>
              <div className="flex items-center gap-3">
                <img src="/assets/icons/24Service.svg" alt="Customer Care" className="" />
                <span className="text-lg leading-[21px] font-semibold text-custom-dark-text">Claims Concierge support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroWithPlansSlider;
