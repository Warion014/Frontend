import { Time } from "@angular/common";

export class Weight {
    WeightID: number | undefined;
    Queue: number | undefined;
    TimeIn: Time | undefined;
    WeightIn: number | undefined;
    WeightOut: number | undefined;
    TimeOut: Time | undefined;
}
    export interface WeightAll {
    result: Weight[],
    message: string
}