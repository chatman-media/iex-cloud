import { endOfDayOptions } from './index';

describe('#endOfDayOptions', () => {
  test('call', async () => {
    const result = await endOfDayOptions('AAPL');
    expect(result).not.toEqual(null);
  });
});
