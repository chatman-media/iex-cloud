import { dividends } from './index';

describe('#dividend', () => {
    test('call', async () => {
        const result = await dividends('AAPL');
        expect(result).not.toEqual(null);
    });
});
