import { book } from './index';

describe('#book', () => {
  test('call', async () => {
    const result = await book('AAPL');
    expect(result).not.toEqual(null);
  });
});
