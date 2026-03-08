import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CheckoutHero = () => {
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

      // Button animation
      if (buttonRef.current) {
        gsap.from(buttonRef.current, {
          opacity: 0,
          scale: 0.9,
          duration: 0.6,
          delay: 0.4,
          ease: 'back.out(1.5)',
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="md:hidden relative pt-20 pb-10 overflow-hidden bg-gradient-to-b from-[#E5EDFF] to-white"
      style={{
        marginTop: '-80px',
        paddingTop: '120px',
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 ref={titleRef} className="font-bold text-2xl leading-[35px] text-custom-purple mb-2">
          QFIT PLANS APPLICATION
        </h1>
        <p ref={subtitleRef} className="font-normal text-sm leading-[19px] text-[#4B5768] mb-6">
          Choose the plan that fits you
        </p>

        <div
          ref={buttonRef}
          className="bg-custom-purple text-white font-semibold text-base leading-[20px] py-3 px-8 rounded-full shadow-[5px_5px_5px_0px_rgba(0,0,0,0.25)] inline-block"
        >
          Starting From ₹399/Month
        </div>
      </div>
    </section>
  );
};

export default CheckoutHero;
