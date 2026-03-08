import { useParams } from 'react-router-dom';
import MembershipApplicationForm from '../components/sections/MembershipApplicationForm';
import PlanTable from '../components/shared/PlanTable';
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
      {/* Membership Application Form */}
      <MembershipApplicationForm 
        planName={planDetails.name}
        price={planDetails.price}
      />

      {/* Plan Details Table */}
      <PlanTable planDetails={planDetails} />

      {/* CTA Section */}
      <PlansCTA />
    </div>
  );
};

export default PlanCheckoutPage;
