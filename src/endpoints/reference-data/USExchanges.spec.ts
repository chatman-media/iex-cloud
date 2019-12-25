import { uSExchanges } from './index';

describe('#uSExchanges', () => {
    test('call', async () => {
        const result = await uSExchanges();
        expect(result).not.toEqual(null);
    });
});
