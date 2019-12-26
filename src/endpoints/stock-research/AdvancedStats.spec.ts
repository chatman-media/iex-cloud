import { advancedStats } from './index';

describe('#advancedStats', () => {
    test('call', async () => {
        const result = await advancedStats('AAPL');

        expect(result.week52high).toBeGreaterThanOrEqual(0);
        expect(result.week52low).toBeGreaterThanOrEqual(0);
        expect(result.week52change).toBeGreaterThanOrEqual(0);
    });
});
