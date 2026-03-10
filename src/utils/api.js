import { env } from '../config/env';

/**
 * API utility functions for making HTTP requests
 * Centralized error handling and request configuration
 */

class APIError extends Error {
  constructor(message, status, data) {
    super(message);
    this.name = 'APIError';
    this.status = status;
    this.data = data;
  }
}

const handleResponse = async (response) => {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new APIError(
      errorData.message || 'An error occurred',
      response.status,
      errorData
    );
  }
  return response.json();
};

const createHeaders = (customHeaders = {}) => {
  const headers = {
    'Content-Type': 'application/json',
    ...customHeaders,
  };

  // Add auth token if available
  const token = localStorage.getItem(env.authTokenKey);
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  return headers;
};

export const api = {
  get: async (endpoint, options = {}) => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), env.apiTimeout);

    try {
      const response = await fetch(`${env.apiBaseUrl}${endpoint}`, {
        method: 'GET',
        headers: createHeaders(options.headers),
        signal: controller.signal,
        ...options,
      });
      return await handleResponse(response);
    } catch (error) {
      if (error.name === 'AbortError') {
        throw new APIError('Request timeout', 408, {});
      }
      throw error;
    } finally {
      clearTimeout(timeoutId);
    }
  },

  post: async (endpoint, data, options = {}) => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), env.apiTimeout);

    try {
      const response = await fetch(`${env.apiBaseUrl}${endpoint}`, {
        method: 'POST',
        headers: createHeaders(options.headers),
        body: JSON.stringify(data),
        signal: controller.signal,
        ...options,
      });
      return await handleResponse(response);
    } catch (error) {
      if (error.name === 'AbortError') {
        throw new APIError('Request timeout', 408, {});
      }
      throw error;
    } finally {
      clearTimeout(timeoutId);
    }
  },

  put: async (endpoint, data, options = {}) => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), env.apiTimeout);

    try {
      const response = await fetch(`${env.apiBaseUrl}${endpoint}`, {
        method: 'PUT',
        headers: createHeaders(options.headers),
        body: JSON.stringify(data),
        signal: controller.signal,
        ...options,
      });
      return await handleResponse(response);
    } finally {
      clearTimeout(timeoutId);
    }
  },

  delete: async (endpoint, options = {}) => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), env.apiTimeout);

    try {
      const response = await fetch(`${env.apiBaseUrl}${endpoint}`, {
        method: 'DELETE',
        headers: createHeaders(options.headers),
        signal: controller.signal,
        ...options,
      });
      return await handleResponse(response);
    } finally {
      clearTimeout(timeoutId);
    }
  },
};

// Membership application API
export const membershipAPI = {
  submitApplication: async (formData) => {
    return api.post('/membership/applications', formData);
  },

  getApplicationStatus: async (applicationId) => {
    return api.get(`/membership/applications/${applicationId}`);
  },
};

export { APIError };
