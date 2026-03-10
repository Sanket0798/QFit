/**
 * QFit Essential Plan Details
 */

import { createEligibility, createEligibilityRemarks } from '../shared/eligibility';
import { createWellnessData } from '../shared/wellness';
import { createHospicash, createEMIProtect, createCriticalIllness, createPersonalAccident } from '../shared/insurance';

export const QFIT_ESSENTIAL_DETAILS = {
  name: 'QFit Essential',
  subtitle: 'Know Your Plan',
  price: '₹15,398',
  icon: '/assets/images/family/JointFamily.svg',
  
  eligibility: createEligibility(6),
  eligibilityRemarks: createEligibilityRemarks(6),
  
  wellness: createWellnessData({
    totalWallet: '₹15398',
    totalWalletRemark: 'Total Wallet Benefits Including OPD Wallet, Lab Wallet, Pharmacy Wallet & Health Check Up Wallet. Limit Of All Individual Wallet Mentioned Below.',
    opdWallet: '₹4000',
    opdRemark: 'NA',
    labWallet: '₹6000',
    labRemark: 'Lab tests and diagnostics coverage',
    pharmacyWallet: '₹2000',
    pharmacyRemark: 'Medicine and pharmacy coverage',
    healthCheckupWallet: '₹3398',
  }),
  
  insurance: [
    createEMIProtect('10,000'),
    createHospicash(1000, 2000),
    createCriticalIllness('50,000'),
    createPersonalAccident('10 Lakhs'),
  ],
};
