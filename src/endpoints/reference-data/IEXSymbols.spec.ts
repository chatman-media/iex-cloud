import { iexSymbols } from './index';

describe('#iexSymbols', () => {
    test('call', async () => {
        const result = await iexSymbols();
        console.log(result);

        expect(result?.length).toBeGreaterThan(0);
    });
});
