import { buildTestSdk } from '../testHelpers';

test('returns data', async () => {
  const response = await buildTestSdk().getCharacterEncounterRankings({
    encounterId: 2333,
    characterId: 46159040,
  });

  expect(response?.characterData?.character).toMatchSnapshot();
});
