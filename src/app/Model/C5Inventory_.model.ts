export class InventoryNew {
    
    Inventory_ORDER  : Float32Array | undefined
    Stock : string | undefined;
    GASOHOL95 : Float32Array | undefined;
    DIESEL : Float32Array | undefined;
    
}
    export interface InventoryNewAll {
    result: InventoryNew[],
    message: string
}