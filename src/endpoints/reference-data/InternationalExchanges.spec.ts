import { internationalExchanges } from './index';

describe('#internationalExchanges', () => {
    test('call', async () => {
        const result = await internationalExchanges();
        expect(result?.length).toBeGreaterThan(0);
    });
});
