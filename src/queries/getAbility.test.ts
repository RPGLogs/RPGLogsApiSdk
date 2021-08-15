import { buildTestSdk } from '../testHelpers';

test('returns data', async () => {
  const response = await buildTestSdk().getAbility({
    id: 740,
  });

  expect(response?.gameData?.ability).toEqual({
    id: 740,
    name: 'Tranquility',
    icon: 'spell_nature_tranquility.jpg',
  });
});
