import { buildTestSdk } from '../testHelpers';

test('returns data', async () => {
  const response = await buildTestSdk().getClasses();

  expect(response?.gameData?.classes).toMatchSnapshot();
});
