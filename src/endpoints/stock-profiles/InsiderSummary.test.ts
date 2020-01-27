import { insiderSummary } from './index';

describe('#insiderSummary', () => {
  test('call', async () => {
    const result = await insiderSummary('AAPL');
    expect(result).not.toEqual(null);
  });
});
