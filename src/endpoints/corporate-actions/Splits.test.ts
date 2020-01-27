import { splits } from './index';

describe('#split', () => {
  test('call', async () => {
    const result = await splits('AAPL');
    expect(result).not.toEqual(null);
  });
});
