import { priceOnly } from './index';

describe('#priceOnly', () => {
  test('call', async () => {
    const result = await priceOnly('AAPL');
    expect(result).not.toEqual(null);
  });
});
