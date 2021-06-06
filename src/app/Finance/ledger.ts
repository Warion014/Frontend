import { Component, OnInit } from '@angular/core';
import { NetworkService } from 'src/app/Service/network.service';
import { FormControl,ReactiveFormsModule,FormsModule,FormGroup,FormBuilder,Validators,FormArray } from '@angular/forms';
import { LedgerARNew } from 'src/app/Model/C2Ledeger_AR__.model';
import { LedgerAPNew } from 'src/app/Model/C2Ledger_AP__.model';
import { LedgerCashNew } from 'src/app/Model/C2Ledger_Cash__.model';
import { LedgerStockDieselNew } from 'src/app/Model/C2Ledger_StockDeisel__.model';
import { LedgerStockGasohol95New } from 'src/app/Model/C2Ledger_StockGasohol95__.model';
@Component({
  selector: 'Ledger',
  templateUrl: './ledger.html',
  styleUrls: ['./ledger.css']
})
export class Ledger implements OnInit 
{
    Lposition : string=""

    LedgerAPNewAll : LedgerAPNew[] | undefined;
    LedgerARNewAll : LedgerARNew[] | undefined;
    LedgerCashNewAll : LedgerCashNew[] | undefined;
    LedgerStockDieselNewAll : LedgerStockDieselNew[] | undefined;
    LedgerStockGasohol95NewAll : LedgerStockGasohol95New[] | undefined;


    countJournal : number | undefined;
    FinanceID : number | undefined;
    Date : Date | undefined;
    TransType : string | undefined;
    TransName : string | undefined;
    TransValue : number | undefined;
    stype : string | undefined;
    SType : string | undefined;

    constructor(private networkService: NetworkService) { }

    ngOnInit(): void {

      var y = localStorage.getItem('staffPosition')?.replace(/['"]+/g, '');
        // เงื่อนไข IF แบ่ง role
        if( y == "Manager")
        {
          this.Lposition = "Manager"
          console.log("L("+this.Lposition+")");
        }
      //this.feedUsers();
    }
    clickme(stype:string) 
    {
      console.log(stype);
      
      this.stype = stype
      this.SType = this.stype
      console.log(this.stype);
      if(stype == "AccountPayable")
      {
       this.networkService.getLedgerAP().subscribe(
        data => {
    
          this.LedgerAPNewAll = data.result;
          console.log(this.LedgerAPNewAll);
          
        },
        error => {
          alert("Can't not get users data");
          }); 
      }
      if(this.stype == "AccountReceivable")
      {
       this.networkService.getLedgerAR().subscribe(
        data => {
    
          this.LedgerARNewAll = data.result;
        },
        error => {
          alert("Can't not get users data");
          }); 
      }
      if(this.stype == "Cash")
      {
       this.networkService.getLedgerCash().subscribe(
        data => {
    
          this.LedgerCashNewAll = data.result;
        },
        error => {
          alert("Can't not get users data");
          }); 
      }
      if(this.stype == "StockDiesel")
      {
       this.networkService.getLedgerStacokDiesel().subscribe(
        data => {
    
          this.LedgerStockDieselNewAll = data.result;
        },
        error => {
          alert("Can't not get users data");
          }); 
      }
      if(this.stype == "StockGasohol95")
      {
       this.networkService.getLedgerStacokGasohol95().subscribe(
        data => {
    
          this.LedgerStockGasohol95NewAll = data.result;
        },
        error => {
          alert("Can't not get users data");
          }); 
      }

      
    }
    
}