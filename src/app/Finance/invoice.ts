import { Component, OnInit } from '@angular/core';
import { InvoiceNew } from 'src/app/Model/C7invoice_.model';
import { NetworkService } from 'src/app/Service/network.service';
import { FormControl,ReactiveFormsModule,FormsModule,FormGroup,FormBuilder,Validators,FormArray } from '@angular/forms';

@Component({
  selector: 'Invoice',
  templateUrl: './invoice.html',
  styleUrls: ['./invoice.css']
})
export class Invoice implements OnInit 
{
    Lposition : string=""

    InvoiceNewAll : InvoiceNew[] | undefined;
    countInvoice : number | undefined;
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

    InvoiceString : string | undefined

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
  this.networkService.getInvoiceNew().subscribe(
    data => {

      this.InvoiceNewAll = data.result;
      this.countInvoice = this.InvoiceNewAll.length;
      var x = 0
      for(let i=0; i<this.countInvoice; i++)
      {
        this.InvoiceString = JSON.stringify(this.InvoiceNewAll[i].INVOICE_NO)
        
        if(SPO == this.InvoiceString)
        {
          x = i
        }
      }
      this.INVOICE_ORDER = this.InvoiceNewAll[x].INVOICE_ORDER;
      this.COMPANY_NAME = this.InvoiceNewAll[x].COMPANY_NAME;
      this.ADDRESS = this.InvoiceNewAll[x].ADDRESS;
      this.MAIL = this.InvoiceNewAll[x].MAIL;
      this.TEL = this.InvoiceNewAll[x].TEL;

      this.INVOICE_NO = this.InvoiceNewAll[x].INVOICE_NO;
      this.PO_NO = this.InvoiceNewAll[x].PO_NO;
      this.PAYMENT_NO = this.InvoiceNewAll[x].PAYMENT_NO;
      this.DATE = this.InvoiceNewAll[x].DATE;
      this.CUSTOMER_ID = this.InvoiceNewAll[x].CUSTOMER_ID;

      this.CUSTOMER = this.InvoiceNewAll[x].CUSTOMER;
      this.TAX_PAYER_ID = this.InvoiceNewAll[x].TAX_PAYER_ID;
      this.DATE1 = this.InvoiceNewAll[x].DATE1;
      this.FILL_TIME_MIN = this.InvoiceNewAll[x].FILL_TIME_MIN;
      this.ITEM = this.InvoiceNewAll[x].ITEM;

      this.Price = this.InvoiceNewAll[x].Price;
      this.Qty = this.InvoiceNewAll[x].Qty;
      this.Amount = this.InvoiceNewAll[x].Amount;
      this.val = this.InvoiceNewAll[x].val;
      this.GRAND_TOTAL = this.InvoiceNewAll[x].GRAND_TOTAL;
      //console.log(x);
      
    },
    error => {
      alert("Can't not get users data");
      });
  }
    
}