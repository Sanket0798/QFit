import * as yup from 'yup'

// Common validation schemas
export const emailSchema = yup
  .string()
  .email('Please enter a valid email address')
  .required('Email is required')

export const phoneSchema = yup
  .string()
  .matches(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit mobile number')
  .required('Mobile number is required')

export const nameSchema = yup
  .string()
  .min(2, 'Name must be at least 2 characters')
  .max(50, 'Name must not exceed 50 characters')
  .required('Name is required')

export const panSchema = yup
  .string()
  .matches(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, 'Please enter a valid PAN number')
  .required('PAN number is required')

// Contact form schema
export const contactFormSchema = yup.object().shape({
  name: nameSchema,
  email: emailSchema,
  phone: phoneSchema,
  message: yup.string().required('Message is required'),
})
