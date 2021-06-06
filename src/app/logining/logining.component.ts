import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router
} from '@angular/router';
import {
  Staff
} from '../Model/staff.model';
import {
  NetworkService
} from '../Service/network.service';

@Component({
  selector: 'app-logining',
  templateUrl: './logining.component.html',
  styleUrls: ['./logining.component.css']
})
export class LoginingComponent implements OnInit {
  UName: string | undefined
  PName: string | undefined
  mUsername: string | undefined;
  mPassword: string | undefined;
  mPosition: string | undefined;
  oPosition: string | undefined;
  aPosition: string | undefined;
  staffAll: Staff[] | undefined;
  countStaff: number | undefined;
  Fname: string | undefined;
  Lname: string | undefined;
  Email: string | undefined;
  BOD: Date | undefined;
  Adress: string | undefined;
  Phone: number | undefined;
  Position: string | undefined;
  counth: number | undefined;
  ID: number | undefined;
  IDi : string | undefined;
  //constructor(private router:Router) { }
  constructor(private networkService: NetworkService, private router: Router) {}


  ngOnInit(): void {}
  clickme(username: string, password: string) {
    console.log(username + "+" + password);
    this.UName = username;
    this.PName = password;
    this.mPosition = "Operator";
    this.oPosition = "Manager";
    this.aPosition = "Admin";
    localStorage.clear();
    console.log("("+this.UName+"/"+this.PName+")");
    
    this.networkService.getStaff().subscribe(
      data => {
        this.staffAll = data.result;
        console.log(this.staffAll);
        this.countStaff = this.staffAll.length;
        for (let i = 0; i < this.countStaff; i++) {
          this.mUsername = this.staffAll[i].Username?.replace(/\s/g, "");
          console.log("q");
          this.mPassword = JSON.stringify(this.staffAll[i].UserPassword);
          // this.counth = this.mPassword?.length
          // this.ID = parseInt(this.IDi,this.counth)

          console.log("y");
          this.Position = this.staffAll[i].Position?.replace(/\s/g, "");
          console.log("");
          
          //console.log("("+this.UName+"/"+this.PName+")");
          
          console.log("m(+" + this.mUsername + "+" + this.mPassword+")");
          console.log(this.staffAll[i].Username + "+" + this.staffAll[i].UserPassword);
          if (this.mUsername == this.UName && this.mPassword == this.PName) {
            console.log("555");
            console.log("p("+this.Position+")");
            
            //console.log(this.staffAll[i].Username+"++"+this.staffAll[i].Password);
            if (this.Position == this.oPosition) {
               localStorage.setItem('staffID',JSON.stringify(this.staffAll[i].Staff_ID));
               localStorage.setItem('staffPosition',JSON.stringify(this.staffAll[i].Position));
              this.router.navigate(["./profile"]);
            }
            if (this.Position == this.mPosition) {
               localStorage.setItem('staffID',JSON.stringify(this.staffAll[i].Staff_ID));
               localStorage.setItem('staffPosition',JSON.stringify(this.staffAll[i].Position));
              this.router.navigate(["./profile"]);
            }
            if (this.Position == this.aPosition) {
               localStorage.setItem('staffID',JSON.stringify(this.staffAll[i].Staff_ID));
               localStorage.setItem('staffPosition',JSON.stringify(this.staffAll[i].Position));
              this.router.navigate(["./profile"]);
            }
          }
        }
      }
    )
  }
}
