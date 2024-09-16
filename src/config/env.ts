export const env = {
  VERSION: process.env.version || '',
  MOCK: process.env.MOCK || 'false',
  ENV_NAME: process.env.ENV_NAME || '',
};

export const isLocal = env.ENV_NAME === 'local';

export const isDev = env.ENV_NAME === 'dev';

export const isStage = env.ENV_NAME === 'stage';

export const isDevMode = !(env.ENV_NAME === 'stage' || env.ENV_NAME === 'prod');

export const isProdMode = !isDevMode;

export const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || '';
