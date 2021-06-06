export class Gas {
    GasID: number | undefined;
    GasName: string | undefined;
    Price: number | undefined;
}
    export interface GasAll {
    result: Gas[],
    message: string
}