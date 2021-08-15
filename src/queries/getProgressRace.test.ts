import { buildTestSdk } from '../testHelpers';

test('returns data', async () => {
  const response = await buildTestSdk().getProgressRace();
  const progressRace = response?.progressRaceData?.progressRace;

  // This data changes so much that it's hard to test for specific values
  expect(progressRace).toBeInstanceOf(Array);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  progressRace.forEach((guild: any) => {
    expect(guild.currentEncounterId).toBeGreaterThan(0);
    expect(guild.encounters.length).toBeGreaterThan(0);
  });
});
