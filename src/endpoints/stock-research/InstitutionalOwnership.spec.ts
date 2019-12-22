import { institutionalOwnership } from './index';

describe('#institutionalOwnership', () => {
    test('call', async () => {
        const result = await institutionalOwnership('AAPL');
        expect(result).not.toEqual(null);
    });
});
