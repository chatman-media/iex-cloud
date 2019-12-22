import { largestTrades } from './index';

describe('#largestTrades', () => {
    test('call', async () => {
        const result = await largestTrades('AAPL');
        expect(result).not.toEqual(null);
    });
});
