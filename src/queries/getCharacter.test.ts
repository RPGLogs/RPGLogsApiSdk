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
    guildRank: 1,
    guilds: [
      {
        id: 369203,
        name: 'Reaction',
      },
    ],
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

  expect(
    response?.characterData?.character?.gameData.global.average_item_level
  ).toBeGreaterThan(0);
});
