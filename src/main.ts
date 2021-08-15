import { GraphQLClient } from 'graphql-request';
import { getSdk } from './sdk';

export * from './sdk';

export const buildSdk = (
  accessToken: string,
  game = 'warcraft'
): ReturnType<typeof getSdk> => {
  if (!game.includes('.')) game = 'www.' + game;

  const client = new GraphQLClient(`https://${game}logs.com/api/v2/client`, {
    headers: {
      Authorization: 'Bearer ' + accessToken,
    },
  });

  return getSdk(client);
};
