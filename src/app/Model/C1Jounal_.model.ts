import { Time } from "@angular/common";

export class GernalNew {
    
    JOURNAL_ORDER  : Float32Array | undefined
    JournalTransactionID : Float32Array | undefined;
    Date : Date | undefined;
    Time : Time | undefined;
    Account : string | undefined;
    Ref : Float32Array | undefined
    Debit : Float32Array | undefined
    Credit : Float32Array | undefined
    
}
    export interface GernalNewAll {
    result: GernalNew[],
    message: string
}