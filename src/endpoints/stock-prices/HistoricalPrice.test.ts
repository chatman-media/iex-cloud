import { historicalPrices } from './index';

describe('#historicalPrices', () => {
  test('call', async () => {
    const result = await historicalPrices('AAPL');
    expect(result).not.toEqual(null);
  });

  test('call returns data correctly with range', async () => {
    const result = await historicalPrices('AAPL', '1d');
    expect(result).not.toEqual(null);
  })

  test('structure is correct with range and parameters', async () => {
    const result = await historicalPrices('AAPL', '1d', undefined, {
      chartInterval: 15
    });
    expect(result).not.toEqual(null);
  })
});
