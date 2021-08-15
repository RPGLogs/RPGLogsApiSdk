import { buildTestSdk } from '../testHelpers';
import { FightRankingMetricType } from '../sdk';

test('returns data', async () => {
  const response = await buildTestSdk().getEncounterFightRankings({
    encounterId: 2333,
    metric: FightRankingMetricType.Speed,
    difficulty: 5,
  });

  expect(response?.worldData?.encounter).toMatchSnapshot();
});
