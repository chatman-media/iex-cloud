import { usHolidaysAndTradingDates } from './index';

describe('#usHolidaysAndTradingDates', () => {
  test('call', async () => {
    const result = await usHolidaysAndTradingDates('holiday', 'next');
    expect(result?.length).toBeGreaterThanOrEqual(0);
  });
});
