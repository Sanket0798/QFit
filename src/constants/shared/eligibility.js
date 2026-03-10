/**
 * Shared Eligibility Data
 * Common eligibility fields and remarks used across all plans
 */

export const ELIGIBILITY_TEMPLATES = {
  ageLimit: {
    wellness: 'No Limit (For Wellness)',
    insurance: '18-65 Yrs (For Insurance)',
  },
  validity: {
    label: 'Validity',
    value: '1 Year',
  },
  waitingPeriod: {
    label: 'Waiting Period',
    value: 'NA',
  },
};

export const ELIGIBILITY_REMARKS = {
  validity: 'Since Date Of Inception',
  waitingPeriod: 'Cover For Wellness As Well As Insurance Starts From Day 1',
};

export const createEligibility = (familySize) => [
  { 
    label: 'Age Limit', 
    value: `${ELIGIBILITY_TEMPLATES.ageLimit.wellness} & ${ELIGIBILITY_TEMPLATES.ageLimit.insurance}` 
  },
  { 
    label: 'Coverage Type', 
    value: `Family Of ${familySize}` 
  },
  { 
    label: ELIGIBILITY_TEMPLATES.validity.label, 
    value: ELIGIBILITY_TEMPLATES.validity.value 
  },
  { 
    label: ELIGIBILITY_TEMPLATES.waitingPeriod.label, 
    value: ELIGIBILITY_TEMPLATES.waitingPeriod.value 
  },
];

export const createEligibilityRemarks = (familySize) => [
  '',
  `Wellness Cover For Family Of ${familySize} & Insurance Cover For Primary Member`,
  ELIGIBILITY_REMARKS.validity,
  ELIGIBILITY_REMARKS.waitingPeriod,
];
