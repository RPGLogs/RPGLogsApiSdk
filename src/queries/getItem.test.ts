import { buildTestSdk } from '../testHelpers';

test('returns data', async () => {
  const response = await buildTestSdk().getItem({
    id: 109076,
  });

  expect(response?.gameData?.item).toMatchSnapshot();
});
