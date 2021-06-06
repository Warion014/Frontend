export class Payment {
    PayID: number | undefined;
    CardID: number | undefined;
    Firstname: string | undefined;
    Lastname: string | undefined;
}
    export interface PaymentAll {
    result: Payment[],
    message: string
}