import PlanDetailsTable from '../components/shared/PlanDetailsTable';
import { QFIT_LITE_DETAILS } from '../constants/planDetailsContent';

const QFitLitePage = () => {
  return <PlanDetailsTable planDetails={QFIT_LITE_DETAILS} />;
};

export default QFitLitePage;
