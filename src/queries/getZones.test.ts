import { buildTestSdk } from '../testHelpers';

test('returns data', async () => {
  const response = await buildTestSdk().getZones();

  expect(
    response?.worldData?.zones?.filter((x) => (x?.id ?? 0) < 26)
  ).toMatchSnapshot();
});
