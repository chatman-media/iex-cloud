import { priceTarget } from './index';

describe('#priceTarget', () => {
    test('call', async () => {
        const result = await priceTarget('AAPL');
        expect(result).not.toEqual(null);
    });
});
