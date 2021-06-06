export class IncomeNew {
    
    INCOME_ORDER  : Float32Array | undefined
    DATE : Date | undefined;
    Sale_GAS95 : Float32Array | undefined;
    Sale_Diesel : Float32Array | undefined;
    Total_Sale : Float32Array | undefined;
    COGS_GAS95 : Float32Array | undefined
    COGS_Diesel : Float32Array | undefined
    Total_COGS : Float32Array | undefined
    Gross_Profit : Float32Array | undefined
    Officer_Salary : Float32Array | undefined;
    GateC_Salary : Float32Array | undefined;
    Total_salary  : Float32Array | undefined
    UtilityExpense : Float32Array | undefined;
    Depreciation : Float32Array | undefined;
    NetIncome  : Float32Array | undefined

}
    export interface IncomeNewAll {
    result: IncomeNew[],
    message: string
}