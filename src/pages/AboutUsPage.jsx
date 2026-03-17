import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { RightArrowIcon } from '../components/common/SvgIcons';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: '10,000+', label: 'Members Enrolled' },
  { value: '500+', label: 'Network Hospitals' },
  { value: '98%', label: 'Member Satisfaction' },
  { value: '24/7', label: 'Support Available' },
];

const values = [
  {
    icon: '/assets/icons/Heart.svg',
    title: 'Member-First Care',
    description: 'Every decision we make starts with one question — is this the best outcome for our members?',
  },
  {
    icon: '/assets/icons/Doctor.svg',
    title: 'Expert Network',
    description: 'We partner with experienced doctors and specialists to ensure you always have access to quality care.',
  },
  {
    icon: '/assets/icons/HandShake.svg',
    title: 'Trusted & Transparent',
    description: 'No hidden fees, no confusing jargon. We believe in honest, straightforward healthcare.',
  },
  {
    icon: '/assets/icons/Care.svg',
    title: 'Preventive Wellness',
    description: 'We focus on keeping you healthy, not just treating illness — because prevention is the best medicine.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
};

const AboutUsPage = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Hero */}
      <motion.section
        ref={heroRef}
        className="pt-20 md:pt-24 pb-14 md:pb-16 bg-gradient-to-b from-[#EDE8F9] via-[#EDE8F9] to-[#F7F7F7] [mask-image:linear-gradient(to_bottom,black_80%,transparent)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{ marginTop: '-80px', paddingTop: '150px' }}
      >
        <div className="max-w-[1339px] mx-auto text-center px-4">
          <motion.h1
            className="font-extrabold text-3xl md:text-[40px] leading-[40px] md:leading-[53px] text-custom-purple mb-4"
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          >
            About Us
          </motion.h1>
          <motion.p
            className="text-[#4B5768] text-base md:text-lg max-w-[700px] mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Our mission is to deliver reliable, high-quality care with deep empathy. We combine cutting-edge technology with a human touch to make healthcare accessible for everyone.
          </motion.p>
        </div>
      </motion.section>

      {/* Mission & Image */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <h2 className="text-2xl md:text-[32px] font-bold text-custom-dark-text leading-snug mb-4">
              Providing <span className="text-custom-purple">Exceptional Healthcare</span> With A Focus On Members
            </h2>
            <p className="text-[#4B5768] text-sm md:text-base leading-relaxed mb-4">
              We make quality care accessible and affordable. Our care model blends in-person expertise with digital convenience so you can book, consult, and track your health anywhere — from preventive wellness to diagnostics and ongoing guidance.
            </p>
            <p className="text-[#4B5768] text-sm md:text-base leading-relaxed mb-8">
              Our team focuses on keeping you healthy, not just treating illness. With QFit, you get a wellness partner that grows with you and your family.
            </p>
            <Link
              to="/plans"
              className="inline-flex items-center gap-2 bg-custom-purple text-white font-semibold text-sm md:text-base py-3 px-6 rounded-full hover:bg-[#3D1A7A] transition-colors shadow-card"
            >
              Explore Plans
              <RightArrowIcon color="white" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex justify-center"
          >
            <img
              src="/assets/images/Doctors.svg"
              alt="QFit Healthcare Team"
              className="w-full max-w-[460px] h-auto object-contain"
            />
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 md:py-16 px-4 bg-gradient-to-r from-[#EDE8F9] to-[#E8F4FF]">
        <div className="max-w-[1100px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <p className="text-3xl md:text-4xl font-extrabold text-custom-purple mb-1">{stat.value}</p>
              <p className="text-[#4B5768] text-sm md:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-[1100px] mx-auto">
          <motion.div
            className="text-center mb-10 md:mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-[32px] font-bold text-custom-dark-text mb-3">
              What We Stand For
            </h2>
            <p className="text-[#4B5768] text-sm md:text-base max-w-[600px] mx-auto">
              Our core values guide everything we do — from the plans we design to the support we provide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                className="flex items-start gap-4 p-6 bg-[#F9F7FF] hover:shadow-card-hover transition-shadow"
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={fadeUp}
              >
                <div className="flex items-center justify-center shrink-0">
                  <img src={val.icon} alt={val.title} className="" />
                </div>
                <div>
                  <h3 className="font-bold text-base md:text-lg text-custom-dark-text mb-1">{val.title}</h3>
                  <p className="text-[#4B5768] text-sm leading-relaxed">{val.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 px-4 bg-gradient-to-b from-[#EDE8F9] to-[#F7F7F7] text-center mb-5">
        <motion.div
          className="max-w-[700px] mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-2xl md:text-[32px] font-bold text-custom-dark-text mb-4">
            Ready to Start Your Wellness Journey?
          </h2>
          <p className="text-[#4B5768] text-sm md:text-base mb-8">
            Join thousands of members who trust QFit for their healthcare needs.
          </p>
          <Link
            to="/plans"
            className="inline-flex items-center gap-2 bg-custom-purple text-white font-semibold text-sm md:text-base py-3 px-8 rounded-full hover:bg-[#3D1A7A] transition-colors shadow-card"
          >
            View Our Plans
            <RightArrowIcon color="white" />
          </Link>
        </motion.div>
      </section>
    </>
  );
};

export default AboutUsPage;
