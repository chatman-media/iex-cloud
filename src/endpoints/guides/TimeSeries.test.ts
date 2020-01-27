import { timeSeries } from './index';

describe('#timeSeries', () => {
  test('call', async () => {
    const result = await timeSeries();
    expect(result).not.toEqual(null);
  });
});
