import { Time } from "@angular/common";

export class LedgerAPNew {
    
    ACC_PAY_ORDER  : Float32Array | undefined
    DATE : Date | undefined;
    DESCRIPTION : string | undefined;
    DEBIT : Float32Array | undefined;
    CREDIT : Float32Array | undefined
    BALANCE : Float32Array | undefined

}
    export interface LedgerAPNewAll {
    result: LedgerAPNew[],
    message: string
}