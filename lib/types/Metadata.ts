export interface Metadata {
    payAsYouGoEnabled: boolean;
    effectiveDate: Date;
    endDateEffective: Date;
    subscriptionTermType: string;
    tierName: string;
    messageLimit: number;
    messagesUsed: number;
    circuitBreaker: number;
}
