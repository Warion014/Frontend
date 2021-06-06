import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GernalNew } from 'src/app/Model/C1Jounal_.model';
import { NetworkService } from 'src/app/Service/network.service';

@Component({
  selector: 'Journal',
  templateUrl: './journal.html',
  styleUrls: ['./journal.css']
})
export class Journal implements OnInit 
{
    Lposition : string=""

    GeneralNewAll : GernalNew[] | undefined;
    GeneralNewAllshow : GernalNew[] | undefined;
    countJournal : number | undefined;
    date : string | undefined;
    year : string | undefined;
    month : string | undefined;
    day : string | undefined;

    JOURNAL_ORDER  : Float32Array | undefined
    JournalTransactionID : Float32Array | undefined;
    Date : Date | undefined;
    Time : Time | undefined;
    Account : string | undefined;
    Ref : Float32Array | undefined
    Debit : Float32Array | undefined
    Credit : Float32Array | undefined


    constructor(private networkService: NetworkService) { }

    ngOnInit(): void {

      var y = localStorage.getItem('staffPosition')?.replace(/['"]+/g, '');
        // เงื่อนไข IF แบ่ง role
        if( y == "Manager")
        {
          this.Lposition = "Manager"
          //.log("L("+this.Lposition+")");
        }
      //this.feedUsers();
    }
    strsearch:any
  clickme(date:string) 
  {
    this.date = date
    console.log(date);
    
    this.year = date.substring(0,4)
    this.month = date.substring(5,7)
    this.day = date.substring(8,10)
    this.strsearch = this.year+this.month+this.day
    console.log(this.strsearch)
    this.feedJournalByDate(this.strsearch)
  }
  feedJournalByDate(date :string)
  {
    this.networkService.getJournalByDate(date).subscribe(
        data => {
    
          this.GeneralNewAll = data.result;
          console.log(this.GeneralNewAll);
          
        },
        error => {
          alert("Can't not get users data");
          });
  }
  
}