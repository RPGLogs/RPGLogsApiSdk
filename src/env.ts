import 'dotenv/config';

/**
 * Reads a required environment variable, throwing an error if it is missing or empty.
 */
function requireEnv(name: string): string {
  const value = process.env[name];

  if (value === undefined || value === '') {
    throw new Error(
      `Missing required environment variable "${name}". ` +
        'Add it to your .env file (see .env.example).'
    );
  }

  return value;
}

export interface Credentials {
  clientId: string;
  clientSecret: string;
}

/**
 * Returns the RPGLogs API credentials from the environment.
 */
export function getCredentials(): Credentials {
  return {
    clientId: requireEnv('RPGLOGS_API_CLIENT_ID'),
    clientSecret: requireEnv('RPGLOGS_API_CLIENT_SECRET'),
  };
}
