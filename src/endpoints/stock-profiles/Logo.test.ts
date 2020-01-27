import { logo } from './index';

describe('#logo', () => {
  test('call', async () => {
    const result = await logo('AAPL');
    expect(result).not.toEqual(null);
  });
});
