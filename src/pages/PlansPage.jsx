import { PlansHero, PlansGrid, PlansBenefits, PlansCTA } from '../components/sections';

const PlansPage = () => {
  return (
    <div className="bg-white">
      <PlansHero />

      {/* Plans Grid with Benefits in the grid */}
      <section className="pt-12 pb-[52px] md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-[1320px] mx-auto">
            <PlansGrid />
          </div>
        </div>
      </section>

      <PlansCTA />
    </div>
  );
};

export default PlansPage;
