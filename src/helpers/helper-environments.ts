// for reuse and type-safety
import { ENVConfig, EnvironmentTYPE } from '../types/env-types';
import { ENV_TYPE } from '../environments/env';

const VALID_ENVS = Object.keys(ENV_TYPE) as EnvironmentTYPE[];

const DEFAULT_ENV: EnvironmentTYPE = 'production';

export function getEnvironment(envFromProcess?: string): EnvironmentTYPE {
  if (envFromProcess && VALID_ENVS.includes(envFromProcess as EnvironmentTYPE)) {
    return envFromProcess as EnvironmentTYPE;
  }

  // Fallback to default environment
  return DEFAULT_ENV;
}

export function getEnvConfig(envFromProcess?: string): ENVConfig {
  const env = getEnvironment(envFromProcess);
  return ENV_TYPE[env];
}
