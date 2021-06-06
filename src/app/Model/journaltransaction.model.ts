export class JournalTransaction {
    FinanceID: number | undefined;
    TransType: string | undefined;
    Date: Date | undefined;
    TransName: string | undefined;
    TransValue: number | undefined;
}
    export interface JournalTransactionAll {
    result: JournalTransaction[],
    message: string
}