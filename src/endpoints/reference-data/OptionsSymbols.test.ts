import { optionsSymbols } from './index';

describe('#optionsSymbols', () => {
    test('call', async () => {
        const result = await optionsSymbols();
        expect(result).not.toEqual(null);
    });
});
