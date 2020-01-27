import { distribution } from './index';

describe('#distribution', () => {
  test('call', async () => {
    const result = await distribution('AAPL');
    expect(result).not.toEqual(null);
  });
});
