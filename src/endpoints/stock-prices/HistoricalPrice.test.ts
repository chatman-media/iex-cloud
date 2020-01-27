import { historicalPrices } from './index';

describe('#historicalPrices', () => {
  test('call', async () => {
    const result = await historicalPrices('AAPL');
    expect(result).not.toEqual(null);
  });
});
