import { Time } from "@angular/common";

export class LedgerStockGasohol95New {
    
    SG_ORDER  : Float32Array | undefined
    DATE : Date | undefined;
    DESCRIPTION : string | undefined;
    DEBIT : Float32Array | undefined;
    CREDIT : Float32Array | undefined
    BALANCE : Float32Array | undefined

}
    export interface LedgerStockGasohol95NewAll {
    result: LedgerStockGasohol95New[],
    message: string
}