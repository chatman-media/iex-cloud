import { iexSymbols } from './index';

describe('#iexSymbols', () => {
    test('call', async () => {
        const result = await iexSymbols();

        expect(result?.length).toBeGreaterThan(0);
    });
});
