import { Time } from "@angular/common";
import { Timestamp } from "rxjs";

export class PIData1 {
    Item1: number | undefined;
    Item2: Time | undefined;
}
    export interface PIData1 {
    result: PIData1[],
    message: string
}