import { delayedQuote } from './index';

describe('#delayedQuote', () => {
  test('call', async () => {
    const result = await delayedQuote('AAPL');
    expect(result).not.toEqual(null);
  });
});
