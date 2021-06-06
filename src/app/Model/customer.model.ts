export class Customer {
    CustomerID: number | undefined;
    Firstname: string | undefined;
    Lastname: string | undefined;
    Grnder: string | undefined;
    Email: string | undefined;
    Address: string | undefined;
    Phone: number | undefined;
}
    export interface CustomerAll {
    result: Customer[],
    message: string
}