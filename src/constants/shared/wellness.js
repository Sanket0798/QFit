/**
 * Shared Wellness Data
 * Common wellness items and templates used across all plans
 */

export const COMMON_WELLNESS_ITEMS = [
  { 
    label: 'Tele/Video GP Consultation', 
    value: 'Unlimited', 
    remark: 'For All Family Members' 
  },
  { 
    label: 'Tele/Video 22+ Specialist Consultation', 
    value: 'Unlimited', 
    remark: 'For All Family Members' 
  },
  { 
    label: 'Surgery Care', 
    value: 'Yes', 
    remark: 'Covers End To End Surgery Concierge Services.' 
  },
  { 
    label: 'Network Discount On Pharmacy', 
    value: 'Up To 20%', 
    remark: 'No Limit On Pharmacy Order & Frequency.' 
  },
  { 
    label: 'Network Discount On Labs (Radio/Path)', 
    value: 'Up To 50%', 
    remark: 'No Limit On Lab Order & Frequency.' 
  },
  { 
    label: 'Network Discount On Fitness / Condition Management', 
    value: 'Up To 40%', 
    remark: 'No Limit On Order Value & Frequency.' 
  },
  { 
    label: 'Health Wiz Webinar', 
    value: 'Unlimited', 
    remark: 'Live Webinar/ Pre Recorded Content' 
  },
];

export const createWellnessData = (config) => {
  const {
    totalWallet,
    totalWalletRemark,
    opdWallet = 'NA',
    opdRemark = 'NA',
    labWallet = 'NA',
    labRemark = 'NA',
    pharmacyWallet = 'NA',
    pharmacyRemark = 'NA',
    healthCheckupWallet,
    healthCheckupRemark = 'For Any Health Check Up Listed On MediBuddy Platform.',
  } = config;

  return [
    {
      label: 'Total Health Wallet',
      value: totalWallet,
      highlight: true,
      remark: totalWalletRemark,
    },
    ...COMMON_WELLNESS_ITEMS.slice(0, 2), // GP and Specialist consultations
    { 
      label: 'OPD Wallet', 
      value: opdWallet, 
      remark: opdRemark 
    },
    { 
      label: 'Lab Wallet', 
      value: labWallet, 
      remark: labRemark 
    },
    { 
      label: 'Pharmacy Wallet', 
      value: pharmacyWallet, 
      remark: pharmacyRemark 
    },
    { 
      label: 'Health Check Up Wallet', 
      value: healthCheckupWallet, 
      remark: healthCheckupRemark 
    },
    ...COMMON_WELLNESS_ITEMS.slice(2), // Surgery Care and discounts
  ];
};
