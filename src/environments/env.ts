import { ENVConfig, EnvironmentTYPE } from '../types/env-types';

export const ENV_TYPE: Record<EnvironmentTYPE, ENVConfig> = {
  production: {
    url: 'https://www.saucedemo.com/',
  },
  development: {
    url: 'https://www.localhost.com/',
  },
  staging: {
    url: 'https://www.saucedemo-staging.com/',
  },
};
