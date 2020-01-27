import { estimates } from './index';

describe('#estimates', () => {
  test('call', async () => {
    const result = await estimates('AAPL');
    expect(result).not.toEqual(null);
  });
});
