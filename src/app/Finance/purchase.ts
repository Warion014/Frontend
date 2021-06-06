import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PONew} from 'src/app/Model/C6PO_.model';
import { NetworkService } from 'src/app/Service/network.service';
import { FormControl,ReactiveFormsModule,FormsModule,FormGroup,FormBuilder,Validators,FormArray } from '@angular/forms';

@Component({
  selector: 'Purchase',
  templateUrl: './purchase.html',
  styleUrls: ['./purchase.css']
})
export class PurchaseOrder implements OnInit 
{

    Lposition : string=""
    PONewAll : PONew[] | undefined;
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
    POString :string | undefined
    SPOSting : string | undefined
    countPO : number | undefined

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
    clickme(SPO : string)
{
  this.networkService.getPO().subscribe(
    data => {
      console.log(SPO);
      
      this.PONewAll = data.result;
      this.countPO = this.PONewAll.length
      var x = 0
      for(let i=0; i<this.countPO; i++)
      {
        this.POString = JSON.stringify(this.PONewAll[i].PO_NO)
        console.log(this.POString);
        if(SPO == this.POString)
        {
          x = i
        }
        
      }
      
      this.PO_ORDER = this.PONewAll[x].PO_ORDER
      this.PO_NO = this.PONewAll[x].PO_NO
      this.PAYMENT_NO = this.PONewAll[x].PAYMENT_NO
      this.Date = this.PONewAll[x].Date
      this.CUSTOMER_ID = this.PONewAll[x].CUSTOMER_ID
      this.CUSTOMER = this.PONewAll[x].CUSTOMER
      this.TAX_PAYER_ID = this.PONewAll[x].TAX_PAYER_ID
      this.Truck = this.PONewAll[x].Truck
      this.ITEM = this.PONewAll[x].ITEM
      this.Price = this.PONewAll[x].Price
      this.Qty = this.PONewAll[x].Qty
      this.Amount = this.PONewAll[x].Amount


    },
    error => {
      alert("Can't not get users data");
      });
  }
    
}