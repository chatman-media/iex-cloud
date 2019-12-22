import { earnings } from './index';

describe('#earnings', () => {
    test('call', async () => {
        const result = await earnings('AAPL');
        expect(result).not.toEqual(null);
    });
});
