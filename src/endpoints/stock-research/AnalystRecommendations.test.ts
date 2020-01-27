import { analystRecommendations } from './index';

describe('#analystRecommendations', () => {
  test('call', async () => {
    const result = await analystRecommendations('AAPL');
    expect(result).not.toEqual(null);
  });
});
