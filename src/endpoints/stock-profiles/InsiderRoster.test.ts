import { insiderRoster } from './index';

describe('#insiderRoster', () => {
  test('call', async () => {
    const result = await insiderRoster('AAPL');
    expect(result).not.toEqual(null);
  });
});
