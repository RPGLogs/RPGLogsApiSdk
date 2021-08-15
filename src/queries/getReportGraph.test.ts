import { buildTestSdk } from '../testHelpers';

test('returns data', async () => {
  const response = await buildTestSdk().getReportGraph({
    code: 'pJTWtB8Yj4F1rc9Q',
    encounterId: 2407,
    filterExpression: 'ability.name in ("Wracking Pain")',
    endTime: 2147483647,
  });

  expect(response?.reportData?.report).toMatchSnapshot();
});
