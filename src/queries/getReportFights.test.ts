import { buildTestSdk } from '../testHelpers';

test('returns data', async () => {
  const response = await buildTestSdk().getReportFights({
    code: 'pJTWtB8Yj4F1rc9Q',
    includeNpcs: true,
    includePlayers: true,
    includeDungeonPulls: true,
  });

  expect(response?.reportData?.report).toMatchSnapshot();
});
