import { insiderTransactions } from './index';

describe('#insiderTransactions', () => {
    test('call', async () => {
        const result = await insiderTransactions('AAPL');
        expect(result).not.toEqual(null);
    });
});
