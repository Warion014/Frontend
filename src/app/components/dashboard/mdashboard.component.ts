import {
  Time
} from '@angular/common';
import {
  Component,
  OnInit
} from '@angular/core';
import {
  PIData1
} from 'src/app/Model/PIData1.model';
import {
  NetworkService
} from 'src/app/Service/network.service';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './mdashboard.component.html',
  styleUrls: ['./mdashboard.component.css']
})
export class MDashboardComponent implements OnInit {

  swom: string | undefined;
  //4 dashboard
  PIAll: PIData1[] | undefined;
  countPI: number | undefined;
  Item1: number | undefined;
  Item2: Time | undefined;
  DieselValue: number | undefined;
  Gasohol95Value: number | undefined;
  NumberTruckIn: number | undefined;
  AvgCycleTime: number | undefined;
  SumD: number | undefined;
  SumG: number | undefined;
  SumT: number | undefined;
  SumA: number | undefined;
  //chart U
  Usale : number | undefined;
  UIn : number | undefined;
  UDiesel : number | undefined;
  UGasohol95 : number | undefined;
  UOut : number | undefined;
  SumUS : number | undefined;
  SumUI : number | undefined;
  SumUD : number | undefined;
  SumUG : number | undefined;
  SumUO : number | undefined;
  // chart Q
  Nsale : number | undefined;
  NIn : number | undefined;
  NDiesel : number | undefined;
  NGasohol95 : number | undefined;
  NOut : number | undefined;
  SumNS : number | undefined;
  SumNI : number | undefined;
  SumND : number | undefined;
  SumNG : number | undefined;
  SumNO : number | undefined;
  // chart W
  Wsale : number | undefined;
  WIn : number | undefined;
  WDiesel : number | undefined;
  WGasohol95 : number | undefined;
  WOut : number | undefined;
  SumWS : number | undefined;
  SumWI : number | undefined;
  SumWD : number | undefined;
  SumWG : number | undefined;
  SumWO : number | undefined;
  // chart WIP but I
  Isale : number | undefined;
  IIn : number | undefined;
  IDiesel : number | undefined;
  IGasohol95 : number | undefined;
  IOut : number | undefined;
  SumIS : number | undefined;
  SumII : number | undefined;
  SumID : number | undefined;
  SumIG : number | undefined;
  SumIO : number | undefined;
  Lposition : string=""
  
  
  lineChartData2:any
  barChartData3:any
  barChartData4:any
  lineChartData5:any
  constructor(private networkService: NetworkService) {}

  ngOnInit(): void {
    var y = localStorage.getItem('staffPosition')?.replace(/['"]+/g, '');
        // เงื่อนไข IF แบ่ง role
        if( y == "Manager")
        {
          this.Lposition = "Manager"
          console.log("L("+this.Lposition+")");
        }

  }
  clickme(swom: string) {
    this.swom = swom
    console.log("swom:"+this.swom);
    //4 dashboard
    this.feedPIValueByTagname("A004-S3-0100-VALUE3");
    this.feedPIValueByTagname2("A004-S3-0100-VALUE4");
    setTimeout(() => {
      this.feedPIValueByTagname3("A004-S3-0000-VALUE9");
    }, 1000);
    setTimeout(() => {
      this.feedPIValueByTagname4("A004-S3-0100-VALUE89");
    }, 1000);
    // chart U
    setTimeout(() => {
      this.feedPIValueByTagname5("A004-S3-0000-VALUE63");
    }, 2000);
    setTimeout(() => {
      this.feedPIValueByTagname6("A004-S3-0300-VALUE64");
    }, 2000);
    setTimeout(() => {
      this.feedPIValueByTagname7("A004-S3-0100-VALUE65");
    }, 3000);
    setTimeout(() => {
      this.feedPIValueByTagname8("A004-S3-0100-VALUE66");
    }, 3000);
    setTimeout(() => {
      this.feedPIValueByTagname9("A004-S3-0400-VALUE67");
    }, 4000);
    // chart Q but N
    setTimeout(() => {
      this.feedPIValueByTagname10("A004-S3-0000-VALUE18");
    }, 4000);
    setTimeout(() => {
      this.feedPIValueByTagname11("A004-S3-0300-VALUE19");
    }, 5000);
    setTimeout(() => {
      this.feedPIValueByTagname12("A004-S3-0100-VALUE20");
    }, 5000);
    setTimeout(() => {
      this.feedPIValueByTagname13("A004-S3-0100-VALUE21");
    }, 6000);
    setTimeout(() => {
      this.feedPIValueByTagname14("A004-S3-0400-VALUE22");
    }, 6000);
    // Chart W
    setTimeout(() => {
      this.feedPIValueByTagname15("A004-S3-0000-VALUE33");
    }, 7000);
    setTimeout(() => {
      this.feedPIValueByTagname16("A004-S3-0300-VALUE34");
    }, 7000);
    setTimeout(() => {
      this.feedPIValueByTagname17("A004-S3-0100-VALUE35");
    }, 8000);
    setTimeout(() => {
      this.feedPIValueByTagname18("A004-S3-0100-VALUE36");
    }, 8000);
    setTimeout(() => {
      this.feedPIValueByTagname19("A004-S3-0400-VALUE37");
    }, 9000);
    // chart WIP
    setTimeout(() => {
      this.feedPIValueByTagname20("A004-S3-0000-VALUE48");
    }, 9000);
    setTimeout(() => {
      this.feedPIValueByTagname21("A004-S3-0300-VALUE49");
    }, 10000);
    setTimeout(() => {
      this.feedPIValueByTagname22("A004-S3-0100-VALUE50");
    }, 10000);
    setTimeout(() => {
      this.feedPIValueByTagname23("A004-S3-0100-VALUE51");
    }, 11000);
    setTimeout(() => {
      this.feedPIValueByTagname24("A004-S3-0400-VALUE52");
    }, 11000);


  }
  //4 dash top
  feedPIValueByTagname(tagname: string) {
    this.networkService.getPIValueByTagname(tagname).subscribe(
      data => {
        console.log(JSON.stringify(data))
        this.PIAll = data.result;
        //console.log(this.PIAll)
        this.countPI = this.PIAll.length;
        console.log(this.swom + "sec1")
        // console.log(this.countPI)
        var sum = 0;
        if (this.swom == "1") {
          for (let i = 0; i < 7; i++) {
            this.SumD = this.PIAll[i].Item1
            sum += this.SumD!
          }
          this.DieselValue = sum
        }
        if (this.swom == "2") {
          for (let i = 7; i < 14; i++) {
            this.SumD = this.PIAll[i].Item1
            sum += this.SumD!
          }
          this.DieselValue = sum
        }
        if (this.swom == "3") {
          for (let i = 14; i < 21; i++) {
            this.SumD = this.PIAll[i].Item1
            sum += this.SumD!
          }
          this.DieselValue = sum
        }
        if (this.swom == "4") {
          for (let i = 21; i < 28; i++) {
            this.SumD = this.PIAll[i].Item1
            sum += this.SumD!
          }
          this.DieselValue = sum
        }
        if (this.swom == "5") {
          for (let i = 0; i < this.countPI; i++) {
            this.SumD = this.PIAll[i].Item1
            sum += this.SumD!
          }
          this.DieselValue = sum
        }
      },
      error => {
        alert("Can't not get pi value by tagname");
      });
  }

  feedPIValueByTagname2(tagname: string) {
    this.networkService.getPIValueByTagname(tagname).subscribe(
      data => {
        console.log(JSON.stringify(data))
        this.PIAll = data.result;
        //console.log(this.PIAll)
        this.countPI = this.PIAll.length;
        console.log(this.swom + "sec2")
        // console.log(this.countPI)
        var sum = 0;
        if (this.swom == "1") {
          for (let i = 0; i < 7; i++) {
            this.SumG = this.PIAll[i].Item1
            sum += this.SumG!
          }
          this.Gasohol95Value = sum
        }
        if (this.swom == "2") {
          for (let i = 7; i < 14; i++) {
            this.SumG = this.PIAll[i].Item1
            sum += this.SumG!
          }
          this.Gasohol95Value = sum
        }
        if (this.swom == "3") {
          for (let i = 14; i < 21; i++) {
            this.SumG = this.PIAll[i].Item1
            sum += this.SumG!
          }
          this.Gasohol95Value = sum
        }
        if (this.swom == "4") {
          for (let i = 21; i < 28; i++) {
            this.SumG = this.PIAll[i].Item1
            sum += this.SumG!
          }
          this.Gasohol95Value = sum
        }
        if (this.swom == "5") {
          for (let i = 0; i < this.countPI; i++) {
            this.SumG = this.PIAll[i].Item1
            sum += this.SumG!
          }
          this.Gasohol95Value = sum
        }
      },
      error => {
        alert("Can't not get pi value by tagname2");
      });
  }

  feedPIValueByTagname3(tagname: string) {
    this.networkService.getPIValueByTagname(tagname).subscribe(
      data => {
        console.log(JSON.stringify(data))
        this.PIAll = data.result;
        //console.log(this.PIAll)
        this.countPI = this.PIAll.length;
        console.log(this.swom + "sec3")
        // console.log(this.countPI)
        var sum=0
        if (this.swom == "1") {
          for (let i = 0; i < 7; i++) {
            this.SumT = this.PIAll[i].Item1
            sum += this.SumT!
          }
          this.NumberTruckIn = sum
        }
        if (this.swom == "2") {
          for (let i = 7; i < 14; i++) {
            this.SumT = this.PIAll[i].Item1
            sum += this.SumT!
          }
          this.NumberTruckIn = sum
        }
        if (this.swom == "3") {
          for (let i = 14; i < 21; i++) {
            this.SumT = this.PIAll[i].Item1
            sum += this.SumT!
          }
          this.NumberTruckIn = sum
        }
        if (this.swom == "4") {
          for (let i = 21; i < 28; i++) {
            this.SumT = this.PIAll[i].Item1
            sum += this.SumT!
          }
          this.NumberTruckIn = sum
        }
        if (this.swom == "5") {
          for (let i = 0; i < this.countPI; i++) {
            this.SumT = this.PIAll[i].Item1
            sum += this.SumT!
          }
          this.NumberTruckIn = sum
        }
      },
      error => {
        alert("Can't not get pi value by tagname3");
      });
  }

  feedPIValueByTagname4(tagname: string) {
    this.networkService.getPIValueByTagname(tagname).subscribe(
      data => {
        console.log(JSON.stringify(data))
        this.PIAll = data.result;
        //console.log(this.PIAll)
        this.countPI = this.PIAll.length;
        console.log(this.swom + "sec3")
        // console.log(this.countPI)
        var sum=0;
        if (this.swom == "1") {
          for (let i = 0; i < 7; i++) {
            this.SumA = this.PIAll[i].Item1
            sum += this.SumA!
          }
          this.AvgCycleTime = sum
        }
        if (this.swom == "2") {
          for (let i = 7; i < 14; i++) {
            this.SumA = this.PIAll[i].Item1
            sum += this.SumA!
          }
          this.AvgCycleTime = sum
        }
        if (this.swom == "3") {
          for (let i = 14; i < 21; i++) {
            this.SumA = this.PIAll[i].Item1
            sum += this.SumA!
          }
          this.AvgCycleTime = sum
        }
        if (this.swom == "4") {
          for (let i = 21; i < 28; i++) {
            this.SumA = this.PIAll[i].Item1
            sum += this.SumA!
          }
          this.AvgCycleTime = sum
        }
        if (this.swom == "5") {
          for (let i = 0; i < this.countPI; i++) {
            this.SumA = this.PIAll[i].Item1
            sum += this.SumA!
          }
          this.AvgCycleTime = sum
        }
      },
      error => {
        alert("Can't not get pi value by tagname4");
      });
  }

  //chart U
  feedPIValueByTagname5(tagname: string) {
    this.networkService.getPIValueByTagname(tagname).subscribe(
      data => {
        console.log(JSON.stringify(data))
        this.PIAll = data.result;
        //console.log(this.PIAll)
        this.countPI = this.PIAll.length;
        console.log(this.swom + "sec3")
        // console.log(this.countPI)
        var sum=0;
        if (this.swom == "1") {
          for (let i = 0; i < 7; i++) {
            this.SumUS = this.PIAll[i].Item1
            sum += this.SumUS!
          }
          this.Usale = sum
        }
        if (this.swom == "2") {
          for (let i = 7; i < 14; i++) {
            this.SumUS = this.PIAll[i].Item1
            sum += this.SumUS!
          }
          this.Usale = sum
        }
        if (this.swom == "3") {
          for (let i = 14; i < 21; i++) {
            this.SumUS = this.PIAll[i].Item1
            sum += this.SumUS!
          }
          this.Usale = sum
        }
        if (this.swom == "4") {
          for (let i = 21; i < 28; i++) {
            this.SumUS = this.PIAll[i].Item1
            sum += this.SumUS!
          }
          this.Usale = sum
        }
        if (this.swom == "5") {
          for (let i = 0; i < this.countPI; i++) {
            this.SumUS = this.PIAll[i].Item1
            sum += this.SumUS!
          }
          this.Usale = sum
        }
      },
      error => {
        alert("Can't not get pi value by tagname5");
      });
  }

  feedPIValueByTagname6(tagname: string) {
    this.networkService.getPIValueByTagname(tagname).subscribe(
      data => {
        console.log(JSON.stringify(data))
        this.PIAll = data.result;
        //console.log(this.PIAll)
        this.countPI = this.PIAll.length;
        console.log(this.swom + "sec3")
        // console.log(this.countPI)
        var sum=0;
        if (this.swom == "1") {
          for (let i = 0; i < 7; i++) {
            this.SumUI = this.PIAll[i].Item1
            sum += this.SumUI!
          }
          this.UIn = sum
        }
        if (this.swom == "2") {
          for (let i = 7; i < 14; i++) {
            this.SumUI = this.PIAll[i].Item1
            sum += this.SumUI!
          }
          this.UIn = sum
        }
        if (this.swom == "3") {
          for (let i = 14; i < 21; i++) {
            this.SumUI = this.PIAll[i].Item1
            sum += this.SumUI!
          }
          this.UIn = sum
        }
        if (this.swom == "4") {
          for (let i = 21; i < 28; i++) {
            this.SumUI = this.PIAll[i].Item1
            sum += this.SumUI!
          }
          this.UIn = sum
        }
        if (this.swom == "5") {
          for (let i = 0; i < this.countPI; i++) {
            this.SumUI = this.PIAll[i].Item1
            sum += this.SumUI!
          }
          this.UIn = sum
        }
      },
      error => {
        alert("Can't not get pi value by tagname6");
      });
  }

  feedPIValueByTagname7(tagname: string) {
    this.networkService.getPIValueByTagname(tagname).subscribe(
      data => {
        console.log(JSON.stringify(data))
        this.PIAll = data.result;
        //console.log(this.PIAll)
        this.countPI = this.PIAll.length;
        console.log(this.swom + "sec3")
        // console.log(this.countPI)
        var sum=0;
        if (this.swom == "1") {
          for (let i = 0; i < 7; i++) {
            this.SumUD = this.PIAll[i].Item1
            sum += this.SumUD!
          }
          this.UDiesel = sum
        }
        if (this.swom == "2") {
          for (let i = 7; i < 14; i++) {
            this.SumUD = this.PIAll[i].Item1
            sum += this.SumUD!
          }
          this.UDiesel = sum
        }
        if (this.swom == "3") {
          for (let i = 14; i < 21; i++) {
            this.SumUD = this.PIAll[i].Item1
            sum += this.SumUD!
          }
          this.UDiesel = sum
        }
        if (this.swom == "4") {
          for (let i = 21; i < 28; i++) {
            this.SumUD = this.PIAll[i].Item1
            sum += this.SumUD!
          }
          this.UDiesel = sum
        }
        if (this.swom == "5") {
          for (let i = 0; i < this.countPI; i++) {
            this.SumUD = this.PIAll[i].Item1
            sum += this.SumUD!
          }
          this.UDiesel = sum
        }
      },
      error => {
        alert("Can't not get pi value by tagname7");
      });
  }

  feedPIValueByTagname8(tagname: string) {
    this.networkService.getPIValueByTagname(tagname).subscribe(
      data => {
        console.log(JSON.stringify(data))
        this.PIAll = data.result;
        //console.log(this.PIAll)
        this.countPI = this.PIAll.length;
        console.log(this.swom + "sec3")
        // console.log(this.countPI)
        var sum=0;
        if (this.swom == "1") {
          for (let i = 0; i < 7; i++) {
            this.SumUG = this.PIAll[i].Item1
            sum += this.SumUG!
          }
          this.UGasohol95 = sum
        }
        if (this.swom == "2") {
          for (let i = 7; i < 14; i++) {
            this.SumUG = this.PIAll[i].Item1
            sum += this.SumUG!
          }
          this.UGasohol95 = sum
        }
        if (this.swom == "3") {
          for (let i = 14; i < 21; i++) {
            this.SumUG = this.PIAll[i].Item1
            sum += this.SumUG!
          }
          this.UGasohol95 = sum
        }
        if (this.swom == "4") {
          for (let i = 21; i < 28; i++) {
            this.SumUG = this.PIAll[i].Item1
            sum += this.SumUG!
          }
          this.UGasohol95 = sum
        }
        if (this.swom == "5") {
          for (let i = 0; i < this.countPI; i++) {
            this.SumUG = this.PIAll[i].Item1
            sum += this.SumUG!
          }
          this.UGasohol95 = sum
        }
      },
      error => {
        alert("Can't not get pi value by tagname8");
      });
  }

  feedPIValueByTagname9(tagname: string) {
    this.networkService.getPIValueByTagname(tagname).subscribe(
      data => {
        console.log(JSON.stringify(data))
        this.PIAll = data.result;
        //console.log(this.PIAll)
        this.countPI = this.PIAll.length;
        console.log(this.swom + "sec3")
        // console.log(this.countPI)
        var sum=0;
        if (this.swom == "1") {
          for (let i = 0; i < 7; i++) {
            this.SumUO = this.PIAll[i].Item1
            sum += this.SumUO!
          }
          this.UOut = sum
          console.log("u("+this.Usale+"+"+this.UIn+"+"+this.UDiesel+"+"+this.UGasohol95+"+"+this.UOut+")")
          this.lineChartData2 = [
            { data: [this.Usale,this.UIn,this.UDiesel,this.UGasohol95,this.UOut], 
              label: 'Station',
              fill : false
            }
          ];
        }
        if (this.swom == "2") {
          for (let i = 7; i < 14; i++) {
            this.SumUO = this.PIAll[i].Item1
            sum += this.SumUO!
          }
          this.UOut = sum
          console.log("u("+this.Usale+"+"+this.UIn+"+"+this.UDiesel+"+"+this.UGasohol95+"+"+this.UOut+")")
          this.lineChartData2 = [
            { data: [this.Usale,this.UIn,this.UDiesel,this.UGasohol95,this.UOut], 
              label: 'Station',
              fill : false
            }
          ];
        }
        if (this.swom == "3") {
          for (let i = 14; i < 21; i++) {
            this.SumUO = this.PIAll[i].Item1
            sum += this.SumUO!
          }
          this.UOut = sum
          console.log("u("+this.Usale+"+"+this.UIn+"+"+this.UDiesel+"+"+this.UGasohol95+"+"+this.UOut+")")
          this.lineChartData2 = [
            { data: [this.Usale,this.UIn,this.UDiesel,this.UGasohol95,this.UOut], 
              label: 'Station',
              fill : false
            }
          ];
        }
        if (this.swom == "4") {
          for (let i = 21; i < 28; i++) {
            this.SumUO = this.PIAll[i].Item1
            sum += this.SumUO!
          }
          this.UOut = sum
          console.log("u("+this.Usale+"+"+this.UIn+"+"+this.UDiesel+"+"+this.UGasohol95+"+"+this.UOut+")")
          this.lineChartData2 = [
            { data: [this.Usale,this.UIn,this.UDiesel,this.UGasohol95,this.UOut], 
              label: 'Station',
              fill : false
            }
          ];
        }
        if (this.swom == "5") {
          for (let i = 0; i < this.countPI; i++) {
            this.SumUO = this.PIAll[i].Item1
            sum += this.SumUO!
          }
          this.UOut = sum
          console.log("u("+this.Usale+"+"+this.UIn+"+"+this.UDiesel+"+"+this.UGasohol95+"+"+this.UOut+")")
          this.lineChartData2 = [
            { data: [this.Usale,this.UIn,this.UDiesel,this.UGasohol95,this.UOut], 
              label: 'Station',
              fill : false
            }
          ];
        }
      },
      error => {
        alert("Can't not get pi value by tagname9");
      });
  }

  //chart Q แต่ใช้ตัว N
  feedPIValueByTagname10(tagname: string) {
    this.networkService.getPIValueByTagname(tagname).subscribe(
      data => {
        console.log(JSON.stringify(data))
        this.PIAll = data.result;
        //console.log(this.PIAll)
        this.countPI = this.PIAll.length;
        console.log(this.swom + "sec3")
        // console.log(this.countPI)
        var sum=0;
        if (this.swom == "1") {
          for (let i = 0; i < 7; i++) {
            this.SumNS = this.PIAll[i].Item1
            sum += this.SumNS!
          }
          this.Nsale = sum / 7
        }
        if (this.swom == "2") {
          for (let i = 7; i < 14; i++) {
            this.SumNS = this.PIAll[i].Item1
            sum += this.SumNS!
          }
          this.Nsale = sum / 7
        }
        if (this.swom == "3") {
          for (let i = 14; i < 21; i++) {
            this.SumNS = this.PIAll[i].Item1
            sum += this.SumNS!
          }
          this.Nsale = sum / 7
        }
        if (this.swom == "4") {
          for (let i = 21; i < 28; i++) {
            this.SumNS = this.PIAll[i].Item1
            sum += this.SumNS!
          }
          this.Nsale = sum / 7
        }
        if (this.swom == "5") {
          for (let i = 0; i < this.countPI; i++) {
            this.SumNS = this.PIAll[i].Item1
            sum += this.SumNS!
          }
          this.Nsale = sum / 31
        }
      },
      error => {
        alert("Can't not get pi value by tagname10");
      });
  }

  feedPIValueByTagname11(tagname: string) {
    this.networkService.getPIValueByTagname(tagname).subscribe(
      data => {
        console.log(JSON.stringify(data))
        this.PIAll = data.result;
        //console.log(this.PIAll)
        this.countPI = this.PIAll.length;
        console.log(this.swom + "sec3")
        // console.log(this.countPI)
        var sum=0;
        if (this.swom == "1") {
          for (let i = 0; i < 7; i++) {
            this.SumNI = this.PIAll[i].Item1
            sum += this.SumNI!
          }
          this.NIn = sum / 7
        }
        if (this.swom == "2") {
          for (let i = 7; i < 14; i++) {
            this.SumNI = this.PIAll[i].Item1
            sum += this.SumNI!
          }
          this.NIn = sum/7
        }
        if (this.swom == "3") {
          for (let i = 14; i < 21; i++) {
            this.SumNI = this.PIAll[i].Item1
            sum += this.SumNI!
          }
          this.NIn = sum/7
        }
        if (this.swom == "4") {
          for (let i = 21; i < 28; i++) {
            this.SumNI = this.PIAll[i].Item1
            sum += this.SumNI!
          }
          this.NIn = sum/7
        }
        if (this.swom == "5") {
          for (let i = 0; i < this.countPI; i++) {
            this.SumNI = this.PIAll[i].Item1
            sum += this.SumNI!
          }
          this.NIn = sum/31
        }
      },
      error => {
        alert("Can't not get pi value by tagname11");
      });
  }

  feedPIValueByTagname12(tagname: string) {
    this.networkService.getPIValueByTagname(tagname).subscribe(
      data => {
        console.log(JSON.stringify(data))
        this.PIAll = data.result;
        //console.log(this.PIAll)
        this.countPI = this.PIAll.length;
        console.log(this.swom + "sec3")
        // console.log(this.countPI)
        var sum=0;
        if (this.swom == "1") {
          for (let i = 0; i < 7; i++) {
            this.SumND = this.PIAll[i].Item1
            sum += this.SumND!
          }
          this.NDiesel = sum/7
        }
        if (this.swom == "2") {
          for (let i = 7; i < 14; i++) {
            this.SumND = this.PIAll[i].Item1
            sum += this.SumND!
          }
          this.UDiesel = sum/7
        }
        if (this.swom == "3") {
          for (let i = 14; i < 21; i++) {
            this.SumND = this.PIAll[i].Item1
            sum += this.SumND!
          }
          this.NDiesel = sum/7
        }
        if (this.swom == "4") {
          for (let i = 21; i < 28; i++) {
            this.SumND = this.PIAll[i].Item1
            sum += this.SumND!
          }
          this.NDiesel = sum/7
        }
        if (this.swom == "5") {
          for (let i = 0; i < this.countPI; i++) {
            this.SumND = this.PIAll[i].Item1
            sum += this.SumND!
          }
          this.NDiesel = sum/31
        }
      },
      error => {
        alert("Can't not get pi value by tagname12");
      });
  }

  feedPIValueByTagname13(tagname: string) {
    this.networkService.getPIValueByTagname(tagname).subscribe(
      data => {
        console.log(JSON.stringify(data))
        this.PIAll = data.result;
        //console.log(this.PIAll)
        this.countPI = this.PIAll.length;
        console.log(this.swom + "sec3")
        // console.log(this.countPI)
        var sum=0;
        if (this.swom == "1") {
          for (let i = 0; i < 7; i++) {
            this.SumNG = this.PIAll[i].Item1
            sum += this.SumNG!
          }
          this.NGasohol95 = sum/7
        }
        if (this.swom == "2") {
          for (let i = 7; i < 14; i++) {
            this.SumNG = this.PIAll[i].Item1
            sum += this.SumNG!
          }
          this.NGasohol95 = sum/7
        }
        if (this.swom == "3") {
          for (let i = 14; i < 21; i++) {
            this.SumNG = this.PIAll[i].Item1
            sum += this.SumNG!
          }
          this.NGasohol95 = sum/7
        }
        if (this.swom == "4") {
          for (let i = 21; i < 28; i++) {
            this.SumNG = this.PIAll[i].Item1
            sum += this.SumNG!
          }
          this.NGasohol95 = sum/7
        }
        if (this.swom == "5") {
          for (let i = 0; i < this.countPI; i++) {
            this.SumNG = this.PIAll[i].Item1
            sum += this.SumNG!
          }
          this.NGasohol95 = sum/31
        }
      },
      error => {
        alert("Can't not get pi value by tagname13");
      });
  }

  feedPIValueByTagname14(tagname: string) {
    this.networkService.getPIValueByTagname(tagname).subscribe(
      data => {
        console.log(JSON.stringify(data))
        this.PIAll = data.result;
        //console.log(this.PIAll)
        this.countPI = this.PIAll.length;
        console.log(this.swom + "sec3")
        // console.log(this.countPI)
        var sum=0;
        if (this.swom == "1") {
          for (let i = 0; i < 7; i++) {
            this.SumNO = this.PIAll[i].Item1
            sum += this.SumNO!
          }
          this.NOut = sum/7
          console.log("u("+this.Nsale+"+"+this.NIn+"+"+this.NDiesel+"+"+this.NGasohol95+"+"+this.NOut+")")
          this.barChartData3 = [
            { data: [this.Nsale,this.NIn,this.NDiesel,this.NGasohol95,this.NOut], 
              label: 'Time',
              backgroundColor: "rgb(204, 82, 0)",
            }
          ];
        }
        if (this.swom == "2") {
          for (let i = 7; i < 14; i++) {
            this.SumNO = this.PIAll[i].Item1
            sum += this.SumNO!
          }
          this.NOut = sum/7
          console.log("u("+this.Nsale+"+"+this.NIn+"+"+this.NDiesel+"+"+this.NGasohol95+"+"+this.NOut+")")
          this.barChartData3 = [
            { data: [this.Nsale,this.NIn,this.NDiesel,this.NGasohol95,this.NOut], 
              label: 'Time',
              backgroundColor: "rgb(204, 82, 0)",
            }
          ];
        }
        if (this.swom == "3") {
          for (let i = 14; i < 21; i++) {
            this.SumNO = this.PIAll[i].Item1
            sum += this.SumNO!
          }
          this.NOut = sum/7
          console.log("u("+this.Nsale+"+"+this.NIn+"+"+this.NDiesel+"+"+this.NGasohol95+"+"+this.NOut+")")
          this.barChartData3 = [
            { data: [this.Nsale,this.NIn,this.NDiesel,this.NGasohol95,this.NOut], 
              label: 'Time',
              backgroundColor: "rgb(204, 82, 0)",
            }
          ];
        }
        if (this.swom == "4") {
          for (let i = 21; i < 28; i++) {
            this.SumNO = this.PIAll[i].Item1
            sum += this.SumNO!
          }
          this.NOut = sum/7
          console.log("u("+this.Nsale+"+"+this.NIn+"+"+this.NDiesel+"+"+this.NGasohol95+"+"+this.NOut+")")
          this.barChartData3 = [
            { data: [this.Nsale,this.NIn,this.NDiesel,this.NGasohol95,this.NOut], 
              label: 'Time',
              backgroundColor: "rgb(204, 82, 0)",
            }
          ];
        }
        if (this.swom == "5") {
          for (let i = 0; i < this.countPI; i++) {
            this.SumNO = this.PIAll[i].Item1
            sum += this.SumNO!
          }
          this.NOut = sum/31
          console.log("u("+this.Nsale+"+"+this.NIn+"+"+this.NDiesel+"+"+this.NGasohol95+"+"+this.NOut+")")
          this.barChartData3 = [
            { data: [this.Nsale,this.NIn,this.NDiesel,this.NGasohol95,this.NOut], 
              label: 'Time',
              backgroundColor: "rgb(204, 82, 0)",
            }
          ];
        }
      },
      error => {
        alert("Can't not get pi value by tagname14");
      });
  }

  // chart W
  feedPIValueByTagname15(tagname: string) {
    this.networkService.getPIValueByTagname(tagname).subscribe(
      data => {
        console.log(JSON.stringify(data))
        this.PIAll = data.result;
        //console.log(this.PIAll)
        this.countPI = this.PIAll.length;
        console.log(this.swom + "sec3")
        // console.log(this.countPI)
        var sum=0;
        if (this.swom == "1") {
          for (let i = 0; i < 7; i++) {
            this.SumWS = this.PIAll[i].Item1
            sum += this.SumWS!
          }
          this.Wsale = sum / 7
        }
        if (this.swom == "2") {
          for (let i = 7; i < 14; i++) {
            this.SumWS = this.PIAll[i].Item1
            sum += this.SumWS!
          }
          this.Wsale = sum / 7
        }
        if (this.swom == "3") {
          for (let i = 14; i < 21; i++) {
            this.SumWS = this.PIAll[i].Item1
            sum += this.SumWS!
          }
          this.Wsale = sum / 7
        }
        if (this.swom == "4") {
          for (let i = 21; i < 28; i++) {
            this.SumWS = this.PIAll[i].Item1
            sum += this.SumWS!
          }
          this.Wsale = sum / 7
        }
        if (this.swom == "5") {
          for (let i = 0; i < this.countPI; i++) {
            this.SumWS = this.PIAll[i].Item1
            sum += this.SumWS!
          }
          this.Wsale = sum / 31
        }
      },
      error => {
        alert("Can't not get pi value by tagname15");
      });
  }

  feedPIValueByTagname16(tagname: string) {
    this.networkService.getPIValueByTagname(tagname).subscribe(
      data => {
        console.log(JSON.stringify(data))
        this.PIAll = data.result;
        //console.log(this.PIAll)
        this.countPI = this.PIAll.length;
        console.log(this.swom + "sec3")
        // console.log(this.countPI)
        var sum=0;
        if (this.swom == "1") {
          for (let i = 0; i < 7; i++) {
            this.SumWI = this.PIAll[i].Item1
            sum += this.SumWI!
          }
          this.WIn = sum / 7
        }
        if (this.swom == "2") {
          for (let i = 7; i < 14; i++) {
            this.SumWI = this.PIAll[i].Item1
            sum += this.SumWI!
          }
          this.WIn = sum/7
        }
        if (this.swom == "3") {
          for (let i = 14; i < 21; i++) {
            this.SumWI = this.PIAll[i].Item1
            sum += this.SumWI!
          }
          this.WIn = sum/7
        }
        if (this.swom == "4") {
          for (let i = 21; i < 28; i++) {
            this.SumWI = this.PIAll[i].Item1
            sum += this.SumWI!
          }
          this.WIn = sum/7
        }
        if (this.swom == "5") {
          for (let i = 0; i < this.countPI; i++) {
            this.SumWI = this.PIAll[i].Item1
            sum += this.SumWI!
          }
          this.WIn = sum/31
        }
      },
      error => {
        alert("Can't not get pi value by tagname16");
      });
  }

  feedPIValueByTagname17(tagname: string) {
    this.networkService.getPIValueByTagname(tagname).subscribe(
      data => {
        console.log(JSON.stringify(data))
        this.PIAll = data.result;
        //console.log(this.PIAll)
        this.countPI = this.PIAll.length;
        console.log(this.swom + "sec3")
        // console.log(this.countPI)
        var sum=0;
        if (this.swom == "1") {
          for (let i = 0; i < 7; i++) {
            this.SumWD = this.PIAll[i].Item1
            sum += this.SumWD!
          }
          this.WDiesel = sum/7
        }
        if (this.swom == "2") {
          for (let i = 7; i < 14; i++) {
            this.SumWD = this.PIAll[i].Item1
            sum += this.SumWD!
          }
          this.WDiesel = sum/7
        }
        if (this.swom == "3") {
          for (let i = 14; i < 21; i++) {
            this.SumWD = this.PIAll[i].Item1
            sum += this.SumWD!
          }
          this.WDiesel = sum/7
        }
        if (this.swom == "4") {
          for (let i = 21; i < 28; i++) {
            this.SumWD = this.PIAll[i].Item1
            sum += this.SumWD!
          }
          this.WDiesel = sum/7
        }
        if (this.swom == "5") {
          for (let i = 0; i < this.countPI; i++) {
            this.SumWD = this.PIAll[i].Item1
            sum += this.SumWD!
          }
          this.WDiesel = sum/31
        }
      },
      error => {
        alert("Can't not get pi value by tagname17");
      });
  }

  feedPIValueByTagname18(tagname: string) {
    this.networkService.getPIValueByTagname(tagname).subscribe(
      data => {
        console.log(JSON.stringify(data))
        this.PIAll = data.result;
        //console.log(this.PIAll)
        this.countPI = this.PIAll.length;
        console.log(this.swom + "sec3")
        // console.log(this.countPI)
        var sum=0;
        if (this.swom == "1") {
          for (let i = 0; i < 7; i++) {
            this.SumWG = this.PIAll[i].Item1
            sum += this.SumWG!
          }
          this.WGasohol95 = sum/7
        }
        if (this.swom == "2") {
          for (let i = 7; i < 14; i++) {
            this.SumWG = this.PIAll[i].Item1
            sum += this.SumWG!
          }
          this.WGasohol95 = sum/7
        }
        if (this.swom == "3") {
          for (let i = 14; i < 21; i++) {
            this.SumWG = this.PIAll[i].Item1
            sum += this.SumWG!
          }
          this.WGasohol95 = sum/7
        }
        if (this.swom == "4") {
          for (let i = 21; i < 28; i++) {
            this.SumWG = this.PIAll[i].Item1
            sum += this.SumWG!
          }
          this.WGasohol95 = sum/7
        }
        if (this.swom == "5") {
          for (let i = 0; i < this.countPI; i++) {
            this.SumWG = this.PIAll[i].Item1
            sum += this.SumWG!
          }
          this.WGasohol95 = sum/31
        }
      },
      error => {
        alert("Can't not get pi value by tagname18");
      });
  }

  feedPIValueByTagname19(tagname: string) {
    this.networkService.getPIValueByTagname(tagname).subscribe(
      data => {
        console.log(JSON.stringify(data))
        this.PIAll = data.result;
        //console.log(this.PIAll)
        this.countPI = this.PIAll.length;
        console.log(this.swom + "sec3")
        // console.log(this.countPI)
        var sum=0;
        if (this.swom == "1") {
          for (let i = 0; i < 7; i++) {
            this.SumWO = this.PIAll[i].Item1
            sum += this.SumWO!
          }
          this.WOut = sum/7
          console.log("w("+this.Wsale+"+"+this.WIn+"+"+this.WDiesel+"+"+this.WGasohol95+"+"+this.WOut+")")
          this.barChartData4 = [
            { data: [this.Wsale,this.WIn,this.WDiesel,this.WGasohol95,this.WOut], 
              label: 'Time',
              backgroundColor: "rgb(153, 102, 255)",
            
            }
          ];
        }
        if (this.swom == "2") {
          for (let i = 7; i < 14; i++) {
            this.SumWO = this.PIAll[i].Item1
            sum += this.SumWO!
          }
          this.WOut = sum/7
          console.log("w("+this.Wsale+"+"+this.WIn+"+"+this.WDiesel+"+"+this.WGasohol95+"+"+this.WOut+")")
          this.barChartData4 = [
            { data: [this.Wsale,this.WIn,this.WDiesel,this.WGasohol95,this.WOut], 
              label: 'Time',
              backgroundColor: "rgb(153, 102, 255)",
            
            }
          ];
        }
        if (this.swom == "3") {
          for (let i = 14; i < 21; i++) {
            this.SumWO = this.PIAll[i].Item1
            sum += this.SumWO!
          }
          this.WOut = sum/7
          console.log("w("+this.Wsale+"+"+this.WIn+"+"+this.WDiesel+"+"+this.WGasohol95+"+"+this.WOut+")")
          this.barChartData4 = [
            { data: [this.Wsale,this.WIn,this.WDiesel,this.WGasohol95,this.WOut], 
              label: 'Time',
              backgroundColor: "rgb(153, 102, 255)",
            
            }
          ];
        }
        if (this.swom == "4") {
          for (let i = 21; i < 28; i++) {
            this.SumWO = this.PIAll[i].Item1
            sum += this.SumWO!
          }
          this.WOut = sum/7
          console.log("w("+this.Wsale+"+"+this.WIn+"+"+this.WDiesel+"+"+this.WGasohol95+"+"+this.WOut+")")
          this.barChartData4 = [
            { data: [this.Wsale,this.WIn,this.WDiesel,this.WGasohol95,this.WOut], 
              label: 'Time',
              backgroundColor: "rgb(153, 102, 255)",
            
            }
          ];
        }
        if (this.swom == "5") {
          for (let i = 0; i < this.countPI; i++) {
            this.SumWO = this.PIAll[i].Item1
            sum += this.SumWO!
          }
          this.WOut = sum/31
          console.log("w("+this.Wsale+"+"+this.WIn+"+"+this.WDiesel+"+"+this.WGasohol95+"+"+this.WOut+")")
          this.barChartData4 = [
            { data: [this.Wsale,this.WIn,this.WDiesel,this.WGasohol95,this.WOut], 
              label: 'Time',
              backgroundColor: "rgb(153, 102, 255)",
            
            }
          ];
        }
      },
      error => {
        alert("Can't not get pi value by tagname19");
      });
  }

  // chart WIP but I
  feedPIValueByTagname20(tagname: string) {
    this.networkService.getPIValueByTagname(tagname).subscribe(
      data => {
        console.log(JSON.stringify(data))
        this.PIAll = data.result;
        //console.log(this.PIAll)
        this.countPI = this.PIAll.length;
        console.log(this.swom + "sec3")
        // console.log(this.countPI)
        var sum=0;
        if (this.swom == "1") {
          for (let i = 0; i < 7; i++) {
            this.SumIS = this.PIAll[i].Item1
            sum += this.SumIS!
          }
          this.Isale = sum
        }
        if (this.swom == "2") {
          for (let i = 7; i < 14; i++) {
            this.SumIS = this.PIAll[i].Item1
            sum += this.SumIS!
          }
          this.Isale = sum
        }
        if (this.swom == "3") {
          for (let i = 14; i < 21; i++) {
            this.SumIS = this.PIAll[i].Item1
            sum += this.SumIS!
          }
          this.Isale = sum
        }
        if (this.swom == "4") {
          for (let i = 21; i < 28; i++) {
            this.SumIS = this.PIAll[i].Item1
            sum += this.SumIS!
          }
          this.Isale = sum
        }
        if (this.swom == "5") {
          for (let i = 0; i < this.countPI; i++) {
            this.SumIS = this.PIAll[i].Item1
            sum += this.SumIS!
          }
          this.Isale = sum
        }
      },
      error => {
        alert("Can't not get pi value by tagname20");
      });
  }

  feedPIValueByTagname21(tagname: string) {
    this.networkService.getPIValueByTagname(tagname).subscribe(
      data => {
        console.log(JSON.stringify(data))
        this.PIAll = data.result;
        //console.log(this.PIAll)
        this.countPI = this.PIAll.length;
        console.log(this.swom + "sec3")
        // console.log(this.countPI)
        var sum=0;
        if (this.swom == "1") {
          for (let i = 0; i < 7; i++) {
            this.SumII = this.PIAll[i].Item1
            sum += this.SumII!
          }
          this.IIn = sum
        }
        if (this.swom == "2") {
          for (let i = 7; i < 14; i++) {
            this.SumII = this.PIAll[i].Item1
            sum += this.SumII!
          }
          this.IIn = sum
        }
        if (this.swom == "3") {
          for (let i = 14; i < 21; i++) {
            this.SumII = this.PIAll[i].Item1
            sum += this.SumII!
          }
          this.IIn = sum
        }
        if (this.swom == "4") {
          for (let i = 21; i < 28; i++) {
            this.SumII = this.PIAll[i].Item1
            sum += this.SumII!
          }
          this.IIn = sum
        }
        if (this.swom == "5") {
          for (let i = 0; i < this.countPI; i++) {
            this.SumII = this.PIAll[i].Item1
            sum += this.SumII!
          }
          this.IIn = sum
        }
      },
      error => {
        alert("Can't not get pi value by tagname21");
      });
  }

  feedPIValueByTagname22(tagname: string) {
    this.networkService.getPIValueByTagname(tagname).subscribe(
      data => {
        console.log(JSON.stringify(data))
        this.PIAll = data.result;
        //console.log(this.PIAll)
        this.countPI = this.PIAll.length;
        console.log(this.swom + "sec3")
        // console.log(this.countPI)
        var sum=0;
        if (this.swom == "1") {
          for (let i = 0; i < 7; i++) {
            this.SumID = this.PIAll[i].Item1
            sum += this.SumID!
          }
          this.IDiesel = sum
        }
        if (this.swom == "2") {
          for (let i = 7; i < 14; i++) {
            this.SumID = this.PIAll[i].Item1
            sum += this.SumID!
          }
          this.IDiesel = sum
        }
        if (this.swom == "3") {
          for (let i = 14; i < 21; i++) {
            this.SumID = this.PIAll[i].Item1
            sum += this.SumID!
          }
          this.IDiesel = sum
        }
        if (this.swom == "4") {
          for (let i = 21; i < 28; i++) {
            this.SumID = this.PIAll[i].Item1
            sum += this.SumID!
          }
          this.IDiesel = sum
        }
        if (this.swom == "5") {
          for (let i = 0; i < this.countPI; i++) {
            this.SumID = this.PIAll[i].Item1
            sum += this.SumID!
          }
          this.IDiesel = sum
        }
      },
      error => {
        alert("Can't not get pi value by tagname22");
      });
  }

  feedPIValueByTagname23(tagname: string) {
    this.networkService.getPIValueByTagname(tagname).subscribe(
      data => {
        console.log(JSON.stringify(data))
        this.PIAll = data.result;
        //console.log(this.PIAll)
        this.countPI = this.PIAll.length;
        console.log(this.swom + "sec3")
        // console.log(this.countPI)
        var sum=0;
        if (this.swom == "1") {
          for (let i = 0; i < 7; i++) {
            this.SumIG = this.PIAll[i].Item1
            sum += this.SumIG!
          }
          this.IGasohol95 = sum
        }
        if (this.swom == "2") {
          for (let i = 7; i < 14; i++) {
            this.SumIG = this.PIAll[i].Item1
            sum += this.SumIG!
          }
          this.IGasohol95 = sum
        }
        if (this.swom == "3") {
          for (let i = 14; i < 21; i++) {
            this.SumIG = this.PIAll[i].Item1
            sum += this.SumIG!
          }
          this.IGasohol95 = sum
        }
        if (this.swom == "4") {
          for (let i = 21; i < 28; i++) {
            this.SumIG = this.PIAll[i].Item1
            sum += this.SumIG!
          }
          this.IGasohol95 = sum
        }
        if (this.swom == "5") {
          for (let i = 0; i < this.countPI; i++) {
            this.SumIG = this.PIAll[i].Item1
            sum += this.SumIG!
          }
          this.IGasohol95 = sum
        }
      },
      error => {
        alert("Can't not get pi value by tagname23");
      });
  }

  feedPIValueByTagname24(tagname: string) {
    this.networkService.getPIValueByTagname(tagname).subscribe(
      data => {
        console.log(JSON.stringify(data))
        this.PIAll = data.result;
        //console.log(this.PIAll)
        this.countPI = this.PIAll.length;
        console.log(this.swom + "sec3")
        // console.log(this.countPI)
        var sum=0;
        if (this.swom == "1") {
          for (let i = 0; i < 7; i++) {
            this.SumIO = this.PIAll[i].Item1
            sum += this.SumIO!
          }
          this.IOut = sum
          console.log("wip("+this.Isale+"+"+this.IIn+"+"+this.IDiesel+"+"+this.IGasohol95+"+"+this.IOut+")")
          this.lineChartData5 = [
            { data: [this.Isale,this.IIn,this.IDiesel,this.IGasohol95,this.IOut], 
              label: 'Station',
              fill : false,
              borderColor: "#bae755",
              backgroundColor: "#e755ba",
              pointBackgroundColor: "#55bae7",
              pointBorderColor: "#55bae7",
              pointHoverBackgroundColor: "#55bae7",
              pointHoverBorderColor: "#55bae7",
            }
          ];
        }
        if (this.swom == "2") {
          for (let i = 7; i < 14; i++) {
            this.SumIO = this.PIAll[i].Item1
            sum += this.SumIO!
          }
          this.IOut = sum
          console.log("wip("+this.Isale+"+"+this.IIn+"+"+this.IDiesel+"+"+this.IGasohol95+"+"+this.IOut+")")
          this.lineChartData5 = [
            { data: [this.Isale,this.IIn,this.IDiesel,this.IGasohol95,this.IOut], 
              label: 'Station',
              fill : false,
              borderColor: "#bae755",
              backgroundColor: "#e755ba",
              pointBackgroundColor: "#55bae7",
              pointBorderColor: "#55bae7",
              pointHoverBackgroundColor: "#55bae7",
              pointHoverBorderColor: "#55bae7",
            }
          ];
        }
        if (this.swom == "3") {
          for (let i = 14; i < 21; i++) {
            this.SumIO = this.PIAll[i].Item1
            sum += this.SumIO!
          }
          this.IOut = sum
          console.log("wip("+this.Isale+"+"+this.IIn+"+"+this.IDiesel+"+"+this.IGasohol95+"+"+this.IOut+")")
          this.lineChartData5 = [
            { data: [this.Isale,this.IIn,this.IDiesel,this.IGasohol95,this.IOut], 
              label: 'Station',
              fill : false,
              borderColor: "#bae755",
              backgroundColor: "#e755ba",
              pointBackgroundColor: "#55bae7",
              pointBorderColor: "#55bae7",
              pointHoverBackgroundColor: "#55bae7",
              pointHoverBorderColor: "#55bae7",
            }
          ];
        }
        if (this.swom == "4") {
          for (let i = 21; i < 28; i++) {
            this.SumIO = this.PIAll[i].Item1
            sum += this.SumIO!
          }
          this.IOut = sum
          console.log("wip("+this.Isale+"+"+this.IIn+"+"+this.IDiesel+"+"+this.IGasohol95+"+"+this.IOut+")")
          this.lineChartData5 = [
            { data: [this.Isale,this.IIn,this.IDiesel,this.IGasohol95,this.IOut], 
              label: 'Station',
              fill : false,
              borderColor: "#bae755",
              backgroundColor: "#e755ba",
              pointBackgroundColor: "#55bae7",
              pointBorderColor: "#55bae7",
              pointHoverBackgroundColor: "#55bae7",
              pointHoverBorderColor: "#55bae7",
            }
          ];
        }
        if (this.swom == "5") {
          for (let i = 0; i < this.countPI; i++) {
            this.SumIO = this.PIAll[i].Item1
            sum += this.SumIO!
          }
          this.IOut = sum
          console.log("wip("+this.Isale+"+"+this.IIn+"+"+this.IDiesel+"+"+this.IGasohol95+"+"+this.IOut+")")
          this.lineChartData5 = [
            { data: [this.Isale,this.IIn,this.IDiesel,this.IGasohol95,this.IOut], 
              label: 'Station',
              fill : false,
              borderColor: "#bae755",
              backgroundColor: "#e755ba",
              pointBackgroundColor: "#55bae7",
              pointBorderColor: "#55bae7",
              pointHoverBackgroundColor: "#55bae7",
              pointHoverBorderColor: "#55bae7",
            }
          ];
        }
      },
      error => {
        alert("Can't not get pi value by tagname24");
      });
  }


  barChartOptions: ChartOptions = {
    maintainAspectRatio: false, 
  };
  barChartLabels: Label[] = ['00.00', '01.00', '02.00', '03.00', '04.00', '05.00','06.00','07.00','08.00','09.00','10.00','11.00','12.00','13.00','14.00','15.00','16.00','17.00','18.00','19.00','20.00','21.00','22.00','23.00'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  lineChartLabels2: Label[] = ['SaleOffice', 'Inbound', 'Diesle', 'Gasohol95', 'Outbound'];
  lineChartType2: ChartType = 'line';
  lineChartLegend2 = true;
  lineChartPlugins2 = [];

  barChartLabels3: Label[] = ['SaleOffice', 'Inbound', 'Diesle', 'Gasohol95', 'Outbound'];
  barChartType3: ChartType = 'bar';
  barChartLegend3 = true;
  barChartPlugins3 = [];

  barChartLabels4: Label[] = ['SaleOffice', 'Inbound', 'Diesle', 'Gasohol95', 'Outbound'];
  barChartType4: ChartType = 'bar';
  barChartLegend4 = true;
  barChartPlugins4 = [];

  lineChartLabels5: Label[] = ['SaleOffice', 'Inbound', 'Diesle', 'Gasohol95', 'Outbound'];
  lineChartType5: ChartType = 'line';
  lineChartLegend5 = true;
  lineChartPlugins5 = [];

  barChartLabels6: Label[] = ['SaleOffice', 'Inbound', 'Diesle', 'Gasohol95', 'Outbound'];
  barChartType6: ChartType = 'bar';
  barChartLegend6 = true;
  barChartPlugins6 = [];

  
  
  barChartData: ChartDataSets[] = [
    { data: [45, 37, 60, 70, 46, 33,45, 37, 60, 70, 46, 33, 37, 60, 70, 46, 35, 37, 60, 70, 46, 33,35,40], 
      label: 'Time',
      backgroundColor: "rgba(255, 206, 0, 0.91)",
    
    }
  ];
  
  // lineChartData2: ChartDataSets[] = [
  //   { data: [], 
  //     label: 'Station',
  //     fill : false
  //   }
  // ];

  // barChartData3: ChartDataSets[] = [
  //   { data: [666, 37, 60, 70, 46, 33,45, 37, 60, 70, 46, 33, 37, 60, 70, 46, 35, 37, 60, 70, 46, 33,35,40], 
  //     label: 'Time',
  //     backgroundColor: "rgb(204, 82, 0)",
    
  //   }
  // ];

  // barChartData4: ChartDataSets[] = [
  //   { data: [1, 2, 3, 70, 46, 33,45, 37, 60, 70, 46, 33, 37, 60, 70, 46, 35, 37, 60, 70, 46, 33,35,40], 
  //     label: 'Time',
  //     backgroundColor: "rgb(153, 102, 255)",
    
  //   }
  // ];

  // lineChartData5: ChartDataSets[] = [
  //   { data: [66, 37, 60, 70, 46, 33,45, 37, 60, 70, 46, 33, 37, 60, 70, 46, 35, 37, 60, 70, 46, 33,35,40], 
  //     label: 'Station',
  //     fill : false,
  //     borderColor: "#bae755",
  //     backgroundColor: "#e755ba",
  //     pointBackgroundColor: "#55bae7",
  //     pointBorderColor: "#55bae7",
  //     pointHoverBackgroundColor: "#55bae7",
  //     pointHoverBorderColor: "#55bae7",
  //   }
  // ];

  barChartData6: ChartDataSets[] = [
    { data: [666, 37, 60, 70, 46, 33,45, 37, 60, 70, 46, 33, 37, 60, 70, 46, 35, 37, 60, 70, 46, 33,35,40], 
      label: 'Time',
      backgroundColor: "rgb(204, 0, 0)",
    
    }
  ];

  barChartData7: ChartDataSets[] = [
    { data: [666, 37, 60, 70, 46, 33,45, 37, 60, 70, 46, 33, 37, 60, 70, 46, 35, 37, 60, 70, 46, 33,35,40], 
      label: 'Time',
      backgroundColor: "rgb(204, 0, 0)",
    
    }
  ];

}
