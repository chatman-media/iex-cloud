import { returnOfCapital } from './index';

describe('#returnOfCapital', () => {
  test('call', async () => {
    const result = await returnOfCapital('AAPL');
    expect(result).not.toEqual(null);
  });
});
