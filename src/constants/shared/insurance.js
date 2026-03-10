/**
 * Shared Insurance Data
 * Common insurance templates used across plans
 */

export const INSURANCE_TEMPLATES = {
  hospicash: {
    label: 'Hospicash (Age 18-65)',
    remark: 'Zero Days Deductible, 30 Days Limit Per Policy Year, Waiting Period Waived Off, Pre- Existing Diseases- Covered.',
  },
  emiProtect: {
    label: 'EMI Protect',
    remark: 'Cover Starts From Day 1, Pre- Existing Diseases Covered, EMI Benefit In Case Of Hospitalisation Due To Illness/Injury.',
  },
  criticalIllness: {
    label: 'Critical Illness (Age 18-65)',
    remark: '36 CI Covered, Cover Starts From Day 1, Survival Period 30 Days, Pre- Existing Diseases- Not Covered',
  },
  personalAccident: {
    label: 'PA (Age 18-65)',
    remark: 'ADB, PTD & PPD Covered Upto SA',
  },
  cyberProtect: {
    label: 'Cyber Protect',
    remark: 'Identity Theft Cover, IT Theft/ Theft Of Funds/ Financial Loss Cover, Online Shopping Cover, Unauthorised Physical Transaction. - Mall View More...',
  },
};

export const createHospicash = (normalRate, icuRate) => ({
  label: INSURANCE_TEMPLATES.hospicash.label,
  value: `Rs. ${normalRate} Per Day For 30 Days In Normal Hospitalization\n\nRs. ${icuRate} Per Day For 30 Days In ICU Hospitalization`,
  remark: INSURANCE_TEMPLATES.hospicash.remark,
});

export const createEMIProtect = (amount, additionalRemark = '') => ({
  label: INSURANCE_TEMPLATES.emiProtect.label,
  value: `Up To ₹${amount}`,
  remark: `${INSURANCE_TEMPLATES.emiProtect.remark}${additionalRemark ? ' ' + additionalRemark : ''}`,
});

export const createCriticalIllness = (amount) => ({
  label: INSURANCE_TEMPLATES.criticalIllness.label,
  value: `₹${amount}`,
  remark: INSURANCE_TEMPLATES.criticalIllness.remark,
});

export const createPersonalAccident = (amount) => ({
  label: INSURANCE_TEMPLATES.personalAccident.label,
  value: `Up To ₹${amount}`,
  remark: INSURANCE_TEMPLATES.personalAccident.remark,
});

export const createCyberProtect = (amount) => ({
  label: INSURANCE_TEMPLATES.cyberProtect.label,
  value: `SA ₹${amount}`,
  remark: INSURANCE_TEMPLATES.cyberProtect.remark,
});
