import { endOfDayOptions } from './index';

describe('#endOfDayOptions', () => {
  test('call', async () => {
    const result = await endOfDayOptions('AAPL');
    console.dir(result);
    expect(result).not.toEqual(null);
  });
});
