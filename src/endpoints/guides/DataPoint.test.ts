import { dataPoints } from './index';

describe('#dataPoint', () => {
  test('call', async () => {
    const result = await dataPoints('AAPL');
    expect(result).not.toEqual(null);
  });
});
