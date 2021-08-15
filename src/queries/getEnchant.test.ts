import { buildTestSdk } from '../testHelpers';

test('returns data', async () => {
  const response = await buildTestSdk().getEnchant({
    id: 100,
  });

  expect(response?.gameData?.enchant).toMatchSnapshot();
});
