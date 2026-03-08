import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WhyChooseCheckout = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      if (titleRef.current) {
        gsap.from(titleRef.current, {
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
          },
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: 'power3.out',
        });
      }

      // Cards stagger animation
      const validCards = cardsRef.current.filter(c => c !== null);
      if (validCards.length > 0) {
        gsap.from(validCards, {
          scrollTrigger: {
            trigger: validCards[0],
            start: 'top 80%',
          },
          opacity: 0,
          y: 30,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out',
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: '/assets/icons/Doctor.svg',
      title: 'Good Doctors Team',
    },
    {
      icon: '/assets/icons/Care.svg',
      title: 'Personalised Care',
    },
    {
      icon: '/assets/icons/24Service.svg',
      title: 'Claims Concierge support',
    },
  ];

  return (
    <section ref={sectionRef} className="md:hidden bg-white py-8 px-5">
      <h2
        ref={titleRef}
        className="font-bold text-3xl leading-[35px] text-center text-custom-dark-text mb-4"
      >
        Why Choose <span className="text-custom-purple">RupeeQ</span>
        <br />
        For Your Personal Loan?
      </h2>

      <div className="space-y-3">
        {features.map((feature, index) => (
          <div
            key={index}
            ref={el => cardsRef.current[index] = el}
            className="bg-[#DAF3F6] rounded-2xl p-2 flex items-center justify-center gap-3"
          >
            <img
              src={feature.icon}
              alt={feature.title}
              className="object-contain"
            />
            <span className="text-lg leading-[24px] font-semibold text-custom-purple ">
              {feature.title}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseCheckout;
