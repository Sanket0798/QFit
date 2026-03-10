/**
 * Plan Details - Main Export
 * Centralized export for all plan details
 */

export { QFIT_KAVACH_DETAILS } from './kavach';
export { QFIT_SUPER_DETAILS } from './super';
export { QFIT_LITE_DETAILS } from './lite';
export { QFIT_ESSENTIAL_DETAILS } from './essential';
export { QFIT_MAX_DETAILS } from './max';

// Plan lookup map for dynamic access
export const PLAN_DETAILS_MAP = {
  'qfit-kavach': () => import('./kavach').then(m => m.QFIT_KAVACH_DETAILS),
  'qfit-super': () => import('./super').then(m => m.QFIT_SUPER_DETAILS),
  'qfit-lite': () => import('./lite').then(m => m.QFIT_LITE_DETAILS),
  'qfit-essential': () => import('./essential').then(m => m.QFIT_ESSENTIAL_DETAILS),
  'qfit-max': () => import('./max').then(m => m.QFIT_MAX_DETAILS),
};

/**
 * Lazy load plan details by ID
 * Useful for code splitting and on-demand loading
 * @param {string} planId - Plan identifier (e.g., 'qfit-kavach')
 * @returns {Promise<Object>} Plan details object
 */
export const loadPlanDetails = async (planId) => {
  const loader = PLAN_DETAILS_MAP[planId];
  if (!loader) {
    throw new Error(`Plan not found: ${planId}`);
  }
  return await loader();
};
