import { useParams, Navigate } from 'react-router-dom';
import PlanDetailsTable from '../components/shared/PlanDetailsTable';
import {
  QFIT_KAVACH_DETAILS,
  QFIT_SUPER_DETAILS,
  QFIT_LITE_DETAILS,
  QFIT_ESSENTIAL_DETAILS,
  QFIT_MAX_DETAILS,
} from '../constants/planDetailsContent';

/**
 * Generic Plan Detail Page Component
 * Consolidates all individual plan pages into one reusable component
 * Reduces code duplication from 5 files to 1
 */
const PlanDetailPage = () => {
  const { planId } = useParams();

  // Map plan IDs to plan details
  const planDetailsMap = {
    'qfit-kavach': QFIT_KAVACH_DETAILS,
    'qfit-super': QFIT_SUPER_DETAILS,
    'qfit-lite': QFIT_LITE_DETAILS,
    'qfit-essential': QFIT_ESSENTIAL_DETAILS,
    'qfit-max': QFIT_MAX_DETAILS,
  };

  const planDetails = planDetailsMap[planId];

  // Redirect to plans page if invalid plan ID
  if (!planDetails) {
    return <Navigate to="/plans" replace />;
  }

  return <PlanDetailsTable planDetails={planDetails} />;
};

export default PlanDetailPage;
