import { buildTestSdk } from '../testHelpers';

test('returns data', async () => {
  const response = await buildTestSdk().getGuildReports({
    guildName: 'Reaction',
    guildServerSlug: 'Kazzak',
    guildServerRegion: 'EU',
    limit: 1,
    zoneId: 24,
    includeFights: true,
  });

  expect(response?.reportData?.reports).toMatchSnapshot();
});
