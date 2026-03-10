/**
 * QFit Lite Plan Details
 */

import { createEligibility, createEligibilityRemarks } from '../shared/eligibility';
import { createWellnessData } from '../shared/wellness';
import { createHospicash, createEMIProtect, createPersonalAccident } from '../shared/insurance';

export const QFIT_LITE_DETAILS = {
  name: 'QFit Lite',
  subtitle: 'Know Your Plan',
  price: '₹7199',
  icon: '/assets/images/family/JointFamily.svg',
  
  eligibility: createEligibility(6),
  eligibilityRemarks: createEligibilityRemarks(6),
  
  wellness: createWellnessData({
    totalWallet: '₹7199',
    totalWalletRemark: 'Total Wallet Benefits Including OPD Wallet, Lab Wallet, Pharmacy Wallet & Health Check Up Wallet. Limit Of All Individual Wallet Mentioned Below.',
    opdWallet: '₹2000',
    opdRemark: 'For In Clinic Consultation Including 22+ Specialization.',
    labWallet: '₹2500',
    labRemark: 'For Pathology & Radiology Test',
    pharmacyWallet: '₹1000',
    pharmacyRemark: 'Only For Prescribed Medicine',
    healthCheckupWallet: '₹1699',
  }),
  
  insurance: [
    createEMIProtect('5000', 'View More...'),
    createHospicash(1000, 2000),
    createPersonalAccident('5 Lakhs'),
  ],
};
