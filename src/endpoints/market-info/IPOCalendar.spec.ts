import { ipoCalendar } from './index';

describe('#ipoCalendar', () => {
    test('call', async () => {
        const result = await ipoCalendar();
        console.log(result);

        expect(result.rawData?.length).toBeGreaterThanOrEqual(0);
        expect(result.viewData?.length).toBeGreaterThanOrEqual(0);
    });

    test('call for today', async () => {
        const result = await ipoCalendar(true);
        console.log(result);
        expect(result.rawData?.length).toBeGreaterThanOrEqual(0);
        expect(result.viewData?.length).toBeGreaterThanOrEqual(0);
    });
});
