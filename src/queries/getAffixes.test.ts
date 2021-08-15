import { buildTestSdk } from '../testHelpers';

test('returns data', async () => {
  const response = await buildTestSdk().getAffixes();

  expect(response?.gameData?.affixes?.[2]).toEqual({
    id: 3,
    name: 'Volcanic',
    icon: 'spell_shaman_lavasurge.jpg',
  });
});
