import { useEffect, useRef } from 'react';
import { Facebook, Linkedin, Instagram } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const location = useLocation();
  const isHomeLoginPage = location.pathname === '/login/home';
  
  const footerRef = useRef(null);
  const logoRef = useRef(null);
  const socialRef = useRef(null);
  const columnsRef = useRef([]);
  const copyrightRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Logo animation
      if (logoRef.current) {
        gsap.from(logoRef.current, {
          scrollTrigger: {
            trigger: logoRef.current,
            start: 'top 90%',
          },
          opacity: 0,
          x: -30,
          duration: 0.8,
          ease: 'power3.out',
        });
      }

      // Social icons animation
      if (socialRef.current) {
        gsap.from(socialRef.current.children, {
          scrollTrigger: {
            trigger: socialRef.current,
            start: 'top 90%',
          },
          opacity: 0,
          scale: 0.8,
          duration: 0.6,
          stagger: 0.1,
          ease: 'back.out(1.5)',
        });
      }

      // Footer columns animation
      const validColumns = columnsRef.current.filter(col => col !== null);
      if (validColumns.length > 0) {
        gsap.from(validColumns, {
          scrollTrigger: {
            trigger: validColumns[0],
            start: 'top 85%',
          },
          opacity: 0,
          y: 30,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power3.out',
        });
      }

      // Copyright animation
      if (copyrightRef.current) {
        gsap.from(copyrightRef.current, {
          scrollTrigger: {
            trigger: copyrightRef.current,
            start: 'top 90%',
          },
          opacity: 0,
          y: 20,
          duration: 0.6,
          ease: 'power3.out',
        });
      }
    }, footerRef);

    return () => ctx.revert();
  }, [location.pathname]);

  return (
    <footer ref={footerRef} className={`mx-3 mb-3 ${isHomeLoginPage ? 'hidden md:block' : ''}`}>
      {/* Main Footer Container with gradient background and rounded corners */}
      <div
        className="rounded-3xl overflow-hidden pt-[42px] pb-7 md:pt-9 md:pb-[52px] px-4 md:px-16"
        style={{
          background: 'linear-gradient(135deg, rgba(230, 240, 255, 0.8) 0%, rgba(220, 255, 240, 0.8) 100%)',
        }}
      >
        <div className="max-w-full mx-auto border-t border-[#CCCCCC] mb-3 md:mb-4"></div>

        {/* Top Section - Logo and Social Icons */}
        <div className="flex flex-row justify-between items-center md:items-center mb-3 md:mb-4">
          {/* Logo */}
          <div ref={logoRef} className="flex items-center">
            <img
              src="/assets/logos/main-logo.svg"
              alt="RupeeQ Logo"
              className="w-[112px] md:w-[156px]"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="hidden items-center gap-2">
              <span className="text-2xl font-bold text-primary">RUPEEQ</span>
            </div>
          </div>

          {/* Social Icons */}
          <div ref={socialRef} className="flex gap-3">
            <a
              href="#"
              className="md:w-10 md:h-10 w-6 h-6 rounded-full bg-black hover:bg-gray-800 flex items-center justify-center transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} className="w-4 h-4 md:w-5 md:h-5 text-white" />

            </a>
            <a
              href="#"
              className="md:w-10 md:h-10 w-6 h-6 rounded-full bg-black hover:bg-gray-800 flex items-center justify-center transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="w-4 h-4 md:w-5 md:h-5 text-white" />
            </a>
            <a
              href="#"
              className="md:w-10 md:h-10 w-6 h-6 rounded-full bg-black hover:bg-gray-800 flex items-center justify-center transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} className="w-4 h-4 md:w-5 md:h-5 text-white" />
            </a>
          </div>
        </div>

        <div className="max-w-full mx-auto border-t border-[#CCCCCC] mb-9 md:mb-[47px]"></div>


        {/* Footer Content Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 mb-8">
          {/* Contact Column */}
          <div ref={el => columnsRef.current[0] = el}>
            <h4 className="font-semibold text-custom-dark-text mb-4 text-lg">Contact:</h4>
            <div className="space-y-3 text-[#4B5768] text-sm">
              <p>Ground Floor, A - 64, Block A,<br />Sector 4, Noida, Uttar<br />Pradesh 201301</p>
              <p>info@rupeeq.com</p>
              <p>+91 99713 96361</p>
            </div>
          </div>

          {/* Links Column 1 */}
          <div ref={el => columnsRef.current[1] = el}>
            <h4 className="font-semibold text-custom-dark-text mb-4 text-lg">Links</h4>
            <ul className="space-y-2 text-[#4B5768]">
              <li>
                <a href="/" className="hover:text-primary transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary transition-colors text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#qfit-plans" className="hover:text-primary transition-colors text-sm">
                  Plans
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div ref={el => columnsRef.current[2] = el}>
            <h4 className="font-semibold text-custom-dark-text mb-4 text-lg">Links</h4>
            <ul className="space-y-2 text-[#4B5768]">
              <li>
                <a href="/terms-conditions" className="hover:text-primary transition-colors text-sm">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/contact-us" className="hover:text-primary transition-colors text-sm">
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          {/* About Us Column */}
          <div ref={el => columnsRef.current[3] = el}>
            <h4 className="font-semibold text-custom-dark-text mb-4 text-lg">About Us:</h4>
            <p className="text-[#4B5768] text-sm leading-relaxed">
              Our mission is to deliver reliable, high-quality care with deep empathy. We combine{' '}
              <a href="#about" className="text-blue-500 hover:underline">
                read more...
              </a>
            </p>
          </div>
        </div>

        {/* Copyright Section */}
        <div ref={copyrightRef} className="text-center pt-6">
          <p className="text-[#4B5768] text-sm">
            © 2026 All Rights Reserved. RupeeQ
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
