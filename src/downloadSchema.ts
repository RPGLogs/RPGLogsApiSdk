import { getIntrospectionQuery } from 'graphql/utilities/getIntrospectionQuery';
import request from 'sync-request';
import fs from 'fs';
import btoa from 'btoa';
import credentials from './credentials';
import { IncomingHttpHeaders } from 'http';

downloadWarcraftLogsSchema();

function downloadWarcraftLogsSchema() {
  const accessToken = getAccessToken(
    'https://www.warcraftlogs.com/oauth/token',
    credentials.clientId,
    credentials.clientSecret
  );

  downloadRemoteSchema('https://www.warcraftlogs.com/api/v2/client', {
    Authorization: 'Bearer ' + accessToken,
    'Content-Type': 'application/json',
  });
}

function getAccessToken(
  endpoint: string,
  clientId: string,
  clientSecret: string
) {
  const response = request('POST', endpoint, {
    headers: {
      Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials',
  });

  if (response.statusCode === 200) {
    return JSON.parse(response.body.toString()).access_token;
  } else {
    throw new Error('Response was not OK: ' + response.body);
  }
}

function downloadRemoteSchema(endpoint: string, headers: IncomingHttpHeaders) {
  const response = request('POST', endpoint, {
    headers,
    body: JSON.stringify({ query: getIntrospectionQuery() }),
  });

  if (response.statusCode === 200) {
    fs.writeFileSync(
      './src/schema.json',
      JSON.stringify(JSON.parse(response.body.toString()), null, 2),
      'utf8'
    );
  } else {
    throw new Error('Response was not OK: ' + response.body);
  }
}
