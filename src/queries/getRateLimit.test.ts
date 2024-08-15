import { buildTestSdk } from '../testHelpers';

test('returns data', async () => {
  const response = await buildTestSdk().getRateLimit();

  expect(response?.rateLimitData?.pointsResetIn).toBeGreaterThan(0);
  expect(response?.rateLimitData?.pointsSpentThisHour).toBeGreaterThan(0);
});
