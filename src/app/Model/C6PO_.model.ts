export class PONew {
    
    PO_ORDER  : Float32Array | undefined
    
    PO_NO : Float32Array | undefined;
    PAYMENT_NO : Float32Array | undefined;
    Date : Date | undefined;
    CUSTOMER_ID : Float32Array | undefined;
    CUSTOMER : string | undefined
    TAX_PAYER_ID : Float32Array | undefined
    
    Truck : string | undefined
    ITEM : string | undefined
    Price : Float32Array | undefined;
    Qty : Float32Array | undefined;
    Amount  : Float32Array | undefined
    

}
    export interface PONewAll {
    result: PONew[],
    message: string
}