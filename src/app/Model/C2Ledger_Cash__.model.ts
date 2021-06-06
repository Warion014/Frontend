import { Time } from "@angular/common";

export class LedgerCashNew {
    
    CASH_ORDER  : Float32Array | undefined
    DATE : string | undefined;
    DESCRIPTION : string | undefined;
    DEBIT : Float32Array | undefined;
    CREDIT : Float32Array | undefined
    BALANCE : Float32Array | undefined

}
    export interface LedgerCashNewAll {
    result: LedgerCashNew[],
    message: string
}