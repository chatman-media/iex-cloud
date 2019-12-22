import { keyStats } from './index';

describe('#keyStats', () => {
    test('call', async () => {
        const result = await keyStats('AAPL');
        expect(result).not.toEqual(null);
    });
});
