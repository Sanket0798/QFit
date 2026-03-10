/**
 * QFit Super Plan Details
 */

import { createEligibility, createEligibilityRemarks } from '../shared/eligibility';
import { createWellnessData } from '../shared/wellness';
import { createHospicash } from '../shared/insurance';

export const QFIT_SUPER_DETAILS = {
  name: 'QFit Super',
  subtitle: 'Know Your Plan',
  price: '₹2,999',
  icon: '/assets/images/family/family.svg',
  
  eligibility: createEligibility(4),
  eligibilityRemarks: createEligibilityRemarks(4),
  
  wellness: createWellnessData({
    totalWallet: '₹2699',
    totalWalletRemark: 'Total Wallet Benefits Including OPD Wallet, Lab Wallet, Pharmacy Wallet & Health Check Up Wallet. Limit Of All Individual Wallet Mentioned Below.',
    opdWallet: '₹1000',
    opdRemark: 'For In Clinic Consultation Including 22+ Specialization.',
    healthCheckupWallet: '₹1699',
  }),
  
  insurance: [
    createHospicash(1000, 2000),
  ],
};
