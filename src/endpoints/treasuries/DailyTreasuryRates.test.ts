import { dailyTreasuryRates } from './index';

describe('#dailyTreasuryRates', () => {
  test('call', async () => {
    const result = await dailyTreasuryRates('DGS10');
    expect(result).not.toEqual(null);
  });
});
