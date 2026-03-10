import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import gsap from 'gsap';
import { Button } from '../ui';
import { QFIT_PLANS_DATA } from '../../constants/plansContent';
import { RightArrowIcon, RightUpArrowIcon } from '../common/SvgIcons';

const HeroWithPlansSlider = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);
  const sliderRef = useRef(null);
  const mobileCardsRef = useRef([]);

  const planColors = {
    'QFit Kavach': 'bg-gradient-to-b from-[#F9AAA6]/20 to-gray-100',
    'QFit Super': 'bg-gradient-to-b from-[#9FF1FA]/50 to-gray-100',
    'QFit Lite': 'bg-gradient-to-b from-[#34CA8D]/20 to-gray-100',
    'QFit Essential': 'bg-gradient-to-b from-[#5084FF]/20 to-gray-100',
    'QFit Max': 'bg-gradient-to-b from-[#E8BE26]/20 to-gray-100',
  };

  const planRoutes = {
    'QFit Kavach': '/plans/qfit-kavach',
    'QFit Super': '/plans/qfit-super',
    'QFit Lite': '/plans/qfit-lite',
    'QFit Essential': '/plans/qfit-essential',
    'QFit Max': '/plans/qfit-max',
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    pauseOnHover: false,
    centerMode: false,
    arrows: false,
    draggable: true,
    swipe: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          speed: 3000,
          autoplay: true,
          autoplaySpeed: 3000,
          cssEase: 'linear',
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 3000,
          autoplay: true,
          autoplaySpeed: 3000,
          cssEase: 'linear',
        }
      }
    ]
  };

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

  // Force slider autoplay to start
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickPlay();
    }
  }, []);

  // Mobile cards animation
  useEffect(() => {
    if (window.innerWidth < 768) {
      const validCards = mobileCardsRef.current.filter(card => card !== null);
      if (validCards.length > 0) {
        gsap.from(validCards, {
          y: 30,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out',
          delay: 0.5,
        });
      }
    }
  }, []);

  const handlePlanClick = (planName) => {
    navigate(planRoutes[planName]);
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-b from-[#DDEDF9] to-white overflow-hidden before:absolute before:inset-0 before:bg-[url(/assets/images/bg/HowWorksBg.png)] before:bg-cover before:bg-center before:bg-no-repeat before:rotate-180 before:z-0 after:absolute after:inset-0 after:bg-[url(/assets/images/bg/DottedBg.png)] after:bg-repeat after:bg-center after:z-0 -mt-20 pt-32 md:pt-[150px]"
    >
      <div className="max-w-[1155px] mx-auto relative z-10">
        <div className="flex md:flex-row text-center md:text-start items-center justify-between">
          {/* Left Content */}
          <div className="">
            <h1
              ref={titleRef}
              className="font-bold text-[25px] leading-[35px] md:font-extrabold md:text-[40px] md:leading-[53px] text-button-color md:text-custom-purple mb-2 md:mb-5"
            >
              <span className="">YOUR HEALTH,</span>
              <br className='hidden md:block' />
              <span className=""> OUR PRIORITY</span>
            </h1>

            <p
              ref={descRef}
              className="text-[#4B5768] md:text-custom-dark-text font-normal text-sm md:text-[17px] leading-[19px] md:leading-[24px] max-w-[447px] mb-10 md:mb-8"
            >
              We provide comprehensive healthcare services with a personal touch, ensuring you receive the best care possible.
            </p>

            <div ref={buttonRef}>
              <Button
                variant="custom"
                className="hidden md:block bg-custom-purple font-bold text-lg leading-[24px] hover:bg-purple-700 transition-colors text-white mb-10"
                onClick={() => navigate('/plans')}
              >
                Explore Wellness Plans
              </Button>

              <Button
                variant="custom"
                className="font-bold text-[15px] leading-[22px] bg-button-color gap-6 text-white mb-8 md:hidden"
                onClick={() => navigate('/plans')}
              >
                Check Free Credit Score
                <RightUpArrowIcon />
              </Button>
            </div>

            <div
              ref={badgeRef}
              className="flex gap-[10px] items-center justify-center md:justify-start"
            >
              <img src="/assets/icons/Heart.svg" alt="Heart" className="" />
              <span className="bg-brand-gradient bg-clip-text text-transparent font-semibold text-xl leading-[120%]">Your Health, Our Priority</span>
            </div>
          </div>

          {/* Right Illustration */}
          <div
            ref={imageRef}
            className="hidden relative md:flex justify-center items-center"
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
      <div className="mt-9 md:mt-11 relative z-10">
        <h2 className="font-bold text-3xl leading-[35px] text-[#212121] text-center mb-6 md:mb-10">
          QFIT PLUS PLANS
        </h2>

        {/* Desktop Slider */}
        <div className="hidden md:block w-full slider-with-gap">
          <style>{`
            .slider-with-gap .slick-slide {
              padding: 0 6px;
            }
            .slider-with-gap .slick-list {
              margin: 0 -6px;
            }
          `}</style>
          <Slider ref={sliderRef} {...sliderSettings}>
            {[...QFIT_PLANS_DATA, ...QFIT_PLANS_DATA].map((plan, index) => (
              <div key={`${plan.name}-${index}`} className="px-0">
                <div
                  className={`${planColors[plan.name]} w-full h-[240px] rounded-t-3xl py-4 px-6 text-center border border-black/10`}
                  style={{ borderBottom: 'transparent' }}
                >
                  <div className="text-center">
                    <h3 className="font-bold text-3xl tracing-[6%] text-custom-dark-text mb-4">
                      {plan.name.split(' ').slice(1).join(' ')}
                    </h3>
                  </div>

                  <div className="flex justify-center mb-5">
                    <img
                      src={plan.icon}
                      alt={plan.name}
                      className="object-contain"
                    />
                  </div>

                  <button
                    onClick={() => handlePlanClick(plan.name)}
                    className="w-[161px] h-[48px] inline-flex items-center justify-center gap-2 bg-custom-purple text-white rounded-full font-medium text-base leading-[24px] hover:bg-purple-700 transition-colors"
                  >
                    Learn More
                    <RightArrowIcon color="#ffffff" />
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Mobile Vertical Stack */}
        <div className="md:hidden flex flex-col gap-4 px-[55px]">
          {QFIT_PLANS_DATA.map((plan, index) => (
            <div
              key={plan.name}
              ref={el => mobileCardsRef.current[index] = el}
              className={`${planColors[plan.name]} rounded-t-3xl py-6 px-6 text-center border border-black/10`}
              style={{ borderBottom: 'transparent' }}
            >
              <div className="text-center">
                <h3 className="font-bold text-3xl leading-[35px] text-custom-dark-text mb-4">
                  {plan.name.split(' ').slice(1).join(' ')}
                </h3>
              </div>

              <div className="flex justify-center mb-5">
                <img
                  src={plan.icon}
                  alt={plan.name}
                  className="object-contain w-20 h-20"
                />
              </div>

              <button
                onClick={() => handlePlanClick(plan.name)}
                className="w-[161px] h-[48px] inline-flex items-center justify-center gap-2 bg-custom-purple text-white rounded-full font-medium text-base leading-[24px] hover:bg-purple-700 transition-colors mx-auto"
              >
                Learn More
                <RightArrowIcon color="#ffffff" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Section Preview */}
      <div className="hidden md:block mt-9 text-center relative z-10">
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
