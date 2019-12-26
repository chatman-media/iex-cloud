import { usage } from './Usage';

describe('#usage', () => {
    test('call', async () => {
        const result = await usage();
        expect(result.messages.monthlyUsage).toBeGreaterThanOrEqual(0);
    });

    test('call for messages', async () => {
        const result = await usage('messages');
        expect(result.monthlyUsage).toBeGreaterThanOrEqual(0);
    });
});
