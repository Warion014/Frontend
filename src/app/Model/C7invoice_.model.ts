export class InvoiceNew {
  
    INVOICE_ORDER  : Float32Array | undefined
    COMPANY_NAME : string | undefined;
    ADDRESS : string | undefined;
    MAIL : string | undefined;
    TEL : string | undefined;
    INVOICE_NO : Float32Array | undefined
    PO_NO : Float32Array | undefined
    PAYMENT_NO : Float32Array | undefined
    DATE : Date | undefined
    CUSTOMER_ID : Float32Array | undefined;
    CUSTOMER : string | undefined;
    TAX_PAYER_ID  : Float32Array | undefined
    DATE1 : Date | undefined;
    FILL_TIME_MIN : Float32Array | undefined;
    ITEM : string | undefined;
    Price : Float32Array | undefined;
    Qty : Float32Array | undefined
    Amount : Float32Array | undefined
    val : Float32Array | undefined
    GRAND_TOTAL : Float32Array | undefined

}
    export interface InvoiceNewAll {
    result: InvoiceNew[],
    message: string
}