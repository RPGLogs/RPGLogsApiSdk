import { getAccessToken } from './testHelpers';
import { getCredentials } from './env';

export default async (): Promise<void> => {
  const { clientId, clientSecret } = getCredentials();

  process.env.TEST_ACCESS_TOKEN = await getAccessToken(clientId, clientSecret);
};
