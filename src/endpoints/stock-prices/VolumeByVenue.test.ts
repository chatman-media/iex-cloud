import { volumeByVenue } from './index';

describe('#volumeByVenue', () => {
  test('call', async () => {
    const result = await volumeByVenue('AAPL');
    expect(result).not.toEqual(null);
  });
});
