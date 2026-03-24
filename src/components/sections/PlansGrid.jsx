import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '../ui';
import { QFIT_PLANS_DATA } from '../../constants';
import { RightArrowIcon } from '../common/SvgIcons';
import PlansBenefits from './PlansBenefits';

gsap.registerPlugin(ScrollTrigger);

const PlansGrid = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const planRoutes = {
    'QFit Kavach': '/plans/qfit-kavach',
    'QFit Super': '/plans/qfit-super',
    'QFit Lite': '/plans/qfit-lite',
    'QFit Essential': '/plans/qfit-essential',
    'QFit Max': '/plans/qfit-max',
  };

  const checkoutRoutes = {
    'QFit Kavach': '/checkout/qfit-kavach',
    'QFit Super': '/checkout/qfit-super',
    'QFit Lite': '/checkout/qfit-lite',
    'QFit Essential': '/checkout/qfit-essential',
    'QFit Max': '/checkout/qfit-max',
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate plan cards with stagger
      const validCards = cardsRef.current.filter(card => card !== null);
      if (validCards.length > 0) {
        gsap.from(validCards, {
          opacity: 0,
          y: 60,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: validCards[0],
            start: 'top 80%',
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  // Define background colors for each plan card
  const headerBgColors = [
    'bg-[#CCF9FF]/50', // Card 1 - Light cyan
    'bg-[#E3D4FF]/50', // Card 2 - Light orange
    'bg-[#FFE8E8]/50', // Card 3 - Light purple
    'bg-[#BDFEF1]/50', // Card 4 - Light green
    'bg-[#C2DFFF]/50', // Card 5 - Light pink
  ];

  return (
    <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-4 md:gap-x-16 gap-y-8 md:gap-y-[68px]">
      {QFIT_PLANS_DATA.map((plan, index) => (
        <div
          key={index}
          ref={el => cardsRef.current[index] = el}
          className="card-base h-auto transition-shadow relative flex flex-col"
        >
          {plan.badge && (
            <div className="absolute -top-2 md:-top-3 right-4 md:right-6 bg-purple-600 text-white px-3 md:px-4 py-0.5 md:py-1 rounded-full text-xs md:text-sm font-semibold">
              {plan.badge}
            </div>
          )}

          {/* Plan Header */}
          <div className={`card-header-base relative ${headerBgColors[index]} pr-4 md:pr-[33px] pl-5 md:pl-[41px]`}>
            <div className="flex items-center flex-1">
              <h3 className="plan-heading">
                {plan.name}
              </h3>
            </div>
            {/* Icon: pinned to bottom-center of header on mobile */}
            <img
              src={plan.icon}
              alt={plan.name}
              className="object-contain md:hidden absolute bottom-6 left-1/2 -translate-x-1/2 translate-y-1/2 w-14 mx-5 z-10"
            />
            {/* Icon absolutely positioned on desktop */}
            <img
              src={plan.icon}
              alt={plan.name}
              className="object-contain hidden md:block absolute left-64 top-9"
            />
            <div className="bg-custom-purple font-bold text-lg md:text-3xl leading-[22px] md:leading-[35px] text-white rounded-full py-1 md:py-[6.5px] px-3 md:px-6">
              {plan.price}
            </div>
          </div>

          {/* Features List */}
          <div className="space-y-[14px] md:space-y-5 mb-4 md:mb-[34px] card-content-spacing pt-6 md:pt-0">
            {plan.features.slice(0, 11).map((feature, idx) => (
              <div key={idx} className="feature-item">
                <div className="flex-shrink-0">
                  {idx === 0 ? (
                    <img
                      src="/assets/icons/User.svg"
                      alt="User icon"
                      className="ml-0.5 md:ml-1 object-contain w-5 md:w-auto"
                    />
                  ) : idx === 1 ? (
                    <img
                      src="/assets/icons/Timer.svg"
                      alt="Clock icon"
                      className="ml-0.5 md:ml-1 object-contain w-5 md:w-auto"
                    />
                  ) : (
                    <img
                      src="/assets/icons/Checked.svg"
                      alt="Clock icon"
                      className="object-contain w-6 md:w-auto"
                    />
                  )}
                </div>
                <p className="feature-text">
                  {feature.text}
                </p>

              </div>
            ))}
          </div>

          {/* View More Link */}
          <a
            href="#"
            className="text-[#0072F2] hover:underline text-base md:text-xl leading-[20px] md:leading-[26px] font-normal inline-block card-content-spacing"
            onClick={(e) => {
              e.preventDefault();
              const route = checkoutRoutes[plan.name] || '/plans';
              navigate(route, { state: { scrollToTable: true } });
            }}
          >
            View More....
          </a>

          {/* Buy Now Button */}
          <div className="card-content-spacing pb-6 md:pb-10 mt-6 md:mt-14">
            <Button
              variant="primary"
              className="text-base md:text-lg font-bold leading-[20px] md:leading-[22px] gap-2 rounded-full w-full md:w-auto"
              onClick={() => navigate(planRoutes[plan.name] || '/plans')}
            >
              Buy Now
              <RightArrowIcon color='white' />
            </Button>
          </div>
        </div>
      ))}

      {/* Benefits Section - appears in the 6th grid position (right side, bottom) */}
      <div className="flex items-center justify-center col-span-1 md:col-span-1">
        <PlansBenefits />
      </div>
    </div>
  );
};

export default PlansGrid;
