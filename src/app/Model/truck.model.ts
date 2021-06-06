export class Truck {
    TruckID: number | undefined;
    CustomerID: number | undefined;
    Driver_Firstname: string | undefined;
    Driver_Lastname: string | undefined;
}
    export interface TruckAll {
    result: Truck[],
    message: string
}