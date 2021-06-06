export class BayStation {
    BayID: number | undefined;
    GasID: number | undefined;
    BayName: string | undefined;
}
    export interface BayStationAll {
    result: BayStation[],
    message: string
}