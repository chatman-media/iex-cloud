import { news } from './index';

describe('#news', () => {
    test('call', async () => {
        const result = await news('AAPL');
        expect(result).not.toEqual(null);
    });
});
