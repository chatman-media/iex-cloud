import { securityReclassification } from './index';

describe('#securityReclassification', () => {
    test('call', async () => {
        const result = await securityReclassification('AAPL');
        expect(result).not.toEqual(null);
    });
});
