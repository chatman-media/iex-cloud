import { fundOwnership } from './index';

describe('#fundOwnership', () => {
  test('call', async () => {
    const result = await fundOwnership('AAPL');
    expect(result).not.toEqual(null);
  });
});
