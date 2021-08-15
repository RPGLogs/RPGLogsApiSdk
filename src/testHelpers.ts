import { buildSdk } from './main';
import btoa from 'btoa';

export function buildTestSdk(): ReturnType<typeof buildSdk> {
  return buildSdk(<string>process.env.TEST_ACCESS_TOKEN);
}

export async function getAccessToken(
  clientId: string,
  clientSecret: string,
  game = 'warcraft'
): Promise<string> {
  if (game === 'warcraft') game = 'www.warcraft';

  const authHeader = 'Basic ' + btoa(clientId + ':' + clientSecret);

  const response = await fetch(`https://${game}logs.com/oauth/token`, {
    method: 'POST',
    headers: {
      Authorization: authHeader,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials',
  });

  const json = await response.json();

  if (response.status === 200) {
    return json.access_token;
  } else {
    throw new Error('Response was not OK: ' + JSON.stringify(json ?? {}));
  }
}
