import { company } from './index';

describe('#company', () => {
    test('call', async () => {
        const result = await company('AAPL');
        expect(result).not.toEqual(null);
    });
});
