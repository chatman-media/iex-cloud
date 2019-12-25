import { mutualFundSymbols } from './index';

describe('#mutualFundSymbols', () => {
    test('call', async () => {
        const result = await mutualFundSymbols();
        expect(result).not.toEqual(null);
    });
});
