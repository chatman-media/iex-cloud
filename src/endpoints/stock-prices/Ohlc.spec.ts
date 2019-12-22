import { ohlc } from './index';

describe('#ohlc', () => {
    test('call', async () => {
        const result = await ohlc('AAPL');
        expect(result).not.toEqual(null);
    });
});
