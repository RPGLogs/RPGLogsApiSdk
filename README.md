# RPGLogs API SDK

Install the API SDK in your project:

```
npm install --save @rpglogs/api-sdk
```

Import the SDK builder function:

```js
import { buildSdk } from "@rpglogs/api-sdk";
```

Build an SDK by providing an access token:

```js
// Default game is Retail Warcraft
const retailWarcraftSdk = buildSdk(accessToken);

// But you can specify particular games
const classicWarcraftSdk = buildSdk(accessToken, 'classic.warcraft');
const vanillaWarcraftSdk = buildSdk(accessToken, 'vanilla.warcraft');
const ffSdk = buildSdk(accessToken, 'ff');
const esoSdk = buildSdk(accessToken, 'eso');
const swtorSdk = buildSdk(accessToken, 'swtor');
```

Use methods on the SDK to call the RPGLogs API:

```js
const response = await sdk.getGuild({
  guildName: 'Reaction',
  guildServerSlug: 'Kazzak',
  guildServerRegion: 'EU',
  includeAttendance: false,
  includeServer: true,
  includeMembers: false,
  includeTags: false
});

const guild = response?.guildData?.guild;
```

Easy!

> You can use the `include*` variables to include nested child data. Only set these to true if you actually need the data, as it will use up more of your rate limit!

Check out the [sample application](https://github.com/RPGLogs/RPGLogsApiSampleApp) to see how to handle different error scenarios,
as well as an example of getting an access token through the client credentials flow.

You can use this SDK to get all sorts of information from the API.
This list of methods gives a good idea of what data you can retrieve:

* `getAbility`
* `getAchievement`
* `getAffixes`
* `getCharacter`
* `getCharacterEncounterRankings`
* `getCharacterZoneRankings`
* `getClasses`
* `getEnchant`
* `getEncounterCharacterRankings`
* `getEncounterFightRankings`
* `getFactions`
* `getGuild`
* `getGuildReports`
* `getItem`
* `getNpc`
* `getProgressRace`
* `getRateLimit`
* `getReportEvents`
* `getReportFights`
* `getReportGraph`
* `getReportRankedCharacters`
* `getReportTable`
* `getReportPlayerDetails`
* `getUserReports`
* `getZones`

There is also formal [documentation for this library](https://rpglogs.github.io/RPGLogsApiSdk/).

### Roadmap

There are still some high-level features that would be good to add:

- [ ] Include game-specific fields so that no data is missing for FF, ESO etc
- [ ] Add support for just using the generator part of the library and specifying your own GraphQL queries
- [ ] Add support for other programming languages supported by `graphql-codegen` (C#, Java)

### Developing in this repository:

```bash
# Install dependencies
yarn install

# Now you can run various yarn commands:
yarn generate
yarn test
yarn build-all
yarn ts-node <filename>
yarn esbuild-browser
...
```
