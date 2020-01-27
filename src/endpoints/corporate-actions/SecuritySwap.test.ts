import { securitySwap } from './index';

describe('#securitySwap', () => {
  test('call', async () => {
    const result = await securitySwap('AAPL');
    expect(result).not.toEqual(null);
  });
});
