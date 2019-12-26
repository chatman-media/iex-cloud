import { status } from './index';

describe('#status', () => {
    test('call', async () => {
        const result = await status();
        expect(result).not.toEqual(null);
    });
});
