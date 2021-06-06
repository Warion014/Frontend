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
  InventoryNew
} from 'src/app/Model/C5Inventory_.model';

@Component({
  selector: 'Inventory',
  templateUrl: './inventory.html',
  styleUrls: ['./inventory.css']
})
export class Inventory implements OnInit {

  Lposition : string=""
  InventoryNewAll: InventoryNew[] | undefined;
  Inventory_ORDER  : Float32Array | undefined
  Stock : string | undefined;
  GASOHOL95_1 : Float32Array | undefined;
  GASOHOL95_2 : Float32Array | undefined;
  GASOHOL95_3 : Float32Array | undefined;
  GASOHOL95_4 : Float32Array | undefined;
  DIESEL_1 : Float32Array | undefined;
  DIESEL_2 : Float32Array | undefined;
  DIESEL_3 : Float32Array | undefined;
  DIESEL_4 : Float32Array | undefined;
          
;

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
    this.networkService.getInventory().subscribe(
      data => {

        this.InventoryNewAll = data.result;
        this.GASOHOL95_1 = this.InventoryNewAll[0].GASOHOL95
        this.GASOHOL95_2 = this.InventoryNewAll[1].GASOHOL95
        this.GASOHOL95_3 = this.InventoryNewAll[2].GASOHOL95
        this.GASOHOL95_4 = this.InventoryNewAll[3].GASOHOL95
        this.DIESEL_1 = this.InventoryNewAll[0].DIESEL
        this.DIESEL_2 = this.InventoryNewAll[1].DIESEL
        this.DIESEL_3 = this.InventoryNewAll[2].DIESEL
        this.DIESEL_4 = this.InventoryNewAll[3].DIESEL

      },
      error => {
        alert("Can't not get users data");
      });
  }

}
