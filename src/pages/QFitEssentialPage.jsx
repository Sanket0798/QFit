import PlanDetailsTable from '../components/shared/PlanDetailsTable';
import { QFIT_ESSENTIAL_DETAILS } from '../constants/planDetailsContent';

const QFitEssentialPage = () => {
  return <PlanDetailsTable planDetails={QFIT_ESSENTIAL_DETAILS} />;
};

export default QFitEssentialPage;
