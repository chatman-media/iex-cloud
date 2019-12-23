import { earningsToday } from './index';

describe('#earningsToday', () => {
    test('call', async () => {
        const result = await earningsToday();
        console.log(result);

        expect(result.bto?.length).toBeGreaterThan(0);
        expect(result.amc?.length).toBeGreaterThan(0);
        expect(result.other?.length).toBeGreaterThan(0);
    });
});
