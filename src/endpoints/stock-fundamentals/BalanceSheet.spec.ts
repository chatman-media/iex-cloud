import { balanceSheet } from './index';

describe('#balanceSheet', () => {
    test('call', async () => {
        const result = await balanceSheet('AAPL');
        expect(result).not.toEqual(null);
    });
});
