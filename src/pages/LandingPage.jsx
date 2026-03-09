import {
  HeroWithPlansSlider,
  AboutUs,
  WhyChooseUs,
  PlansCTA,
} from '../components/sections';

const LandingPage = () => {
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
