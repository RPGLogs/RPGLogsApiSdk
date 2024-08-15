import { buildTestSdk } from '../testHelpers';

test('returns data', async () => {
  const response = await buildTestSdk().getReportGraph({
    code: 'cFZ274xvNgTbLXCj',
    encounterId: 2824,
    filterExpression: 'ability.name in ("Lava Geysers")',
    endTime: 2147483647,
  });

  expect(response?.reportData?.report).toMatchSnapshot();
});
