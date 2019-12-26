import { quote } from './index';

describe('#quote', () => {
    test('call', async () => {
        const result = await quote('AAPL');
        expect(result).not.toEqual(null);
    });
});
