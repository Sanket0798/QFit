import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const contactInfo = [
  {
    icon: '/assets/icons/MobileText.svg',
    label: 'Phone',
    value: '+91 99713 96361',
    href: 'tel:+919971396361',
  },
  {
    icon: '/assets/icons/CustomerCare.svg',
    label: 'Email',
    value: 'support@qfit.in',
    href: 'mailto:support@qfit.in',
  },
  {
    icon: '/assets/icons/User.svg',
    label: 'Address',
    value: 'Ground Floor, A - 64, Block A, Sector 4, Noida, Uttar Pradesh 201301',
    href: null,
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

const ContactUsPage = () => {
  const heroRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState({ email: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);

  const validateField = (name, value) => {
    if (name === 'email') {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Enter a valid email address';
    }
    if (name === 'phone') {
      return /^[6-9]\d{9}$/.test(value.replace(/\s/g, '')) ? '' : 'Enter a valid 10-digit mobile number';
    }
    return '';
  };

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Phone: only allow digits, max 10
    if (name === 'phone' && /[^0-9]/.test(value)) return;
    // Name: only allow letters and spaces
    if (name === 'name' && /[^a-zA-Z\s]/.test(value)) return;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name] !== undefined) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
            Contact Us
          </motion.h1>
          <motion.p
            className="text-[#4B5768] text-base md:text-lg max-w-[700px] mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Have questions about our wellness plans? We&apos;re here to help. Reach out and our team will get back to you shortly.
          </motion.p>
        </div>
      </motion.section>

      {/* Main Content */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">

          {/* Contact Info */}
          <div>
            <motion.h2
              className="text-2xl md:text-3xl font-bold text-custom-dark-text mb-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
            >
              Get in Touch
            </motion.h2>
            <motion.p
              className="text-[#4B5768] text-sm md:text-base mb-8 leading-relaxed"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
            >
              Our support team is available Monday to Saturday, 9 AM – 6 PM IST. We typically respond within 24 hours.
            </motion.p>

            <div className="space-y-6">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={item.label}
                  className="flex items-start gap-4"
                  custom={i + 2}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUp}
                >
                  <div className="w-20 h-20 rounded-full bg-[#EDE8F9] flex items-center justify-center shrink-0">
                    <img src={item.icon} alt={item.label} className="" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-custom-purple uppercase tracking-wider mb-1">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-[#4B5768] text-sm md:text-base hover:text-custom-purple transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-[#4B5768] text-sm md:text-base leading-relaxed mr-10">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            className="bg-white rounded-[25px] shadow-card-hover p-6 md:p-10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {submitted ? (
              <motion.div
                className="text-center py-10"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-16 h-16 rounded-full bg-[#EDE8F9] flex items-center justify-center mx-auto mb-4">
                  <img src="/assets/icons/Checked.svg" alt="Success" className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-custom-dark-text mb-2">Message Sent!</h3>
                <p className="text-[#4B5768] text-sm">Thank you for reaching out. We&apos;ll get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold text-custom-dark-text mb-1">Send a Message</h3>
                <p className="text-[#4B5768] text-sm mb-4">Fill in the form below and we&apos;ll be in touch.</p>

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-custom-dark-text mb-1">Full Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full border border-[#E0D9F5] rounded-xl px-4 py-3 text-sm text-custom-dark-text placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-custom-purple transition"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-custom-dark-text mb-1">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={`w-full border rounded-xl px-4 py-3 text-sm text-custom-dark-text placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-custom-purple transition ${errors.email ? 'border-red-400' : 'border-[#E0D9F5]'}`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-custom-dark-text mb-1">Phone Number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    maxLength={10}
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="XXXXXXXXXX"
                    className={`w-full border rounded-xl px-4 py-3 text-sm text-custom-dark-text placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-custom-purple transition ${errors.phone ? 'border-red-400' : 'border-[#E0D9F5]'}`}
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-custom-dark-text mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    className="w-full border border-[#E0D9F5] rounded-xl px-4 py-3 text-sm text-custom-dark-text placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-custom-purple transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-custom-purple text-white font-semibold text-sm md:text-base py-3 px-6 rounded-full hover:bg-[#3D1A7A] transition-colors shadow-card"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ContactUsPage;
