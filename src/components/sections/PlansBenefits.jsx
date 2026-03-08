import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '../ui';
import { RightArrowIcon } from '../common/SvgIcons';
import { QFIT_PLANS_BENEFITS } from '../../constants';

gsap.registerPlugin(ScrollTrigger);

const PlansBenefits = () => {
  const sectionRef = useRef(null);
  const buttonRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Button animation
      if (buttonRef.current) {
        gsap.from(buttonRef.current, {
          opacity: 0,
          scale: 0.9,
          duration: 0.6,
          ease: 'back.out(1.5)',
          scrollTrigger: {
            trigger: buttonRef.current,
            start: 'top 85%',
          }
        });
      }

      // Title animation
      if (titleRef.current) {
        gsap.from(titleRef.current, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
          }
        });
      }

      // Cards animation with stagger
      const validCards = cardsRef.current.filter(card => card !== null);
      if (validCards.length > 0) {
        gsap.from(validCards, {
          opacity: 0,
          x: -50,
          duration: 0.7,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: validCards[0],
            start: 'top 80%',
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  return (
    <div ref={sectionRef} className="w-full">
      {/* Title with button */}
      <div className="mb-6 md:mb-8 flex flex-col items-center">
        <Button
          ref={buttonRef}
          variant="custom"
          className="text-base md:text-lg !font-normal leading-[20px] text-white gap-2 rounded-full bg-custom-purple mb-6 md:mb-[47px]"

        >
          Why Choose Us
          <RightArrowIcon color='white' />
        </Button>
        <h2 ref={titleRef} className="font-semibold md:font-bold text-2xl md:text-[40px] leading-[30px] md:leading-[48px] text-center text-custom-purple px-4">
          Built For Modern <br /> Life's Uncertainties
        </h2>
      </div>

      {/* Benefits Cards */}
      <div className="space-y-4 md:space-y-9 flex flex-col items-center px-4">
        {QFIT_PLANS_BENEFITS.map((benefit, index) => (
          <div
            key={index}
            ref={el => cardsRef.current[index] = el}
            className={`rounded-2xl md:rounded-3xl w-full md:w-[531px] h-auto md:h-[201px] p-5 md:p-6 ${index === 0 ? 'bg-[#B0E6EC]/30' :
              index === 1 ? 'bg-[#34CA8D]/30' :
                index === 2 ? 'bg-[#5528A9]/20' :
                  'bg-[#FFE5CC]'
              }`}
          >
            <div className="flex flex-col items-start justify-between h-full">
              <div className='hidden bg-white rounded-[5px] w-10 md:w-[48px] h-10 md:h-[48px] md:flex items-center justify-center mb-3 md:mb-0'>
                <img
                  src={benefit.icon}
                  alt="User icon"
                  className="object-contain w-6 md:w-auto"
                />
              </div>
              <div>
                <h3 className="font-medium md:font-semibold text-2xl md:text-3xl leading-[34px] md:leading-[38px] text-black mb-3 md:mb-3">
                  {benefit.title}
                </h3>
                <p className="font-normal text-base md:text-[17px] leading-[23px] text-black">{benefit.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlansBenefits;
