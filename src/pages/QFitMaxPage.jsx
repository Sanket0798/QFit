import PlanDetailsTable from '../components/shared/PlanDetailsTable';
import { QFIT_MAX_DETAILS } from '../constants/planDetailsContent';

const QFitMaxPage = () => {
  return <PlanDetailsTable planDetails={QFIT_MAX_DETAILS} />;
};

export default QFitMaxPage;
