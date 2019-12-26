import { payAsYouGo } from './index';

describe('#payAsYouGo', () => {
    test('call', async () => {
        const result = await payAsYouGo(true);
        expect(result).toEqual(null);
    });
});
