export class ReconNew {
    
    RECON_ORDER  : Float32Array | undefined
    Date : Date | undefined;
    PO : Float32Array | undefined;
    Payment : Float32Array | undefined;
    Invoice : Float32Array | undefined;
    Shipment : Float32Array | undefined
    Truck : string | undefined
    PetrolType : string | undefined
    Qty : Float32Array | undefined
    Amount : Float32Array | undefined;
    Agent : string | undefined;
    

}
    export interface ReconNewAll {
    result: ReconNew[],
    message: string
}