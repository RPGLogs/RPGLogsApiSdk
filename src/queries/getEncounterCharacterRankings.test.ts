import { buildTestSdk } from '../testHelpers';
import { CharacterRankingMetricType } from '../sdk';

test('returns data', async () => {
  const response = await buildTestSdk().getEncounterCharacterRankings({
    encounterId: 2333,
    difficulty: 5,
    metric: CharacterRankingMetricType.Dps,
    className: 'DemonHunter',
    specName: 'Vengeance',
  });

  expect(response?.worldData?.encounter).toMatchSnapshot();
});
