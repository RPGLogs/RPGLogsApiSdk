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
    id: 46159040,
    level: 60,
    name: 'Xyä',
    server: {
      id: 304,
      name: 'Kazzak',
      region: {
        compactName: 'EU',
        id: 2,
        name: 'Europe',
      },
    },
  });
});
