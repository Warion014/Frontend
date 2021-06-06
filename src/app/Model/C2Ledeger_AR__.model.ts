import { Time } from "@angular/common";

export class LedgerARNew {
    
    ACC_RE_ORDER  : Float32Array | undefined
    DATE : Date | undefined;
    DESCRIPTION : string | undefined;
    DEBIT : Float32Array | undefined;
    CREDIT : Float32Array | undefined
    BALANCE : Float32Array | undefined
    

}
    export interface LedgerARNewAll {
    result: LedgerARNew[],
    message: string
}