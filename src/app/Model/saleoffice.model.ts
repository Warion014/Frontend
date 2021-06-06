export class SaleOffice {
    ServiceID: number | undefined;
    FinanceID: number | undefined;
    StaffID: number | undefined;
    Queue: number | undefined;
}
    export interface SaleOfficeAll {
    result: SaleOffice[],
    message: string
}