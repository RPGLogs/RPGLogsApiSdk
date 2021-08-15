import { buildTestSdk } from '../testHelpers';

test('returns data', async () => {
  const response = await buildTestSdk().getUserReports({
    userId: 381152,
    limit: 1,
    zoneId: 24,
    includeFights: true,
  });

  expect(response?.reportData?.reports).toMatchSnapshot();
});
