import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    title: 'Acceptance of Terms',
    content: [
      'By accessing or using the QFit platform, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.',
      'Your continued use of the platform following any changes to these Terms constitutes your acceptance of the revised Terms.',
    ],
  },
  {
    title: 'Membership & Eligibility',
    content: [
      'QFit membership plans are available to individuals who meet the eligibility criteria specified for each plan. You must provide accurate and complete information during the enrollment process.',
      'Membership is non-transferable and is valid only for the enrolled member. Any misuse or fraudulent use of membership benefits may result in immediate termination without refund.',
      'Age eligibility and family member inclusions are governed by the specific plan terms. Please refer to your selected plan documentation for details.',
    ],
  },
  {
    title: 'Health & Wellness Services',
    content: [
      'QFit provides access to a network of healthcare and wellness service providers. The availability of specific services may vary by location and plan type.',
      'QFit acts as a facilitator and is not directly responsible for the quality of services rendered by third-party healthcare providers within our network.',
      'Members are advised to consult qualified medical professionals for all health-related decisions. QFit wellness plans do not replace medical insurance or professional medical advice.',
    ],
  },
  {
    title: 'Payment & Billing',
    content: [
      'Membership fees are billed as per the plan cycle selected at the time of enrollment (monthly or annually). All fees are non-refundable unless otherwise stated.',
      'QFit reserves the right to revise membership pricing with prior notice of at least 30 days. Continued use of the service after the effective date of a price change constitutes acceptance of the new pricing.',
      'In case of payment failure, access to services may be suspended until the outstanding amount is cleared.',
    ],
  },
  {
    title: 'Cancellation & Refund Policy',
    content: [
      'Members may cancel their membership by contacting our support team. Cancellations take effect at the end of the current billing cycle.',
      'Refunds are not provided for partial periods of use. In exceptional circumstances, refund requests may be reviewed on a case-by-case basis at QFit\'s sole discretion.',
      'QFit reserves the right to terminate a membership at any time for violation of these Terms, with or without prior notice.',
    ],
  },
  {
    title: 'Privacy & Data Usage',
    content: [
      'QFit collects and processes personal and health-related information to deliver and improve our services. Please refer to our Privacy Policy for full details on data collection, usage, and your rights.',
      'By using QFit services, you consent to the collection and processing of your data as described in our Privacy Policy.',
      'We implement industry-standard security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.',
    ],
  },
  {
    title: 'Intellectual Property',
    content: [
      'All content on the QFit platform, including but not limited to text, graphics, logos, and software, is the property of QFit and is protected by applicable intellectual property laws.',
      'You may not reproduce, distribute, or create derivative works from any QFit content without prior written permission.',
    ],
  },
  {
    title: 'Limitation of Liability',
    content: [
      'QFit shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from your use of or inability to use the platform or services.',
      'To the maximum extent permitted by applicable law, QFit\'s total liability for any claims under these Terms shall not exceed the amount paid by you to QFit in the three months preceding the claim.',
    ],
  },
  {
    title: 'Indemnification',
    content: [
      'You agree to indemnify and hold harmless QFit, its officers, directors, employees, and agents from any claims, liabilities, damages, or expenses arising from:',
      '• Your use of the platform or services',
      '• Your violation of these Terms and Conditions',
      '• Your violation of any rights of a third party',
      '• Your violation of any applicable laws or regulations',
    ],
  },
  {
    title: 'Governing Law',
    content: [
      'These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in India.',
      'If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.',
    ],
  },
  {
    title: 'Changes to Terms',
    content: [
      'QFit reserves the right to update or modify these Terms and Conditions at any time. We will notify users of significant changes via email or a prominent notice on the platform.',
      'It is your responsibility to review these Terms periodically. Your continued use of the platform after any changes constitutes your acceptance of the new Terms.',
    ],
  },
  {
    title: 'Contact Us',
    content: [
      'If you have any questions or concerns about these Terms and Conditions, please reach out to us:',
      '• Email: support@qfit.in',
      '• Phone: +91 99713 96361',
      '• Address: Ground Floor, A - 64, Block A, Sector 4, Noida, Uttar Pradesh 201301',
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.06, ease: 'easeOut' },
  }),
};

const TermsAndConditionsPage = () => {
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
            Terms &amp; Conditions
          </motion.h1>
          <motion.p
            className="text-[#4B5768] text-base md:text-lg max-w-[700px] mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Last updated: March 2026. Please read these Terms and Conditions carefully before enrolling in any QFit wellness plan.
          </motion.p>
        </div>
      </motion.section>

      {/* Content */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-[860px] mx-auto">
          {sections.map((sec, i) => (
            <motion.div
              key={`${sec.title}-${i}`}
              className="mb-10 md:mb-14"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={fadeUp}
            >
              <h2 className="text-xl md:text-2xl font-bold text-custom-dark-text mb-3 md:mb-4 border-l-4 border-custom-purple pl-3">
                {sec.title}
              </h2>
              <div className="space-y-3">
                {sec.content.map((para, j) => (
                  <p
                    key={j}
                    className={`text-[#4B5768] text-sm md:text-base leading-relaxed ${para.startsWith('•') ? 'pl-4' : ''}`}
                  >
                    {para}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default TermsAndConditionsPage;
