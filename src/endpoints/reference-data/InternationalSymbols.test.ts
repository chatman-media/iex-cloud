import { internationalSymbols } from './index';

describe('#internationalSymbols', () => {
  test('by region', async () => {
    const result = await internationalSymbols({ region: 'CA' });
    expect(result?.length).toBeGreaterThan(0);
  });

  test('by exchange', async () => {
    const result = await internationalSymbols({ exchange: 'tse' });
    expect(result?.length).toBeGreaterThan(0);
  });
});
