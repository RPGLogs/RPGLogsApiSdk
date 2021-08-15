import { buildTestSdk } from '../testHelpers';

test('returns data', async () => {
  const response = await buildTestSdk().getReportRankedCharacters({
    code: 'pJTWtB8Yj4F1rc9Q',
    includeServer: true,
    includeGuilds: true,
    includeGameData: false,
  });

  const dataToSnapshot = response?.reportData?.report?.rankedCharacters?.map(
    (x) => ({
      id: x?.id,
      name: x?.name,
      classID: x?.classID,
    })
  );

  expect(dataToSnapshot).toMatchSnapshot();
});
