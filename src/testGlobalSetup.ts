import { getAccessToken } from './testHelpers';
import credentials from './credentials';

export default async (): Promise<void> => {
  process.env.TEST_ACCESS_TOKEN = await getAccessToken(
    credentials.clientId,
    credentials.clientSecret
  );
};
