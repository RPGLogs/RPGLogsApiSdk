import { buildTestSdk } from '../testHelpers';

test('returns data', async () => {
  const response = await buildTestSdk().getAchievement({
    id: 964,
  });

  expect(response?.gameData?.achievement).toMatchSnapshot();
});
