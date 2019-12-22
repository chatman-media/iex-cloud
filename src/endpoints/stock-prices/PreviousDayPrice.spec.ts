import { previousDayPrice } from './index';

describe('#previousDayPrice', () => {
    test('call', async () => {
        const result = await previousDayPrice('AAPL');
        expect(result).not.toEqual(null);
    });
});
