import { incomeStatement } from './index';

describe('#incomeStatement', () => {
  test('call', async () => {
    const result = await incomeStatement('AAPL');
    expect(result).not.toEqual(null);
  });
});
