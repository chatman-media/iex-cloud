import { cryptocurrencySymbols } from './index';

describe('#cryptocurrencySymbols', () => {
    test('call', async () => {
        const result = await cryptocurrencySymbols();
        expect(result?.length).toBeGreaterThan(0);
    });
});
