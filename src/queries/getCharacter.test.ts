import { buildTestSdk } from '../testHelpers';

test('returns data', async () => {
  const response = await buildTestSdk().getCharacter({
    characterName: 'Xyä',
    characterServerSlug: 'Kazzak',
    characterServerRegion: 'EU',
    includeGameData: true,
    includeGuilds: true,
    includeServer: true,
  });

  expect(response?.characterData?.character).toMatchObject({
    classID: 12,
    faction: {
      id: 2,
      name: 'Horde',
    },
    hidden: false,
    id: 63478284,
    level: 80,
    name: 'Yäx',
    server: {
      id: 350,
      name: 'Twisting Nether',
      region: {
        compactName: 'EU',
        id: 2,
        name: 'Europe',
      },
    },
  });
});
