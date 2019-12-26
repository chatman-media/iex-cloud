import { cashflow } from './index';

describe('#cashflow', () => {
    test('call', async () => {
        const result = await cashflow('AAPL');
        expect(result).not.toEqual(null);
    });
});
