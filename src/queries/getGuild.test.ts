import { buildTestSdk } from '../testHelpers';

test('returns data', async () => {
  const response = await buildTestSdk().getGuild({
    guildName: 'Reaction',
    guildServerSlug: 'Kazzak',
    guildServerRegion: 'EU',
    includeServer: true,
    includeAttendance: false,
    includeMembers: false,
    includeTags: true,
  });

  expect(response?.guildData?.guild).toMatchObject({
    faction: {
      id: 2,
      name: 'Horde',
    },
    id: 369203,
    name: 'Reaction',
    server: {
      id: 304,
      name: 'Kazzak',
      region: {
        compactName: 'EU',
        id: 2,
        name: 'Europe',
      },
    },
    tags: [],
  });
});
