import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { QFIT_PLANS_HERO } from '../../constants';
import { RightUpArrowIcon } from '../common/SvgIcons';

gsap.registerPlugin(ScrollTrigger);

const PlansHero = () => {
  const { title, subtitle } = QFIT_PLANS_HERO;
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const healthRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      if (titleRef.current) {
        gsap.from(titleRef.current, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: 'power3.out',
        });
      }

      // Subtitle animation
      if (subtitleRef.current) {
        gsap.from(subtitleRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.8,
          delay: 0.2,
          ease: 'power3.out',
        });
      }

      // Button animation (mobile only)
      if (buttonRef.current) {
        gsap.from(buttonRef.current, {
          opacity: 0,
          scale: 0.9,
          duration: 0.6,
          delay: 0.4,
          ease: 'back.out(1.5)',
        });
      }

      // Health priority section animation (mobile only)
      if (healthRef.current) {
        gsap.from(healthRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.7,
          delay: 0.6,
          ease: 'power2.out',
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative pt-20 md:pt-24 pb-8 md:pb-10 overflow-hidden"
      style={{
        marginTop: '-80px',
        paddingTop: '138px',
      }}
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-bl from-[#E5EDFF] to-white"
      />

      {/* Fade overlay at bottom - smooth transition */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 md:h-32"
        style={{
          background: 'linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,1))',
          zIndex: 0
        }}
      />

      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 ref={titleRef} className="font-bold text-[25px] md:text-[40px] leading-[35px] md:leading-[48px] text-custom-purple mb-2">
          {title.split(' - ')[0]} - <span className="md:text-custom-dark-text">{title.split(' - ')[1]}</span>
        </h1>
        <p ref={subtitleRef} className="font-normal text-sm md:text-xl leading-[19px] md:leading-[26px] text-[#4B5768] ">{subtitle}</p>

        {/* Mobile-only Credit Score Button */}
        <button className="md:hidden mt-6 w-full bg-custom-purple text-white font-bold text-base leading-[22px] py-3.5 px-6 rounded-full flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
          Check Free Credit Score
          <RightUpArrowIcon />
        </button>

        {/* Mobile-only Health Priority Section */}
        <div ref={titleRef} className="md:hidden mt-8 flex items-center justify-center gap-3">
          <img
            src="/assets/icons/Heart.svg"
            alt="Health Care"
            className="object-contain"
          />
          <h2 className="font-semibold text-xl leading-[120%] bg-brand-gradient bg-clip-text text-transparent">
            Your Health, Our Priority
          </h2>
        </div>
      </div>
    </section>
  );
};

export default PlansHero;
