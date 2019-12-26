import { symbols } from './index';

describe('#symbols', () => {
    test('call', async () => {
        const result = await symbols();
        expect(result?.length).toBeGreaterThan(0);
    });
});
