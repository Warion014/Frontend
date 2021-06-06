import { Time } from "@angular/common";

export class Purchase {
    POID: number | undefined;
    ServiceID: number | undefined;
    GasID: number | undefined;
    Bay: number | undefined;
    TruckID: number | undefined;
    Date: Date | undefined;
    WeightID: number | undefined;
    TimeIn: Time | undefined;
    TimeOut: Time | undefined;
    Amount: number | undefined;
    WaitingTime: Time | undefined;
    TimeInterval: Time | undefined;
    Status: string | undefined;

}
    export interface PurchaseAll {
    result: Purchase[],
    message: string
}