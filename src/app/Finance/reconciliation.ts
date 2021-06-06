import { Component, OnInit } from '@angular/core';
import { JournalTransaction } from 'src/app/Model/journaltransaction.model';
import { NetworkService } from 'src/app/Service/network.service';
import { FormControl,ReactiveFormsModule,FormsModule,FormGroup,FormBuilder,Validators,FormArray } from '@angular/forms';
import { ReconNew } from '../Model/C3Recon_.model';

@Component({
  selector: 'Reconciliation',
  templateUrl: './reconciliation.html',
  styleUrls: ['./reconciliation.css']
})
export class Reconciliation implements OnInit 
{

    Lposition : string=""

    ReconAll : ReconNew[] | undefined
    countRecon : number | undefined
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

    constructor(private networkService: NetworkService) { }

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
    feedUsers()
{
  this.networkService.getRecon().subscribe(
    data => {
      this.ReconAll = data.result
    },
    error => {
      alert("Can't not get users data");
      });
  }
    
}