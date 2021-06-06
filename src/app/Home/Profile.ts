import {
  Component,
  OnInit
} from '@angular/core';
import {
  Staff
} from 'src/app/Model/staff.model';
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
import { zip } from 'rxjs';

@Component({
  selector: 'Profile',
  templateUrl: './Profile.html',
  styleUrls: ['./Profile.css']
})
export class Profile implements OnInit {

  staffAll: Staff[] | undefined;
  countStaff: number | undefined;
  Fname: string | undefined;
  Lname: string | undefined;
  Email: string | undefined;
  BOD: Date | undefined;
  Adress: Float32Array | undefined;
  Phone: string | undefined;
  Position: string | undefined;
  ID: number | undefined;
  IDi : string | undefined;
  counth : number | undefined;
  h : string | undefined;
  Lposition : string=""

  constructor(private networkService: NetworkService) {}

  ngOnInit(): void {
    this.feedUsers();
  }

  feedUsers() {
    this.networkService.getStaff().subscribe(
      data => {
        this.staffAll = data.result;
        this.countStaff = this.staffAll.length;
        console.log(this.staffAll);

        var x = localStorage.getItem('staffID')
        console.log("x(" + this.h + ")");

        console.log("(" + localStorage.getItem('staffID') + ")")
        
        for (let i = 0; i < this.countStaff; i++) {
          
          this.IDi = JSON.stringify(this.staffAll[i].Staff_ID)
          // this.counth = this.IDi?.length
          // this.ID = parseInt(this.IDi,this.counth)
          console.log("q("+this.IDi+")+"+x);
          
          if (this.IDi == x) {
            console.log("zxcv");
            this.Fname = this.staffAll[i].Firstname_Lastname;
            this.Email = this.staffAll[i].Email;
            this.BOD = this.staffAll[i].BOD;
            this.Adress = this.staffAll[i].Address;
            this.Phone = this.staffAll[i].Phone;
            this.Position = this.staffAll[i].Position;
          }
        }

      },
      error => {
        alert("Can't not get users data");
      });
  }
}
