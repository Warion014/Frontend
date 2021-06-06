import {
  Component,
  OnInit
} from '@angular/core';
import {
  JournalTransaction
} from 'src/app/Model/journaltransaction.model';
import {
  NetworkService
} from 'src/app/Service/network.service';
import {
  FormControl,
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormBuilder,
  Validators,
  FormArray
} from '@angular/forms';
import {
  IncomeNew, IncomeNewAll
} from 'src/app/Model/C4Income_.model';

@Component({
  selector: 'Income',
  templateUrl: './income.html',
  styleUrls: ['./income.css']
})
export class Income implements OnInit {
  Lposition : string=""
  
    IncomeAll : IncomeNew[] | undefined
    countIncome : number | undefined
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

  constructor(private networkService: NetworkService) {}

  ngOnInit(): void {
    var y = localStorage.getItem('staffPosition')?.replace(/['"]+/g, '');
        // เงื่อนไข IF แบ่ง role
        if( y == "Manager")
        {
          this.Lposition = "Manager"
          console.log("L("+this.Lposition+")");
        }
    this.feedUsers();
  }
  feedUsers() {
    this.networkService.getIncome().subscribe(
      data => {
        this.IncomeAll = data.result;
        this.countIncome = this.IncomeAll.length
        console.log(this.IncomeAll);
        
        this.Sale_GAS95 = this.IncomeAll[31].Sale_GAS95
        this.Sale_Diesel = this.IncomeAll[31].Sale_Diesel
        this.Total_Sale = this.IncomeAll[31].Total_Sale
        this.COGS_GAS95 = this.IncomeAll[31].COGS_GAS95
        this.COGS_Diesel = this.IncomeAll[31].COGS_Diesel
        this.Total_COGS = this.IncomeAll[31].Total_COGS
        this.Gross_Profit = this.IncomeAll[31].Gross_Profit
        this.Officer_Salary = this.IncomeAll[31].Officer_Salary
        this.GateC_Salary = this.IncomeAll[31].GateC_Salary
        this.Total_salary = this.IncomeAll[31].Total_salary
        this.UtilityExpense = this.IncomeAll[31].UtilityExpense
        this.Depreciation = this.IncomeAll[31].Depreciation
        this.NetIncome = this.IncomeAll[31].NetIncome
        
      },
      error => {
        alert("Can't not get users data");
      });
  }

}
