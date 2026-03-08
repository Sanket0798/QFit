import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PlanSummaryCard = ({ planDetails }) => {
  const cardRef = useRef(null);
  const headerRef = useRef(null);
  const featuresRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Card entrance animation
      if (cardRef.current) {
        gsap.from(cardRef.current, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: 'power3.out',
        });
      }

      // Header animation
      if (headerRef.current) {
        gsap.from(headerRef.current, {
          opacity: 0,
          scale: 0.95,
          duration: 0.6,
          delay: 0.2,
          ease: 'back.out(1.5)',
        });
      }

      // Features stagger animation
      const validFeatures = featuresRef.current.filter(f => f !== null);
      if (validFeatures.length > 0) {
        gsap.from(validFeatures, {
          opacity: 0,
          x: -20,
          duration: 0.5,
          stagger: 0.1,
          delay: 0.4,
          ease: 'power2.out',
        });
      }
    }, cardRef);

    return () => ctx.revert();
  }, []);

  const headerBgColors = {
    'QFit Kavach': 'bg-[#CCF9FF]/50',
    'QFit Super': 'bg-[#E3D4FF]/50',
    'QFit Lite': 'bg-[#FFE8E8]/50',
    'QFit Essential': 'bg-[#BDFEF1]/50',
    'QFit Max': 'bg-[#C2DFFF]/50',
  };

  const headerBgColor = headerBgColors[planDetails.name] || 'bg-[#CCF9FF]/50';

  return (
    <div ref={cardRef} className="md:hidden bg-white rounded-2xl shadow-[5px_5px_5px_0px_rgba(0,0,0,0.25)] mx-4 mb-6">
      {/* Plan Header */}
      <div ref={headerRef} className={`flex items-start justify-between mb-4 ${headerBgColor} rounded-xl py-4 pr-4 pl-5 shadow-[0px_5px_5px_0px_rgba(0,0,0,0.25)]`}>
        <div className="flex items-start gap-4">
          <h3 className="text-2xl leading-[22px] font-medium text-[#0072F2]">
            {planDetails.name}
          </h3>
          <img
            src={planDetails.icon}
            alt={planDetails.name}
            className="object-contain absolute left-[200px] top-[28px] w-10"
          />
        </div>
        <div className="bg-custom-purple font-medium text-lg leading-[22px] text-white rounded-full py-1 px-3">
          {planDetails.price}
        </div>
      </div>

      {/* Features List - Show first 7 features */}
      <div className="space-y-[14px] mb-4 px-5">
        {planDetails.eligibility.slice(0, 2).map((item, idx) => (
          <div key={`eligibility-${idx}`} ref={el => featuresRef.current[idx] = el} className="flex items-start gap-3">
            <div className="flex-shrink-0">
              {idx === 0 ? (
                <img
                  src="/assets/icons/User.svg"
                  alt="User icon"
                  className="ml-0.5 object-contain w-5"
                />
              ) : (
                <img
                  src="/assets/icons/Timer.svg"
                  alt="Timer icon"
                  className="ml-0.5 object-contain w-5"
                />
              )}
            </div>
            <p className="text-[17px] leading-[23px] text-custom-dark-text font-normal whitespace-pre-line">
              {item.label}
            </p>
          </div>
        ))}

        {planDetails.wellness.filter(item => !item.highlight).slice(0, 4).map((item, idx) => (
          <div key={`wellness-${idx}`} ref={el => featuresRef.current[idx + 2] = el} className="flex items-start gap-3">
            <div className="flex-shrink-0">
              <img
                src="/assets/icons/Checked.svg"
                alt="Check icon"
                className="object-contain w-6"
              />
            </div>
            <p className="text-[17px] leading-[23px] text-custom-dark-text font-normal whitespace-pre-line">
              {item.label}
            </p>
          </div>
        ))}

        {planDetails.insurance.slice(0, 1).map((item, idx) => (
          <div key={`insurance-${idx}`} ref={el => featuresRef.current[idx + 6] = el} className="flex items-start gap-3">
            <div className="flex-shrink-0">
              <img
                src="/assets/icons/Checked.svg"
                alt="Check icon"
                className="object-contain w-6"
              />
            </div>
            <p className="text-[17px] leading-[23px] text-custom-dark-text font-normal whitespace-pre-line">
              {item.label}
            </p>
          </div>
        ))}
      </div>

      {/* View More Link */}
      <a
        href="#"
        className="text-[#0072F2] hover:underline text-base leading-[20px] font-normal inline-block px-5 mb-4"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = '/plans';
        }}
      >
        View More....
      </a>
    </div>
  );
};

export default PlanSummaryCard;
