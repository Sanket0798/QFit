/**
 * QFit Kavach Plan Details
 */

import { createEligibility, createEligibilityRemarks } from '../shared/eligibility';
import { createWellnessData } from '../shared/wellness';
import { createHospicash } from '../shared/insurance';

export const QFIT_KAVACH_DETAILS = {
  name: 'QFit Kavach',
  subtitle: 'Know Your Plan',
  price: '₹1699',
  icon: '/assets/images/family/family.svg',
  
  eligibility: createEligibility(4),
  eligibilityRemarks: createEligibilityRemarks(4),
  
  wellness: createWellnessData({
    totalWallet: '₹1000',
    totalWalletRemark: 'Total Wallet Benefits Include OPD Wallet, Lab Wallet, Pharmacy Wallet & Health Check Up Wallet. Limit Is For 1 Member And Not For Family.',
    healthCheckupWallet: '₹1000',
  }),
  
  insurance: [
    createHospicash(1000, 2000),
  ],
};
