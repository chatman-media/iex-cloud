import { ipoCalendar } from './index';

describe('#ipoCalendar', () => {
  test('call', async () => {
    const result = await ipoCalendar();

    expect(result.rawData?.length).toBeGreaterThanOrEqual(0);
    expect(result.viewData?.length).toBeGreaterThanOrEqual(0);
  });

  test('call for today', async () => {
    const result = await ipoCalendar(true);

    expect(result.rawData?.length).toBeGreaterThanOrEqual(0);
    expect(result.viewData?.length).toBeGreaterThanOrEqual(0);
  });
});
