import {
  HeroSection,
  QFitPlansSection,
  WhyChooseSection,
  AboutSection,
  TestimonialsSection,
  CTASection,
} from '../components/sections';

const LandingPage = () => {
  return (
    <>
      <section id="hero">
        <HeroSection />
      </section>

      <section id="qfit-plans">
        <QFitPlansSection />
      </section>

      <section id="why-choose">
        <WhyChooseSection />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="testimonials">
        <TestimonialsSection />
      </section>

      <section id="cta">
        <CTASection />
      </section>  
    </>
  )
}

export default LandingPage
