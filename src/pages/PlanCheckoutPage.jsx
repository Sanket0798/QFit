import { useParams } from 'react-router-dom';
import CheckoutHero from '../components/sections/CheckoutHero';
import MembershipApplicationForm from '../components/sections/MembershipApplicationForm';
import PlanTable from '../components/shared/PlanTable';
import PlanSummaryCard from '../components/shared/PlanSummaryCard';
import WhyChooseCheckout from '../components/sections/WhyChooseCheckout';
import { PlansCTA } from '../components/sections';
import {
  QFIT_KAVACH_DETAILS,
  QFIT_SUPER_DETAILS,
  QFIT_LITE_DETAILS,
  QFIT_ESSENTIAL_DETAILS,
  QFIT_MAX_DETAILS,
} from '../constants/planDetailsContent';

const PlanCheckoutPage = () => {
  const { planId } = useParams();

  // Map plan IDs to plan details
  const planDetailsMap = {
    'qfit-kavach': QFIT_KAVACH_DETAILS,
    'qfit-super': QFIT_SUPER_DETAILS,
    'qfit-lite': QFIT_LITE_DETAILS,
    'qfit-essential': QFIT_ESSENTIAL_DETAILS,
    'qfit-max': QFIT_MAX_DETAILS,
  };

  const planDetails = planDetailsMap[planId] || QFIT_KAVACH_DETAILS;

  return (
    <div className="bg-white">
      {/* Checkout Hero - Mobile Only */}
      <CheckoutHero />

      {/* Plan Summary Card - Mobile Only */}
      <PlanSummaryCard planDetails={planDetails} />

      {/* Membership Application Form */}
      <MembershipApplicationForm 
        planName={planDetails.name}
        price={planDetails.price}
      />

      {/* Why Choose Section - Mobile Only */}
      <WhyChooseCheckout />

      {/* Plan Details Table - Desktop Only */}
      <div className="hidden md:block">
        <PlanTable planDetails={planDetails} />
      </div>

      {/* CTA Section - Desktop Only */}
      <div className="hidden md:block">
        <PlansCTA />
      </div>
    </div>
  );
};

export default PlanCheckoutPage;
