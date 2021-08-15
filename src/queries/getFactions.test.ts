import { buildTestSdk } from '../testHelpers';

test('returns data', async () => {
  const response = await buildTestSdk().getFactions();

  expect(response?.gameData?.factions).toMatchSnapshot();
});
