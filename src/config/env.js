export const env = {
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api',
  apiTimeout: import.meta.env.VITE_API_TIMEOUT || 30000,
  authTokenKey: import.meta.env.VITE_AUTH_TOKEN_KEY || 'qfit_auth_token',
  refreshTokenKey: import.meta.env.VITE_REFRESH_TOKEN_KEY || 'qfit_refresh_token',
  enableAnalytics: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
  enableChatSupport: import.meta.env.VITE_ENABLE_CHAT_SUPPORT === 'true',
  environment: import.meta.env.VITE_ENV || 'development',
  appName: import.meta.env.VITE_APP_NAME || 'QFit',
  appVersion: import.meta.env.VITE_APP_VERSION || '1.0.0',
}
