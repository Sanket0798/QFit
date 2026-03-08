import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '../ui';
import { RightUpArrowIcon } from '../common/SvgIcons';
import { QFIT_PLANS_CTA } from '../../constants';

gsap.registerPlugin(ScrollTrigger);

const PlansCTA = () => {
  const { title, subtitle, buttonText } = QFIT_PLANS_CTA;
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      if (titleRef.current) {
        gsap.from(titleRef.current, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
          }
        });
      }

      // Subtitle animation
      if (subtitleRef.current) {
        gsap.from(subtitleRef.current, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          delay: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: subtitleRef.current,
            start: 'top 85%',
          }
        });
      }

      // Button animation
      if (buttonRef.current) {
        gsap.from(buttonRef.current, {
          opacity: 0,
          scale: 0.9,
          duration: 0.6,
          delay: 0.4,
          ease: 'back.out(1.5)',
          scrollTrigger: {
            trigger: buttonRef.current,
            start: 'top 85%',
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="pt-[46px] pb-6 mb-9 md:mb-[10px] bg-[#F9AAA6]/20 rounded-t-24 mx-[6px] border border-black/10 border-b-transparent ">
      <div className="container mx-auto px-4 text-center">
        <h2 ref={titleRef} className="font-semibold md:font-bold text-2xl md:text-[40px] leading-[30px] md:leading-[48px] text-custom-dark-text mb-7 md:mb-3  px-8 md:px-0">
          {title}
        </h2>
        <p ref={subtitleRef} className="font-normal text-sm md:text-lg leading-[19px] md:leading-[26px] text-custom-dark-text px-16 md:px-0">
          {subtitle}
        </p>
        {/* <Button variant="primary" size="lg">
        </Button> */}
        <Button
          ref={buttonRef}
          variant="custom"
          className="text-lg !font-normal leading-[20px] text-white gap-5 md:gap-2 rounded-full bg-custom-purple mt-10 w-full md:w-[190px] md:mt-[47px]"

        >

          {buttonText}
          <RightUpArrowIcon />
        </Button>
      </div>
    </section>
  );
};

export default PlansCTA;
