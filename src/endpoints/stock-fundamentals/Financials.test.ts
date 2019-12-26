import { financials } from './index';

describe('#financials', () => {
    test('call', async () => {
        const result = await financials('AAPL');
        expect(result).not.toEqual(null);
    });
});
