/**
 * QFit Max Plan Details
 */

import { createEligibility, createEligibilityRemarks } from '../shared/eligibility';
import { createWellnessData } from '../shared/wellness';
import { createHospicash, createEMIProtect, createCriticalIllness, createPersonalAccident, createCyberProtect } from '../shared/insurance';

export const QFIT_MAX_DETAILS = {
  name: 'QFit Max',
  subtitle: 'Know Your Plan',
  price: '₹20,398',
  icon: '/assets/images/family/JointFamily.svg',
  
  eligibility: createEligibility(6),
  eligibilityRemarks: createEligibilityRemarks(6),
  
  wellness: createWellnessData({
    totalWallet: '₹20,398',
    totalWalletRemark: 'Total Wallet Benefits Including OPD Wallet, Lab Wallet, Pharmacy Wallet & Health Check Up Wallet. Limit Of All Individual Wallet Mentioned Below.',
    opdWallet: '₹6000',
    opdRemark: 'For In Clinic Consultation Including 22+ Specialization.',
    labWallet: '₹8000',
    labRemark: 'For Pathology & Radiology Test',
    pharmacyWallet: '₹3000',
    pharmacyRemark: 'Only For Prescribed Medicine',
    healthCheckupWallet: '₹3398',
  }),
  
  insurance: [
    createEMIProtect('15,000', 'View More...'),
    createHospicash(2000, 4000),
    createCriticalIllness('1,00,000'),
    createPersonalAccident('15 Lakhs'),
    createCyberProtect('50,000'),
  ],
};
