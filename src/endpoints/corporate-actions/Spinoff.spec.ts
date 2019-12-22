import { spinoff } from './index';

describe('#spinoff', () => {
    test('call', async () => {
        const result = await spinoff('AAPL');
        expect(result).not.toEqual(null);
    });
});
