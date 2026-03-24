import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  HeroWithPlansSlider,
  AboutUs,
  WhyChooseUs,
  PlansCTA,
} from '../components/sections';

const LandingPage = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [hash]);

  return (
    <>
      <section id="hero">
        <HeroWithPlansSlider />
      </section>

      <section id="about-us">
        <AboutUs />
      </section>

      <section id="why-choose-us">
        <WhyChooseUs />
      </section>

      <div className='mb-6'>
        <PlansCTA />
      </div>
    </>
  )
}

export default LandingPage
