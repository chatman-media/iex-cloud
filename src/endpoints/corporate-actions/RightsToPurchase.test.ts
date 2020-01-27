import { rightsToPurchase } from './index';

describe('#rightsToPurchase', () => {
  test('call', async () => {
    const result = await rightsToPurchase('AAPL');
    expect(result).not.toEqual(null);
  });
});
