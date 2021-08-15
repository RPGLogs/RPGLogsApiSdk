import { buildTestSdk } from '../testHelpers';

test('returns data', async () => {
  const response = await buildTestSdk().getCharacterZoneRankings({
    zoneId: 24,
    characterId: 46159040,
  });

  expect(response?.characterData?.character).toMatchSnapshot();
});
