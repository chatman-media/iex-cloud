import { iexSymbols } from './index';

describe('#iexSymbols', () => {
    test('call', async () => {
        const result = await iexSymbols();
        console.log(result);

        expect(result?.length).toBeGreaterThan(0);
    });

    test('call for cvs', async () => {
        const result = await iexSymbols(true);
        console.log(result);

        expect(result?.length).toBeGreaterThan(0);
    });
});
