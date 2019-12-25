import { isinMapping } from './index';

describe('#isinMapping', () => {
    test('call', async () => {
        const result = await isinMapping();
        expect(result).not.toEqual(null);
    });
});
