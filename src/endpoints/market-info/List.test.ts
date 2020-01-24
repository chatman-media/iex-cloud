import { list } from './index';

describe('#list', () => {
    test('call', async () => {
        const result = await list('losers');
        expect(result?.length).toBeGreaterThan(0);
    });

    test('call with params', async () => {
        const result = await list('mostactive', { displayPercent: true });
        expect(result?.length).toBeGreaterThan(0);
    });
});
