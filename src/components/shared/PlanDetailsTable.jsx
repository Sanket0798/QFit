import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '../ui';
import PlanTable from './PlanTable';

gsap.registerPlugin(ScrollTrigger);

const PlanDetailsTable = ({ planDetails }) => {
  const { name, subtitle, price, icon } = planDetails;
  const sectionRef = useRef(null);
  const desktopTitleRef = useRef(null);
  const desktopCardRef = useRef(null);
  const mobileTitleRef = useRef(null);
  const mobileIconRef = useRef(null);
  const mobilePriceRef = useRef(null);
  const mobileHeaderRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Desktop animations
      if (window.innerWidth >= 768) {
        // Desktop title animation
        if (desktopTitleRef.current) {
          gsap.from(desktopTitleRef.current, {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power3.out',
          });
        }

        // Desktop card animation
        if (desktopCardRef.current) {
          gsap.from(desktopCardRef.current, {
            opacity: 0,
            scale: 0.9,
            duration: 0.8,
            delay: 0.3,
            ease: 'back.out(1.5)',
          });
        }
      } else {
        // Mobile animations
        // Mobile title animation
        if (mobileTitleRef.current) {
          gsap.from(mobileTitleRef.current, {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power3.out',
          });
        }

        // Mobile icon animation
        if (mobileIconRef.current) {
          gsap.from(mobileIconRef.current, {
            opacity: 0,
            scale: 0.8,
            duration: 0.7,
            delay: 0.2,
            ease: 'back.out(1.5)',
          });
        }

        // Mobile price animation
        if (mobilePriceRef.current) {
          gsap.from(mobilePriceRef.current, {
            opacity: 0,
            scale: 0.9,
            duration: 0.6,
            delay: 0.4,
            ease: 'back.out(1.5)',
          });
        }

        // Mobile header animation
        if (mobileHeaderRef.current) {
          gsap.from(mobileHeaderRef.current, {
            opacity: 0,
            y: 20,
            duration: 0.7,
            delay: 0.6,
            ease: 'power2.out',
          });
        }
      }

      // Button animation (both mobile and desktop)
      if (buttonRef.current) {
        gsap.from(buttonRef.current, {
          opacity: 0,
          scale: 0.9,
          duration: 0.6,
          ease: 'back.out(1.5)',
          scrollTrigger: {
            trigger: buttonRef.current,
            start: 'top 90%',
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="bg-white">
      {/* Hero Section - Desktop Only */}
      <section
        className="hidden md:block relative pt-20 lg:pt-24 pb-8 lg:pb-10 overflow-hidden"
        style={{
          marginTop: '-80px',
          paddingTop: '150px',
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 ref={desktopTitleRef} className="font-bold text-[40px] leading-[48px] mb-4">
            <span className="text-custom-purple">{name}</span> <span className="text-custom-dark-text">- {subtitle}</span>
          </h1>

          {/* Plan Icon and Price */}
          <div className="flex items-center justify-center gap-6 mt-6">
            <div ref={desktopCardRef} className="flex items-center justify-center gap-10 bg-white rounded-3xl shadow-[5px_5px_5px_0px_rgba(0,0,0,0.25)] w-[356px] h-[94px]">
              <img src={icon} alt={name} className="object-contain relative top-4" />
              <div className="bg-custom-purple font-bold text-3xl leading-[35px] text-white rounded-full py-[6.5px] px-6">
                {price}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section - Mobile Only */}
      <section
        className="md:hidden relative pt-16 pb-6 overflow-hidden bg-gradient-to-b from-[#DDEDF9] to-white"
        style={{
          marginTop: '-80px',
          paddingTop: '120px',
        }}
      >
        <div className="container mx-auto px-4 text-center flex flex-col items-center">
          {/* Title */}
          <h1 ref={mobileTitleRef} className="font-bold text-[25px] leading-[35px] tracing-[2%] text-center mb-8">
            <span className="text-custom-purple">{name}</span>
            <br />
            <span className="text-custom-purple">{subtitle}</span>
          </h1>

          <img ref={mobileIconRef} src={icon} alt={name} className="object-contain mb-6" />
          <div ref={mobilePriceRef} className="bg-custom-purple font-medium text-2xl leading-[34px] text-white rounded-full py-2 px-6">
            {price}
          </div>
        </div>

        <div ref={mobileHeaderRef} className='w-full text-center py-[18px] font-semibold text-2xl leading-[30px] text-custom-purple mt-9 bg-[#CCF9FF] rounded-24 shadow-[5px_5px_5px_0px_rgba(0,0,0,0.25)]'>
          Comprehensive Health
        </div>
      </section>

      {/* Reuse PlanTable Component */}
      <PlanTable planDetails={planDetails} />

      {/* Buy Now Button */}
      <div className="text-center mt-6 md:mt-9 pb-6 md:pb-9 px-4">
        <Button
          ref={buttonRef}
          variant="custom"
          className='font-bold shadow-[5px_5px_5px_0px_rgba(0,0,0,0.25)] text-lg md:text-3xl leading-[22px] md:leading-[35px] py-2 md:py-[6.5px] px-4 md:px-6 w-full md:w-[174px] bg-custom-purple text-white'
          onClick={() => {
            const planRoutes = {
              'QFit Kavach': '/checkout/qfit-kavach',
              'QFit Super': '/checkout/qfit-super',
              'QFit Lite': '/checkout/qfit-lite',
              'QFit Essential': '/checkout/qfit-essential',
              'QFit Max': '/checkout/qfit-max',
            };
            window.location.href = planRoutes[name] || '/plans';
          }}
        >
          Buy Now
        </Button>
      </div>
    </div>
  );
};

export default PlanDetailsTable;
