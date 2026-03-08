import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Button } from '../ui';

const HeroSection = () => {
  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Badge animation
      if (badgeRef.current) {
        tl.from(badgeRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.6,
          ease: 'power3.out',
        });
      }

      // Title animation
      if (titleRef.current) {
        tl.from(titleRef.current, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: 'power3.out',
        }, '-=0.3');
      }

      // Description animation
      if (descRef.current) {
        tl.from(descRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.7,
          ease: 'power3.out',
        }, '-=0.4');
      }

      // Button animation
      if (buttonRef.current) {
        tl.from(buttonRef.current, {
          opacity: 0,
          scale: 0.9,
          duration: 0.6,
          ease: 'back.out(1.5)',
        }, '-=0.3');
      }

      // Image animation
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

  return (
    <section 
      ref={sectionRef}
      className="relative bg-[#E5F4FF] overflow-hidden"
      style={{
        backgroundImage: 'url(/assets/images/bg/HowWorksBg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-4 md:space-y-6">
            <div 
              ref={badgeRef}
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm"
            >
              <img src="/assets/icons/HandShake.svg" alt="Handshake" className="w-6 h-6" />
              <span className="text-sm md:text-base font-medium text-[#0072F2]">Your Health, Our Priority</span>
            </div>
            
            <h1 
              ref={titleRef}
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-custom-dark-text leading-tight"
            >
              YOUR HEALTH,<br />
              <span className="text-custom-purple">
                OUR PRIORITY
              </span>
            </h1>
            
            <p 
              ref={descRef}
              className="text-custom-dark-text text-base md:text-lg max-w-lg leading-relaxed"
            >
              We provide comprehensive healthcare services with a personal touch, ensuring you receive the best care possible.
            </p>
            
            <div ref={buttonRef}>
              <Button 
                variant="custom"
                className="bg-custom-purple text-white font-bold text-base md:text-lg py-3 px-6 md:px-8 rounded-full hover:bg-purple-700 transition-colors shadow-[5px_5px_5px_0px_rgba(0,0,0,0.25)]"
              >
                Explore Wellness Plans
              </Button>
            </div>
          </div>

          {/* Right Illustration */}
          <div 
            ref={imageRef}
            className="relative flex justify-center items-center"
          >
            {/* You can replace this with actual illustration image when available */}
            <div className="relative w-full max-w-md md:max-w-lg">
              <img 
                src="/assets/images/hero-illustration.png" 
                alt="Healthcare Team" 
                className="w-full h-auto object-contain"
                onError={(e) => {
                  // Fallback if image doesn't exist
                  e.target.style.display = 'none';
                }}
              />
              {/* Fallback placeholder if image doesn't exist */}
              <div className="aspect-square bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🏥</div>
                  <div className="flex justify-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white text-xl">👨</div>
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl">👩</div>
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-xl">👦</div>
                  </div>
                  <div className="text-red-500 text-4xl">❤️</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
