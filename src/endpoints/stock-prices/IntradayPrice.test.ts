import { intradayPrices } from './index';

describe('#intradayPrices', () => {
    test('call', async () => {
        const result = await intradayPrices('AAPL');
        expect(result).not.toEqual(null);
    });
});
