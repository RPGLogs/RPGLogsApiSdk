import { buildTestSdk } from '../testHelpers';

test('returns data', async () => {
  const response = await buildTestSdk().getNpc({
    id: 56133,
  });

  expect(response?.gameData?.npc).toMatchSnapshot();
});
