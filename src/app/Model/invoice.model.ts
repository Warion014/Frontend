export class Invoice {
    POID: number | undefined;
    CustomerID: number | undefined;
    PayID: number | undefined;
    TotalCost: number | undefined;
}
    export interface InvoiceAll {
    result: Invoice[],
    message: string
}