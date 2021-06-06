// ****import data for dashboard****
import {
  Time
} from '@angular/common';
import {
  Component,
  OnInit
} from '@angular/core';
import {
  Staff
} from 'src/app/Model/staff.model';
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
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  sday: string | undefined;
  PIAll: PIData1[] | undefined;
  countPI: number | undefined;
  Item1: number | undefined;
  Item2: Time | undefined;
  // 4 dashboard on top
  DieselValue: number | undefined;
  Gasohol95Value: number | undefined;
  NumberTruckIn : number | undefined;
  AvgCycleTime : number | undefined;
  // chart U อยากแก้ให้มันเรียงตาม resource
  Usale : number | undefined;
  UIn : number | undefined;
  UDiesel : number | undefined;
  UGasohol95 : number | undefined;
  UOut : number | undefined;
  // chart Q
  Nsale : number | undefined;
  NIn : number | undefined;
  NDiesel : number | undefined;
  NGasohol95 : number | undefined;
  NOut : number | undefined;
  // chart W
  Wsale : number | undefined;
  WIn : number | undefined;
  WDiesel : number | undefined;
  WGasohol95 : number | undefined;
  WOut : number | undefined;
  // chart WIP but I
  Isale : number | undefined;
  IIn : number | undefined;
  IDiesel : number | undefined;
  IGasohol95 : number | undefined;
  IOut : number | undefined;
  // chart B
  Bsale : number | undefined;
  BIn : number | undefined;
  BDiesel : number | undefined;
  BGasohol95 : number | undefined;
  BOut : number | undefined;
  // chart F
  Fsale : number | undefined;
  FIn : number | undefined;
  FDiesel : number | undefined;
  FGasohol95 : number | undefined;
  FOut : number | undefined;
  // chart D
  D0 : number | undefined;
  D1 : number | undefined;
  D2 : number | undefined;
  D3 : number | undefined;
  D4 : number | undefined;
  D5 : number | undefined;
  D6 : number | undefined;
  D7 : number | undefined;
  D8 : number | undefined;
  D9 : number | undefined;
  D10 : number | undefined;
  D11 : number | undefined;
  D12 : number | undefined;
  D13 : number | undefined;
  D14 : number | undefined;
  D15 : number | undefined;
  D16 : number | undefined;
  D17 : number | undefined;
  D18 : number | undefined;
  D19 : number | undefined;
  D20 : number | undefined;
  D21 : number | undefined;
  D22 : number | undefined;
  D23 : number | undefined;

  barChartData:any
  lineChartData2:any
  barChartData3:any
  barChartData4:any
  lineChartData5:any
  barChartData6:any
  barChartData7:any
  constructor(private networkService: NetworkService) {
    
  }

  ngOnInit(): void {
    
  }
  clickme(sday:string) 
    {
      this.sday = sday
      console.log(this.sday);
      // 4 dashboard
      this.feedPIValueByTagname("A004-S3-0100-VALUE1");
      this.feedPIValueByTagname2("A004-S3-0100-VALUE2");
      setTimeout(() => {
        this.feedPIValueByTagname3("A004-S3-0000-VALUE7")
      }, 1000);
      setTimeout(() => {
        this.feedPIValueByTagname4("A004-S3-0100-VALUE88")
      }, 1000);
      // chart U
      setTimeout(() => {
        this.feedPIValueByTagname5("A004-S3-0100-VALUE60")
      }, 2000);
      setTimeout(() => {
        this.feedPIValueByTagname6("A004-S3-0100-VALUE61")
      }, 2000);
      setTimeout(() => {
        this.feedPIValueByTagname7("A004-S3-0400-VALUE62")
      }, 3000);
      setTimeout(() => {
        this.feedPIValueByTagname8("A004-S3-0000-VALUE63")
      }, 3000);
      setTimeout(() => {
        this.feedPIValueByTagname9("A004-S3-0300-VALUE64")
      }, 4000);
      // chart Q
      setTimeout(() => {
        this.feedPIValueByTagname10("A004-S3-0000-VALUE104")
      }, 4000);
      setTimeout(() => {
        this.feedPIValueByTagname11("A004-S3-0300-VALUE105")
      }, 5000);
      setTimeout(() => {
        this.feedPIValueByTagname12("A004-S3-0100-VALUE106")
      }, 5000);
      setTimeout(() => {
        this.feedPIValueByTagname13("A004-S3-0100-VALUE107")
      }, 6000);
      setTimeout(() => {
        this.feedPIValueByTagname14("A004-S3-0400-VALUE108")
      }, 6000);
      // chart W
      setTimeout(() => {
        this.feedPIValueByTagname15("A004-S3-0000-VALUE114")
      }, 7000);
      setTimeout(() => {
        this.feedPIValueByTagname16("A004-S3-0300-VALUE115")
      }, 7000);
      setTimeout(() => {
        this.feedPIValueByTagname17("A004-S3-0100-VALUE116")
      }, 8000);
      setTimeout(() => {
        this.feedPIValueByTagname18("A004-S3-0100-VALUE117")
      }, 8000);
      setTimeout(() => {
        this.feedPIValueByTagname19("A004-S3-0400-VALUE118")
      }, 9000);
      // chart WIP
      setTimeout(() => {
        this.feedPIValueByTagname20("A004-S3-0000-VALUE109")
      }, 9000);
      setTimeout(() => {
        this.feedPIValueByTagname21("A004-S3-0300-VALUE110")
      }, 10000);
      setTimeout(() => {
        this.feedPIValueByTagname22("A004-S3-0100-VALUE111")
      }, 10000);
      setTimeout(() => {
        this.feedPIValueByTagname23("A004-S3-0100-VALUE112")
      }, 11000);
      setTimeout(() => {
        this.feedPIValueByTagname24("A004-S3-0400-VALUE113")
      }, 11000);
      // chart B
      setTimeout(() => {
        this.feedPIValueByTagname25("A004-S3-0000-VALUE99")
      }, 12000);
      setTimeout(() => {
        this.feedPIValueByTagname26("A004-S3-0300-VALUE100")
      }, 12000);
      setTimeout(() => {
        this.feedPIValueByTagname27("A004-S3-0100-VALUE101")
      }, 13000);
      setTimeout(() => {
        this.feedPIValueByTagname28("A004-S3-0100-VALUE102")
      }, 13000);
      setTimeout(() => {
        this.feedPIValueByTagname29("A004-S3-0400-VALUE103")
      }, 14000);
      // chart F
      setTimeout(() => {
        this.feedPIValueByTagname30("A004-S3-0300-VALUE94")
      }, 14000);
      setTimeout(() => {
        this.feedPIValueByTagname31("A004-S3-0100-VALUE95")
      }, 15000);
      setTimeout(() => {
        this.feedPIValueByTagname32("A004-S3-0100-VALUE96")
      }, 15000);
      setTimeout(() => {
        this.feedPIValueByTagname33("A004-S3-0100-VALUE97")
      }, 16000);
      setTimeout(() => {
        this.feedPIValueByTagname34("A004-S3-0400-VALUE98")
      }, 16000);
      // chart D
      setTimeout(() => {
          this.feedPIValueByTagname35("A004-S3-0700-VALUE91")
        }, 17000);
      
    }
  
  // 4 dashboard
  feedPIValueByTagname(tagname :string)
  {
    this.networkService.getPIValueByTagname(tagname).subscribe(
      data => {
        console.log(JSON.stringify(data))
        this.PIAll = data.result;
        //console.log(this.PIAll)
        this.countPI = this.PIAll.length;
        console.log(this.sday+"sec1")
        // console.log(this.countPI)
        if(this.sday == "1")
        {
          this.DieselValue = this.PIAll[0].Item1
        }
        if(this.sday == "2")
        {
          this.DieselValue = this.PIAll[1].Item1
        }
        if(this.sday == "3")
        {
          this.DieselValue = this.PIAll[2].Item1
        }
        if(this.sday == "4")
        {
          this.DieselValue = this.PIAll[3].Item1
        }
        if(this.sday == "5")
        {
          this.DieselValue = this.PIAll[4].Item1
        }
        if(this.sday == "6")
        {
          this.DieselValue = this.PIAll[5].Item1
        }
        if(this.sday == "7")
        {
          this.DieselValue = this.PIAll[6].Item1
        }
        if(this.sday == "8")
        {
          this.DieselValue = this.PIAll[7].Item1
        }
        if(this.sday == "9")
        {
          this.DieselValue = this.PIAll[8].Item1
        }
        if(this.sday == "10")
        {
          this.DieselValue = this.PIAll[9].Item1
        }
        if(this.sday == "11")
        {
          this.DieselValue = this.PIAll[10].Item1
        }
        if(this.sday == "12")
        {
          this.DieselValue = this.PIAll[11].Item1
        }
        if(this.sday == "13")
        {
          this.DieselValue = this.PIAll[12].Item1
        }
        if(this.sday == "14")
        {
          this.DieselValue = this.PIAll[13].Item1
        }
        if(this.sday == "15")
        {
          this.DieselValue = this.PIAll[14].Item1
        }
        if(this.sday == "16")
        {
          this.DieselValue = this.PIAll[15].Item1
        }
        if(this.sday == "17")
        {
          this.DieselValue = this.PIAll[16].Item1
        }
        if(this.sday == "18")
        {
          this.DieselValue = this.PIAll[17].Item1
        }
        if(this.sday == "19")
        {
          this.DieselValue = this.PIAll[18].Item1
        }
        if(this.sday == "20")
        {
          this.DieselValue = this.PIAll[19].Item1
        }
        if(this.sday == "21")
        {
          this.DieselValue = this.PIAll[20].Item1
        }
        if(this.sday == "22")
        {
          this.DieselValue = this.PIAll[21].Item1
        }
        if(this.sday == "23")
        {
          this.DieselValue = this.PIAll[22].Item1
        }
        if(this.sday == "24")
        {
          this.DieselValue = this.PIAll[23].Item1
        }
        if(this.sday == "25")
        {
          this.DieselValue = this.PIAll[24].Item1
        }
        if(this.sday == "26")
        {
          this.DieselValue = this.PIAll[25].Item1
        }
        if(this.sday == "27")
        {
          this.DieselValue = this.PIAll[26].Item1
        }
        if(this.sday == "28")
        {
          this.DieselValue = this.PIAll[27].Item1
        }
        if(this.sday == "29")
        {
          this.DieselValue = this.PIAll[28].Item1
        }
        if(this.sday == "30")
        {
          this.DieselValue = this.PIAll[29].Item1
        }
        if(this.sday == "31")
        {
          this.DieselValue = this.PIAll[30].Item1
        }
      },
      error => {
        alert("Can't not get pi value by tagname");
      });
  }
  feedPIValueByTagname2(tagname :string)
  {
    this.networkService.getPIValueByTagname(tagname).subscribe(
      data => {
        console.log(JSON.stringify(data))
        this.PIAll = data.result;
        //console.log(this.PIAll)
        this.countPI = this.PIAll.length;
        console.log(this.sday+"sec2")
        // console.log(this.countPI)
        if(this.sday == "1")
        {
          this.Gasohol95Value = this.PIAll[0].Item1
        }
        if(this.sday == "2")
        {
          this.Gasohol95Value = this.PIAll[1].Item1
        }
        if(this.sday == "3")
        {
          this.Gasohol95Value = this.PIAll[2].Item1
        }
        if(this.sday == "4")
        {
          this.Gasohol95Value = this.PIAll[3].Item1
        }
        if(this.sday == "5")
        {
          this.Gasohol95Value = this.PIAll[4].Item1
        }
        if(this.sday == "6")
        {
          this.Gasohol95Value = this.PIAll[5].Item1
        }
        if(this.sday == "7")
        {
          this.Gasohol95Value = this.PIAll[6].Item1
        }
        if(this.sday == "8")
        {
          this.Gasohol95Value = this.PIAll[7].Item1
        }
        if(this.sday == "9")
        {
          this.Gasohol95Value = this.PIAll[8].Item1
        }
        if(this.sday == "10")
        {
          this.Gasohol95Value = this.PIAll[9].Item1
        }
        if(this.sday == "11")
        {
          this.Gasohol95Value = this.PIAll[10].Item1
        }
        if(this.sday == "12")
        {
          this.Gasohol95Value = this.PIAll[11].Item1
        }
        if(this.sday == "13")
        {
          this.Gasohol95Value = this.PIAll[12].Item1
        }
        if(this.sday == "14")
        {
          this.Gasohol95Value = this.PIAll[13].Item1
        }
        if(this.sday == "15")
        {
          this.Gasohol95Value = this.PIAll[14].Item1
        }
        if(this.sday == "16")
        {
          this.Gasohol95Value = this.PIAll[15].Item1
        }
        if(this.sday == "17")
        {
          this.Gasohol95Value = this.PIAll[16].Item1
        }
        if(this.sday == "18")
        {
          this.Gasohol95Value = this.PIAll[17].Item1
        }
        if(this.sday == "19")
        {
          this.Gasohol95Value = this.PIAll[18].Item1
        }
        if(this.sday == "20")
        {
          this.Gasohol95Value = this.PIAll[19].Item1
        }
        if(this.sday == "21")
        {
          this.Gasohol95Value = this.PIAll[20].Item1
        }
        if(this.sday == "22")
        {
          this.Gasohol95Value = this.PIAll[21].Item1
        }
        if(this.sday == "23")
        {
          this.Gasohol95Value = this.PIAll[22].Item1
        }
        if(this.sday == "24")
        {
          this.Gasohol95Value = this.PIAll[23].Item1
        }
        if(this.sday == "25")
        {
          this.Gasohol95Value = this.PIAll[24].Item1
        }
        if(this.sday == "26")
        {
          this.Gasohol95Value = this.PIAll[25].Item1
        }
        if(this.sday == "27")
        {
          this.Gasohol95Value = this.PIAll[26].Item1
        }
        if(this.sday == "28")
        {
          this.Gasohol95Value = this.PIAll[27].Item1
        }
        if(this.sday == "29")
        {
          this.Gasohol95Value = this.PIAll[28].Item1
        }
        if(this.sday == "30")
        {
          this.Gasohol95Value = this.PIAll[29].Item1
        }
        if(this.sday == "31")
        {
          this.Gasohol95Value = this.PIAll[30].Item1
        }
      },
      error => {
        alert("Can't not get pi value by tagname");
      });
  }
  feedPIValueByTagname3(tagname :string)
  {
    this.networkService.getPIValueByTagname(tagname).subscribe(
      data => {
        console.log(JSON.stringify(data))
        this.PIAll = data.result;
        //console.log(this.PIAll)
        this.countPI = this.PIAll.length;
        console.log(this.sday+"sec3")
        // console.log(this.countPI)
        if(this.sday == "1")
        {
          this.NumberTruckIn = this.PIAll[0].Item1
        }
        if(this.sday == "2")
        {
          this.NumberTruckIn = this.PIAll[1].Item1
        }
        if(this.sday == "3")
        {
          this.NumberTruckIn = this.PIAll[2].Item1
        }
        if(this.sday == "4")
        {
          this.NumberTruckIn = this.PIAll[3].Item1
        }
        if(this.sday == "5")
        {
          this.NumberTruckIn = this.PIAll[4].Item1
        }
        if(this.sday == "6")
        {
          this.NumberTruckIn = this.PIAll[5].Item1
        }
        if(this.sday == "7")
        {
          this.NumberTruckIn = this.PIAll[6].Item1
        }
        if(this.sday == "8")
        {
          this.NumberTruckIn = this.PIAll[7].Item1
        }
        if(this.sday == "9")
        {
          this.NumberTruckIn = this.PIAll[8].Item1
        }
        if(this.sday == "10")
        {
          this.NumberTruckIn = this.PIAll[9].Item1
        }
        if(this.sday == "11")
        {
          this.NumberTruckIn = this.PIAll[10].Item1
        }
        if(this.sday == "12")
        {
          this.NumberTruckIn = this.PIAll[11].Item1
        }
        if(this.sday == "13")
        {
          this.NumberTruckIn = this.PIAll[12].Item1
        }
        if(this.sday == "14")
        {
          this.NumberTruckIn = this.PIAll[13].Item1
        }
        if(this.sday == "15")
        {
          this.NumberTruckIn = this.PIAll[14].Item1
        }
        if(this.sday == "16")
        {
          this.NumberTruckIn = this.PIAll[15].Item1
        }
        if(this.sday == "17")
        {
          this.NumberTruckIn = this.PIAll[16].Item1
        }
        if(this.sday == "18")
        {
          this.NumberTruckIn = this.PIAll[17].Item1
        }
        if(this.sday == "19")
        {
          this.NumberTruckIn = this.PIAll[18].Item1
        }
        if(this.sday == "20")
        {
          this.NumberTruckIn = this.PIAll[19].Item1
        }
        if(this.sday == "21")
        {
          this.NumberTruckIn = this.PIAll[20].Item1
        }
        if(this.sday == "22")
        {
          this.NumberTruckIn = this.PIAll[21].Item1
        }
        if(this.sday == "23")
        {
          this.NumberTruckIn = this.PIAll[22].Item1
        }
        if(this.sday == "24")
        {
          this.NumberTruckIn = this.PIAll[23].Item1
        }
        if(this.sday == "25")
        {
          this.NumberTruckIn = this.PIAll[24].Item1
        }
        if(this.sday == "26")
        {
          this.NumberTruckIn = this.PIAll[25].Item1
        }
        if(this.sday == "27")
        {
          this.NumberTruckIn = this.PIAll[26].Item1
        }
        if(this.sday == "28")
        {
          this.NumberTruckIn = this.PIAll[27].Item1
        }
        if(this.sday == "29")
        {
          this.NumberTruckIn = this.PIAll[28].Item1
        }
        if(this.sday == "30")
        {
          this.NumberTruckIn = this.PIAll[29].Item1
        }
        if(this.sday == "31")
        {
          this.NumberTruckIn = this.PIAll[30].Item1
        }
      },
      error => {
        alert("Can't not get pi value by tagname2");
      });
  }
  feedPIValueByTagname4(tagname :string)
  {
    this.networkService.getPIValueByTagname(tagname).subscribe(
      data => {
        console.log(JSON.stringify(data))
        this.PIAll = data.result;
        //console.log(this.PIAll)
        this.countPI = this.PIAll.length;
        console.log(this.sday+"sec3")
        // console.log(this.countPI)
        if(this.sday == "1")
        {
          this.AvgCycleTime = this.PIAll[0].Item1
        }
        if(this.sday == "2")
        {
          this.AvgCycleTime = this.PIAll[1].Item1
        }
        if(this.sday == "3")
        {
          this.AvgCycleTime = this.PIAll[2].Item1
        }
        if(this.sday == "4")
        {
          this.AvgCycleTime = this.PIAll[3].Item1
        }
        if(this.sday == "5")
        {
          this.AvgCycleTime = this.PIAll[4].Item1
        }
        if(this.sday == "6")
        {
          this.AvgCycleTime = this.PIAll[5].Item1
        }
        if(this.sday == "7")
        {
          this.AvgCycleTime = this.PIAll[6].Item1
        }
        if(this.sday == "8")
        {
          this.AvgCycleTime = this.PIAll[7].Item1
        }
        if(this.sday == "9")
        {
          this.AvgCycleTime = this.PIAll[8].Item1
        }
        if(this.sday == "10")
        {
          this.AvgCycleTime = this.PIAll[9].Item1
        }
        if(this.sday == "11")
        {
          this.AvgCycleTime = this.PIAll[10].Item1
        }
        if(this.sday == "12")
        {
          this.AvgCycleTime = this.PIAll[11].Item1
        }
        if(this.sday == "13")
        {
          this.AvgCycleTime = this.PIAll[12].Item1
        }
        if(this.sday == "14")
        {
          this.AvgCycleTime = this.PIAll[13].Item1
        }
        if(this.sday == "15")
        {
          this.AvgCycleTime = this.PIAll[14].Item1
        }
        if(this.sday == "16")
        {
          this.AvgCycleTime = this.PIAll[15].Item1
        }
        if(this.sday == "17")
        {
          this.AvgCycleTime = this.PIAll[16].Item1
        }
        if(this.sday == "18")
        {
          this.AvgCycleTime = this.PIAll[17].Item1
        }
        if(this.sday == "19")
        {
          this.AvgCycleTime = this.PIAll[18].Item1
        }
        if(this.sday == "20")
        {
          this.AvgCycleTime = this.PIAll[19].Item1
        }
        if(this.sday == "21")
        {
          this.AvgCycleTime = this.PIAll[20].Item1
        }
        if(this.sday == "22")
        {
          this.AvgCycleTime = this.PIAll[21].Item1
        }
        if(this.sday == "23")
        {
          this.AvgCycleTime = this.PIAll[22].Item1
        }
        if(this.sday == "24")
        {
          this.AvgCycleTime = this.PIAll[23].Item1
        }
        if(this.sday == "25")
        {
          this.AvgCycleTime = this.PIAll[24].Item1
        }
        if(this.sday == "26")
        {
          this.AvgCycleTime = this.PIAll[25].Item1
        }
        if(this.sday == "27")
        {
          this.AvgCycleTime = this.PIAll[26].Item1
        }
        if(this.sday == "28")
        {
          this.AvgCycleTime = this.PIAll[27].Item1
        }
        if(this.sday == "29")
        {
          this.AvgCycleTime = this.PIAll[28].Item1
        }
        if(this.sday == "30")
        {
          this.AvgCycleTime = this.PIAll[29].Item1
        }
        if(this.sday == "31")
        {
          this.AvgCycleTime = this.PIAll[30].Item1
        }
      },
      error => {
        alert("Can't not get pi value by tagname4");
      });
  }
  // chart U
  feedPIValueByTagname5(tagname :string)
  {
    this.networkService.getPIValueByTagname(tagname).subscribe(
      data => {
        console.log(JSON.stringify(data))
        this.PIAll = data.result;
        //console.log(this.PIAll)
        this.countPI = this.PIAll.length;
        console.log(this.sday+"sec3")
        // console.log(this.countPI)
        if(this.sday == "1")
        {
          this.UDiesel = this.PIAll[0].Item1
        }
        if(this.sday == "2")
        {
          this.UDiesel = this.PIAll[1].Item1
        }
        if(this.sday == "3")
        {
          this.UDiesel = this.PIAll[2].Item1
        }
        if(this.sday == "4")
        {
          this.UDiesel = this.PIAll[3].Item1
        }
        if(this.sday == "5")
        {
          this.UDiesel = this.PIAll[4].Item1
        }
        if(this.sday == "6")
        {
          this.UDiesel = this.PIAll[5].Item1
        }
        if(this.sday == "7")
        {
          this.UDiesel = this.PIAll[6].Item1
        }
        if(this.sday == "8")
        {
          this.UDiesel = this.PIAll[7].Item1
        }
        if(this.sday == "9")
        {
          this.UDiesel = this.PIAll[8].Item1
        }
        if(this.sday == "10")
        {
          this.UDiesel = this.PIAll[9].Item1
        }
        if(this.sday == "11")
        {
          this.UDiesel = this.PIAll[10].Item1
        }
        if(this.sday == "12")
        {
          this.UDiesel = this.PIAll[11].Item1
        }
        if(this.sday == "13")
        {
          this.UDiesel = this.PIAll[12].Item1
        }
        if(this.sday == "14")
        {
          this.UDiesel = this.PIAll[13].Item1
        }
        if(this.sday == "15")
        {
          this.UDiesel = this.PIAll[14].Item1
        }
        if(this.sday == "16")
        {
          this.UDiesel = this.PIAll[15].Item1
        }
        if(this.sday == "17")
        {
          this.UDiesel = this.PIAll[16].Item1
        }
        if(this.sday == "18")
        {
          this.UDiesel = this.PIAll[17].Item1
        }
        if(this.sday == "19")
        {
          this.UDiesel = this.PIAll[18].Item1
        }
        if(this.sday == "20")
        {
          this.UDiesel = this.PIAll[19].Item1
        }
        if(this.sday == "21")
        {
          this.UDiesel = this.PIAll[20].Item1
        }
        if(this.sday == "22")
        {
          this.UDiesel = this.PIAll[21].Item1
        }
        if(this.sday == "23")
        {
          this.UDiesel = this.PIAll[22].Item1
        }
        if(this.sday == "24")
        {
          this.UDiesel = this.PIAll[23].Item1
        }
        if(this.sday == "25")
        {
          this.UDiesel = this.PIAll[24].Item1
        }
        if(this.sday == "26")
        {
          this.UDiesel = this.PIAll[25].Item1
        }
        if(this.sday == "27")
        {
          this.UDiesel = this.PIAll[26].Item1
        }
        if(this.sday == "28")
        {
          this.UDiesel = this.PIAll[27].Item1
        }
        if(this.sday == "29")
        {
          this.UDiesel = this.PIAll[28].Item1
        }
        if(this.sday == "30")
        {
          this.UDiesel = this.PIAll[29].Item1
        }
        if(this.sday == "31")
        {
          this.UDiesel = this.PIAll[30].Item1
        }
      },
      error => {
        alert("Can't not get pi value by tagname5");
      });
  }
  feedPIValueByTagname6(tagname :string)
  {
    this.networkService.getPIValueByTagname(tagname).subscribe(
      data => {
        console.log(JSON.stringify(data))
        this.PIAll = data.result;
        //console.log(this.PIAll)
        this.countPI = this.PIAll.length;
        console.log(this.sday+"sec3")
        // console.log(this.countPI)
        if(this.sday == "1")
        {
          this.UGasohol95 = this.PIAll[0].Item1
        }
        if(this.sday == "2")
        {
          this.UGasohol95 = this.PIAll[1].Item1
        }
        if(this.sday == "3")
        {
          this.UGasohol95 = this.PIAll[2].Item1
        }
        if(this.sday == "4")
        {
          this.UGasohol95 = this.PIAll[3].Item1
        }
        if(this.sday == "5")
        {
          this.UGasohol95 = this.PIAll[4].Item1
        }
        if(this.sday == "6")
        {
          this.UGasohol95 = this.PIAll[5].Item1
        }
        if(this.sday == "7")
        {
          this.UGasohol95 = this.PIAll[6].Item1
        }
        if(this.sday == "8")
        {
          this.UGasohol95 = this.PIAll[7].Item1
        }
        if(this.sday == "9")
        {
          this.UGasohol95 = this.PIAll[8].Item1
        }
        if(this.sday == "10")
        {
          this.UGasohol95 = this.PIAll[9].Item1
        }
        if(this.sday == "11")
        {
          this.UGasohol95 = this.PIAll[10].Item1
        }
        if(this.sday == "12")
        {
          this.UGasohol95 = this.PIAll[11].Item1
        }
        if(this.sday == "13")
        {
          this.UGasohol95 = this.PIAll[12].Item1
        }
        if(this.sday == "14")
        {
          this.UGasohol95 = this.PIAll[13].Item1
        }
        if(this.sday == "15")
        {
          this.UGasohol95 = this.PIAll[14].Item1
        }
        if(this.sday == "16")
        {
          this.UGasohol95 = this.PIAll[15].Item1
        }
        if(this.sday == "17")
        {
          this.UGasohol95 = this.PIAll[16].Item1
        }
        if(this.sday == "18")
        {
          this.UGasohol95 = this.PIAll[17].Item1
        }
        if(this.sday == "19")
        {
          this.UGasohol95 = this.PIAll[18].Item1
        }
        if(this.sday == "20")
        {
          this.UGasohol95 = this.PIAll[19].Item1
        }
        if(this.sday == "21")
        {
          this.UGasohol95 = this.PIAll[20].Item1
        }
        if(this.sday == "22")
        {
          this.UGasohol95 = this.PIAll[21].Item1
        }
        if(this.sday == "23")
        {
          this.UGasohol95 = this.PIAll[22].Item1
        }
        if(this.sday == "24")
        {
          this.UGasohol95 = this.PIAll[23].Item1
        }
        if(this.sday == "25")
        {
          this.UGasohol95 = this.PIAll[24].Item1
        }
        if(this.sday == "26")
        {
          this.UGasohol95 = this.PIAll[25].Item1
        }
        if(this.sday == "27")
        {
          this.UGasohol95 = this.PIAll[26].Item1
        }
        if(this.sday == "28")
        {
          this.UGasohol95 = this.PIAll[27].Item1
        }
        if(this.sday == "29")
        {
          this.UGasohol95 = this.PIAll[28].Item1
        }
        if(this.sday == "30")
        {
          this.UGasohol95 = this.PIAll[29].Item1
        }
        if(this.sday == "31")
        {
          this.UGasohol95 = this.PIAll[30].Item1
        }
      },
      error => {
        alert("Can't not get pi value by tagname6");
      });
  }
  feedPIValueByTagname7(tagname :string)
  {
    this.networkService.getPIValueByTagname(tagname).subscribe(
      data => {
        console.log(JSON.stringify(data))
        this.PIAll = data.result;
        //console.log(this.PIAll)
        this.countPI = this.PIAll.length;
        console.log(this.sday+"sec3")
        // console.log(this.countPI)
        if(this.sday == "1")
        {
          this.UOut = this.PIAll[0].Item1
        }
        if(this.sday == "2")
        {
          this.UOut = this.PIAll[1].Item1
        }
        if(this.sday == "3")
        {
          this.UOut = this.PIAll[2].Item1
        }
        if(this.sday == "4")
        {
          this.UOut = this.PIAll[3].Item1
        }
        if(this.sday == "5")
        {
          this.UOut = this.PIAll[4].Item1
        }
        if(this.sday == "6")
        {
          this.UOut = this.PIAll[5].Item1
        }
        if(this.sday == "7")
        {
          this.UOut = this.PIAll[6].Item1
        }
        if(this.sday == "8")
        {
          this.UOut = this.PIAll[7].Item1
        }
        if(this.sday == "9")
        {
          this.UOut = this.PIAll[8].Item1
        }
        if(this.sday == "10")
        {
          this.UOut = this.PIAll[9].Item1
        }
        if(this.sday == "11")
        {
          this.UOut = this.PIAll[10].Item1
        }
        if(this.sday == "12")
        {
          this.UOut = this.PIAll[11].Item1
        }
        if(this.sday == "13")
        {
          this.UOut = this.PIAll[12].Item1
        }
        if(this.sday == "14")
        {
          this.UOut = this.PIAll[13].Item1
        }
        if(this.sday == "15")
        {
          this.UOut = this.PIAll[14].Item1
        }
        if(this.sday == "16")
        {
          this.UOut = this.PIAll[15].Item1
        }
        if(this.sday == "17")
        {
          this.UOut = this.PIAll[16].Item1
        }
        if(this.sday == "18")
        {
          this.UOut = this.PIAll[17].Item1
        }
        if(this.sday == "19")
        {
          this.UOut = this.PIAll[18].Item1
        }
        if(this.sday == "20")
        {
          this.UOut = this.PIAll[19].Item1
        }
        if(this.sday == "21")
        {
          this.UOut = this.PIAll[20].Item1
        }
        if(this.sday == "22")
        {
          this.UOut = this.PIAll[21].Item1
        }
        if(this.sday == "23")
        {
          this.UOut = this.PIAll[22].Item1
        }
        if(this.sday == "24")
        {
          this.UOut = this.PIAll[23].Item1
        }
        if(this.sday == "25")
        {
          this.UOut = this.PIAll[24].Item1
        }
        if(this.sday == "26")
        {
          this.UOut = this.PIAll[25].Item1
        }
        if(this.sday == "27")
        {
          this.UOut = this.PIAll[26].Item1
        }
        if(this.sday == "28")
        {
          this.UOut = this.PIAll[27].Item1
        }
        if(this.sday == "29")
        {
          this.UOut = this.PIAll[28].Item1
        }
        if(this.sday == "30")
        {
          this.UOut = this.PIAll[29].Item1
        }
        if(this.sday == "31")
        {
          this.UOut = this.PIAll[30].Item1
        }
      },
      error => {
        alert("Can't not get pi value by tagname7");
      });
  }
  feedPIValueByTagname8(tagname :string)
  {
    this.networkService.getPIValueByTagname(tagname).subscribe(
      data => {
        console.log(JSON.stringify(data))
        this.PIAll = data.result;
        //console.log(this.PIAll)
        this.countPI = this.PIAll.length;
        console.log(this.sday+"sec3")
        // console.log(this.countPI)
        if(this.sday == "1")
        {
          this.Usale = this.PIAll[0].Item1
        }
        if(this.sday == "2")
        {
          this.Usale = this.PIAll[1].Item1
        }
        if(this.sday == "3")
        {
          this.Usale = this.PIAll[2].Item1
        }
        if(this.sday == "4")
        {
          this.Usale = this.PIAll[3].Item1
        }
        if(this.sday == "5")
        {
          this.Usale = this.PIAll[4].Item1
        }
        if(this.sday == "6")
        {
          this.Usale = this.PIAll[5].Item1
        }
        if(this.sday == "7")
        {
          this.Usale = this.PIAll[6].Item1
        }
        if(this.sday == "8")
        {
          this.Usale = this.PIAll[7].Item1
        }
        if(this.sday == "9")
        {
          this.Usale = this.PIAll[8].Item1
        }
        if(this.sday == "10")
        {
          this.Usale = this.PIAll[9].Item1
        }
        if(this.sday == "11")
        {
          this.Usale = this.PIAll[10].Item1
        }
        if(this.sday == "12")
        {
          this.Usale = this.PIAll[11].Item1
        }
        if(this.sday == "13")
        {
          this.Usale = this.PIAll[12].Item1
        }
        if(this.sday == "14")
        {
          this.Usale = this.PIAll[13].Item1
        }
        if(this.sday == "15")
        {
          this.Usale = this.PIAll[14].Item1
        }
        if(this.sday == "16")
        {
          this.Usale = this.PIAll[15].Item1
        }
        if(this.sday == "17")
        {
          this.Usale = this.PIAll[16].Item1
        }
        if(this.sday == "18")
        {
          this.Usale = this.PIAll[17].Item1
        }
        if(this.sday == "19")
        {
          this.Usale = this.PIAll[18].Item1
        }
        if(this.sday == "20")
        {
          this.Usale = this.PIAll[19].Item1
        }
        if(this.sday == "21")
        {
          this.Usale = this.PIAll[20].Item1
        }
        if(this.sday == "22")
        {
          this.Usale = this.PIAll[21].Item1
        }
        if(this.sday == "23")
        {
          this.Usale = this.PIAll[22].Item1
        }
        if(this.sday == "24")
        {
          this.Usale = this.PIAll[23].Item1
        }
        if(this.sday == "25")
        {
          this.Usale = this.PIAll[24].Item1
        }
        if(this.sday == "26")
        {
          this.Usale = this.PIAll[25].Item1
        }
        if(this.sday == "27")
        {
          this.Usale = this.PIAll[26].Item1
        }
        if(this.sday == "28")
        {
          this.Usale = this.PIAll[27].Item1
        }
        if(this.sday == "29")
        {
          this.Usale = this.PIAll[28].Item1
        }
        if(this.sday == "30")
        {
          this.Usale = this.PIAll[29].Item1
        }
        if(this.sday == "31")
        {
          this.Usale = this.PIAll[30].Item1
        }
      },
      error => {
        alert("Can't not get pi value by tagname8");
      });
  }
  feedPIValueByTagname9(tagname :string)
  {
    this.networkService.getPIValueByTagname(tagname).subscribe(
      data => {
        console.log(JSON.stringify(data))
        this.PIAll = data.result;
        //console.log(this.PIAll)
        this.countPI = this.PIAll.length;
        console.log(this.sday+"sec3")
        // console.log(this.countPI)
        if(this.sday == "1")
        {
          this.UIn = this.PIAll[0].Item1
          console.log("u("+this.Usale+"+"+this.UIn+"+"+this.UDiesel+"+"+this.UGasohol95+"+"+this.UOut+")")
          this.lineChartData2 = [
            { data: [this.Usale,this.UIn,this.UDiesel,this.UGasohol95,this.UOut], 
              label: 'Station',
              fill : false
            }
          ];
        }
        if(this.sday == "2")
        {
          this.UIn = this.PIAll[1].Item1
          console.log("u("+this.Usale+"+"+this.UIn+"+"+this.UDiesel+"+"+this.UGasohol95+"+"+this.UOut+")")
          this.lineChartData2 = [
            { data: [this.Usale,this.UIn,this.UDiesel,this.UGasohol95,this.UOut], 
              label: 'Station',
              fill : false
            }
          ];
        }
        if(this.sday == "3")
        {
          this.UIn = this.PIAll[2].Item1
          console.log("u("+this.Usale+"+"+this.UIn+"+"+this.UDiesel+"+"+this.UGasohol95+"+"+this.UOut+")")
          this.lineChartData2 = [
            { data: [this.Usale,this.UIn,this.UDiesel,this.UGasohol95,this.UOut], 
              label: 'Station',
              fill : false
            }
          ];
        }
        if(this.sday == "4")
        {
          this.UIn = this.PIAll[3].Item1
          console.log("u("+this.Usale+"+"+this.UIn+"+"+this.UDiesel+"+"+this.UGasohol95+"+"+this.UOut+")")
          this.lineChartData2 = [
            { data: [this.Usale,this.UIn,this.UDiesel,this.UGasohol95,this.UOut], 
              label: 'Station',
              fill : false
            }
          ];
        }
        if(this.sday == "5")
        {
          this.UIn = this.PIAll[4].Item1
          console.log("u("+this.Usale+"+"+this.UIn+"+"+this.UDiesel+"+"+this.UGasohol95+"+"+this.UOut+")")
          this.lineChartData2 = [
            { data: [this.Usale,this.UIn,this.UDiesel,this.UGasohol95,this.UOut], 
              label: 'Station',
              fill : false
            }
          ];
        }
        if(this.sday == "6")
        {
          this.UIn = this.PIAll[5].Item1
          console.log("u("+this.Usale+"+"+this.UIn+"+"+this.UDiesel+"+"+this.UGasohol95+"+"+this.UOut+")")
          this.lineChartData2 = [
            { data: [this.Usale,this.UIn,this.UDiesel,this.UGasohol95,this.UOut], 
              label: 'Station',
              fill : false
            }
          ];
        }
        if(this.sday == "7")
        {
          this.UIn = this.PIAll[6].Item1
          console.log("u("+this.Usale+"+"+this.UIn+"+"+this.UDiesel+"+"+this.UGasohol95+"+"+this.UOut+")")
          this.lineChartData2 = [
            { data: [this.Usale,this.UIn,this.UDiesel,this.UGasohol95,this.UOut], 
              label: 'Station',
              fill : false
            }
          ];
        }
        if(this.sday == "8")
        {
          this.UIn = this.PIAll[7].Item1
          console.log("u("+this.Usale+"+"+this.UIn+"+"+this.UDiesel+"+"+this.UGasohol95+"+"+this.UOut+")")
          this.lineChartData2 = [
            { data: [this.Usale,this.UIn,this.UDiesel,this.UGasohol95,this.UOut], 
              label: 'Station',
              fill : false
            }
          ];
        }
        if(this.sday == "9")
        {
          this.UIn = this.PIAll[8].Item1
          console.log("u("+this.Usale+"+"+this.UIn+"+"+this.UDiesel+"+"+this.UGasohol95+"+"+this.UOut+")")
          this.lineChartData2 = [
            { data: [this.Usale,this.UIn,this.UDiesel,this.UGasohol95,this.UOut], 
              label: 'Station',
              fill : false
            }
          ];
        }
        if(this.sday == "10")
        {
          this.UIn = this.PIAll[9].Item1
          console.log("u("+this.Usale+"+"+this.UIn+"+"+this.UDiesel+"+"+this.UGasohol95+"+"+this.UOut+")")
          this.lineChartData2 = [
            { data: [this.Usale,this.UIn,this.UDiesel,this.UGasohol95,this.UOut], 
              label: 'Station',
              fill : false
            }
          ];
        }
        if(this.sday == "11")
        {
          this.UIn = this.PIAll[10].Item1
          console.log("u("+this.Usale+"+"+this.UIn+"+"+this.UDiesel+"+"+this.UGasohol95+"+"+this.UOut+")")
          this.lineChartData2 = [
            { data: [this.Usale,this.UIn,this.UDiesel,this.UGasohol95,this.UOut], 
              label: 'Station',
              fill : false
            }
          ];
        }
        if(this.sday == "12")
        {
          this.UIn = this.PIAll[11].Item1
          console.log("u("+this.Usale+"+"+this.UIn+"+"+this.UDiesel+"+"+this.UGasohol95+"+"+this.UOut+")")
          this.lineChartData2 = [
            { data: [this.Usale,this.UIn,this.UDiesel,this.UGasohol95,this.UOut], 
              label: 'Station',
              fill : false
            }
          ];
        }
        if(this.sday == "13")
        {
          this.UIn = this.PIAll[12].Item1
          console.log("u("+this.Usale+"+"+this.UIn+"+"+this.UDiesel+"+"+this.UGasohol95+"+"+this.UOut+")")
          this.lineChartData2 = [
            { data: [this.Usale,this.UIn,this.UDiesel,this.UGasohol95,this.UOut], 
              label: 'Station',
              fill : false
            }
          ];
        }
        if(this.sday == "14")
        {
          this.UIn = this.PIAll[13].Item1
          console.log("u("+this.Usale+"+"+this.UIn+"+"+this.UDiesel+"+"+this.UGasohol95+"+"+this.UOut+")")
          this.lineChartData2 = [
            { data: [this.Usale,this.UIn,this.UDiesel,this.UGasohol95,this.UOut], 
              label: 'Station',
              fill : false
            }
          ];
        }
        if(this.sday == "15")
        {
          this.UIn = this.PIAll[14].Item1
          console.log("u("+this.Usale+"+"+this.UIn+"+"+this.UDiesel+"+"+this.UGasohol95+"+"+this.UOut+")")
          this.lineChartData2 = [
            { data: [this.Usale,this.UIn,this.UDiesel,this.UGasohol95,this.UOut], 
              label: 'Station',
              fill : false
            }
          ];
        }
        if(this.sday == "16")
        {
          this.UIn = this.PIAll[15].Item1
          console.log("u("+this.Usale+"+"+this.UIn+"+"+this.UDiesel+"+"+this.UGasohol95+"+"+this.UOut+")")
          this.lineChartData2 = [
            { data: [this.Usale,this.UIn,this.UDiesel,this.UGasohol95,this.UOut], 
              label: 'Station',
              fill : false
            }
          ];
        }
        if(this.sday == "17")
        {
          this.UIn = this.PIAll[16].Item1
          console.log("u("+this.Usale+"+"+this.UIn+"+"+this.UDiesel+"+"+this.UGasohol95+"+"+this.UOut+")")
          this.lineChartData2 = [
            { data: [this.Usale,this.UIn,this.UDiesel,this.UGasohol95,this.UOut], 
              label: 'Station',
              fill : false
            }
          ];
        }
        if(this.sday == "18")
        {
          this.UIn = this.PIAll[17].Item1
          console.log("u("+this.Usale+"+"+this.UIn+"+"+this.UDiesel+"+"+this.UGasohol95+"+"+this.UOut+")")
          this.lineChartData2 = [
            { data: [this.Usale,this.UIn,this.UDiesel,this.UGasohol95,this.UOut], 
              label: 'Station',
              fill : false
            }
          ];
        }
        if(this.sday == "19")
        {
          this.UIn = this.PIAll[18].Item1
          console.log("u("+this.Usale+"+"+this.UIn+"+"+this.UDiesel+"+"+this.UGasohol95+"+"+this.UOut+")")
          this.lineChartData2 = [
            { data: [this.Usale,this.UIn,this.UDiesel,this.UGasohol95,this.UOut], 
              label: 'Station',
              fill : false
            }
          ];
        }
        if(this.sday == "20")
        {
          this.UIn = this.PIAll[19].Item1
          console.log("u("+this.Usale+"+"+this.UIn+"+"+this.UDiesel+"+"+this.UGasohol95+"+"+this.UOut+")")
          this.lineChartData2 = [
            { data: [this.Usale,this.UIn,this.UDiesel,this.UGasohol95,this.UOut], 
              label: 'Station',
              fill : false
            }
          ];
        }
        if(this.sday == "21")
        {
          this.UIn = this.PIAll[20].Item1
          console.log("u("+this.Usale+"+"+this.UIn+"+"+this.UDiesel+"+"+this.UGasohol95+"+"+this.UOut+")")
          this.lineChartData2 = [
            { data: [this.Usale,this.UIn,this.UDiesel,this.UGasohol95,this.UOut], 
              label: 'Station',
              fill : false
            }
          ];
        }
        if(this.sday == "22")
        {
          this.UIn = this.PIAll[21].Item1
          console.log("u("+this.Usale+"+"+this.UIn+"+"+this.UDiesel+"+"+this.UGasohol95+"+"+this.UOut+")")
          this.lineChartData2 = [
            { data: [this.Usale,this.UIn,this.UDiesel,this.UGasohol95,this.UOut], 
              label: 'Station',
              fill : false
            }
          ];
        }
        if(this.sday == "23")
        {
          this.UIn = this.PIAll[22].Item1
          console.log("u("+this.Usale+"+"+this.UIn+"+"+this.UDiesel+"+"+this.UGasohol95+"+"+this.UOut+")")
          this.lineChartData2 = [
            { data: [this.Usale,this.UIn,this.UDiesel,this.UGasohol95,this.UOut], 
              label: 'Station',
              fill : false
            }
          ];
        }
        if(this.sday == "24")
        {
          this.UIn = this.PIAll[23].Item1
          console.log("u("+this.Usale+"+"+this.UIn+"+"+this.UDiesel+"+"+this.UGasohol95+"+"+this.UOut+")")
          this.lineChartData2 = [
            { data: [this.Usale,this.UIn,this.UDiesel,this.UGasohol95,this.UOut], 
              label: 'Station',
              fill : false
            }
          ];
        }
        if(this.sday == "25")
        {
          this.UIn = this.PIAll[24].Item1
          console.log("u("+this.Usale+"+"+this.UIn+"+"+this.UDiesel+"+"+this.UGasohol95+"+"+this.UOut+")")
          this.lineChartData2 = [
            { data: [this.Usale,this.UIn,this.UDiesel,this.UGasohol95,this.UOut], 
              label: 'Station',
              fill : false
            }
          ];
        }
        if(this.sday == "26")
        {
          this.UIn = this.PIAll[25].Item1
          console.log("u("+this.Usale+"+"+this.UIn+"+"+this.UDiesel+"+"+this.UGasohol95+"+"+this.UOut+")")
          this.lineChartData2 = [
            { data: [this.Usale,this.UIn,this.UDiesel,this.UGasohol95,this.UOut], 
              label: 'Station',
              fill : false
            }
          ];
        }
        if(this.sday == "27")
        {
          this.UIn = this.PIAll[26].Item1
          console.log("u("+this.Usale+"+"+this.UIn+"+"+this.UDiesel+"+"+this.UGasohol95+"+"+this.UOut+")")
          this.lineChartData2 = [
            { data: [this.Usale,this.UIn,this.UDiesel,this.UGasohol95,this.UOut], 
              label: 'Station',
              fill : false
            }
          ];
        }
        if(this.sday == "28")
        {
          this.UIn = this.PIAll[27].Item1
          console.log("u("+this.Usale+"+"+this.UIn+"+"+this.UDiesel+"+"+this.UGasohol95+"+"+this.UOut+")")
          this.lineChartData2 = [
            { data: [this.Usale,this.UIn,this.UDiesel,this.UGasohol95,this.UOut], 
              label: 'Station',
              fill : false
            }
          ];
        }
        if(this.sday == "29")
        {
          this.UIn = this.PIAll[28].Item1
          console.log("u("+this.Usale+"+"+this.UIn+"+"+this.UDiesel+"+"+this.UGasohol95+"+"+this.UOut+")")
          this.lineChartData2 = [
            { data: [this.Usale,this.UIn,this.UDiesel,this.UGasohol95,this.UOut], 
              label: 'Station',
              fill : false
            }
          ];
        }
        if(this.sday == "30")
        {
          this.UIn = this.PIAll[29].Item1
          console.log("u("+this.Usale+"+"+this.UIn+"+"+this.UDiesel+"+"+this.UGasohol95+"+"+this.UOut+")")
          this.lineChartData2 = [
            { data: [this.Usale,this.UIn,this.UDiesel,this.UGasohol95,this.UOut], 
              label: 'Station',
              fill : false
            }
          ];
        }
        if(this.sday == "31")
        {
          this.UIn = this.PIAll[30].Item1
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
  // chart Q
  feedPIValueByTagname10(tagname :string)
  {
    this.networkService.getPIValueByTagname(tagname).subscribe(
      data => {
        console.log(JSON.stringify(data))
        this.PIAll = data.result;
        //console.log(this.PIAll)
        this.countPI = this.PIAll.length;
        console.log(this.sday+"sec3")
        // console.log(this.countPI)
        if(this.sday == "1")
        {
          this.Nsale = this.PIAll[0].Item1
        }
        if(this.sday == "2")
        {
          this.Nsale = this.PIAll[1].Item1
        }
        if(this.sday == "3")
        {
          this.Nsale = this.PIAll[2].Item1
        }
        if(this.sday == "4")
        {
          this.Nsale = this.PIAll[3].Item1
        }
        if(this.sday == "5")
        {
          this.Nsale = this.PIAll[4].Item1
        }
        if(this.sday == "6")
        {
          this.Nsale = this.PIAll[5].Item1
        }
        if(this.sday == "7")
        {
          this.Nsale = this.PIAll[6].Item1
        }
        if(this.sday == "8")
        {
          this.Nsale = this.PIAll[7].Item1
        }
        if(this.sday == "9")
        {
          this.Nsale = this.PIAll[8].Item1
        }
        if(this.sday == "10")
        {
          this.Nsale = this.PIAll[9].Item1
        }
        if(this.sday == "11")
        {
          this.Nsale = this.PIAll[10].Item1
        }
        if(this.sday == "12")
        {
          this.Nsale = this.PIAll[11].Item1
        }
        if(this.sday == "13")
        {
          this.Nsale = this.PIAll[12].Item1
        }
        if(this.sday == "14")
        {
          this.Nsale = this.PIAll[13].Item1
        }
        if(this.sday == "15")
        {
          this.Nsale = this.PIAll[14].Item1
        }
        if(this.sday == "16")
        {
          this.Nsale = this.PIAll[15].Item1
        }
        if(this.sday == "17")
        {
          this.Nsale = this.PIAll[16].Item1
        }
        if(this.sday == "18")
        {
          this.Nsale = this.PIAll[17].Item1
        }
        if(this.sday == "19")
        {
          this.Nsale = this.PIAll[18].Item1
        }
        if(this.sday == "20")
        {
          this.Nsale = this.PIAll[19].Item1
        }
        if(this.sday == "21")
        {
          this.Nsale = this.PIAll[20].Item1
        }
        if(this.sday == "22")
        {
          this.Nsale = this.PIAll[21].Item1
        }
        if(this.sday == "23")
        {
          this.Nsale = this.PIAll[22].Item1
        }
        if(this.sday == "24")
        {
          this.Nsale = this.PIAll[23].Item1
        }
        if(this.sday == "25")
        {
          this.Nsale = this.PIAll[24].Item1
        }
        if(this.sday == "26")
        {
          this.Nsale = this.PIAll[25].Item1
        }
        if(this.sday == "27")
        {
          this.Nsale = this.PIAll[26].Item1
        }
        if(this.sday == "28")
        {
          this.Nsale = this.PIAll[27].Item1
        }
        if(this.sday == "29")
        {
          this.Nsale = this.PIAll[28].Item1
        }
        if(this.sday == "30")
        {
          this.Nsale = this.PIAll[29].Item1
        }
        if(this.sday == "31")
        {
          this.Nsale = this.PIAll[30].Item1
        }
      },
      error => {
        alert("Can't not get pi value by tagname10");
      });
  }
  feedPIValueByTagname11(tagname :string)
  {
    this.networkService.getPIValueByTagname(tagname).subscribe(
      data => {
        console.log(JSON.stringify(data))
        this.PIAll = data.result;
        //console.log(this.PIAll)
        this.countPI = this.PIAll.length;
        console.log(this.sday+"sec3")
        // console.log(this.countPI)
        if(this.sday == "1")
        {
          this.NIn = this.PIAll[0].Item1
        }
        if(this.sday == "2")
        {
          this.NIn = this.PIAll[1].Item1
        }
        if(this.sday == "3")
        {
          this.NIn = this.PIAll[2].Item1
        }
        if(this.sday == "4")
        {
          this.NIn = this.PIAll[3].Item1
        }
        if(this.sday == "5")
        {
          this.NIn = this.PIAll[4].Item1
        }
        if(this.sday == "6")
        {
          this.NIn = this.PIAll[5].Item1
        }
        if(this.sday == "7")
        {
          this.NIn = this.PIAll[6].Item1
        }
        if(this.sday == "8")
        {
          this.NIn = this.PIAll[7].Item1
        }
        if(this.sday == "9")
        {
          this.NIn = this.PIAll[8].Item1
        }
        if(this.sday == "10")
        {
          this.NIn = this.PIAll[9].Item1
        }
        if(this.sday == "11")
        {
          this.NIn = this.PIAll[10].Item1
        }
        if(this.sday == "12")
        {
          this.NIn = this.PIAll[11].Item1
        }
        if(this.sday == "13")
        {
          this.NIn = this.PIAll[12].Item1
        }
        if(this.sday == "14")
        {
          this.NIn = this.PIAll[13].Item1
        }
        if(this.sday == "15")
        {
          this.NIn = this.PIAll[14].Item1
        }
        if(this.sday == "16")
        {
          this.NIn = this.PIAll[15].Item1
        }
        if(this.sday == "17")
        {
          this.NIn = this.PIAll[16].Item1
        }
        if(this.sday == "18")
        {
          this.NIn = this.PIAll[17].Item1
        }
        if(this.sday == "19")
        {
          this.NIn = this.PIAll[18].Item1
        }
        if(this.sday == "20")
        {
          this.NIn = this.PIAll[19].Item1
        }
        if(this.sday == "21")
        {
          this.NIn = this.PIAll[20].Item1
        }
        if(this.sday == "22")
        {
          this.NIn = this.PIAll[21].Item1
        }
        if(this.sday == "23")
        {
          this.NIn = this.PIAll[22].Item1
        }
        if(this.sday == "24")
        {
          this.NIn = this.PIAll[23].Item1
        }
        if(this.sday == "25")
        {
          this.NIn = this.PIAll[24].Item1
        }
        if(this.sday == "26")
        {
          this.NIn = this.PIAll[25].Item1
        }
        if(this.sday == "27")
        {
          this.NIn = this.PIAll[26].Item1
        }
        if(this.sday == "28")
        {
          this.NIn = this.PIAll[27].Item1
        }
        if(this.sday == "29")
        {
          this.NIn = this.PIAll[28].Item1
        }
        if(this.sday == "30")
        {
          this.NIn = this.PIAll[29].Item1
        }
        if(this.sday == "31")
        {
          this.NIn = this.PIAll[30].Item1
        }
      },
      error => {
        alert("Can't not get pi value by tagname11");
      });
  }
  feedPIValueByTagname12(tagname :string)
  {
    this.networkService.getPIValueByTagname(tagname).subscribe(
      data => {
        console.log(JSON.stringify(data))
        this.PIAll = data.result;
        //console.log(this.PIAll)
        this.countPI = this.PIAll.length;
        console.log(this.sday+"sec3")
        // console.log(this.countPI)
        if(this.sday == "1")
        {
          this.NDiesel = this.PIAll[0].Item1
        }
        if(this.sday == "2")
        {
          this.NDiesel = this.PIAll[1].Item1
        }
        if(this.sday == "3")
        {
          this.NDiesel = this.PIAll[2].Item1
        }
        if(this.sday == "4")
        {
          this.NDiesel = this.PIAll[3].Item1
        }
        if(this.sday == "5")
        {
          this.NDiesel = this.PIAll[4].Item1
        }
        if(this.sday == "6")
        {
          this.NDiesel = this.PIAll[5].Item1
        }
        if(this.sday == "7")
        {
          this.NDiesel = this.PIAll[6].Item1
        }
        if(this.sday == "8")
        {
          this.NDiesel = this.PIAll[7].Item1
        }
        if(this.sday == "9")
        {
          this.NDiesel = this.PIAll[8].Item1
        }
        if(this.sday == "10")
        {
          this.NDiesel = this.PIAll[9].Item1
        }
        if(this.sday == "11")
        {
          this.NDiesel = this.PIAll[10].Item1
        }
        if(this.sday == "12")
        {
          this.NDiesel = this.PIAll[11].Item1
        }
        if(this.sday == "13")
        {
          this.NDiesel = this.PIAll[12].Item1
        }
        if(this.sday == "14")
        {
          this.NDiesel = this.PIAll[13].Item1
        }
        if(this.sday == "15")
        {
          this.NDiesel = this.PIAll[14].Item1
        }
        if(this.sday == "16")
        {
          this.NDiesel = this.PIAll[15].Item1
        }
        if(this.sday == "17")
        {
          this.NDiesel = this.PIAll[16].Item1
        }
        if(this.sday == "18")
        {
          this.NDiesel = this.PIAll[17].Item1
        }
        if(this.sday == "19")
        {
          this.NDiesel = this.PIAll[18].Item1
        }
        if(this.sday == "20")
        {
          this.NDiesel = this.PIAll[19].Item1
        }
        if(this.sday == "21")
        {
          this.NDiesel = this.PIAll[20].Item1
        }
        if(this.sday == "22")
        {
          this.NDiesel = this.PIAll[21].Item1
        }
        if(this.sday == "23")
        {
          this.NDiesel = this.PIAll[22].Item1
        }
        if(this.sday == "24")
        {
          this.NDiesel = this.PIAll[23].Item1
        }
        if(this.sday == "25")
        {
          this.NDiesel = this.PIAll[24].Item1
        }
        if(this.sday == "26")
        {
          this.NDiesel = this.PIAll[25].Item1
        }
        if(this.sday == "27")
        {
          this.NDiesel = this.PIAll[26].Item1
        }
        if(this.sday == "28")
        {
          this.NDiesel = this.PIAll[27].Item1
        }
        if(this.sday == "29")
        {
          this.NDiesel = this.PIAll[28].Item1
        }
        if(this.sday == "30")
        {
          this.NDiesel = this.PIAll[29].Item1
        }
        if(this.sday == "31")
        {
          this.NDiesel = this.PIAll[30].Item1
        }
      },
      error => {
        alert("Can't not get pi value by tagname12");
      });
  }
  feedPIValueByTagname13(tagname :string)
  {
    this.networkService.getPIValueByTagname(tagname).subscribe(
      data => {
        console.log(JSON.stringify(data))
        this.PIAll = data.result;
        //console.log(this.PIAll)
        this.countPI = this.PIAll.length;
        console.log(this.sday+"sec3")
        // console.log(this.countPI)
        if(this.sday == "1")
        {
          this.NGasohol95 = this.PIAll[0].Item1
        }
        if(this.sday == "2")
        {
          this.NGasohol95 = this.PIAll[1].Item1
        }
        if(this.sday == "3")
        {
          this.NGasohol95 = this.PIAll[2].Item1
        }
        if(this.sday == "4")
        {
          this.NGasohol95 = this.PIAll[3].Item1
        }
        if(this.sday == "5")
        {
          this.NGasohol95 = this.PIAll[4].Item1
        }
        if(this.sday == "6")
        {
          this.NGasohol95 = this.PIAll[5].Item1
        }
        if(this.sday == "7")
        {
          this.NGasohol95 = this.PIAll[6].Item1
        }
        if(this.sday == "8")
        {
          this.NGasohol95 = this.PIAll[7].Item1
        }
        if(this.sday == "9")
        {
          this.NGasohol95 = this.PIAll[8].Item1
        }
        if(this.sday == "10")
        {
          this.NGasohol95 = this.PIAll[9].Item1
        }
        if(this.sday == "11")
        {
          this.NGasohol95 = this.PIAll[10].Item1
        }
        if(this.sday == "12")
        {
          this.NGasohol95 = this.PIAll[11].Item1
        }
        if(this.sday == "13")
        {
          this.NGasohol95 = this.PIAll[12].Item1
        }
        if(this.sday == "14")
        {
          this.NGasohol95 = this.PIAll[13].Item1
        }
        if(this.sday == "15")
        {
          this.NGasohol95 = this.PIAll[14].Item1
        }
        if(this.sday == "16")
        {
          this.NGasohol95 = this.PIAll[15].Item1
        }
        if(this.sday == "17")
        {
          this.NGasohol95 = this.PIAll[16].Item1
        }
        if(this.sday == "18")
        {
          this.NGasohol95 = this.PIAll[17].Item1
        }
        if(this.sday == "19")
        {
          this.NGasohol95 = this.PIAll[18].Item1
        }
        if(this.sday == "20")
        {
          this.NGasohol95 = this.PIAll[19].Item1
        }
        if(this.sday == "21")
        {
          this.NGasohol95 = this.PIAll[20].Item1
        }
        if(this.sday == "22")
        {
          this.NGasohol95 = this.PIAll[21].Item1
        }
        if(this.sday == "23")
        {
          this.NGasohol95 = this.PIAll[22].Item1
        }
        if(this.sday == "24")
        {
          this.NGasohol95 = this.PIAll[23].Item1
        }
        if(this.sday == "25")
        {
          this.NGasohol95 = this.PIAll[24].Item1
        }
        if(this.sday == "26")
        {
          this.NGasohol95 = this.PIAll[25].Item1
        }
        if(this.sday == "27")
        {
          this.NGasohol95 = this.PIAll[26].Item1
        }
        if(this.sday == "28")
        {
          this.NGasohol95 = this.PIAll[27].Item1
        }
        if(this.sday == "29")
        {
          this.NGasohol95 = this.PIAll[28].Item1
        }
        if(this.sday == "30")
        {
          this.NGasohol95 = this.PIAll[29].Item1
        }
        if(this.sday == "31")
        {
          this.NGasohol95 = this.PIAll[30].Item1
        }
      },
      error => {
        alert("Can't not get pi value by tagname14");
      });
  }
  feedPIValueByTagname14(tagname :string)
  {
    this.networkService.getPIValueByTagname(tagname).subscribe(
      data => {
        console.log(JSON.stringify(data))
        this.PIAll = data.result;
        //console.log(this.PIAll)
        this.countPI = this.PIAll.length;
        console.log(this.sday+"sec3")
        // console.log(this.countPI)
        if(this.sday == "1")
        {
          this.NOut = this.PIAll[0].Item1
          console.log("q("+this.Nsale+"+"+this.NIn+"+"+this.NDiesel+"+"+this.NGasohol95+"+"+this.NOut+")")
          this.barChartData3 = [
            { data: [this.Nsale,this.NIn,this.NDiesel,this.NGasohol95,this.NOut], 
              label: 'Time',
              backgroundColor: "rgb(204, 82, 0)",
            
            }
          ];
        }
        if(this.sday == "2")
        {
          this.NOut = this.PIAll[1].Item1
          console.log("q("+this.Nsale+"+"+this.NIn+"+"+this.NDiesel+"+"+this.NGasohol95+"+"+this.NOut+")")
          this.barChartData3 = [
            { data: [this.Nsale,this.NIn,this.NDiesel,this.NGasohol95,this.NOut], 
              label: 'Time',
              backgroundColor: "rgb(204, 82, 0)",
            
            }
          ];
        }
        if(this.sday == "3")
        {
          this.NOut = this.PIAll[2].Item1
          console.log("q("+this.Nsale+"+"+this.NIn+"+"+this.NDiesel+"+"+this.NGasohol95+"+"+this.NOut+")")
          this.barChartData3 = [
            { data: [this.Nsale,this.NIn,this.NDiesel,this.NGasohol95,this.NOut], 
              label: 'Time',
              backgroundColor: "rgb(204, 82, 0)",
            
            }
          ];
        }
        if(this.sday == "4")
        {
          this.NOut = this.PIAll[3].Item1
          console.log("q("+this.Nsale+"+"+this.NIn+"+"+this.NDiesel+"+"+this.NGasohol95+"+"+this.NOut+")")
          this.barChartData3 = [
            { data: [this.Nsale,this.NIn,this.NDiesel,this.NGasohol95,this.NOut], 
              label: 'Time',
              backgroundColor: "rgb(204, 82, 0)",
            
            }
          ];
        }
        if(this.sday == "5")
        {
          this.NOut = this.PIAll[4].Item1
          console.log("q("+this.Nsale+"+"+this.NIn+"+"+this.NDiesel+"+"+this.NGasohol95+"+"+this.NOut+")")
          this.barChartData3 = [
            { data: [this.Nsale,this.NIn,this.NDiesel,this.NGasohol95,this.NOut], 
              label: 'Time',
              backgroundColor: "rgb(204, 82, 0)",
            
            }
          ];
        }
        if(this.sday == "6")
        {
          this.NOut = this.PIAll[5].Item1
          console.log("q("+this.Nsale+"+"+this.NIn+"+"+this.NDiesel+"+"+this.NGasohol95+"+"+this.NOut+")")
          this.barChartData3 = [
            { data: [this.Nsale,this.NIn,this.NDiesel,this.NGasohol95,this.NOut], 
              label: 'Time',
              backgroundColor: "rgb(204, 82, 0)",
            
            }
          ];
        }
        if(this.sday == "7")
        {
          this.NOut = this.PIAll[6].Item1
          console.log("q("+this.Nsale+"+"+this.NIn+"+"+this.NDiesel+"+"+this.NGasohol95+"+"+this.NOut+")")
          this.barChartData3 = [
            { data: [this.Nsale,this.NIn,this.NDiesel,this.NGasohol95,this.NOut], 
              label: 'Time',
              backgroundColor: "rgb(204, 82, 0)",
            
            }
          ];
        }
        if(this.sday == "8")
        {
          this.NOut = this.PIAll[7].Item1
          console.log("q("+this.Nsale+"+"+this.NIn+"+"+this.NDiesel+"+"+this.NGasohol95+"+"+this.NOut+")")
          this.barChartData3 = [
            { data: [this.Nsale,this.NIn,this.NDiesel,this.NGasohol95,this.NOut], 
              label: 'Time',
              backgroundColor: "rgb(204, 82, 0)",
            
            }
          ];
        }
        if(this.sday == "9")
        {
          this.NOut = this.PIAll[8].Item1
          console.log("q("+this.Nsale+"+"+this.NIn+"+"+this.NDiesel+"+"+this.NGasohol95+"+"+this.NOut+")")
          this.barChartData3 = [
            { data: [this.Nsale,this.NIn,this.NDiesel,this.NGasohol95,this.NOut], 
              label: 'Time',
              backgroundColor: "rgb(204, 82, 0)",
            
            }
          ];
        }
        if(this.sday == "10")
        {
          this.NOut = this.PIAll[9].Item1
          console.log("q("+this.Nsale+"+"+this.NIn+"+"+this.NDiesel+"+"+this.NGasohol95+"+"+this.NOut+")")
          this.barChartData3 = [
            { data: [this.Nsale,this.NIn,this.NDiesel,this.NGasohol95,this.NOut], 
              label: 'Time',
              backgroundColor: "rgb(204, 82, 0)",
            
            }
          ];
        }
        if(this.sday == "11")
        {
          this.NOut = this.PIAll[10].Item1
          console.log("q("+this.Nsale+"+"+this.NIn+"+"+this.NDiesel+"+"+this.NGasohol95+"+"+this.NOut+")")
          this.barChartData3 = [
            { data: [this.Nsale,this.NIn,this.NDiesel,this.NGasohol95,this.NOut], 
              label: 'Time',
              backgroundColor: "rgb(204, 82, 0)",
            
            }
          ];
        }
        if(this.sday == "12")
        {
          this.NOut = this.PIAll[11].Item1
          console.log("q("+this.Nsale+"+"+this.NIn+"+"+this.NDiesel+"+"+this.NGasohol95+"+"+this.NOut+")")
          this.barChartData3 = [
            { data: [this.Nsale,this.NIn,this.NDiesel,this.NGasohol95,this.NOut], 
              label: 'Time',
              backgroundColor: "rgb(204, 82, 0)",
            
            }
          ];
        }
        if(this.sday == "13")
        {
          this.NOut = this.PIAll[12].Item1
          console.log("q("+this.Nsale+"+"+this.NIn+"+"+this.NDiesel+"+"+this.NGasohol95+"+"+this.NOut+")")
          this.barChartData3 = [
            { data: [this.Nsale,this.NIn,this.NDiesel,this.NGasohol95,this.NOut], 
              label: 'Time',
              backgroundColor: "rgb(204, 82, 0)",
            
            }
          ];
        }
        if(this.sday == "14")
        {
          this.NOut = this.PIAll[13].Item1
          console.log("q("+this.Nsale+"+"+this.NIn+"+"+this.NDiesel+"+"+this.NGasohol95+"+"+this.NOut+")")
          this.barChartData3 = [
            { data: [this.Nsale,this.NIn,this.NDiesel,this.NGasohol95,this.NOut], 
              label: 'Time',
              backgroundColor: "rgb(204, 82, 0)",
            
            }
          ];
        }
        if(this.sday == "15")
        {
          this.NOut = this.PIAll[14].Item1
          console.log("q("+this.Nsale+"+"+this.NIn+"+"+this.NDiesel+"+"+this.NGasohol95+"+"+this.NOut+")")
          this.barChartData3 = [
            { data: [this.Nsale,this.NIn,this.NDiesel,this.NGasohol95,this.NOut], 
              label: 'Time',
              backgroundColor: "rgb(204, 82, 0)",
            
            }
          ];
        }
        if(this.sday == "16")
        {
          this.NOut = this.PIAll[15].Item1
          console.log("q("+this.Nsale+"+"+this.NIn+"+"+this.NDiesel+"+"+this.NGasohol95+"+"+this.NOut+")")
          this.barChartData3 = [
            { data: [this.Nsale,this.NIn,this.NDiesel,this.NGasohol95,this.NOut], 
              label: 'Time',
              backgroundColor: "rgb(204, 82, 0)",
            
            }
          ];
        }
        if(this.sday == "17")
        {
          this.NOut = this.PIAll[16].Item1
          console.log("q("+this.Nsale+"+"+this.NIn+"+"+this.NDiesel+"+"+this.NGasohol95+"+"+this.NOut+")")
          this.barChartData3 = [
            { data: [this.Nsale,this.NIn,this.NDiesel,this.NGasohol95,this.NOut], 
              label: 'Time',
              backgroundColor: "rgb(204, 82, 0)",
            
            }
          ];
        }
        if(this.sday == "18")
        {
          this.NOut = this.PIAll[17].Item1
          console.log("q("+this.Nsale+"+"+this.NIn+"+"+this.NDiesel+"+"+this.NGasohol95+"+"+this.NOut+")")
          this.barChartData3 = [
            { data: [this.Nsale,this.NIn,this.NDiesel,this.NGasohol95,this.NOut], 
              label: 'Time',
              backgroundColor: "rgb(204, 82, 0)",
            
            }
          ];
        }
        if(this.sday == "19")
        {
          this.NOut = this.PIAll[18].Item1
          console.log("q("+this.Nsale+"+"+this.NIn+"+"+this.NDiesel+"+"+this.NGasohol95+"+"+this.NOut+")")
          this.barChartData3 = [
            { data: [this.Nsale,this.NIn,this.NDiesel,this.NGasohol95,this.NOut], 
              label: 'Time',
              backgroundColor: "rgb(204, 82, 0)",
            
            }
          ];
        }
        if(this.sday == "20")
        {
          this.NOut = this.PIAll[19].Item1
          console.log("q("+this.Nsale+"+"+this.NIn+"+"+this.NDiesel+"+"+this.NGasohol95+"+"+this.NOut+")")
          this.barChartData3 = [
            { data: [this.Nsale,this.NIn,this.NDiesel,this.NGasohol95,this.NOut], 
              label: 'Time',
              backgroundColor: "rgb(204, 82, 0)",
            
            }
          ];
        }
        if(this.sday == "21")
        {
          this.NOut = this.PIAll[20].Item1
          console.log("q("+this.Nsale+"+"+this.NIn+"+"+this.NDiesel+"+"+this.NGasohol95+"+"+this.NOut+")")
          this.barChartData3 = [
            { data: [this.Nsale,this.NIn,this.NDiesel,this.NGasohol95,this.NOut], 
              label: 'Time',
              backgroundColor: "rgb(204, 82, 0)",
            
            }
          ];
        }
        if(this.sday == "22")
        {
          this.NOut = this.PIAll[21].Item1
          console.log("q("+this.Nsale+"+"+this.NIn+"+"+this.NDiesel+"+"+this.NGasohol95+"+"+this.NOut+")")
          this.barChartData3 = [
            { data: [this.Nsale,this.NIn,this.NDiesel,this.NGasohol95,this.NOut], 
              label: 'Time',
              backgroundColor: "rgb(204, 82, 0)",
            
            }
          ];
        }
        if(this.sday == "23")
        {
          this.NOut = this.PIAll[22].Item1
          console.log("q("+this.Nsale+"+"+this.NIn+"+"+this.NDiesel+"+"+this.NGasohol95+"+"+this.NOut+")")
          this.barChartData3 = [
            { data: [this.Nsale,this.NIn,this.NDiesel,this.NGasohol95,this.NOut], 
              label: 'Time',
              backgroundColor: "rgb(204, 82, 0)",
            
            }
          ];
        }
        if(this.sday == "24")
        {
          this.NOut = this.PIAll[23].Item1
          console.log("q("+this.Nsale+"+"+this.NIn+"+"+this.NDiesel+"+"+this.NGasohol95+"+"+this.NOut+")")
          this.barChartData3 = [
            { data: [this.Nsale,this.NIn,this.NDiesel,this.NGasohol95,this.NOut], 
              label: 'Time',
              backgroundColor: "rgb(204, 82, 0)",
            
            }
          ];
        }
        if(this.sday == "25")
        {
          this.NOut = this.PIAll[24].Item1
          console.log("q("+this.Nsale+"+"+this.NIn+"+"+this.NDiesel+"+"+this.NGasohol95+"+"+this.NOut+")")
          this.barChartData3 = [
            { data: [this.Nsale,this.NIn,this.NDiesel,this.NGasohol95,this.NOut], 
              label: 'Time',
              backgroundColor: "rgb(204, 82, 0)",
            
            }
          ];
        }
        if(this.sday == "26")
        {
          this.NOut = this.PIAll[25].Item1
          console.log("q("+this.Nsale+"+"+this.NIn+"+"+this.NDiesel+"+"+this.NGasohol95+"+"+this.NOut+")")
          this.barChartData3 = [
            { data: [this.Nsale,this.NIn,this.NDiesel,this.NGasohol95,this.NOut], 
              label: 'Time',
              backgroundColor: "rgb(204, 82, 0)",
            
            }
          ];
        }
        if(this.sday == "27")
        {
          this.NOut = this.PIAll[26].Item1
          console.log("q("+this.Nsale+"+"+this.NIn+"+"+this.NDiesel+"+"+this.NGasohol95+"+"+this.NOut+")")
          this.barChartData3 = [
            { data: [this.Nsale,this.NIn,this.NDiesel,this.NGasohol95,this.NOut], 
              label: 'Time',
              backgroundColor: "rgb(204, 82, 0)",
            
            }
          ];
        }
        if(this.sday == "28")
        {
          this.NOut = this.PIAll[27].Item1
          console.log("q("+this.Nsale+"+"+this.NIn+"+"+this.NDiesel+"+"+this.NGasohol95+"+"+this.NOut+")")
          this.barChartData3 = [
            { data: [this.Nsale,this.NIn,this.NDiesel,this.NGasohol95,this.NOut], 
              label: 'Time',
              backgroundColor: "rgb(204, 82, 0)",
            
            }
          ];
        }
        if(this.sday == "29")
        {
          this.NOut = this.PIAll[28].Item1
          console.log("q("+this.Nsale+"+"+this.NIn+"+"+this.NDiesel+"+"+this.NGasohol95+"+"+this.NOut+")")
          this.barChartData3 = [
            { data: [this.Nsale,this.NIn,this.NDiesel,this.NGasohol95,this.NOut], 
              label: 'Time',
              backgroundColor: "rgb(204, 82, 0)",
            
            }
          ];
        }
        if(this.sday == "30")
        {
          this.NOut = this.PIAll[29].Item1
          console.log("q("+this.Nsale+"+"+this.NIn+"+"+this.NDiesel+"+"+this.NGasohol95+"+"+this.NOut+")")
          this.barChartData3 = [
            { data: [this.Nsale,this.NIn,this.NDiesel,this.NGasohol95,this.NOut], 
              label: 'Time',
              backgroundColor: "rgb(204, 82, 0)",
            
            }
          ];
        }
        if(this.sday == "31")
        {
          this.NOut = this.PIAll[30].Item1
          console.log("q("+this.Nsale+"+"+this.NIn+"+"+this.NDiesel+"+"+this.NGasohol95+"+"+this.NOut+")")
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
  feedPIValueByTagname15(tagname :string)
  {
    this.networkService.getPIValueByTagname(tagname).subscribe(
      data => {
        console.log(JSON.stringify(data))
        this.PIAll = data.result;
        //console.log(this.PIAll)
        this.countPI = this.PIAll.length;
        console.log(this.sday+"sec3")
        // console.log(this.countPI)
        if(this.sday == "1")
        {
          this.Wsale = this.PIAll[0].Item1
        }
        if(this.sday == "2")
        {
          this.Wsale = this.PIAll[1].Item1
        }
        if(this.sday == "3")
        {
          this.Wsale = this.PIAll[2].Item1
        }
        if(this.sday == "4")
        {
          this.Wsale = this.PIAll[3].Item1
        }
        if(this.sday == "5")
        {
          this.Wsale = this.PIAll[4].Item1
        }
        if(this.sday == "6")
        {
          this.Wsale = this.PIAll[5].Item1
        }
        if(this.sday == "7")
        {
          this.Wsale = this.PIAll[6].Item1
        }
        if(this.sday == "8")
        {
          this.Wsale = this.PIAll[7].Item1
        }
        if(this.sday == "9")
        {
          this.Wsale = this.PIAll[8].Item1
        }
        if(this.sday == "10")
        {
          this.Wsale = this.PIAll[9].Item1
        }
        if(this.sday == "11")
        {
          this.Wsale = this.PIAll[10].Item1
        }
        if(this.sday == "12")
        {
          this.Wsale = this.PIAll[11].Item1
        }
        if(this.sday == "13")
        {
          this.Wsale = this.PIAll[12].Item1
        }
        if(this.sday == "14")
        {
          this.Wsale = this.PIAll[13].Item1
        }
        if(this.sday == "15")
        {
          this.Wsale = this.PIAll[14].Item1
        }
        if(this.sday == "16")
        {
          this.Wsale = this.PIAll[15].Item1
        }
        if(this.sday == "17")
        {
          this.Wsale = this.PIAll[16].Item1
        }
        if(this.sday == "18")
        {
          this.Wsale = this.PIAll[17].Item1
        }
        if(this.sday == "19")
        {
          this.Wsale = this.PIAll[18].Item1
        }
        if(this.sday == "20")
        {
          this.Wsale = this.PIAll[19].Item1
        }
        if(this.sday == "21")
        {
          this.Wsale = this.PIAll[20].Item1
        }
        if(this.sday == "22")
        {
          this.Wsale = this.PIAll[21].Item1
        }
        if(this.sday == "23")
        {
          this.Wsale = this.PIAll[22].Item1
        }
        if(this.sday == "24")
        {
          this.Wsale = this.PIAll[23].Item1
        }
        if(this.sday == "25")
        {
          this.Wsale = this.PIAll[24].Item1
        }
        if(this.sday == "26")
        {
          this.Wsale = this.PIAll[25].Item1
        }
        if(this.sday == "27")
        {
          this.Wsale = this.PIAll[26].Item1
        }
        if(this.sday == "28")
        {
          this.Wsale = this.PIAll[27].Item1
        }
        if(this.sday == "29")
        {
          this.Wsale = this.PIAll[28].Item1
        }
        if(this.sday == "30")
        {
          this.Wsale = this.PIAll[29].Item1
        }
        if(this.sday == "31")
        {
          this.Wsale = this.PIAll[30].Item1
        }
      },
      error => {
        alert("Can't not get pi value by tagname15");
      });
  }
  feedPIValueByTagname16(tagname :string)
  {
    this.networkService.getPIValueByTagname(tagname).subscribe(
      data => {
        console.log(JSON.stringify(data))
        this.PIAll = data.result;
        //console.log(this.PIAll)
        this.countPI = this.PIAll.length;
        console.log(this.sday+"sec3")
        // console.log(this.countPI)
        if(this.sday == "1")
        {
          this.WIn = this.PIAll[0].Item1
        }
        if(this.sday == "2")
        {
          this.WIn = this.PIAll[1].Item1
        }
        if(this.sday == "3")
        {
          this.WIn = this.PIAll[2].Item1
        }
        if(this.sday == "4")
        {
          this.WIn = this.PIAll[3].Item1
        }
        if(this.sday == "5")
        {
          this.WIn = this.PIAll[4].Item1
        }
        if(this.sday == "6")
        {
          this.WIn = this.PIAll[5].Item1
        }
        if(this.sday == "7")
        {
          this.WIn = this.PIAll[6].Item1
        }
        if(this.sday == "8")
        {
          this.WIn = this.PIAll[7].Item1
        }
        if(this.sday == "9")
        {
          this.WIn = this.PIAll[8].Item1
        }
        if(this.sday == "10")
        {
          this.WIn = this.PIAll[9].Item1
        }
        if(this.sday == "11")
        {
          this.WIn = this.PIAll[10].Item1
        }
        if(this.sday == "12")
        {
          this.WIn = this.PIAll[11].Item1
        }
        if(this.sday == "13")
        {
          this.WIn = this.PIAll[12].Item1
        }
        if(this.sday == "14")
        {
          this.WIn = this.PIAll[13].Item1
        }
        if(this.sday == "15")
        {
          this.WIn = this.PIAll[14].Item1
        }
        if(this.sday == "16")
        {
          this.WIn = this.PIAll[15].Item1
        }
        if(this.sday == "17")
        {
          this.WIn = this.PIAll[16].Item1
        }
        if(this.sday == "18")
        {
          this.WIn = this.PIAll[17].Item1
        }
        if(this.sday == "19")
        {
          this.WIn = this.PIAll[18].Item1
        }
        if(this.sday == "20")
        {
          this.WIn = this.PIAll[19].Item1
        }
        if(this.sday == "21")
        {
          this.WIn = this.PIAll[20].Item1
        }
        if(this.sday == "22")
        {
          this.WIn = this.PIAll[21].Item1
        }
        if(this.sday == "23")
        {
          this.WIn = this.PIAll[22].Item1
        }
        if(this.sday == "24")
        {
          this.WIn = this.PIAll[23].Item1
        }
        if(this.sday == "25")
        {
          this.WIn = this.PIAll[24].Item1
        }
        if(this.sday == "26")
        {
          this.WIn = this.PIAll[25].Item1
        }
        if(this.sday == "27")
        {
          this.WIn = this.PIAll[26].Item1
        }
        if(this.sday == "28")
        {
          this.WIn = this.PIAll[27].Item1
        }
        if(this.sday == "29")
        {
          this.WIn = this.PIAll[28].Item1
        }
        if(this.sday == "30")
        {
          this.WIn = this.PIAll[29].Item1
        }
        if(this.sday == "31")
        {
          this.WIn = this.PIAll[30].Item1
        }
      },
      error => {
        alert("Can't not get pi value by tagname16");
      });
  }
  feedPIValueByTagname17(tagname :string)
  {
    this.networkService.getPIValueByTagname(tagname).subscribe(
      data => {
        console.log(JSON.stringify(data))
        this.PIAll = data.result;
        //console.log(this.PIAll)
        this.countPI = this.PIAll.length;
        console.log(this.sday+"sec3")
        // console.log(this.countPI)
        if(this.sday == "1")
        {
          this.WDiesel = this.PIAll[0].Item1
        }
        if(this.sday == "2")
        {
          this.WDiesel = this.PIAll[1].Item1
        }
        if(this.sday == "3")
        {
          this.WDiesel = this.PIAll[2].Item1
        }
        if(this.sday == "4")
        {
          this.WDiesel = this.PIAll[3].Item1
        }
        if(this.sday == "5")
        {
          this.WDiesel = this.PIAll[4].Item1
        }
        if(this.sday == "6")
        {
          this.WDiesel = this.PIAll[5].Item1
        }
        if(this.sday == "7")
        {
          this.WDiesel = this.PIAll[6].Item1
        }
        if(this.sday == "8")
        {
          this.WDiesel = this.PIAll[7].Item1
        }
        if(this.sday == "9")
        {
          this.WDiesel = this.PIAll[8].Item1
        }
        if(this.sday == "10")
        {
          this.WDiesel = this.PIAll[9].Item1
        }
        if(this.sday == "11")
        {
          this.WDiesel = this.PIAll[10].Item1
        }
        if(this.sday == "12")
        {
          this.NDiesel = this.PIAll[11].Item1
        }
        if(this.sday == "13")
        {
          this.WDiesel = this.PIAll[12].Item1
        }
        if(this.sday == "14")
        {
          this.WDiesel = this.PIAll[13].Item1
        }
        if(this.sday == "15")
        {
          this.WDiesel = this.PIAll[14].Item1
        }
        if(this.sday == "16")
        {
          this.WDiesel = this.PIAll[15].Item1
        }
        if(this.sday == "17")
        {
          this.WDiesel = this.PIAll[16].Item1
        }
        if(this.sday == "18")
        {
          this.WDiesel = this.PIAll[17].Item1
        }
        if(this.sday == "19")
        {
          this.WDiesel = this.PIAll[18].Item1
        }
        if(this.sday == "20")
        {
          this.WDiesel = this.PIAll[19].Item1
        }
        if(this.sday == "21")
        {
          this.WDiesel = this.PIAll[20].Item1
        }
        if(this.sday == "22")
        {
          this.WDiesel = this.PIAll[21].Item1
        }
        if(this.sday == "23")
        {
          this.WDiesel = this.PIAll[22].Item1
        }
        if(this.sday == "24")
        {
          this.WDiesel = this.PIAll[23].Item1
        }
        if(this.sday == "25")
        {
          this.WDiesel = this.PIAll[24].Item1
        }
        if(this.sday == "26")
        {
          this.WDiesel = this.PIAll[25].Item1
        }
        if(this.sday == "27")
        {
          this.WDiesel = this.PIAll[26].Item1
        }
        if(this.sday == "28")
        {
          this.WDiesel = this.PIAll[27].Item1
        }
        if(this.sday == "29")
        {
          this.WDiesel = this.PIAll[28].Item1
        }
        if(this.sday == "30")
        {
          this.WDiesel = this.PIAll[29].Item1
        }
        if(this.sday == "31")
        {
          this.WDiesel = this.PIAll[30].Item1
        }
      },
      error => {
        alert("Can't not get pi value by tagname17");
      });
  }
  feedPIValueByTagname18(tagname :string)
  {
    this.networkService.getPIValueByTagname(tagname).subscribe(
      data => {
        console.log(JSON.stringify(data))
        this.PIAll = data.result;
        //console.log(this.PIAll)
        this.countPI = this.PIAll.length;
        console.log(this.sday+"sec3")
        // console.log(this.countPI)
        if(this.sday == "1")
        {
          this.WGasohol95 = this.PIAll[0].Item1
        }
        if(this.sday == "2")
        {
          this.WGasohol95 = this.PIAll[1].Item1
        }
        if(this.sday == "3")
        {
          this.WGasohol95 = this.PIAll[2].Item1
        }
        if(this.sday == "4")
        {
          this.WGasohol95 = this.PIAll[3].Item1
        }
        if(this.sday == "5")
        {
          this.WGasohol95 = this.PIAll[4].Item1
        }
        if(this.sday == "6")
        {
          this.WGasohol95 = this.PIAll[5].Item1
        }
        if(this.sday == "7")
        {
          this.WGasohol95 = this.PIAll[6].Item1
        }
        if(this.sday == "8")
        {
          this.WGasohol95 = this.PIAll[7].Item1
        }
        if(this.sday == "9")
        {
          this.WGasohol95 = this.PIAll[8].Item1
        }
        if(this.sday == "10")
        {
          this.WGasohol95 = this.PIAll[9].Item1
        }
        if(this.sday == "11")
        {
          this.WGasohol95 = this.PIAll[10].Item1
        }
        if(this.sday == "12")
        {
          this.WGasohol95 = this.PIAll[11].Item1
        }
        if(this.sday == "13")
        {
          this.WGasohol95 = this.PIAll[12].Item1
        }
        if(this.sday == "14")
        {
          this.WGasohol95 = this.PIAll[13].Item1
        }
        if(this.sday == "15")
        {
          this.WGasohol95 = this.PIAll[14].Item1
        }
        if(this.sday == "16")
        {
          this.WGasohol95 = this.PIAll[15].Item1
        }
        if(this.sday == "17")
        {
          this.WGasohol95 = this.PIAll[16].Item1
        }
        if(this.sday == "18")
        {
          this.WGasohol95 = this.PIAll[17].Item1
        }
        if(this.sday == "19")
        {
          this.WGasohol95 = this.PIAll[18].Item1
        }
        if(this.sday == "20")
        {
          this.WGasohol95 = this.PIAll[19].Item1
        }
        if(this.sday == "21")
        {
          this.WGasohol95 = this.PIAll[20].Item1
        }
        if(this.sday == "22")
        {
          this.WGasohol95 = this.PIAll[21].Item1
        }
        if(this.sday == "23")
        {
          this.WGasohol95 = this.PIAll[22].Item1
        }
        if(this.sday == "24")
        {
          this.WGasohol95 = this.PIAll[23].Item1
        }
        if(this.sday == "25")
        {
          this.WGasohol95 = this.PIAll[24].Item1
        }
        if(this.sday == "26")
        {
          this.WGasohol95 = this.PIAll[25].Item1
        }
        if(this.sday == "27")
        {
          this.WGasohol95 = this.PIAll[26].Item1
        }
        if(this.sday == "28")
        {
          this.WGasohol95 = this.PIAll[27].Item1
        }
        if(this.sday == "29")
        {
          this.WGasohol95 = this.PIAll[28].Item1
        }
        if(this.sday == "30")
        {
          this.WGasohol95 = this.PIAll[29].Item1
        }
        if(this.sday == "31")
        {
          this.WGasohol95 = this.PIAll[30].Item1
        }
      },
      error => {
        alert("Can't not get pi value by tagname18");
      });
  }
  feedPIValueByTagname19(tagname :string)
  {
    this.networkService.getPIValueByTagname(tagname).subscribe(
      data => {
        console.log(JSON.stringify(data))
        this.PIAll = data.result;
        //console.log(this.PIAll)
        this.countPI = this.PIAll.length;
        console.log(this.sday+"sec3")
        // console.log(this.countPI)
        if(this.sday == "1")
        {
          this.WOut = this.PIAll[0].Item1
          console.log("w("+this.Wsale+"+"+this.WIn+"+"+this.WDiesel+"+"+this.WGasohol95+"+"+this.WOut+")")
          this.barChartData4 = [
            { data: [this.Wsale,this.WIn,this.WDiesel,this.WGasohol95,this.WOut], 
              label: 'Time',
              backgroundColor: "rgb(153, 102, 255)",
            
            }
          ];
        }
        if(this.sday == "2")
        {
          this.WOut = this.PIAll[1].Item1
          console.log("w("+this.Wsale+"+"+this.WIn+"+"+this.WDiesel+"+"+this.WGasohol95+"+"+this.WOut+")")
          this.barChartData4 = [
            { data: [this.Wsale,this.WIn,this.WDiesel,this.WGasohol95,this.WOut], 
              label: 'Time',
              backgroundColor: "rgb(153, 102, 255)",
            
            }
          ];
        }
        if(this.sday == "3")
        {
          this.WOut = this.PIAll[2].Item1
          console.log("w("+this.Wsale+"+"+this.WIn+"+"+this.WDiesel+"+"+this.WGasohol95+"+"+this.WOut+")")
          this.barChartData4 = [
            { data: [this.Wsale,this.WIn,this.WDiesel,this.WGasohol95,this.WOut], 
              label: 'Time',
              backgroundColor: "rgb(153, 102, 255)",
            
            }
          ];
        }
        if(this.sday == "4")
        {
          this.WOut = this.PIAll[3].Item1
          console.log("w("+this.Wsale+"+"+this.WIn+"+"+this.WDiesel+"+"+this.WGasohol95+"+"+this.WOut+")")
          this.barChartData4 = [
            { data: [this.Wsale,this.WIn,this.WDiesel,this.WGasohol95,this.WOut], 
              label: 'Time',
              backgroundColor: "rgb(153, 102, 255)",
            
            }
          ];
        }
        if(this.sday == "5")
        {
          this.WOut = this.PIAll[4].Item1
          console.log("w("+this.Wsale+"+"+this.WIn+"+"+this.WDiesel+"+"+this.WGasohol95+"+"+this.WOut+")")
          this.barChartData4 = [
            { data: [this.Wsale,this.WIn,this.WDiesel,this.WGasohol95,this.WOut], 
              label: 'Time',
              backgroundColor: "rgb(153, 102, 255)",
            
            }
          ];
        }
        if(this.sday == "6")
        {
          this.WOut = this.PIAll[5].Item1
          console.log("w("+this.Wsale+"+"+this.WIn+"+"+this.WDiesel+"+"+this.WGasohol95+"+"+this.WOut+")")
          this.barChartData4 = [
            { data: [this.Wsale,this.WIn,this.WDiesel,this.WGasohol95,this.WOut], 
              label: 'Time',
              backgroundColor: "rgb(153, 102, 255)",
            
            }
          ];
        }
        if(this.sday == "7")
        {
          this.WOut = this.PIAll[6].Item1
          console.log("w("+this.Wsale+"+"+this.WIn+"+"+this.WDiesel+"+"+this.WGasohol95+"+"+this.WOut+")")
          this.barChartData4 = [
            { data: [this.Wsale,this.WIn,this.WDiesel,this.WGasohol95,this.WOut], 
              label: 'Time',
              backgroundColor: "rgb(153, 102, 255)",
            
            }
          ];
        }
        if(this.sday == "8")
        {
          this.WOut = this.PIAll[7].Item1
          console.log("w("+this.Wsale+"+"+this.WIn+"+"+this.WDiesel+"+"+this.WGasohol95+"+"+this.WOut+")")
          this.barChartData4 = [
            { data: [this.Wsale,this.WIn,this.WDiesel,this.WGasohol95,this.WOut], 
              label: 'Time',
              backgroundColor: "rgb(153, 102, 255)",
            
            }
          ];
        }
        if(this.sday == "9")
        {
          this.WOut = this.PIAll[8].Item1
          console.log("w("+this.Wsale+"+"+this.WIn+"+"+this.WDiesel+"+"+this.WGasohol95+"+"+this.WOut+")")
          this.barChartData4 = [
            { data: [this.Wsale,this.WIn,this.WDiesel,this.WGasohol95,this.WOut], 
              label: 'Time',
              backgroundColor: "rgb(153, 102, 255)",
            
            }
          ];
        }
        if(this.sday == "10")
        {
          this.WOut = this.PIAll[9].Item1
          console.log("w("+this.Wsale+"+"+this.WIn+"+"+this.WDiesel+"+"+this.WGasohol95+"+"+this.WOut+")")
          this.barChartData4 = [
            { data: [this.Wsale,this.WIn,this.WDiesel,this.WGasohol95,this.WOut], 
              label: 'Time',
              backgroundColor: "rgb(153, 102, 255)",
            
            }
          ];
        }
        if(this.sday == "11")
        {
          this.WOut = this.PIAll[10].Item1
          console.log("w("+this.Wsale+"+"+this.WIn+"+"+this.WDiesel+"+"+this.WGasohol95+"+"+this.WOut+")")
          this.barChartData4 = [
            { data: [this.Wsale,this.WIn,this.WDiesel,this.WGasohol95,this.WOut], 
              label: 'Time',
              backgroundColor: "rgb(153, 102, 255)",
            
            }
          ];
        }
        if(this.sday == "12")
        {
          this.WOut = this.PIAll[11].Item1
          console.log("w("+this.Wsale+"+"+this.WIn+"+"+this.WDiesel+"+"+this.WGasohol95+"+"+this.WOut+")")
          this.barChartData4 = [
            { data: [this.Wsale,this.WIn,this.WDiesel,this.WGasohol95,this.WOut], 
              label: 'Time',
              backgroundColor: "rgb(153, 102, 255)",
            
            }
          ];
        }
        if(this.sday == "13")
        {
          this.WOut = this.PIAll[12].Item1
          console.log("w("+this.Wsale+"+"+this.WIn+"+"+this.WDiesel+"+"+this.WGasohol95+"+"+this.WOut+")")
          this.barChartData4 = [
            { data: [this.Wsale,this.WIn,this.WDiesel,this.WGasohol95,this.WOut], 
              label: 'Time',
              backgroundColor: "rgb(153, 102, 255)",
            
            }
          ];
        }
        if(this.sday == "14")
        {
          this.WOut = this.PIAll[13].Item1
          console.log("w("+this.Wsale+"+"+this.WIn+"+"+this.WDiesel+"+"+this.WGasohol95+"+"+this.WOut+")")
          this.barChartData4 = [
            { data: [this.Wsale,this.WIn,this.WDiesel,this.WGasohol95,this.WOut], 
              label: 'Time',
              backgroundColor: "rgb(153, 102, 255)",
            
            }
          ];
        }
        if(this.sday == "15")
        {
          this.WOut = this.PIAll[14].Item1
          console.log("w("+this.Wsale+"+"+this.WIn+"+"+this.WDiesel+"+"+this.WGasohol95+"+"+this.WOut+")")
          this.barChartData4 = [
            { data: [this.Wsale,this.WIn,this.WDiesel,this.WGasohol95,this.WOut], 
              label: 'Time',
              backgroundColor: "rgb(153, 102, 255)",
            
            }
          ];
        }
        if(this.sday == "16")
        {
          this.WOut = this.PIAll[15].Item1
          console.log("w("+this.Wsale+"+"+this.WIn+"+"+this.WDiesel+"+"+this.WGasohol95+"+"+this.WOut+")")
          this.barChartData4 = [
            { data: [this.Wsale,this.WIn,this.WDiesel,this.WGasohol95,this.WOut], 
              label: 'Time',
              backgroundColor: "rgb(153, 102, 255)",
            
            }
          ];
        }
        if(this.sday == "17")
        {
          this.WOut = this.PIAll[16].Item1
          console.log("w("+this.Wsale+"+"+this.WIn+"+"+this.WDiesel+"+"+this.WGasohol95+"+"+this.WOut+")")
          this.barChartData4 = [
            { data: [this.Wsale,this.WIn,this.WDiesel,this.WGasohol95,this.WOut], 
              label: 'Time',
              backgroundColor: "rgb(153, 102, 255)",
            
            }
          ];
        }
        if(this.sday == "18")
        {
          this.WOut = this.PIAll[17].Item1
          console.log("w("+this.Wsale+"+"+this.WIn+"+"+this.WDiesel+"+"+this.WGasohol95+"+"+this.WOut+")")
          this.barChartData4 = [
            { data: [this.Wsale,this.WIn,this.WDiesel,this.WGasohol95,this.WOut], 
              label: 'Time',
              backgroundColor: "rgb(153, 102, 255)",
            
            }
          ];
        }
        if(this.sday == "19")
        {
          this.WOut = this.PIAll[18].Item1
          console.log("w("+this.Wsale+"+"+this.WIn+"+"+this.WDiesel+"+"+this.WGasohol95+"+"+this.WOut+")")
          this.barChartData4 = [
            { data: [this.Wsale,this.WIn,this.WDiesel,this.WGasohol95,this.WOut], 
              label: 'Time',
              backgroundColor: "rgb(153, 102, 255)",
            
            }
          ];
        }
        if(this.sday == "20")
        {
          this.WOut = this.PIAll[19].Item1
          console.log("w("+this.Wsale+"+"+this.WIn+"+"+this.WDiesel+"+"+this.WGasohol95+"+"+this.WOut+")")
          this.barChartData4 = [
            { data: [this.Wsale,this.WIn,this.WDiesel,this.WGasohol95,this.WOut], 
              label: 'Time',
              backgroundColor: "rgb(153, 102, 255)",
            
            }
          ];
        }
        if(this.sday == "21")
        {
          this.WOut = this.PIAll[20].Item1
          console.log("w("+this.Wsale+"+"+this.WIn+"+"+this.WDiesel+"+"+this.WGasohol95+"+"+this.WOut+")")
          this.barChartData4 = [
            { data: [this.Wsale,this.WIn,this.WDiesel,this.WGasohol95,this.WOut], 
              label: 'Time',
              backgroundColor: "rgb(153, 102, 255)",
            
            }
          ];
        }
        if(this.sday == "22")
        {
          this.WOut = this.PIAll[21].Item1
          console.log("w("+this.Wsale+"+"+this.WIn+"+"+this.WDiesel+"+"+this.WGasohol95+"+"+this.WOut+")")
          this.barChartData4 = [
            { data: [this.Wsale,this.WIn,this.WDiesel,this.WGasohol95,this.WOut], 
              label: 'Time',
              backgroundColor: "rgb(153, 102, 255)",
            
            }
          ];
        }
        if(this.sday == "23")
        {
          this.WOut = this.PIAll[22].Item1
          console.log("w("+this.Wsale+"+"+this.WIn+"+"+this.WDiesel+"+"+this.WGasohol95+"+"+this.WOut+")")
          this.barChartData4 = [
            { data: [this.Wsale,this.WIn,this.WDiesel,this.WGasohol95,this.WOut], 
              label: 'Time',
              backgroundColor: "rgb(153, 102, 255)",
            
            }
          ];
        }
        if(this.sday == "24")
        {
          this.WOut = this.PIAll[23].Item1
          console.log("w("+this.Wsale+"+"+this.WIn+"+"+this.WDiesel+"+"+this.WGasohol95+"+"+this.WOut+")")
          this.barChartData4 = [
            { data: [this.Wsale,this.WIn,this.WDiesel,this.WGasohol95,this.WOut], 
              label: 'Time',
              backgroundColor: "rgb(153, 102, 255)",
            
            }
          ];
        }
        if(this.sday == "25")
        {
          this.WOut = this.PIAll[24].Item1
          console.log("w("+this.Wsale+"+"+this.WIn+"+"+this.WDiesel+"+"+this.WGasohol95+"+"+this.WOut+")")
          this.barChartData4 = [
            { data: [this.Wsale,this.WIn,this.WDiesel,this.WGasohol95,this.WOut], 
              label: 'Time',
              backgroundColor: "rgb(153, 102, 255)",
            
            }
          ];
        }
        if(this.sday == "26")
        {
          this.WOut = this.PIAll[25].Item1
          console.log("w("+this.Wsale+"+"+this.WIn+"+"+this.WDiesel+"+"+this.WGasohol95+"+"+this.WOut+")")
          this.barChartData4 = [
            { data: [this.Wsale,this.WIn,this.WDiesel,this.WGasohol95,this.WOut], 
              label: 'Time',
              backgroundColor: "rgb(153, 102, 255)",
            
            }
          ];
        }
        if(this.sday == "27")
        {
          this.WOut = this.PIAll[26].Item1
          console.log("w("+this.Wsale+"+"+this.WIn+"+"+this.WDiesel+"+"+this.WGasohol95+"+"+this.WOut+")")
          this.barChartData4 = [
            { data: [this.Wsale,this.WIn,this.WDiesel,this.WGasohol95,this.WOut], 
              label: 'Time',
              backgroundColor: "rgb(153, 102, 255)",
            
            }
          ];
        }
        if(this.sday == "28")
        {
          this.WOut = this.PIAll[27].Item1
          console.log("w("+this.Wsale+"+"+this.WIn+"+"+this.WDiesel+"+"+this.WGasohol95+"+"+this.WOut+")")
          this.barChartData4 = [
            { data: [this.Wsale,this.WIn,this.WDiesel,this.WGasohol95,this.WOut], 
              label: 'Time',
              backgroundColor: "rgb(153, 102, 255)",
            
            }
          ];
        }
        if(this.sday == "29")
        {
          this.WOut = this.PIAll[28].Item1
          console.log("w("+this.Wsale+"+"+this.WIn+"+"+this.WDiesel+"+"+this.WGasohol95+"+"+this.WOut+")")
          this.barChartData4 = [
            { data: [this.Wsale,this.WIn,this.WDiesel,this.WGasohol95,this.WOut], 
              label: 'Time',
              backgroundColor: "rgb(153, 102, 255)",
            
            }
          ];
        }
        if(this.sday == "30")
        {
          this.WOut = this.PIAll[29].Item1
          console.log("w("+this.Wsale+"+"+this.WIn+"+"+this.WDiesel+"+"+this.WGasohol95+"+"+this.WOut+")")
          this.barChartData4 = [
            { data: [this.Wsale,this.WIn,this.WDiesel,this.WGasohol95,this.WOut], 
              label: 'Time',
              backgroundColor: "rgb(153, 102, 255)",
            
            }
          ];
        }
        if(this.sday == "31")
        {
          this.WOut = this.PIAll[30].Item1
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
  // chart WIP
  feedPIValueByTagname20(tagname :string)
  {
    this.networkService.getPIValueByTagname(tagname).subscribe(
      data => {
        console.log(JSON.stringify(data))
        this.PIAll = data.result;
        //console.log(this.PIAll)
        this.countPI = this.PIAll.length;
        console.log(this.sday+"sec3")
        // console.log(this.countPI)
        if(this.sday == "1")
        {
          this.Isale = this.PIAll[0].Item1
        }
        if(this.sday == "2")
        {
          this.Isale = this.PIAll[1].Item1
        }
        if(this.sday == "3")
        {
          this.Isale = this.PIAll[2].Item1
        }
        if(this.sday == "4")
        {
          this.Isale = this.PIAll[3].Item1
        }
        if(this.sday == "5")
        {
          this.Isale = this.PIAll[4].Item1
        }
        if(this.sday == "6")
        {
          this.Isale = this.PIAll[5].Item1
        }
        if(this.sday == "7")
        {
          this.Isale = this.PIAll[6].Item1
        }
        if(this.sday == "8")
        {
          this.Isale = this.PIAll[7].Item1
        }
        if(this.sday == "9")
        {
          this.Isale = this.PIAll[8].Item1
        }
        if(this.sday == "10")
        {
          this.Isale = this.PIAll[9].Item1
        }
        if(this.sday == "11")
        {
          this.Isale = this.PIAll[10].Item1
        }
        if(this.sday == "12")
        {
          this.Isale = this.PIAll[11].Item1
        }
        if(this.sday == "13")
        {
          this.Isale = this.PIAll[12].Item1
        }
        if(this.sday == "14")
        {
          this.Isale = this.PIAll[13].Item1
        }
        if(this.sday == "15")
        {
          this.Isale = this.PIAll[14].Item1
        }
        if(this.sday == "16")
        {
          this.Isale = this.PIAll[15].Item1
        }
        if(this.sday == "17")
        {
          this.Isale = this.PIAll[16].Item1
        }
        if(this.sday == "18")
        {
          this.Isale = this.PIAll[17].Item1
        }
        if(this.sday == "19")
        {
          this.Isale = this.PIAll[18].Item1
        }
        if(this.sday == "20")
        {
          this.Isale = this.PIAll[19].Item1
        }
        if(this.sday == "21")
        {
          this.Isale = this.PIAll[20].Item1
        }
        if(this.sday == "22")
        {
          this.Isale = this.PIAll[21].Item1
        }
        if(this.sday == "23")
        {
          this.Isale = this.PIAll[22].Item1
        }
        if(this.sday == "24")
        {
          this.Isale = this.PIAll[23].Item1
        }
        if(this.sday == "25")
        {
          this.Isale = this.PIAll[24].Item1
        }
        if(this.sday == "26")
        {
          this.Isale = this.PIAll[25].Item1
        }
        if(this.sday == "27")
        {
          this.Isale = this.PIAll[26].Item1
        }
        if(this.sday == "28")
        {
          this.Isale = this.PIAll[27].Item1
        }
        if(this.sday == "29")
        {
          this.Isale = this.PIAll[28].Item1
        }
        if(this.sday == "30")
        {
          this.Isale = this.PIAll[29].Item1
        }
        if(this.sday == "31")
        {
          this.Isale = this.PIAll[30].Item1
        }
      },
      error => {
        alert("Can't not get pi value by tagname20");
      });
  }
  feedPIValueByTagname21(tagname :string)
  {
    this.networkService.getPIValueByTagname(tagname).subscribe(
      data => {
        console.log(JSON.stringify(data))
        this.PIAll = data.result;
        //console.log(this.PIAll)
        this.countPI = this.PIAll.length;
        console.log(this.sday+"sec3")
        // console.log(this.countPI)
        if(this.sday == "1")
        {
          this.IIn = this.PIAll[0].Item1
        }
        if(this.sday == "2")
        {
          this.IIn = this.PIAll[1].Item1
        }
        if(this.sday == "3")
        {
          this.IIn = this.PIAll[2].Item1
        }
        if(this.sday == "4")
        {
          this.IIn = this.PIAll[3].Item1
        }
        if(this.sday == "5")
        {
          this.IIn = this.PIAll[4].Item1
        }
        if(this.sday == "6")
        {
          this.IIn = this.PIAll[5].Item1
        }
        if(this.sday == "7")
        {
          this.IIn = this.PIAll[6].Item1
        }
        if(this.sday == "8")
        {
          this.IIn = this.PIAll[7].Item1
        }
        if(this.sday == "9")
        {
          this.IIn = this.PIAll[8].Item1
        }
        if(this.sday == "10")
        {
          this.IIn = this.PIAll[9].Item1
        }
        if(this.sday == "11")
        {
          this.IIn = this.PIAll[10].Item1
        }
        if(this.sday == "12")
        {
          this.IIn = this.PIAll[11].Item1
        }
        if(this.sday == "13")
        {
          this.IIn = this.PIAll[12].Item1
        }
        if(this.sday == "14")
        {
          this.IIn = this.PIAll[13].Item1
        }
        if(this.sday == "15")
        {
          this.IIn = this.PIAll[14].Item1
        }
        if(this.sday == "16")
        {
          this.IIn = this.PIAll[15].Item1
        }
        if(this.sday == "17")
        {
          this.IIn = this.PIAll[16].Item1
        }
        if(this.sday == "18")
        {
          this.IIn = this.PIAll[17].Item1
        }
        if(this.sday == "19")
        {
          this.IIn = this.PIAll[18].Item1
        }
        if(this.sday == "20")
        {
          this.IIn = this.PIAll[19].Item1
        }
        if(this.sday == "21")
        {
          this.IIn = this.PIAll[20].Item1
        }
        if(this.sday == "22")
        {
          this.IIn = this.PIAll[21].Item1
        }
        if(this.sday == "23")
        {
          this.IIn = this.PIAll[22].Item1
        }
        if(this.sday == "24")
        {
          this.IIn = this.PIAll[23].Item1
        }
        if(this.sday == "25")
        {
          this.IIn = this.PIAll[24].Item1
        }
        if(this.sday == "26")
        {
          this.IIn = this.PIAll[25].Item1
        }
        if(this.sday == "27")
        {
          this.IIn = this.PIAll[26].Item1
        }
        if(this.sday == "28")
        {
          this.IIn = this.PIAll[27].Item1
        }
        if(this.sday == "29")
        {
          this.IIn = this.PIAll[28].Item1
        }
        if(this.sday == "30")
        {
          this.IIn = this.PIAll[29].Item1
        }
        if(this.sday == "31")
        {
          this.IIn = this.PIAll[30].Item1
        }
      },
      error => {
        alert("Can't not get pi value by tagname21");
      });
  }
  feedPIValueByTagname22(tagname :string)
  {
    this.networkService.getPIValueByTagname(tagname).subscribe(
      data => {
        console.log(JSON.stringify(data))
        this.PIAll = data.result;
        //console.log(this.PIAll)
        this.countPI = this.PIAll.length;
        console.log(this.sday+"sec3")
        // console.log(this.countPI)
        if(this.sday == "1")
        {
          this.IDiesel = this.PIAll[0].Item1
        }
        if(this.sday == "2")
        {
          this.IDiesel = this.PIAll[1].Item1
        }
        if(this.sday == "3")
        {
          this.IDiesel = this.PIAll[2].Item1
        }
        if(this.sday == "4")
        {
          this.IDiesel = this.PIAll[3].Item1
        }
        if(this.sday == "5")
        {
          this.IDiesel = this.PIAll[4].Item1
        }
        if(this.sday == "6")
        {
          this.IDiesel = this.PIAll[5].Item1
        }
        if(this.sday == "7")
        {
          this.IDiesel = this.PIAll[6].Item1
        }
        if(this.sday == "8")
        {
          this.IDiesel = this.PIAll[7].Item1
        }
        if(this.sday == "9")
        {
          this.IDiesel = this.PIAll[8].Item1
        }
        if(this.sday == "10")
        {
          this.IDiesel = this.PIAll[9].Item1
        }
        if(this.sday == "11")
        {
          this.IDiesel = this.PIAll[10].Item1
        }
        if(this.sday == "12")
        {
          this.IDiesel = this.PIAll[11].Item1
        }
        if(this.sday == "13")
        {
          this.IDiesel = this.PIAll[12].Item1
        }
        if(this.sday == "14")
        {
          this.IDiesel = this.PIAll[13].Item1
        }
        if(this.sday == "15")
        {
          this.IDiesel = this.PIAll[14].Item1
        }
        if(this.sday == "16")
        {
          this.IDiesel = this.PIAll[15].Item1
        }
        if(this.sday == "17")
        {
          this.IDiesel = this.PIAll[16].Item1
        }
        if(this.sday == "18")
        {
          this.IDiesel = this.PIAll[17].Item1
        }
        if(this.sday == "19")
        {
          this.IDiesel = this.PIAll[18].Item1
        }
        if(this.sday == "20")
        {
          this.IDiesel = this.PIAll[19].Item1
        }
        if(this.sday == "21")
        {
          this.IDiesel = this.PIAll[20].Item1
        }
        if(this.sday == "22")
        {
          this.IDiesel = this.PIAll[21].Item1
        }
        if(this.sday == "23")
        {
          this.IDiesel = this.PIAll[22].Item1
        }
        if(this.sday == "24")
        {
          this.IDiesel = this.PIAll[23].Item1
        }
        if(this.sday == "25")
        {
          this.IDiesel = this.PIAll[24].Item1
        }
        if(this.sday == "26")
        {
          this.IDiesel = this.PIAll[25].Item1
        }
        if(this.sday == "27")
        {
          this.IDiesel = this.PIAll[26].Item1
        }
        if(this.sday == "28")
        {
          this.IDiesel = this.PIAll[27].Item1
        }
        if(this.sday == "29")
        {
          this.IDiesel = this.PIAll[28].Item1
        }
        if(this.sday == "30")
        {
          this.IDiesel = this.PIAll[29].Item1
        }
        if(this.sday == "31")
        {
          this.IDiesel = this.PIAll[30].Item1
        }
      },
      error => {
        alert("Can't not get pi value by tagname22");
      });
  }
  feedPIValueByTagname23(tagname :string)
  {
    this.networkService.getPIValueByTagname(tagname).subscribe(
      data => {
        console.log(JSON.stringify(data))
        this.PIAll = data.result;
        //console.log(this.PIAll)
        this.countPI = this.PIAll.length;
        console.log(this.sday+"sec3")
        // console.log(this.countPI)
        if(this.sday == "1")
        {
          this.IGasohol95 = this.PIAll[0].Item1
        }
        if(this.sday == "2")
        {
          this.IGasohol95 = this.PIAll[1].Item1
        }
        if(this.sday == "3")
        {
          this.IGasohol95 = this.PIAll[2].Item1
        }
        if(this.sday == "4")
        {
          this.IGasohol95 = this.PIAll[3].Item1
        }
        if(this.sday == "5")
        {
          this.IGasohol95 = this.PIAll[4].Item1
        }
        if(this.sday == "6")
        {
          this.IGasohol95 = this.PIAll[5].Item1
        }
        if(this.sday == "7")
        {
          this.IGasohol95 = this.PIAll[6].Item1
        }
        if(this.sday == "8")
        {
          this.IGasohol95 = this.PIAll[7].Item1
        }
        if(this.sday == "9")
        {
          this.IGasohol95 = this.PIAll[8].Item1
        }
        if(this.sday == "10")
        {
          this.IGasohol95 = this.PIAll[9].Item1
        }
        if(this.sday == "11")
        {
          this.IGasohol95 = this.PIAll[10].Item1
        }
        if(this.sday == "12")
        {
          this.IGasohol95 = this.PIAll[11].Item1
        }
        if(this.sday == "13")
        {
          this.IGasohol95 = this.PIAll[12].Item1
        }
        if(this.sday == "14")
        {
          this.IGasohol95 = this.PIAll[13].Item1
        }
        if(this.sday == "15")
        {
          this.IGasohol95 = this.PIAll[14].Item1
        }
        if(this.sday == "16")
        {
          this.IGasohol95 = this.PIAll[15].Item1
        }
        if(this.sday == "17")
        {
          this.IGasohol95 = this.PIAll[16].Item1
        }
        if(this.sday == "18")
        {
          this.IGasohol95 = this.PIAll[17].Item1
        }
        if(this.sday == "19")
        {
          this.IGasohol95 = this.PIAll[18].Item1
        }
        if(this.sday == "20")
        {
          this.IGasohol95 = this.PIAll[19].Item1
        }
        if(this.sday == "21")
        {
          this.IGasohol95 = this.PIAll[20].Item1
        }
        if(this.sday == "22")
        {
          this.IGasohol95 = this.PIAll[21].Item1
        }
        if(this.sday == "23")
        {
          this.IGasohol95 = this.PIAll[22].Item1
        }
        if(this.sday == "24")
        {
          this.IGasohol95 = this.PIAll[23].Item1
        }
        if(this.sday == "25")
        {
          this.IGasohol95 = this.PIAll[24].Item1
        }
        if(this.sday == "26")
        {
          this.IGasohol95 = this.PIAll[25].Item1
        }
        if(this.sday == "27")
        {
          this.IGasohol95 = this.PIAll[26].Item1
        }
        if(this.sday == "28")
        {
          this.IGasohol95 = this.PIAll[27].Item1
        }
        if(this.sday == "29")
        {
          this.IGasohol95 = this.PIAll[28].Item1
        }
        if(this.sday == "30")
        {
          this.IGasohol95 = this.PIAll[29].Item1
        }
        if(this.sday == "31")
        {
          this.IGasohol95 = this.PIAll[30].Item1
        }
      },
      error => {
        alert("Can't not get pi value by tagname23");
      });
  }
  feedPIValueByTagname24(tagname :string)
  {
    this.networkService.getPIValueByTagname(tagname).subscribe(
      data => {
        console.log(JSON.stringify(data))
        this.PIAll = data.result;
        //console.log(this.PIAll)
        this.countPI = this.PIAll.length;
        console.log(this.sday+"sec3")
        // console.log(this.countPI)
        if(this.sday == "1")
        {
          this.IOut = this.PIAll[0].Item1
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
        if(this.sday == "2")
        {
          this.IOut = this.PIAll[1].Item1
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
        if(this.sday == "3")
        {
          this.IOut = this.PIAll[2].Item1
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
        if(this.sday == "4")
        {
          this.IOut = this.PIAll[3].Item1
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
        if(this.sday == "5")
        {
          this.IOut = this.PIAll[4].Item1
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
        if(this.sday == "6")
        {
          this.IOut = this.PIAll[5].Item1
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
        if(this.sday == "7")
        {
          this.IOut = this.PIAll[6].Item1
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
        if(this.sday == "8")
        {
          this.IOut = this.PIAll[7].Item1
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
        if(this.sday == "9")
        {
          this.IOut = this.PIAll[8].Item1
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
        if(this.sday == "10")
        {
          this.IOut = this.PIAll[9].Item1
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
        if(this.sday == "11")
        {
          this.IOut = this.PIAll[10].Item1
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
        if(this.sday == "12")
        {
          this.IOut = this.PIAll[11].Item1
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
        if(this.sday == "13")
        {
          this.IOut = this.PIAll[12].Item1
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
        if(this.sday == "14")
        {
          this.IOut = this.PIAll[13].Item1
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
        if(this.sday == "15")
        {
          this.IOut = this.PIAll[14].Item1
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
        if(this.sday == "16")
        {
          this.IOut = this.PIAll[15].Item1
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
        if(this.sday == "17")
        {
          this.IOut = this.PIAll[16].Item1
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
        if(this.sday == "18")
        {
          this.IOut = this.PIAll[17].Item1
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
        if(this.sday == "19")
        {
          this.IOut = this.PIAll[18].Item1
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
        if(this.sday == "20")
        {
          this.IOut = this.PIAll[19].Item1
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
        if(this.sday == "21")
        {
          this.IOut = this.PIAll[20].Item1
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
        if(this.sday == "22")
        {
          this.IOut = this.PIAll[21].Item1
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
        if(this.sday == "23")
        {
          this.IOut = this.PIAll[22].Item1
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
        if(this.sday == "24")
        {
          this.IOut = this.PIAll[23].Item1
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
        if(this.sday == "25")
        {
          this.IOut = this.PIAll[24].Item1
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
        if(this.sday == "26")
        {
          this.IOut = this.PIAll[25].Item1
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
        if(this.sday == "27")
        {
          this.IOut = this.PIAll[26].Item1
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
        if(this.sday == "28")
        {
          this.IOut = this.PIAll[27].Item1
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
        if(this.sday == "29")
        {
          this.IOut = this.PIAll[28].Item1
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
        if(this.sday == "30")
        {
          this.IOut = this.PIAll[29].Item1
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
        if(this.sday == "31")
        {
          this.IOut = this.PIAll[30].Item1
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
  // chart B
  feedPIValueByTagname25(tagname :string)
  {
    this.networkService.getPIValueByTagname(tagname).subscribe(
      data => {
        console.log(JSON.stringify(data))
        this.PIAll = data.result;
        //console.log(this.PIAll)
        this.countPI = this.PIAll.length;
        console.log(this.sday+"sec3")
        // console.log(this.countPI)
        if(this.sday == "1")
        {
          this.Bsale = this.PIAll[0].Item1
        }
        if(this.sday == "2")
        {
          this.Bsale = this.PIAll[1].Item1
        }
        if(this.sday == "3")
        {
          this.Bsale = this.PIAll[2].Item1
        }
        if(this.sday == "4")
        {
          this.Bsale = this.PIAll[3].Item1
        }
        if(this.sday == "5")
        {
          this.Bsale = this.PIAll[4].Item1
        }
        if(this.sday == "6")
        {
          this.Bsale = this.PIAll[5].Item1
        }
        if(this.sday == "7")
        {
          this.Bsale = this.PIAll[6].Item1
        }
        if(this.sday == "8")
        {
          this.Bsale = this.PIAll[7].Item1
        }
        if(this.sday == "9")
        {
          this.Bsale = this.PIAll[8].Item1
        }
        if(this.sday == "10")
        {
          this.Bsale = this.PIAll[9].Item1
        }
        if(this.sday == "11")
        {
          this.Bsale = this.PIAll[10].Item1
        }
        if(this.sday == "12")
        {
          this.Bsale = this.PIAll[11].Item1
        }
        if(this.sday == "13")
        {
          this.Bsale = this.PIAll[12].Item1
        }
        if(this.sday == "14")
        {
          this.Bsale = this.PIAll[13].Item1
        }
        if(this.sday == "15")
        {
          this.Bsale = this.PIAll[14].Item1
        }
        if(this.sday == "16")
        {
          this.Bsale = this.PIAll[15].Item1
        }
        if(this.sday == "17")
        {
          this.Bsale = this.PIAll[16].Item1
        }
        if(this.sday == "18")
        {
          this.Bsale = this.PIAll[17].Item1
        }
        if(this.sday == "19")
        {
          this.Bsale = this.PIAll[18].Item1
        }
        if(this.sday == "20")
        {
          this.Bsale = this.PIAll[19].Item1
        }
        if(this.sday == "21")
        {
          this.Bsale = this.PIAll[20].Item1
        }
        if(this.sday == "22")
        {
          this.Bsale = this.PIAll[21].Item1
        }
        if(this.sday == "23")
        {
          this.Bsale = this.PIAll[22].Item1
        }
        if(this.sday == "24")
        {
          this.Bsale = this.PIAll[23].Item1
        }
        if(this.sday == "25")
        {
          this.Bsale = this.PIAll[24].Item1
        }
        if(this.sday == "26")
        {
          this.Bsale = this.PIAll[25].Item1
        }
        if(this.sday == "27")
        {
          this.Bsale = this.PIAll[26].Item1
        }
        if(this.sday == "28")
        {
          this.Bsale = this.PIAll[27].Item1
        }
        if(this.sday == "29")
        {
          this.Bsale = this.PIAll[28].Item1
        }
        if(this.sday == "30")
        {
          this.Bsale = this.PIAll[29].Item1
        }
        if(this.sday == "31")
        {
          this.Bsale = this.PIAll[30].Item1
        }
      },
      error => {
        alert("Can't not get pi value by tagname25");
      });
  }
  feedPIValueByTagname26(tagname :string)
  {
    this.networkService.getPIValueByTagname(tagname).subscribe(
      data => {
        console.log(JSON.stringify(data))
        this.PIAll = data.result;
        //console.log(this.PIAll)
        this.countPI = this.PIAll.length;
        console.log(this.sday+"sec3")
        // console.log(this.countPI)
        if(this.sday == "1")
        {
          this.BIn = this.PIAll[0].Item1
        }
        if(this.sday == "2")
        {
          this.BIn = this.PIAll[1].Item1
        }
        if(this.sday == "3")
        {
          this.BIn = this.PIAll[2].Item1
        }
        if(this.sday == "4")
        {
          this.BIn = this.PIAll[3].Item1
        }
        if(this.sday == "5")
        {
          this.BIn = this.PIAll[4].Item1
        }
        if(this.sday == "6")
        {
          this.BIn = this.PIAll[5].Item1
        }
        if(this.sday == "7")
        {
          this.BIn = this.PIAll[6].Item1
        }
        if(this.sday == "8")
        {
          this.BIn = this.PIAll[7].Item1
        }
        if(this.sday == "9")
        {
          this.BIn = this.PIAll[8].Item1
        }
        if(this.sday == "10")
        {
          this.BIn = this.PIAll[9].Item1
        }
        if(this.sday == "11")
        {
          this.BIn = this.PIAll[10].Item1
        }
        if(this.sday == "12")
        {
          this.BIn = this.PIAll[11].Item1
        }
        if(this.sday == "13")
        {
          this.BIn = this.PIAll[12].Item1
        }
        if(this.sday == "14")
        {
          this.BIn = this.PIAll[13].Item1
        }
        if(this.sday == "15")
        {
          this.BIn = this.PIAll[14].Item1
        }
        if(this.sday == "16")
        {
          this.BIn = this.PIAll[15].Item1
        }
        if(this.sday == "17")
        {
          this.BIn = this.PIAll[16].Item1
        }
        if(this.sday == "18")
        {
          this.BIn = this.PIAll[17].Item1
        }
        if(this.sday == "19")
        {
          this.BIn = this.PIAll[18].Item1
        }
        if(this.sday == "20")
        {
          this.BIn = this.PIAll[19].Item1
        }
        if(this.sday == "21")
        {
          this.BIn = this.PIAll[20].Item1
        }
        if(this.sday == "22")
        {
          this.BIn = this.PIAll[21].Item1
        }
        if(this.sday == "23")
        {
          this.BIn = this.PIAll[22].Item1
        }
        if(this.sday == "24")
        {
          this.BIn = this.PIAll[23].Item1
        }
        if(this.sday == "25")
        {
          this.BIn = this.PIAll[24].Item1
        }
        if(this.sday == "26")
        {
          this.BIn = this.PIAll[25].Item1
        }
        if(this.sday == "27")
        {
          this.BIn = this.PIAll[26].Item1
        }
        if(this.sday == "28")
        {
          this.BIn = this.PIAll[27].Item1
        }
        if(this.sday == "29")
        {
          this.BIn = this.PIAll[28].Item1
        }
        if(this.sday == "30")
        {
          this.BIn = this.PIAll[29].Item1
        }
        if(this.sday == "31")
        {
          this.BIn = this.PIAll[30].Item1
        }
      },
      error => {
        alert("Can't not get pi value by tagname26");
      });
  }
  feedPIValueByTagname27(tagname :string)
  {
    this.networkService.getPIValueByTagname(tagname).subscribe(
      data => {
        console.log(JSON.stringify(data))
        this.PIAll = data.result;
        //console.log(this.PIAll)
        this.countPI = this.PIAll.length;
        console.log(this.sday+"sec3")
        // console.log(this.countPI)
        if(this.sday == "1")
        {
          this.BDiesel = this.PIAll[0].Item1
        }
        if(this.sday == "2")
        {
          this.BDiesel = this.PIAll[1].Item1
        }
        if(this.sday == "3")
        {
          this.BDiesel = this.PIAll[2].Item1
        }
        if(this.sday == "4")
        {
          this.BDiesel = this.PIAll[3].Item1
        }
        if(this.sday == "5")
        {
          this.BDiesel = this.PIAll[4].Item1
        }
        if(this.sday == "6")
        {
          this.BDiesel = this.PIAll[5].Item1
        }
        if(this.sday == "7")
        {
          this.BDiesel = this.PIAll[6].Item1
        }
        if(this.sday == "8")
        {
          this.BDiesel = this.PIAll[7].Item1
        }
        if(this.sday == "9")
        {
          this.BDiesel = this.PIAll[8].Item1
        }
        if(this.sday == "10")
        {
          this.BDiesel = this.PIAll[9].Item1
        }
        if(this.sday == "11")
        {
          this.BDiesel = this.PIAll[10].Item1
        }
        if(this.sday == "12")
        {
          this.BDiesel = this.PIAll[11].Item1
        }
        if(this.sday == "13")
        {
          this.BDiesel = this.PIAll[12].Item1
        }
        if(this.sday == "14")
        {
          this.BDiesel = this.PIAll[13].Item1
        }
        if(this.sday == "15")
        {
          this.BDiesel = this.PIAll[14].Item1
        }
        if(this.sday == "16")
        {
          this.BDiesel = this.PIAll[15].Item1
        }
        if(this.sday == "17")
        {
          this.BDiesel = this.PIAll[16].Item1
        }
        if(this.sday == "18")
        {
          this.BDiesel = this.PIAll[17].Item1
        }
        if(this.sday == "19")
        {
          this.BDiesel = this.PIAll[18].Item1
        }
        if(this.sday == "20")
        {
          this.BDiesel = this.PIAll[19].Item1
        }
        if(this.sday == "21")
        {
          this.BDiesel = this.PIAll[20].Item1
        }
        if(this.sday == "22")
        {
          this.BDiesel = this.PIAll[21].Item1
        }
        if(this.sday == "23")
        {
          this.BDiesel = this.PIAll[22].Item1
        }
        if(this.sday == "24")
        {
          this.BDiesel = this.PIAll[23].Item1
        }
        if(this.sday == "25")
        {
          this.BDiesel = this.PIAll[24].Item1
        }
        if(this.sday == "26")
        {
          this.BDiesel = this.PIAll[25].Item1
        }
        if(this.sday == "27")
        {
          this.BDiesel = this.PIAll[26].Item1
        }
        if(this.sday == "28")
        {
          this.BDiesel = this.PIAll[27].Item1
        }
        if(this.sday == "29")
        {
          this.BDiesel = this.PIAll[28].Item1
        }
        if(this.sday == "30")
        {
          this.BDiesel = this.PIAll[29].Item1
        }
        if(this.sday == "31")
        {
          this.BDiesel = this.PIAll[30].Item1
        }
      },
      error => {
        alert("Can't not get pi value by tagname27");
      });
  }
  feedPIValueByTagname28(tagname :string)
  {
    this.networkService.getPIValueByTagname(tagname).subscribe(
      data => {
        console.log(JSON.stringify(data))
        this.PIAll = data.result;
        //console.log(this.PIAll)
        this.countPI = this.PIAll.length;
        console.log(this.sday+"sec3")
        // console.log(this.countPI)
        if(this.sday == "1")
        {
          this.BGasohol95 = this.PIAll[0].Item1
        }
        if(this.sday == "2")
        {
          this.BGasohol95 = this.PIAll[1].Item1
        }
        if(this.sday == "3")
        {
          this.BGasohol95 = this.PIAll[2].Item1
        }
        if(this.sday == "4")
        {
          this.BGasohol95 = this.PIAll[3].Item1
        }
        if(this.sday == "5")
        {
          this.BGasohol95 = this.PIAll[4].Item1
        }
        if(this.sday == "6")
        {
          this.BGasohol95 = this.PIAll[5].Item1
        }
        if(this.sday == "7")
        {
          this.BGasohol95 = this.PIAll[6].Item1
        }
        if(this.sday == "8")
        {
          this.BGasohol95 = this.PIAll[7].Item1
        }
        if(this.sday == "9")
        {
          this.BGasohol95 = this.PIAll[8].Item1
        }
        if(this.sday == "10")
        {
          this.BGasohol95 = this.PIAll[9].Item1
        }
        if(this.sday == "11")
        {
          this.BGasohol95 = this.PIAll[10].Item1
        }
        if(this.sday == "12")
        {
          this.BGasohol95 = this.PIAll[11].Item1
        }
        if(this.sday == "13")
        {
          this.BGasohol95 = this.PIAll[12].Item1
        }
        if(this.sday == "14")
        {
          this.BGasohol95 = this.PIAll[13].Item1
        }
        if(this.sday == "15")
        {
          this.BGasohol95 = this.PIAll[14].Item1
        }
        if(this.sday == "16")
        {
          this.BGasohol95 = this.PIAll[15].Item1
        }
        if(this.sday == "17")
        {
          this.BGasohol95 = this.PIAll[16].Item1
        }
        if(this.sday == "18")
        {
          this.BGasohol95 = this.PIAll[17].Item1
        }
        if(this.sday == "19")
        {
          this.BGasohol95 = this.PIAll[18].Item1
        }
        if(this.sday == "20")
        {
          this.BGasohol95 = this.PIAll[19].Item1
        }
        if(this.sday == "21")
        {
          this.BGasohol95 = this.PIAll[20].Item1
        }
        if(this.sday == "22")
        {
          this.BGasohol95 = this.PIAll[21].Item1
        }
        if(this.sday == "23")
        {
          this.BGasohol95 = this.PIAll[22].Item1
        }
        if(this.sday == "24")
        {
          this.BGasohol95 = this.PIAll[23].Item1
        }
        if(this.sday == "25")
        {
          this.BGasohol95 = this.PIAll[24].Item1
        }
        if(this.sday == "26")
        {
          this.BGasohol95 = this.PIAll[25].Item1
        }
        if(this.sday == "27")
        {
          this.BGasohol95 = this.PIAll[26].Item1
        }
        if(this.sday == "28")
        {
          this.BGasohol95 = this.PIAll[27].Item1
        }
        if(this.sday == "29")
        {
          this.BGasohol95 = this.PIAll[28].Item1
        }
        if(this.sday == "30")
        {
          this.BGasohol95 = this.PIAll[29].Item1
        }
        if(this.sday == "31")
        {
          this.BGasohol95 = this.PIAll[30].Item1
        }
      },
      error => {
        alert("Can't not get pi value by tagname28");
      });
  }
  feedPIValueByTagname29(tagname :string)
  {
    this.networkService.getPIValueByTagname(tagname).subscribe(
      data => {
        console.log(JSON.stringify(data))
        this.PIAll = data.result;
        //console.log(this.PIAll)
        this.countPI = this.PIAll.length;
        console.log(this.sday+"sec3")
        // console.log(this.countPI)
        if(this.sday == "1")
        {
          this.BOut = this.PIAll[0].Item1
          console.log("b("+this.Bsale+"+"+this.BIn+"+"+this.BDiesel+"+"+this.BGasohol95+"+"+this.BOut+")")
          this.barChartData6 = [
            { data: [this.Bsale,this.BIn,this.BDiesel,this.BGasohol95,this.BOut], 
              label: 'Time',
              backgroundColor: "rgb(204, 0, 0)",
            
            }
          ];
        }
        if(this.sday == "2")
        {
          this.BOut = this.PIAll[1].Item1
          console.log("b("+this.Bsale+"+"+this.BIn+"+"+this.BDiesel+"+"+this.BGasohol95+"+"+this.BOut+")")
          this.barChartData6 = [
            { data: [this.Bsale,this.BIn,this.BDiesel,this.BGasohol95,this.BOut], 
              label: 'Time',
              backgroundColor: "rgb(204, 0, 0)",
            
            }
          ];
        }
        if(this.sday == "3")
        {
          this.BOut = this.PIAll[2].Item1
          console.log("b("+this.Bsale+"+"+this.BIn+"+"+this.BDiesel+"+"+this.BGasohol95+"+"+this.BOut+")")
          this.barChartData6 = [
            { data: [this.Bsale,this.BIn,this.BDiesel,this.BGasohol95,this.BOut], 
              label: 'Time',
              backgroundColor: "rgb(204, 0, 0)",
            
            }
          ];
        }
        if(this.sday == "4")
        {
          this.BOut = this.PIAll[3].Item1
          console.log("b("+this.Bsale+"+"+this.BIn+"+"+this.BDiesel+"+"+this.BGasohol95+"+"+this.BOut+")")
          this.barChartData6 = [
            { data: [this.Bsale,this.BIn,this.BDiesel,this.BGasohol95,this.BOut], 
              label: 'Time',
              backgroundColor: "rgb(204, 0, 0)",
            
            }
          ];
        }
        if(this.sday == "5")
        {
          this.BOut = this.PIAll[4].Item1
          console.log("b("+this.Bsale+"+"+this.BIn+"+"+this.BDiesel+"+"+this.BGasohol95+"+"+this.BOut+")")
          this.barChartData6 = [
            { data: [this.Bsale,this.BIn,this.BDiesel,this.BGasohol95,this.BOut], 
              label: 'Time',
              backgroundColor: "rgb(204, 0, 0)",
            
            }
          ];
        }
        if(this.sday == "6")
        {
          this.BOut = this.PIAll[5].Item1
          console.log("b("+this.Bsale+"+"+this.BIn+"+"+this.BDiesel+"+"+this.BGasohol95+"+"+this.BOut+")")
          this.barChartData6 = [
            { data: [this.Bsale,this.BIn,this.BDiesel,this.BGasohol95,this.BOut], 
              label: 'Time',
              backgroundColor: "rgb(204, 0, 0)",
            
            }
          ];
        }
        if(this.sday == "7")
        {
          this.BOut = this.PIAll[6].Item1
          console.log("b("+this.Bsale+"+"+this.BIn+"+"+this.BDiesel+"+"+this.BGasohol95+"+"+this.BOut+")")
          this.barChartData6 = [
            { data: [this.Bsale,this.BIn,this.BDiesel,this.BGasohol95,this.BOut], 
              label: 'Time',
              backgroundColor: "rgb(204, 0, 0)",
            
            }
          ];
        }
        if(this.sday == "8")
        {
          this.BOut = this.PIAll[7].Item1
          console.log("b("+this.Bsale+"+"+this.BIn+"+"+this.BDiesel+"+"+this.BGasohol95+"+"+this.BOut+")")
          this.barChartData6 = [
            { data: [this.Bsale,this.BIn,this.BDiesel,this.BGasohol95,this.BOut], 
              label: 'Time',
              backgroundColor: "rgb(204, 0, 0)",
            
            }
          ];
        }
        if(this.sday == "9")
        {
          this.BOut = this.PIAll[8].Item1
          console.log("b("+this.Bsale+"+"+this.BIn+"+"+this.BDiesel+"+"+this.BGasohol95+"+"+this.BOut+")")
          this.barChartData6 = [
            { data: [this.Bsale,this.BIn,this.BDiesel,this.BGasohol95,this.BOut], 
              label: 'Time',
              backgroundColor: "rgb(204, 0, 0)",
            
            }
          ];
        }
        if(this.sday == "10")
        {
          this.BOut = this.PIAll[9].Item1
          console.log("b("+this.Bsale+"+"+this.BIn+"+"+this.BDiesel+"+"+this.BGasohol95+"+"+this.BOut+")")
          this.barChartData6 = [
            { data: [this.Bsale,this.BIn,this.BDiesel,this.BGasohol95,this.BOut], 
              label: 'Time',
              backgroundColor: "rgb(204, 0, 0)",
            
            }
          ];
        }
        if(this.sday == "11")
        {
          this.BOut = this.PIAll[10].Item1
          console.log("b("+this.Bsale+"+"+this.BIn+"+"+this.BDiesel+"+"+this.BGasohol95+"+"+this.BOut+")")
          this.barChartData6 = [
            { data: [this.Bsale,this.BIn,this.BDiesel,this.BGasohol95,this.BOut], 
              label: 'Time',
              backgroundColor: "rgb(204, 0, 0)",
            
            }
          ];
        }
        if(this.sday == "12")
        {
          this.BOut = this.PIAll[11].Item1
          console.log("b("+this.Bsale+"+"+this.BIn+"+"+this.BDiesel+"+"+this.BGasohol95+"+"+this.BOut+")")
          this.barChartData6 = [
            { data: [this.Bsale,this.BIn,this.BDiesel,this.BGasohol95,this.BOut], 
              label: 'Time',
              backgroundColor: "rgb(204, 0, 0)",
            
            }
          ];
        }
        if(this.sday == "13")
        {
          this.BOut = this.PIAll[12].Item1
          console.log("b("+this.Bsale+"+"+this.BIn+"+"+this.BDiesel+"+"+this.BGasohol95+"+"+this.BOut+")")
          this.barChartData6 = [
            { data: [this.Bsale,this.BIn,this.BDiesel,this.BGasohol95,this.BOut], 
              label: 'Time',
              backgroundColor: "rgb(204, 0, 0)",
            
            }
          ];
        }
        if(this.sday == "14")
        {
          this.BOut = this.PIAll[13].Item1
          console.log("b("+this.Bsale+"+"+this.BIn+"+"+this.BDiesel+"+"+this.BGasohol95+"+"+this.BOut+")")
          this.barChartData6 = [
            { data: [this.Bsale,this.BIn,this.BDiesel,this.BGasohol95,this.BOut], 
              label: 'Time',
              backgroundColor: "rgb(204, 0, 0)",
            
            }
          ];
        }
        if(this.sday == "15")
        {
          this.BOut = this.PIAll[14].Item1
          console.log("b("+this.Bsale+"+"+this.BIn+"+"+this.BDiesel+"+"+this.BGasohol95+"+"+this.BOut+")")
          this.barChartData6 = [
            { data: [this.Bsale,this.BIn,this.BDiesel,this.BGasohol95,this.BOut], 
              label: 'Time',
              backgroundColor: "rgb(204, 0, 0)",
            
            }
          ];
        }
        if(this.sday == "16")
        {
          this.BOut = this.PIAll[15].Item1
          console.log("b("+this.Bsale+"+"+this.BIn+"+"+this.BDiesel+"+"+this.BGasohol95+"+"+this.BOut+")")
          this.barChartData6 = [
            { data: [this.Bsale,this.BIn,this.BDiesel,this.BGasohol95,this.BOut], 
              label: 'Time',
              backgroundColor: "rgb(204, 0, 0)",
            
            }
          ];
        }
        if(this.sday == "17")
        {
          this.BOut = this.PIAll[16].Item1
          console.log("b("+this.Bsale+"+"+this.BIn+"+"+this.BDiesel+"+"+this.BGasohol95+"+"+this.BOut+")")
          this.barChartData6 = [
            { data: [this.Bsale,this.BIn,this.BDiesel,this.BGasohol95,this.BOut], 
              label: 'Time',
              backgroundColor: "rgb(204, 0, 0)",
            
            }
          ];
        }
        if(this.sday == "18")
        {
          this.BOut = this.PIAll[17].Item1
          console.log("b("+this.Bsale+"+"+this.BIn+"+"+this.BDiesel+"+"+this.BGasohol95+"+"+this.BOut+")")
          this.barChartData6 = [
            { data: [this.Bsale,this.BIn,this.BDiesel,this.BGasohol95,this.BOut], 
              label: 'Time',
              backgroundColor: "rgb(204, 0, 0)",
            
            }
          ];
        }
        if(this.sday == "19")
        {
          this.BOut = this.PIAll[18].Item1
          console.log("b("+this.Bsale+"+"+this.BIn+"+"+this.BDiesel+"+"+this.BGasohol95+"+"+this.BOut+")")
          this.barChartData6 = [
            { data: [this.Bsale,this.BIn,this.BDiesel,this.BGasohol95,this.BOut], 
              label: 'Time',
              backgroundColor: "rgb(204, 0, 0)",
            
            }
          ];
        }
        if(this.sday == "20")
        {
          this.BOut = this.PIAll[19].Item1
          console.log("b("+this.Bsale+"+"+this.BIn+"+"+this.BDiesel+"+"+this.BGasohol95+"+"+this.BOut+")")
          this.barChartData6 = [
            { data: [this.Bsale,this.BIn,this.BDiesel,this.BGasohol95,this.BOut], 
              label: 'Time',
              backgroundColor: "rgb(204, 0, 0)",
            
            }
          ];
        }
        if(this.sday == "21")
        {
          this.BOut = this.PIAll[20].Item1
          console.log("b("+this.Bsale+"+"+this.BIn+"+"+this.BDiesel+"+"+this.BGasohol95+"+"+this.BOut+")")
          this.barChartData6 = [
            { data: [this.Bsale,this.BIn,this.BDiesel,this.BGasohol95,this.BOut], 
              label: 'Time',
              backgroundColor: "rgb(204, 0, 0)",
            
            }
          ];
        }
        if(this.sday == "22")
        {
          this.BOut = this.PIAll[21].Item1
          console.log("b("+this.Bsale+"+"+this.BIn+"+"+this.BDiesel+"+"+this.BGasohol95+"+"+this.BOut+")")
          this.barChartData6 = [
            { data: [this.Bsale,this.BIn,this.BDiesel,this.BGasohol95,this.BOut], 
              label: 'Time',
              backgroundColor: "rgb(204, 0, 0)",
            
            }
          ];
        }
        if(this.sday == "23")
        {
          this.BOut = this.PIAll[22].Item1
          console.log("b("+this.Bsale+"+"+this.BIn+"+"+this.BDiesel+"+"+this.BGasohol95+"+"+this.BOut+")")
          this.barChartData6 = [
            { data: [this.Bsale,this.BIn,this.BDiesel,this.BGasohol95,this.BOut], 
              label: 'Time',
              backgroundColor: "rgb(204, 0, 0)",
            
            }
          ];
        }
        if(this.sday == "24")
        {
          this.BOut = this.PIAll[23].Item1
          console.log("b("+this.Bsale+"+"+this.BIn+"+"+this.BDiesel+"+"+this.BGasohol95+"+"+this.BOut+")")
          this.barChartData6 = [
            { data: [this.Bsale,this.BIn,this.BDiesel,this.BGasohol95,this.BOut], 
              label: 'Time',
              backgroundColor: "rgb(204, 0, 0)",
            
            }
          ];
        }
        if(this.sday == "25")
        {
          this.BOut = this.PIAll[24].Item1
          console.log("b("+this.Bsale+"+"+this.BIn+"+"+this.BDiesel+"+"+this.BGasohol95+"+"+this.BOut+")")
          this.barChartData6 = [
            { data: [this.Bsale,this.BIn,this.BDiesel,this.BGasohol95,this.BOut], 
              label: 'Time',
              backgroundColor: "rgb(204, 0, 0)",
            
            }
          ];
        }
        if(this.sday == "26")
        {
          this.BOut = this.PIAll[25].Item1
          console.log("b("+this.Bsale+"+"+this.BIn+"+"+this.BDiesel+"+"+this.BGasohol95+"+"+this.BOut+")")
          this.barChartData6 = [
            { data: [this.Bsale,this.BIn,this.BDiesel,this.BGasohol95,this.BOut], 
              label: 'Time',
              backgroundColor: "rgb(204, 0, 0)",
            
            }
          ];
        }
        if(this.sday == "27")
        {
          this.BOut = this.PIAll[26].Item1
          console.log("b("+this.Bsale+"+"+this.BIn+"+"+this.BDiesel+"+"+this.BGasohol95+"+"+this.BOut+")")
          this.barChartData6 = [
            { data: [this.Bsale,this.BIn,this.BDiesel,this.BGasohol95,this.BOut], 
              label: 'Time',
              backgroundColor: "rgb(204, 0, 0)",
            
            }
          ];
        }
        if(this.sday == "28")
        {
          this.BOut = this.PIAll[27].Item1
          console.log("b("+this.Bsale+"+"+this.BIn+"+"+this.BDiesel+"+"+this.BGasohol95+"+"+this.BOut+")")
          this.barChartData6 = [
            { data: [this.Bsale,this.BIn,this.BDiesel,this.BGasohol95,this.BOut], 
              label: 'Time',
              backgroundColor: "rgb(204, 0, 0)",
            
            }
          ];
        }
        if(this.sday == "29")
        {
          this.BOut = this.PIAll[28].Item1
          console.log("b("+this.Bsale+"+"+this.BIn+"+"+this.BDiesel+"+"+this.BGasohol95+"+"+this.BOut+")")
          this.barChartData6 = [
            { data: [this.Bsale,this.BIn,this.BDiesel,this.BGasohol95,this.BOut], 
              label: 'Time',
              backgroundColor: "rgb(204, 0, 0)",
            
            }
          ];
        }
        if(this.sday == "30")
        {
          this.BOut = this.PIAll[29].Item1
          console.log("b("+this.Bsale+"+"+this.BIn+"+"+this.BDiesel+"+"+this.BGasohol95+"+"+this.BOut+")")
          this.barChartData6 = [
            { data: [this.Bsale,this.BIn,this.BDiesel,this.BGasohol95,this.BOut], 
              label: 'Time',
              backgroundColor: "rgb(204, 0, 0)",
            
            }
          ];
        }
        if(this.sday == "31")
        {
          this.BOut = this.PIAll[30].Item1
          console.log("b("+this.Bsale+"+"+this.BIn+"+"+this.BDiesel+"+"+this.BGasohol95+"+"+this.BOut+")")
          this.barChartData6 = [
            { data: [this.Bsale,this.BIn,this.BDiesel,this.BGasohol95,this.BOut], 
              label: 'Time',
              backgroundColor: "rgb(204, 0, 0)",
            
            }
          ];
        }
      },
      error => {
        alert("Can't not get pi value by tagname24");
      });
  }
  // chart F
  feedPIValueByTagname30(tagname :string)
  {
    this.networkService.getPIValueByTagname(tagname).subscribe(
      data => {
        console.log(JSON.stringify(data))
        this.PIAll = data.result;
        //console.log(this.PIAll)
        this.countPI = this.PIAll.length;
        console.log(this.sday+"sec3")
        // console.log(this.countPI)
        if(this.sday == "1")
        {
          this.Fsale = this.PIAll[0].Item1
        }
        if(this.sday == "2")
        {
          this.Fsale = this.PIAll[1].Item1
        }
        if(this.sday == "3")
        {
          this.Fsale = this.PIAll[2].Item1
        }
        if(this.sday == "4")
        {
          this.Fsale = this.PIAll[3].Item1
        }
        if(this.sday == "5")
        {
          this.Fsale = this.PIAll[4].Item1
        }
        if(this.sday == "6")
        {
          this.Fsale = this.PIAll[5].Item1
        }
        if(this.sday == "7")
        {
          this.Fsale = this.PIAll[6].Item1
        }
        if(this.sday == "8")
        {
          this.Fsale = this.PIAll[7].Item1
        }
        if(this.sday == "9")
        {
          this.Fsale = this.PIAll[8].Item1
        }
        if(this.sday == "10")
        {
          this.Fsale = this.PIAll[9].Item1
        }
        if(this.sday == "11")
        {
          this.Fsale = this.PIAll[10].Item1
        }
        if(this.sday == "12")
        {
          this.Fsale = this.PIAll[11].Item1
        }
        if(this.sday == "13")
        {
          this.Fsale = this.PIAll[12].Item1
        }
        if(this.sday == "14")
        {
          this.Fsale = this.PIAll[13].Item1
        }
        if(this.sday == "15")
        {
          this.Fsale = this.PIAll[14].Item1
        }
        if(this.sday == "16")
        {
          this.Fsale = this.PIAll[15].Item1
        }
        if(this.sday == "17")
        {
          this.Fsale = this.PIAll[16].Item1
        }
        if(this.sday == "18")
        {
          this.Fsale = this.PIAll[17].Item1
        }
        if(this.sday == "19")
        {
          this.Fsale = this.PIAll[18].Item1
        }
        if(this.sday == "20")
        {
          this.Fsale = this.PIAll[19].Item1
        }
        if(this.sday == "21")
        {
          this.Fsale = this.PIAll[20].Item1
        }
        if(this.sday == "22")
        {
          this.Fsale = this.PIAll[21].Item1
        }
        if(this.sday == "23")
        {
          this.Fsale = this.PIAll[22].Item1
        }
        if(this.sday == "24")
        {
          this.Fsale = this.PIAll[23].Item1
        }
        if(this.sday == "25")
        {
          this.Fsale = this.PIAll[24].Item1
        }
        if(this.sday == "26")
        {
          this.Fsale = this.PIAll[25].Item1
        }
        if(this.sday == "27")
        {
          this.Fsale = this.PIAll[26].Item1
        }
        if(this.sday == "28")
        {
          this.Fsale = this.PIAll[27].Item1
        }
        if(this.sday == "29")
        {
          this.Fsale = this.PIAll[28].Item1
        }
        if(this.sday == "30")
        {
          this.Fsale = this.PIAll[29].Item1
        }
        if(this.sday == "31")
        {
          this.Fsale = this.PIAll[30].Item1
        }
      },
      error => {
        alert("Can't not get pi value by tagname30");
      });
  }
  feedPIValueByTagname31(tagname :string)
  {
    this.networkService.getPIValueByTagname(tagname).subscribe(
      data => {
        console.log(JSON.stringify(data))
        this.PIAll = data.result;
        //console.log(this.PIAll)
        this.countPI = this.PIAll.length;
        console.log(this.sday+"sec3")
        // console.log(this.countPI)
        if(this.sday == "1")
        {
          this.FIn = this.PIAll[0].Item1
        }
        if(this.sday == "2")
        {
          this.FIn = this.PIAll[1].Item1
        }
        if(this.sday == "3")
        {
          this.FIn = this.PIAll[2].Item1
        }
        if(this.sday == "4")
        {
          this.FIn = this.PIAll[3].Item1
        }
        if(this.sday == "5")
        {
          this.FIn = this.PIAll[4].Item1
        }
        if(this.sday == "6")
        {
          this.FIn = this.PIAll[5].Item1
        }
        if(this.sday == "7")
        {
          this.FIn = this.PIAll[6].Item1
        }
        if(this.sday == "8")
        {
          this.FIn = this.PIAll[7].Item1
        }
        if(this.sday == "9")
        {
          this.FIn = this.PIAll[8].Item1
        }
        if(this.sday == "10")
        {
          this.FIn = this.PIAll[9].Item1
        }
        if(this.sday == "11")
        {
          this.FIn = this.PIAll[10].Item1
        }
        if(this.sday == "12")
        {
          this.FIn = this.PIAll[11].Item1
        }
        if(this.sday == "13")
        {
          this.FIn = this.PIAll[12].Item1
        }
        if(this.sday == "14")
        {
          this.FIn = this.PIAll[13].Item1
        }
        if(this.sday == "15")
        {
          this.FIn = this.PIAll[14].Item1
        }
        if(this.sday == "16")
        {
          this.FIn = this.PIAll[15].Item1
        }
        if(this.sday == "17")
        {
          this.FIn = this.PIAll[16].Item1
        }
        if(this.sday == "18")
        {
          this.FIn = this.PIAll[17].Item1
        }
        if(this.sday == "19")
        {
          this.FIn = this.PIAll[18].Item1
        }
        if(this.sday == "20")
        {
          this.FIn = this.PIAll[19].Item1
        }
        if(this.sday == "21")
        {
          this.FIn = this.PIAll[20].Item1
        }
        if(this.sday == "22")
        {
          this.FIn = this.PIAll[21].Item1
        }
        if(this.sday == "23")
        {
          this.FIn = this.PIAll[22].Item1
        }
        if(this.sday == "24")
        {
          this.FIn = this.PIAll[23].Item1
        }
        if(this.sday == "25")
        {
          this.FIn = this.PIAll[24].Item1
        }
        if(this.sday == "26")
        {
          this.FIn = this.PIAll[25].Item1
        }
        if(this.sday == "27")
        {
          this.FIn = this.PIAll[26].Item1
        }
        if(this.sday == "28")
        {
          this.FIn = this.PIAll[27].Item1
        }
        if(this.sday == "29")
        {
          this.FIn = this.PIAll[28].Item1
        }
        if(this.sday == "30")
        {
          this.FIn = this.PIAll[29].Item1
        }
        if(this.sday == "31")
        {
          this.FIn = this.PIAll[30].Item1
        }
      },
      error => {
        alert("Can't not get pi value by tagname31");
      });
  }
  feedPIValueByTagname32(tagname :string)
  {
    this.networkService.getPIValueByTagname(tagname).subscribe(
      data => {
        console.log(JSON.stringify(data))
        this.PIAll = data.result;
        //console.log(this.PIAll)
        this.countPI = this.PIAll.length;
        console.log(this.sday+"sec3")
        // console.log(this.countPI)
        if(this.sday == "1")
        {
          this.FDiesel = this.PIAll[0].Item1
        }
        if(this.sday == "2")
        {
          this.FDiesel = this.PIAll[1].Item1
        }
        if(this.sday == "3")
        {
          this.FDiesel = this.PIAll[2].Item1
        }
        if(this.sday == "4")
        {
          this.FDiesel = this.PIAll[3].Item1
        }
        if(this.sday == "5")
        {
          this.FDiesel = this.PIAll[4].Item1
        }
        if(this.sday == "6")
        {
          this.FDiesel = this.PIAll[5].Item1
        }
        if(this.sday == "7")
        {
          this.FDiesel = this.PIAll[6].Item1
        }
        if(this.sday == "8")
        {
          this.FDiesel = this.PIAll[7].Item1
        }
        if(this.sday == "9")
        {
          this.FDiesel = this.PIAll[8].Item1
        }
        if(this.sday == "10")
        {
          this.FDiesel = this.PIAll[9].Item1
        }
        if(this.sday == "11")
        {
          this.FDiesel = this.PIAll[10].Item1
        }
        if(this.sday == "12")
        {
          this.FDiesel = this.PIAll[11].Item1
        }
        if(this.sday == "13")
        {
          this.FDiesel = this.PIAll[12].Item1
        }
        if(this.sday == "14")
        {
          this.FDiesel = this.PIAll[13].Item1
        }
        if(this.sday == "15")
        {
          this.FDiesel = this.PIAll[14].Item1
        }
        if(this.sday == "16")
        {
          this.FDiesel = this.PIAll[15].Item1
        }
        if(this.sday == "17")
        {
          this.FDiesel = this.PIAll[16].Item1
        }
        if(this.sday == "18")
        {
          this.FDiesel = this.PIAll[17].Item1
        }
        if(this.sday == "19")
        {
          this.FDiesel = this.PIAll[18].Item1
        }
        if(this.sday == "20")
        {
          this.FDiesel = this.PIAll[19].Item1
        }
        if(this.sday == "21")
        {
          this.FDiesel = this.PIAll[20].Item1
        }
        if(this.sday == "22")
        {
          this.FDiesel = this.PIAll[21].Item1
        }
        if(this.sday == "23")
        {
          this.FDiesel = this.PIAll[22].Item1
        }
        if(this.sday == "24")
        {
          this.FDiesel = this.PIAll[23].Item1
        }
        if(this.sday == "25")
        {
          this.FDiesel = this.PIAll[24].Item1
        }
        if(this.sday == "26")
        {
          this.FDiesel = this.PIAll[25].Item1
        }
        if(this.sday == "27")
        {
          this.FDiesel = this.PIAll[26].Item1
        }
        if(this.sday == "28")
        {
          this.FDiesel = this.PIAll[27].Item1
        }
        if(this.sday == "29")
        {
          this.FDiesel = this.PIAll[28].Item1
        }
        if(this.sday == "30")
        {
          this.FDiesel = this.PIAll[29].Item1
        }
        if(this.sday == "31")
        {
          this.FDiesel = this.PIAll[30].Item1
        }
      },
      error => {
        alert("Can't not get pi value by tagname32");
      });
  }
  feedPIValueByTagname33(tagname :string)
  {
    this.networkService.getPIValueByTagname(tagname).subscribe(
      data => {
        console.log(JSON.stringify(data))
        this.PIAll = data.result;
        //console.log(this.PIAll)
        this.countPI = this.PIAll.length;
        console.log(this.sday+"sec3")
        // console.log(this.countPI)
        if(this.sday == "1")
        {
          this.FGasohol95 = this.PIAll[0].Item1
        }
        if(this.sday == "2")
        {
          this.FGasohol95 = this.PIAll[1].Item1
        }
        if(this.sday == "3")
        {
          this.FGasohol95 = this.PIAll[2].Item1
        }
        if(this.sday == "4")
        {
          this.FGasohol95 = this.PIAll[3].Item1
        }
        if(this.sday == "5")
        {
          this.FGasohol95 = this.PIAll[4].Item1
        }
        if(this.sday == "6")
        {
          this.FGasohol95 = this.PIAll[5].Item1
        }
        if(this.sday == "7")
        {
          this.FGasohol95 = this.PIAll[6].Item1
        }
        if(this.sday == "8")
        {
          this.FGasohol95 = this.PIAll[7].Item1
        }
        if(this.sday == "9")
        {
          this.FGasohol95 = this.PIAll[8].Item1
        }
        if(this.sday == "10")
        {
          this.FGasohol95 = this.PIAll[9].Item1
        }
        if(this.sday == "11")
        {
          this.FGasohol95 = this.PIAll[10].Item1
        }
        if(this.sday == "12")
        {
          this.FGasohol95 = this.PIAll[11].Item1
        }
        if(this.sday == "13")
        {
          this.FGasohol95 = this.PIAll[12].Item1
        }
        if(this.sday == "14")
        {
          this.FGasohol95 = this.PIAll[13].Item1
        }
        if(this.sday == "15")
        {
          this.FGasohol95 = this.PIAll[14].Item1
        }
        if(this.sday == "16")
        {
          this.FGasohol95 = this.PIAll[15].Item1
        }
        if(this.sday == "17")
        {
          this.FGasohol95 = this.PIAll[16].Item1
        }
        if(this.sday == "18")
        {
          this.FGasohol95 = this.PIAll[17].Item1
        }
        if(this.sday == "19")
        {
          this.FGasohol95 = this.PIAll[18].Item1
        }
        if(this.sday == "20")
        {
          this.FGasohol95 = this.PIAll[19].Item1
        }
        if(this.sday == "21")
        {
          this.FGasohol95 = this.PIAll[20].Item1
        }
        if(this.sday == "22")
        {
          this.FGasohol95 = this.PIAll[21].Item1
        }
        if(this.sday == "23")
        {
          this.FGasohol95 = this.PIAll[22].Item1
        }
        if(this.sday == "24")
        {
          this.FGasohol95 = this.PIAll[23].Item1
        }
        if(this.sday == "25")
        {
          this.FGasohol95 = this.PIAll[24].Item1
        }
        if(this.sday == "26")
        {
          this.FGasohol95 = this.PIAll[25].Item1
        }
        if(this.sday == "27")
        {
          this.FGasohol95 = this.PIAll[26].Item1
        }
        if(this.sday == "28")
        {
          this.FGasohol95 = this.PIAll[27].Item1
        }
        if(this.sday == "29")
        {
          this.FGasohol95 = this.PIAll[28].Item1
        }
        if(this.sday == "30")
        {
          this.FGasohol95 = this.PIAll[29].Item1
        }
        if(this.sday == "31")
        {
          this.FGasohol95 = this.PIAll[30].Item1
        }
      },
      error => {
        alert("Can't not get pi value by tagname33");
      });
  }
  feedPIValueByTagname34(tagname :string)
  {
    this.networkService.getPIValueByTagname(tagname).subscribe(
      data => {
        console.log(JSON.stringify(data))
        this.PIAll = data.result;
        //console.log(this.PIAll)
        this.countPI = this.PIAll.length;
        console.log(this.sday+"sec3")
        // console.log(this.countPI)
        if(this.sday == "1")
        {
          this.FOut = this.PIAll[0].Item1
          console.log("f("+this.Fsale+"+"+this.FIn+"+"+this.FDiesel+"+"+this.FGasohol95+"+"+this.FOut+")")
          this.barChartData7 = [
            { data: [this.Fsale,this.FIn,this.FDiesel,this.FGasohol95,this.FOut], 
              label: 'Time',
              backgroundColor: "rgba(216, 77, 24, 1)",
            
            }
            ];
        }
        if(this.sday == "2")
        {
          this.FOut = this.PIAll[1].Item1
          console.log("f("+this.Fsale+"+"+this.FIn+"+"+this.FDiesel+"+"+this.FGasohol95+"+"+this.FOut+")")
          this.barChartData7 = [
            { data: [this.Fsale,this.FIn,this.FDiesel,this.FGasohol95,this.FOut], 
              label: 'Time',
              backgroundColor: "rgba(216, 77, 24, 1)",
            
            }
            ];
        }
        if(this.sday == "3")
        {
          this.FOut = this.PIAll[2].Item1
          console.log("f("+this.Fsale+"+"+this.FIn+"+"+this.FDiesel+"+"+this.FGasohol95+"+"+this.FOut+")")
          this.barChartData7 = [
            { data: [this.Fsale,this.FIn,this.FDiesel,this.FGasohol95,this.FOut], 
              label: 'Time',
              backgroundColor: "rgba(216, 77, 24, 1)",
            
            }
            ];
        }
        if(this.sday == "4")
        {
          this.FOut = this.PIAll[3].Item1
          console.log("f("+this.Fsale+"+"+this.FIn+"+"+this.FDiesel+"+"+this.FGasohol95+"+"+this.FOut+")")
          this.barChartData7 = [
            { data: [this.Fsale,this.FIn,this.FDiesel,this.FGasohol95,this.FOut], 
              label: 'Time',
              backgroundColor: "rgba(216, 77, 24, 1)",
            
            }
            ];
        }
        if(this.sday == "5")
        {
          this.FOut = this.PIAll[4].Item1
          console.log("f("+this.Fsale+"+"+this.FIn+"+"+this.FDiesel+"+"+this.FGasohol95+"+"+this.FOut+")")
          this.barChartData7 = [
            { data: [this.Fsale,this.FIn,this.FDiesel,this.FGasohol95,this.FOut], 
              label: 'Time',
              backgroundColor: "rgba(216, 77, 24, 1)",
            
            }
            ];
        }
        if(this.sday == "6")
        {
          this.FOut = this.PIAll[5].Item1
          console.log("f("+this.Fsale+"+"+this.FIn+"+"+this.FDiesel+"+"+this.FGasohol95+"+"+this.FOut+")")
          this.barChartData7 = [
            { data: [this.Fsale,this.FIn,this.FDiesel,this.FGasohol95,this.FOut], 
              label: 'Time',
              backgroundColor: "rgba(216, 77, 24, 1)",
            
            }
            ];
        }
        if(this.sday == "7")
        {
          this.FOut = this.PIAll[6].Item1
          console.log("f("+this.Fsale+"+"+this.FIn+"+"+this.FDiesel+"+"+this.FGasohol95+"+"+this.FOut+")")
          this.barChartData7 = [
            { data: [this.Fsale,this.FIn,this.FDiesel,this.FGasohol95,this.FOut], 
              label: 'Time',
              backgroundColor: "rgba(216, 77, 24, 1)",
            
            }
            ];
        }
        if(this.sday == "8")
        {
          this.FOut = this.PIAll[7].Item1
          console.log("f("+this.Fsale+"+"+this.FIn+"+"+this.FDiesel+"+"+this.FGasohol95+"+"+this.FOut+")")
          this.barChartData7 = [
            { data: [this.Fsale,this.FIn,this.FDiesel,this.FGasohol95,this.FOut], 
              label: 'Time',
              backgroundColor: "rgba(216, 77, 24, 1)",
            
            }
            ];
        }
        if(this.sday == "9")
        {
          this.FOut = this.PIAll[8].Item1
          console.log("f("+this.Fsale+"+"+this.FIn+"+"+this.FDiesel+"+"+this.FGasohol95+"+"+this.FOut+")")
          this.barChartData7 = [
            { data: [this.Fsale,this.FIn,this.FDiesel,this.FGasohol95,this.FOut], 
              label: 'Time',
              backgroundColor: "rgba(216, 77, 24, 1)",
            
            }
            ];
        }
        if(this.sday == "10")
        {
          this.FOut = this.PIAll[9].Item1
          console.log("f("+this.Fsale+"+"+this.FIn+"+"+this.FDiesel+"+"+this.FGasohol95+"+"+this.FOut+")")
          this.barChartData7 = [
            { data: [this.Fsale,this.FIn,this.FDiesel,this.FGasohol95,this.FOut], 
              label: 'Time',
              backgroundColor: "rgba(216, 77, 24, 1)",
            
            }
            ];
        }
        if(this.sday == "11")
        {
          this.FOut = this.PIAll[10].Item1
          console.log("f("+this.Fsale+"+"+this.FIn+"+"+this.FDiesel+"+"+this.FGasohol95+"+"+this.FOut+")")
          this.barChartData7 = [
            { data: [this.Fsale,this.FIn,this.FDiesel,this.FGasohol95,this.FOut], 
              label: 'Time',
              backgroundColor: "rgba(216, 77, 24, 1)",
            
            }
            ];
        }
        if(this.sday == "12")
        {
          this.FOut = this.PIAll[11].Item1
          console.log("f("+this.Fsale+"+"+this.FIn+"+"+this.FDiesel+"+"+this.FGasohol95+"+"+this.FOut+")")
          this.barChartData7 = [
            { data: [this.Fsale,this.FIn,this.FDiesel,this.FGasohol95,this.FOut], 
              label: 'Time',
              backgroundColor: "rgba(216, 77, 24, 1)",
            
            }
            ];
        }
        if(this.sday == "13")
        {
          this.FOut = this.PIAll[12].Item1
          console.log("f("+this.Fsale+"+"+this.FIn+"+"+this.FDiesel+"+"+this.FGasohol95+"+"+this.FOut+")")
          this.barChartData7 = [
            { data: [this.Fsale,this.FIn,this.FDiesel,this.FGasohol95,this.FOut], 
              label: 'Time',
              backgroundColor: "rgba(216, 77, 24, 1)",
            
            }
            ];
        }
        if(this.sday == "14")
        {
          this.FOut = this.PIAll[13].Item1
          console.log("f("+this.Fsale+"+"+this.FIn+"+"+this.FDiesel+"+"+this.FGasohol95+"+"+this.FOut+")")
          this.barChartData7 = [
            { data: [this.Fsale,this.FIn,this.FDiesel,this.FGasohol95,this.FOut], 
              label: 'Time',
              backgroundColor: "rgba(216, 77, 24, 1)",
            
            }
            ];
        }
        if(this.sday == "15")
        {
          this.FOut = this.PIAll[14].Item1
          console.log("f("+this.Fsale+"+"+this.FIn+"+"+this.FDiesel+"+"+this.FGasohol95+"+"+this.FOut+")")
          this.barChartData7 = [
            { data: [this.Fsale,this.FIn,this.FDiesel,this.FGasohol95,this.FOut], 
              label: 'Time',
              backgroundColor: "rgba(216, 77, 24, 1)",
            
            }
            ];
        }
        if(this.sday == "16")
        {
          this.FOut = this.PIAll[15].Item1
          console.log("f("+this.Fsale+"+"+this.FIn+"+"+this.FDiesel+"+"+this.FGasohol95+"+"+this.FOut+")")
          this.barChartData7 = [
            { data: [this.Fsale,this.FIn,this.FDiesel,this.FGasohol95,this.FOut], 
              label: 'Time',
              backgroundColor: "rgba(216, 77, 24, 1)",
            
            }
            ];
        }
        if(this.sday == "17")
        {
          this.FOut = this.PIAll[16].Item1
          console.log("f("+this.Fsale+"+"+this.FIn+"+"+this.FDiesel+"+"+this.FGasohol95+"+"+this.FOut+")")
          this.barChartData7 = [
            { data: [this.Fsale,this.FIn,this.FDiesel,this.FGasohol95,this.FOut], 
              label: 'Time',
              backgroundColor: "rgba(216, 77, 24, 1)",
            
            }
            ];
        }
        if(this.sday == "18")
        {
          this.FOut = this.PIAll[17].Item1
          console.log("f("+this.Fsale+"+"+this.FIn+"+"+this.FDiesel+"+"+this.FGasohol95+"+"+this.FOut+")")
          this.barChartData7 = [
            { data: [this.Fsale,this.FIn,this.FDiesel,this.FGasohol95,this.FOut], 
              label: 'Time',
              backgroundColor: "rgba(216, 77, 24, 1)",
            
            }
            ];
        }
        if(this.sday == "19")
        {
          this.FOut = this.PIAll[18].Item1
          console.log("f("+this.Fsale+"+"+this.FIn+"+"+this.FDiesel+"+"+this.FGasohol95+"+"+this.FOut+")")
          this.barChartData7 = [
            { data: [this.Fsale,this.FIn,this.FDiesel,this.FGasohol95,this.FOut], 
              label: 'Time',
              backgroundColor: "rgba(216, 77, 24, 1)",
            
            }
            ];
        }
        if(this.sday == "20")
        {
          this.FOut = this.PIAll[19].Item1
          console.log("f("+this.Fsale+"+"+this.FIn+"+"+this.FDiesel+"+"+this.FGasohol95+"+"+this.FOut+")")
          this.barChartData7 = [
            { data: [this.Fsale,this.FIn,this.FDiesel,this.FGasohol95,this.FOut], 
              label: 'Time',
              backgroundColor: "rgba(216, 77, 24, 1)",
            
            }
            ];
        }
        if(this.sday == "21")
        {
          this.FOut = this.PIAll[20].Item1
          console.log("f("+this.Fsale+"+"+this.FIn+"+"+this.FDiesel+"+"+this.FGasohol95+"+"+this.FOut+")")
          this.barChartData7 = [
            { data: [this.Fsale,this.FIn,this.FDiesel,this.FGasohol95,this.FOut], 
              label: 'Time',
              backgroundColor: "rgba(216, 77, 24, 1)",
            
            }
            ];
        }
        if(this.sday == "22")
        {
          this.FOut = this.PIAll[21].Item1
          console.log("f("+this.Fsale+"+"+this.FIn+"+"+this.FDiesel+"+"+this.FGasohol95+"+"+this.FOut+")")
          this.barChartData7 = [
            { data: [this.Fsale,this.FIn,this.FDiesel,this.FGasohol95,this.FOut], 
              label: 'Time',
              backgroundColor: "rgba(216, 77, 24, 1)",
            
            }
            ];
        }
        if(this.sday == "23")
        {
          this.FOut = this.PIAll[22].Item1
          console.log("f("+this.Fsale+"+"+this.FIn+"+"+this.FDiesel+"+"+this.FGasohol95+"+"+this.FOut+")")
          this.barChartData7 = [
            { data: [this.Fsale,this.FIn,this.FDiesel,this.FGasohol95,this.FOut], 
              label: 'Time',
              backgroundColor: "rgba(216, 77, 24, 1)",
            
            }
            ];
        }
        if(this.sday == "24")
        {
          this.FOut = this.PIAll[23].Item1
          console.log("f("+this.Fsale+"+"+this.FIn+"+"+this.FDiesel+"+"+this.FGasohol95+"+"+this.FOut+")")
          this.barChartData7 = [
            { data: [this.Fsale,this.FIn,this.FDiesel,this.FGasohol95,this.FOut], 
              label: 'Time',
              backgroundColor: "rgba(216, 77, 24, 1)",
            
            }
            ];
        }
        if(this.sday == "25")
        {
          this.FOut = this.PIAll[24].Item1
          console.log("f("+this.Fsale+"+"+this.FIn+"+"+this.FDiesel+"+"+this.FGasohol95+"+"+this.FOut+")")
          this.barChartData7 = [
            { data: [this.Fsale,this.FIn,this.FDiesel,this.FGasohol95,this.FOut], 
              label: 'Time',
              backgroundColor: "rgba(216, 77, 24, 1)",
            
            }
            ];
        }
        if(this.sday == "26")
        {
          this.FOut = this.PIAll[25].Item1
          console.log("f("+this.Fsale+"+"+this.FIn+"+"+this.FDiesel+"+"+this.FGasohol95+"+"+this.FOut+")")
          this.barChartData7 = [
            { data: [this.Fsale,this.FIn,this.FDiesel,this.FGasohol95,this.FOut], 
              label: 'Time',
              backgroundColor: "rgba(216, 77, 24, 1)",
            
            }
            ];
        }
        if(this.sday == "27")
        {
          this.FOut = this.PIAll[26].Item1
          console.log("f("+this.Fsale+"+"+this.FIn+"+"+this.FDiesel+"+"+this.FGasohol95+"+"+this.FOut+")")
          this.barChartData7 = [
            { data: [this.Fsale,this.FIn,this.FDiesel,this.FGasohol95,this.FOut], 
              label: 'Time',
              backgroundColor: "rgba(216, 77, 24, 1)",
            
            }
            ];
        }
        if(this.sday == "28")
        {
          this.FOut = this.PIAll[27].Item1
          console.log("f("+this.Fsale+"+"+this.FIn+"+"+this.FDiesel+"+"+this.FGasohol95+"+"+this.FOut+")")
          this.barChartData7 = [
            { data: [this.Fsale,this.FIn,this.FDiesel,this.FGasohol95,this.FOut], 
              label: 'Time',
              backgroundColor: "rgba(216, 77, 24, 1)",
            
            }
            ];
        }
        if(this.sday == "29")
        {
          this.FOut = this.PIAll[28].Item1
          console.log("f("+this.Fsale+"+"+this.FIn+"+"+this.FDiesel+"+"+this.FGasohol95+"+"+this.FOut+")")
          this.barChartData7 = [
            { data: [this.Fsale,this.FIn,this.FDiesel,this.FGasohol95,this.FOut], 
              label: 'Time',
              backgroundColor: "rgba(216, 77, 24, 1)",
            
            }
            ];
        }
        if(this.sday == "30")
        {
          this.FOut = this.PIAll[29].Item1
          console.log("f("+this.Fsale+"+"+this.FIn+"+"+this.FDiesel+"+"+this.FGasohol95+"+"+this.FOut+")")
          this.barChartData7 = [
            { data: [this.Fsale,this.FIn,this.FDiesel,this.FGasohol95,this.FOut], 
              label: 'Time',
              backgroundColor: "rgba(216, 77, 24, 1)",
            
            }
            ];
        }
        if(this.sday == "31")
        {
          this.FOut = this.PIAll[30].Item1
          console.log("f("+this.Fsale+"+"+this.FIn+"+"+this.FDiesel+"+"+this.FGasohol95+"+"+this.FOut+")")
          this.barChartData7 = [
            { data: [this.Fsale,this.FIn,this.FDiesel,this.FGasohol95,this.FOut], 
              label: 'Time',
              backgroundColor: "rgba(216, 77, 24, 1)",
            
            }
            ];
        }
      },
      error => {
        alert("Can't not get pi value by tagname34");
      });
  }
  // chart D
  feedPIValueByTagname35(tagname :string)
  {
    this.networkService.getPIValueByTagname(tagname).subscribe(
      data => {
        console.log(JSON.stringify(data))
        this.PIAll = data.result;
        //console.log(this.PIAll)
        this.countPI = this.PIAll.length;
        console.log(this.sday+"sec3")
        // console.log(this.countPI)
        if(this.sday == "1")
        {
          var p = 24*0
          this.D0 = this.PIAll[p+0].Item1
          this.D1 = this.PIAll[p+1].Item1
          this.D2 = this.PIAll[p+2].Item1
          this.D3 = this.PIAll[p+3].Item1
          this.D4 = this.PIAll[p+4].Item1
          this.D5 = this.PIAll[p+5].Item1
          this.D6 = this.PIAll[p+6].Item1
          this.D7 = this.PIAll[p+7].Item1
          this.D8 = this.PIAll[p+8].Item1
          this.D9 = this.PIAll[p+9].Item1
          this.D10 = this.PIAll[p+10].Item1
          this.D11 = this.PIAll[p+11].Item1
          this.D12 = this.PIAll[p+12].Item1
          this.D13 = this.PIAll[p+13].Item1
          this.D14 = this.PIAll[p+14].Item1
          this.D15 = this.PIAll[p+15].Item1
          this.D16 = this.PIAll[p+16].Item1
          this.D17 = this.PIAll[p+17].Item1
          this.D18 = this.PIAll[p+18].Item1
          this.D19 = this.PIAll[p+19].Item1
          this.D20 = this.PIAll[p+20].Item1
          this.D21 = this.PIAll[p+21].Item1
          this.D22 = this.PIAll[p+22].Item1
          this.D23 = this.PIAll[p+23].Item1

          console.log("d("+this.D0+"+"+this.D1+"+"+this.D2+"+"+this.D3+"+"+this.D4+"+"+this.D5+"+"+this.D6+"+"+this.D7+"+"
          +this.D8+"+"+this.D9+"+"+this.D10+"+"+this.D11+"+"+this.D12+"+"+this.D13+"+"+this.D14+"+"+this.D15+"+"
          +this.D16+"+"+this.D17+"+"+this.D18+"+"+this.D19+"+"+this.D20+"+"+this.D21+"+"+this.D22+"+"+this.D23);
          this.barChartData = [
            { data: [this.D0, this.D1, this.D2, this.D3, this.D4, this.D5, this.D6, this.D7, this.D8, this.D9,
              this.D10, this.D11, this.D12, this.D13, this.D14, this.D15, this.D16, this.D17, this.D18, this.D19,
              this.D20, this.D21, this.D22, this.D23], 
              label: 'Time',
              backgroundColor: "rgba(255, 206, 0, 0.91)",
            }
          ];
        }
        if(this.sday == "2")
        {
          var p = 24*1
          this.D0 = this.PIAll[p+0].Item1
          this.D1 = this.PIAll[p+1].Item1
          this.D2 = this.PIAll[p+2].Item1
          this.D3 = this.PIAll[p+3].Item1
          this.D4 = this.PIAll[p+4].Item1
          this.D5 = this.PIAll[p+5].Item1
          this.D6 = this.PIAll[p+6].Item1
          this.D7 = this.PIAll[p+7].Item1
          this.D8 = this.PIAll[p+8].Item1
          this.D9 = this.PIAll[p+9].Item1
          this.D10 = this.PIAll[p+10].Item1
          this.D11 = this.PIAll[p+11].Item1
          this.D12 = this.PIAll[p+12].Item1
          this.D13 = this.PIAll[p+13].Item1
          this.D14 = this.PIAll[p+14].Item1
          this.D15 = this.PIAll[p+15].Item1
          this.D16 = this.PIAll[p+16].Item1
          this.D17 = this.PIAll[p+17].Item1
          this.D18 = this.PIAll[p+18].Item1
          this.D19 = this.PIAll[p+19].Item1
          this.D20 = this.PIAll[p+20].Item1
          this.D21 = this.PIAll[p+21].Item1
          this.D22 = this.PIAll[p+22].Item1
          this.D23 = this.PIAll[p+23].Item1

          console.log("d("+this.D0+"+"+this.D1+"+"+this.D2+"+"+this.D3+"+"+this.D4+"+"+this.D5+"+"+this.D6+"+"+this.D7+"+"
          +this.D8+"+"+this.D9+"+"+this.D10+"+"+this.D11+"+"+this.D12+"+"+this.D13+"+"+this.D14+"+"+this.D15+"+"
          +this.D16+"+"+this.D17+"+"+this.D18+"+"+this.D19+"+"+this.D20+"+"+this.D21+"+"+this.D22+"+"+this.D23);
          this.barChartData = [
            { data: [this.D0, this.D1, this.D2, this.D3, this.D4, this.D5, this.D6, this.D7, this.D8, this.D9,
              this.D10, this.D11, this.D12, this.D13, this.D14, this.D15, this.D16, this.D17, this.D18, this.D19,
              this.D20, this.D21, this.D22, this.D23], 
              label: 'Time',
              backgroundColor: "rgba(255, 206, 0, 0.91)",
            }
          ];
        }
        if(this.sday == "3")
        {
          var p = 24*2
          this.D0 = this.PIAll[p+0].Item1
          this.D1 = this.PIAll[p+1].Item1
          this.D2 = this.PIAll[p+2].Item1
          this.D3 = this.PIAll[p+3].Item1
          this.D4 = this.PIAll[p+4].Item1
          this.D5 = this.PIAll[p+5].Item1
          this.D6 = this.PIAll[p+6].Item1
          this.D7 = this.PIAll[p+7].Item1
          this.D8 = this.PIAll[p+8].Item1
          this.D9 = this.PIAll[p+9].Item1
          this.D10 = this.PIAll[p+10].Item1
          this.D11 = this.PIAll[p+11].Item1
          this.D12 = this.PIAll[p+12].Item1
          this.D13 = this.PIAll[p+13].Item1
          this.D14 = this.PIAll[p+14].Item1
          this.D15 = this.PIAll[p+15].Item1
          this.D16 = this.PIAll[p+16].Item1
          this.D17 = this.PIAll[p+17].Item1
          this.D18 = this.PIAll[p+18].Item1
          this.D19 = this.PIAll[p+19].Item1
          this.D20 = this.PIAll[p+20].Item1
          this.D21 = this.PIAll[p+21].Item1
          this.D22 = this.PIAll[p+22].Item1
          this.D23 = this.PIAll[p+23].Item1

          console.log("d("+this.D0+"+"+this.D1+"+"+this.D2+"+"+this.D3+"+"+this.D4+"+"+this.D5+"+"+this.D6+"+"+this.D7+"+"
          +this.D8+"+"+this.D9+"+"+this.D10+"+"+this.D11+"+"+this.D12+"+"+this.D13+"+"+this.D14+"+"+this.D15+"+"
          +this.D16+"+"+this.D17+"+"+this.D18+"+"+this.D19+"+"+this.D20+"+"+this.D21+"+"+this.D22+"+"+this.D23);
          this.barChartData = [
            { data: [this.D0, this.D1, this.D2, this.D3, this.D4, this.D5, this.D6, this.D7, this.D8, this.D9,
              this.D10, this.D11, this.D12, this.D13, this.D14, this.D15, this.D16, this.D17, this.D18, this.D19,
              this.D20, this.D21, this.D22, this.D23], 
              label: 'Time',
              backgroundColor: "rgba(255, 206, 0, 0.91)",
            }
          ];
        }
        if(this.sday == "4")
        {
          var p = 24*3
          this.D0 = this.PIAll[p+0].Item1
          this.D1 = this.PIAll[p+1].Item1
          this.D2 = this.PIAll[p+2].Item1
          this.D3 = this.PIAll[p+3].Item1
          this.D4 = this.PIAll[p+4].Item1
          this.D5 = this.PIAll[p+5].Item1
          this.D6 = this.PIAll[p+6].Item1
          this.D7 = this.PIAll[p+7].Item1
          this.D8 = this.PIAll[p+8].Item1
          this.D9 = this.PIAll[p+9].Item1
          this.D10 = this.PIAll[p+10].Item1
          this.D11 = this.PIAll[p+11].Item1
          this.D12 = this.PIAll[p+12].Item1
          this.D13 = this.PIAll[p+13].Item1
          this.D14 = this.PIAll[p+14].Item1
          this.D15 = this.PIAll[p+15].Item1
          this.D16 = this.PIAll[p+16].Item1
          this.D17 = this.PIAll[p+17].Item1
          this.D18 = this.PIAll[p+18].Item1
          this.D19 = this.PIAll[p+19].Item1
          this.D20 = this.PIAll[p+20].Item1
          this.D21 = this.PIAll[p+21].Item1
          this.D22 = this.PIAll[p+22].Item1
          this.D23 = this.PIAll[p+23].Item1

          console.log("d("+this.D0+"+"+this.D1+"+"+this.D2+"+"+this.D3+"+"+this.D4+"+"+this.D5+"+"+this.D6+"+"+this.D7+"+"
          +this.D8+"+"+this.D9+"+"+this.D10+"+"+this.D11+"+"+this.D12+"+"+this.D13+"+"+this.D14+"+"+this.D15+"+"
          +this.D16+"+"+this.D17+"+"+this.D18+"+"+this.D19+"+"+this.D20+"+"+this.D21+"+"+this.D22+"+"+this.D23);
          this.barChartData = [
            { data: [this.D0, this.D1, this.D2, this.D3, this.D4, this.D5, this.D6, this.D7, this.D8, this.D9,
              this.D10, this.D11, this.D12, this.D13, this.D14, this.D15, this.D16, this.D17, this.D18, this.D19,
              this.D20, this.D21, this.D22, this.D23], 
              label: 'Time',
              backgroundColor: "rgba(255, 206, 0, 0.91)",
            }
          ];
        }
        if(this.sday == "5")
        {
          var p = 24*4
          this.D0 = this.PIAll[p+0].Item1
          this.D1 = this.PIAll[p+1].Item1
          this.D2 = this.PIAll[p+2].Item1
          this.D3 = this.PIAll[p+3].Item1
          this.D4 = this.PIAll[p+4].Item1
          this.D5 = this.PIAll[p+5].Item1
          this.D6 = this.PIAll[p+6].Item1
          this.D7 = this.PIAll[p+7].Item1
          this.D8 = this.PIAll[p+8].Item1
          this.D9 = this.PIAll[p+9].Item1
          this.D10 = this.PIAll[p+10].Item1
          this.D11 = this.PIAll[p+11].Item1
          this.D12 = this.PIAll[p+12].Item1
          this.D13 = this.PIAll[p+13].Item1
          this.D14 = this.PIAll[p+14].Item1
          this.D15 = this.PIAll[p+15].Item1
          this.D16 = this.PIAll[p+16].Item1
          this.D17 = this.PIAll[p+17].Item1
          this.D18 = this.PIAll[p+18].Item1
          this.D19 = this.PIAll[p+19].Item1
          this.D20 = this.PIAll[p+20].Item1
          this.D21 = this.PIAll[p+21].Item1
          this.D22 = this.PIAll[p+22].Item1
          this.D23 = this.PIAll[p+23].Item1

          console.log("d("+this.D0+"+"+this.D1+"+"+this.D2+"+"+this.D3+"+"+this.D4+"+"+this.D5+"+"+this.D6+"+"+this.D7+"+"
          +this.D8+"+"+this.D9+"+"+this.D10+"+"+this.D11+"+"+this.D12+"+"+this.D13+"+"+this.D14+"+"+this.D15+"+"
          +this.D16+"+"+this.D17+"+"+this.D18+"+"+this.D19+"+"+this.D20+"+"+this.D21+"+"+this.D22+"+"+this.D23);
          this.barChartData = [
            { data: [this.D0, this.D1, this.D2, this.D3, this.D4, this.D5, this.D6, this.D7, this.D8, this.D9,
              this.D10, this.D11, this.D12, this.D13, this.D14, this.D15, this.D16, this.D17, this.D18, this.D19,
              this.D20, this.D21, this.D22, this.D23], 
              label: 'Time',
              backgroundColor: "rgba(255, 206, 0, 0.91)",
            }
          ];
        }
        if(this.sday == "6")
        {
          var p = 24*5
          this.D0 = this.PIAll[p+0].Item1
          this.D1 = this.PIAll[p+1].Item1
          this.D2 = this.PIAll[p+2].Item1
          this.D3 = this.PIAll[p+3].Item1
          this.D4 = this.PIAll[p+4].Item1
          this.D5 = this.PIAll[p+5].Item1
          this.D6 = this.PIAll[p+6].Item1
          this.D7 = this.PIAll[p+7].Item1
          this.D8 = this.PIAll[p+8].Item1
          this.D9 = this.PIAll[p+9].Item1
          this.D10 = this.PIAll[p+10].Item1
          this.D11 = this.PIAll[p+11].Item1
          this.D12 = this.PIAll[p+12].Item1
          this.D13 = this.PIAll[p+13].Item1
          this.D14 = this.PIAll[p+14].Item1
          this.D15 = this.PIAll[p+15].Item1
          this.D16 = this.PIAll[p+16].Item1
          this.D17 = this.PIAll[p+17].Item1
          this.D18 = this.PIAll[p+18].Item1
          this.D19 = this.PIAll[p+19].Item1
          this.D20 = this.PIAll[p+20].Item1
          this.D21 = this.PIAll[p+21].Item1
          this.D22 = this.PIAll[p+22].Item1
          this.D23 = this.PIAll[p+23].Item1

          console.log("d("+this.D0+"+"+this.D1+"+"+this.D2+"+"+this.D3+"+"+this.D4+"+"+this.D5+"+"+this.D6+"+"+this.D7+"+"
          +this.D8+"+"+this.D9+"+"+this.D10+"+"+this.D11+"+"+this.D12+"+"+this.D13+"+"+this.D14+"+"+this.D15+"+"
          +this.D16+"+"+this.D17+"+"+this.D18+"+"+this.D19+"+"+this.D20+"+"+this.D21+"+"+this.D22+"+"+this.D23);
          this.barChartData = [
            { data: [this.D0, this.D1, this.D2, this.D3, this.D4, this.D5, this.D6, this.D7, this.D8, this.D9,
              this.D10, this.D11, this.D12, this.D13, this.D14, this.D15, this.D16, this.D17, this.D18, this.D19,
              this.D20, this.D21, this.D22, this.D23], 
              label: 'Time',
              backgroundColor: "rgba(255, 206, 0, 0.91)",
            }
          ];
        }
        if(this.sday == "7")
        {
          var p = 24*6
          this.D0 = this.PIAll[p+0].Item1
          this.D1 = this.PIAll[p+1].Item1
          this.D2 = this.PIAll[p+2].Item1
          this.D3 = this.PIAll[p+3].Item1
          this.D4 = this.PIAll[p+4].Item1
          this.D5 = this.PIAll[p+5].Item1
          this.D6 = this.PIAll[p+6].Item1
          this.D7 = this.PIAll[p+7].Item1
          this.D8 = this.PIAll[p+8].Item1
          this.D9 = this.PIAll[p+9].Item1
          this.D10 = this.PIAll[p+10].Item1
          this.D11 = this.PIAll[p+11].Item1
          this.D12 = this.PIAll[p+12].Item1
          this.D13 = this.PIAll[p+13].Item1
          this.D14 = this.PIAll[p+14].Item1
          this.D15 = this.PIAll[p+15].Item1
          this.D16 = this.PIAll[p+16].Item1
          this.D17 = this.PIAll[p+17].Item1
          this.D18 = this.PIAll[p+18].Item1
          this.D19 = this.PIAll[p+19].Item1
          this.D20 = this.PIAll[p+20].Item1
          this.D21 = this.PIAll[p+21].Item1
          this.D22 = this.PIAll[p+22].Item1
          this.D23 = this.PIAll[p+23].Item1

          console.log("d("+this.D0+"+"+this.D1+"+"+this.D2+"+"+this.D3+"+"+this.D4+"+"+this.D5+"+"+this.D6+"+"+this.D7+"+"
          +this.D8+"+"+this.D9+"+"+this.D10+"+"+this.D11+"+"+this.D12+"+"+this.D13+"+"+this.D14+"+"+this.D15+"+"
          +this.D16+"+"+this.D17+"+"+this.D18+"+"+this.D19+"+"+this.D20+"+"+this.D21+"+"+this.D22+"+"+this.D23);
          this.barChartData = [
            { data: [this.D0, this.D1, this.D2, this.D3, this.D4, this.D5, this.D6, this.D7, this.D8, this.D9,
              this.D10, this.D11, this.D12, this.D13, this.D14, this.D15, this.D16, this.D17, this.D18, this.D19,
              this.D20, this.D21, this.D22, this.D23], 
              label: 'Time',
              backgroundColor: "rgba(255, 206, 0, 0.91)",
            }
          ];
        }
        if(this.sday == "8")
        {
          var p = 24*7
          this.D0 = this.PIAll[p+0].Item1
          this.D1 = this.PIAll[p+1].Item1
          this.D2 = this.PIAll[p+2].Item1
          this.D3 = this.PIAll[p+3].Item1
          this.D4 = this.PIAll[p+4].Item1
          this.D5 = this.PIAll[p+5].Item1
          this.D6 = this.PIAll[p+6].Item1
          this.D7 = this.PIAll[p+7].Item1
          this.D8 = this.PIAll[p+8].Item1
          this.D9 = this.PIAll[p+9].Item1
          this.D10 = this.PIAll[p+10].Item1
          this.D11 = this.PIAll[p+11].Item1
          this.D12 = this.PIAll[p+12].Item1
          this.D13 = this.PIAll[p+13].Item1
          this.D14 = this.PIAll[p+14].Item1
          this.D15 = this.PIAll[p+15].Item1
          this.D16 = this.PIAll[p+16].Item1
          this.D17 = this.PIAll[p+17].Item1
          this.D18 = this.PIAll[p+18].Item1
          this.D19 = this.PIAll[p+19].Item1
          this.D20 = this.PIAll[p+20].Item1
          this.D21 = this.PIAll[p+21].Item1
          this.D22 = this.PIAll[p+22].Item1
          this.D23 = this.PIAll[p+23].Item1

          console.log("d("+this.D0+"+"+this.D1+"+"+this.D2+"+"+this.D3+"+"+this.D4+"+"+this.D5+"+"+this.D6+"+"+this.D7+"+"
          +this.D8+"+"+this.D9+"+"+this.D10+"+"+this.D11+"+"+this.D12+"+"+this.D13+"+"+this.D14+"+"+this.D15+"+"
          +this.D16+"+"+this.D17+"+"+this.D18+"+"+this.D19+"+"+this.D20+"+"+this.D21+"+"+this.D22+"+"+this.D23);
          this.barChartData = [
            { data: [this.D0, this.D1, this.D2, this.D3, this.D4, this.D5, this.D6, this.D7, this.D8, this.D9,
              this.D10, this.D11, this.D12, this.D13, this.D14, this.D15, this.D16, this.D17, this.D18, this.D19,
              this.D20, this.D21, this.D22, this.D23], 
              label: 'Time',
              backgroundColor: "rgba(255, 206, 0, 0.91)",
            }
          ];
        }
        if(this.sday == "9")
        {
          var p = 24*8
          this.D0 = this.PIAll[p+0].Item1
          this.D1 = this.PIAll[p+1].Item1
          this.D2 = this.PIAll[p+2].Item1
          this.D3 = this.PIAll[p+3].Item1
          this.D4 = this.PIAll[p+4].Item1
          this.D5 = this.PIAll[p+5].Item1
          this.D6 = this.PIAll[p+6].Item1
          this.D7 = this.PIAll[p+7].Item1
          this.D8 = this.PIAll[p+8].Item1
          this.D9 = this.PIAll[p+9].Item1
          this.D10 = this.PIAll[p+10].Item1
          this.D11 = this.PIAll[p+11].Item1
          this.D12 = this.PIAll[p+12].Item1
          this.D13 = this.PIAll[p+13].Item1
          this.D14 = this.PIAll[p+14].Item1
          this.D15 = this.PIAll[p+15].Item1
          this.D16 = this.PIAll[p+16].Item1
          this.D17 = this.PIAll[p+17].Item1
          this.D18 = this.PIAll[p+18].Item1
          this.D19 = this.PIAll[p+19].Item1
          this.D20 = this.PIAll[p+20].Item1
          this.D21 = this.PIAll[p+21].Item1
          this.D22 = this.PIAll[p+22].Item1
          this.D23 = this.PIAll[p+23].Item1

          console.log("d("+this.D0+"+"+this.D1+"+"+this.D2+"+"+this.D3+"+"+this.D4+"+"+this.D5+"+"+this.D6+"+"+this.D7+"+"
          +this.D8+"+"+this.D9+"+"+this.D10+"+"+this.D11+"+"+this.D12+"+"+this.D13+"+"+this.D14+"+"+this.D15+"+"
          +this.D16+"+"+this.D17+"+"+this.D18+"+"+this.D19+"+"+this.D20+"+"+this.D21+"+"+this.D22+"+"+this.D23);
          this.barChartData = [
            { data: [this.D0, this.D1, this.D2, this.D3, this.D4, this.D5, this.D6, this.D7, this.D8, this.D9,
              this.D10, this.D11, this.D12, this.D13, this.D14, this.D15, this.D16, this.D17, this.D18, this.D19,
              this.D20, this.D21, this.D22, this.D23], 
              label: 'Time',
              backgroundColor: "rgba(255, 206, 0, 0.91)",
            }
          ];
        }
        if(this.sday == "10")
        {
          var p = 24*9
          this.D0 = this.PIAll[p+0].Item1
          this.D1 = this.PIAll[p+1].Item1
          this.D2 = this.PIAll[p+2].Item1
          this.D3 = this.PIAll[p+3].Item1
          this.D4 = this.PIAll[p+4].Item1
          this.D5 = this.PIAll[p+5].Item1
          this.D6 = this.PIAll[p+6].Item1
          this.D7 = this.PIAll[p+7].Item1
          this.D8 = this.PIAll[p+8].Item1
          this.D9 = this.PIAll[p+9].Item1
          this.D10 = this.PIAll[p+10].Item1
          this.D11 = this.PIAll[p+11].Item1
          this.D12 = this.PIAll[p+12].Item1
          this.D13 = this.PIAll[p+13].Item1
          this.D14 = this.PIAll[p+14].Item1
          this.D15 = this.PIAll[p+15].Item1
          this.D16 = this.PIAll[p+16].Item1
          this.D17 = this.PIAll[p+17].Item1
          this.D18 = this.PIAll[p+18].Item1
          this.D19 = this.PIAll[p+19].Item1
          this.D20 = this.PIAll[p+20].Item1
          this.D21 = this.PIAll[p+21].Item1
          this.D22 = this.PIAll[p+22].Item1
          this.D23 = this.PIAll[p+23].Item1

          console.log("d("+this.D0+"+"+this.D1+"+"+this.D2+"+"+this.D3+"+"+this.D4+"+"+this.D5+"+"+this.D6+"+"+this.D7+"+"
          +this.D8+"+"+this.D9+"+"+this.D10+"+"+this.D11+"+"+this.D12+"+"+this.D13+"+"+this.D14+"+"+this.D15+"+"
          +this.D16+"+"+this.D17+"+"+this.D18+"+"+this.D19+"+"+this.D20+"+"+this.D21+"+"+this.D22+"+"+this.D23);
          this.barChartData = [
            { data: [this.D0, this.D1, this.D2, this.D3, this.D4, this.D5, this.D6, this.D7, this.D8, this.D9,
              this.D10, this.D11, this.D12, this.D13, this.D14, this.D15, this.D16, this.D17, this.D18, this.D19,
              this.D20, this.D21, this.D22, this.D23], 
              label: 'Time',
              backgroundColor: "rgba(255, 206, 0, 0.91)",
            }
          ];
        }
        if(this.sday == "11")
        {
          var p = 24*10
          this.D0 = this.PIAll[p+0].Item1
          this.D1 = this.PIAll[p+1].Item1
          this.D2 = this.PIAll[p+2].Item1
          this.D3 = this.PIAll[p+3].Item1
          this.D4 = this.PIAll[p+4].Item1
          this.D5 = this.PIAll[p+5].Item1
          this.D6 = this.PIAll[p+6].Item1
          this.D7 = this.PIAll[p+7].Item1
          this.D8 = this.PIAll[p+8].Item1
          this.D9 = this.PIAll[p+9].Item1
          this.D10 = this.PIAll[p+10].Item1
          this.D11 = this.PIAll[p+11].Item1
          this.D12 = this.PIAll[p+12].Item1
          this.D13 = this.PIAll[p+13].Item1
          this.D14 = this.PIAll[p+14].Item1
          this.D15 = this.PIAll[p+15].Item1
          this.D16 = this.PIAll[p+16].Item1
          this.D17 = this.PIAll[p+17].Item1
          this.D18 = this.PIAll[p+18].Item1
          this.D19 = this.PIAll[p+19].Item1
          this.D20 = this.PIAll[p+20].Item1
          this.D21 = this.PIAll[p+21].Item1
          this.D22 = this.PIAll[p+22].Item1
          this.D23 = this.PIAll[p+23].Item1

          console.log("d("+this.D0+"+"+this.D1+"+"+this.D2+"+"+this.D3+"+"+this.D4+"+"+this.D5+"+"+this.D6+"+"+this.D7+"+"
          +this.D8+"+"+this.D9+"+"+this.D10+"+"+this.D11+"+"+this.D12+"+"+this.D13+"+"+this.D14+"+"+this.D15+"+"
          +this.D16+"+"+this.D17+"+"+this.D18+"+"+this.D19+"+"+this.D20+"+"+this.D21+"+"+this.D22+"+"+this.D23);
          this.barChartData = [
            { data: [this.D0, this.D1, this.D2, this.D3, this.D4, this.D5, this.D6, this.D7, this.D8, this.D9,
              this.D10, this.D11, this.D12, this.D13, this.D14, this.D15, this.D16, this.D17, this.D18, this.D19,
              this.D20, this.D21, this.D22, this.D23], 
              label: 'Time',
              backgroundColor: "rgba(255, 206, 0, 0.91)",
            }
          ];
        }
        if(this.sday == "12")
        {
          var p = 24*11
          this.D0 = this.PIAll[p+0].Item1
          this.D1 = this.PIAll[p+1].Item1
          this.D2 = this.PIAll[p+2].Item1
          this.D3 = this.PIAll[p+3].Item1
          this.D4 = this.PIAll[p+4].Item1
          this.D5 = this.PIAll[p+5].Item1
          this.D6 = this.PIAll[p+6].Item1
          this.D7 = this.PIAll[p+7].Item1
          this.D8 = this.PIAll[p+8].Item1
          this.D9 = this.PIAll[p+9].Item1
          this.D10 = this.PIAll[p+10].Item1
          this.D11 = this.PIAll[p+11].Item1
          this.D12 = this.PIAll[p+12].Item1
          this.D13 = this.PIAll[p+13].Item1
          this.D14 = this.PIAll[p+14].Item1
          this.D15 = this.PIAll[p+15].Item1
          this.D16 = this.PIAll[p+16].Item1
          this.D17 = this.PIAll[p+17].Item1
          this.D18 = this.PIAll[p+18].Item1
          this.D19 = this.PIAll[p+19].Item1
          this.D20 = this.PIAll[p+20].Item1
          this.D21 = this.PIAll[p+21].Item1
          this.D22 = this.PIAll[p+22].Item1
          this.D23 = this.PIAll[p+23].Item1

          console.log("d("+this.D0+"+"+this.D1+"+"+this.D2+"+"+this.D3+"+"+this.D4+"+"+this.D5+"+"+this.D6+"+"+this.D7+"+"
          +this.D8+"+"+this.D9+"+"+this.D10+"+"+this.D11+"+"+this.D12+"+"+this.D13+"+"+this.D14+"+"+this.D15+"+"
          +this.D16+"+"+this.D17+"+"+this.D18+"+"+this.D19+"+"+this.D20+"+"+this.D21+"+"+this.D22+"+"+this.D23);
          this.barChartData = [
            { data: [this.D0, this.D1, this.D2, this.D3, this.D4, this.D5, this.D6, this.D7, this.D8, this.D9,
              this.D10, this.D11, this.D12, this.D13, this.D14, this.D15, this.D16, this.D17, this.D18, this.D19,
              this.D20, this.D21, this.D22, this.D23], 
              label: 'Time',
              backgroundColor: "rgba(255, 206, 0, 0.91)",
            }
          ];
        }
        if(this.sday == "13")
        {
          var p = 24*12
          this.D0 = this.PIAll[p+0].Item1
          this.D1 = this.PIAll[p+1].Item1
          this.D2 = this.PIAll[p+2].Item1
          this.D3 = this.PIAll[p+3].Item1
          this.D4 = this.PIAll[p+4].Item1
          this.D5 = this.PIAll[p+5].Item1
          this.D6 = this.PIAll[p+6].Item1
          this.D7 = this.PIAll[p+7].Item1
          this.D8 = this.PIAll[p+8].Item1
          this.D9 = this.PIAll[p+9].Item1
          this.D10 = this.PIAll[p+10].Item1
          this.D11 = this.PIAll[p+11].Item1
          this.D12 = this.PIAll[p+12].Item1
          this.D13 = this.PIAll[p+13].Item1
          this.D14 = this.PIAll[p+14].Item1
          this.D15 = this.PIAll[p+15].Item1
          this.D16 = this.PIAll[p+16].Item1
          this.D17 = this.PIAll[p+17].Item1
          this.D18 = this.PIAll[p+18].Item1
          this.D19 = this.PIAll[p+19].Item1
          this.D20 = this.PIAll[p+20].Item1
          this.D21 = this.PIAll[p+21].Item1
          this.D22 = this.PIAll[p+22].Item1
          this.D23 = this.PIAll[p+23].Item1

          console.log("d("+this.D0+"+"+this.D1+"+"+this.D2+"+"+this.D3+"+"+this.D4+"+"+this.D5+"+"+this.D6+"+"+this.D7+"+"
          +this.D8+"+"+this.D9+"+"+this.D10+"+"+this.D11+"+"+this.D12+"+"+this.D13+"+"+this.D14+"+"+this.D15+"+"
          +this.D16+"+"+this.D17+"+"+this.D18+"+"+this.D19+"+"+this.D20+"+"+this.D21+"+"+this.D22+"+"+this.D23);
          this.barChartData = [
            { data: [this.D0, this.D1, this.D2, this.D3, this.D4, this.D5, this.D6, this.D7, this.D8, this.D9,
              this.D10, this.D11, this.D12, this.D13, this.D14, this.D15, this.D16, this.D17, this.D18, this.D19,
              this.D20, this.D21, this.D22, this.D23], 
              label: 'Time',
              backgroundColor: "rgba(255, 206, 0, 0.91)",
            }
          ];
        }
        if(this.sday == "14")
        {
          var p = 24*13
          this.D0 = this.PIAll[p+0].Item1
          this.D1 = this.PIAll[p+1].Item1
          this.D2 = this.PIAll[p+2].Item1
          this.D3 = this.PIAll[p+3].Item1
          this.D4 = this.PIAll[p+4].Item1
          this.D5 = this.PIAll[p+5].Item1
          this.D6 = this.PIAll[p+6].Item1
          this.D7 = this.PIAll[p+7].Item1
          this.D8 = this.PIAll[p+8].Item1
          this.D9 = this.PIAll[p+9].Item1
          this.D10 = this.PIAll[p+10].Item1
          this.D11 = this.PIAll[p+11].Item1
          this.D12 = this.PIAll[p+12].Item1
          this.D13 = this.PIAll[p+13].Item1
          this.D14 = this.PIAll[p+14].Item1
          this.D15 = this.PIAll[p+15].Item1
          this.D16 = this.PIAll[p+16].Item1
          this.D17 = this.PIAll[p+17].Item1
          this.D18 = this.PIAll[p+18].Item1
          this.D19 = this.PIAll[p+19].Item1
          this.D20 = this.PIAll[p+20].Item1
          this.D21 = this.PIAll[p+21].Item1
          this.D22 = this.PIAll[p+22].Item1
          this.D23 = this.PIAll[p+23].Item1

          console.log("d("+this.D0+"+"+this.D1+"+"+this.D2+"+"+this.D3+"+"+this.D4+"+"+this.D5+"+"+this.D6+"+"+this.D7+"+"
          +this.D8+"+"+this.D9+"+"+this.D10+"+"+this.D11+"+"+this.D12+"+"+this.D13+"+"+this.D14+"+"+this.D15+"+"
          +this.D16+"+"+this.D17+"+"+this.D18+"+"+this.D19+"+"+this.D20+"+"+this.D21+"+"+this.D22+"+"+this.D23);
          this.barChartData = [
            { data: [this.D0, this.D1, this.D2, this.D3, this.D4, this.D5, this.D6, this.D7, this.D8, this.D9,
              this.D10, this.D11, this.D12, this.D13, this.D14, this.D15, this.D16, this.D17, this.D18, this.D19,
              this.D20, this.D21, this.D22, this.D23], 
              label: 'Time',
              backgroundColor: "rgba(255, 206, 0, 0.91)",
            }
          ];
        }
        if(this.sday == "15")
        {
          var p = 24*14
          this.D0 = this.PIAll[p+0].Item1
          this.D1 = this.PIAll[p+1].Item1
          this.D2 = this.PIAll[p+2].Item1
          this.D3 = this.PIAll[p+3].Item1
          this.D4 = this.PIAll[p+4].Item1
          this.D5 = this.PIAll[p+5].Item1
          this.D6 = this.PIAll[p+6].Item1
          this.D7 = this.PIAll[p+7].Item1
          this.D8 = this.PIAll[p+8].Item1
          this.D9 = this.PIAll[p+9].Item1
          this.D10 = this.PIAll[p+10].Item1
          this.D11 = this.PIAll[p+11].Item1
          this.D12 = this.PIAll[p+12].Item1
          this.D13 = this.PIAll[p+13].Item1
          this.D14 = this.PIAll[p+14].Item1
          this.D15 = this.PIAll[p+15].Item1
          this.D16 = this.PIAll[p+16].Item1
          this.D17 = this.PIAll[p+17].Item1
          this.D18 = this.PIAll[p+18].Item1
          this.D19 = this.PIAll[p+19].Item1
          this.D20 = this.PIAll[p+20].Item1
          this.D21 = this.PIAll[p+21].Item1
          this.D22 = this.PIAll[p+22].Item1
          this.D23 = this.PIAll[p+23].Item1

          console.log("d("+this.D0+"+"+this.D1+"+"+this.D2+"+"+this.D3+"+"+this.D4+"+"+this.D5+"+"+this.D6+"+"+this.D7+"+"
          +this.D8+"+"+this.D9+"+"+this.D10+"+"+this.D11+"+"+this.D12+"+"+this.D13+"+"+this.D14+"+"+this.D15+"+"
          +this.D16+"+"+this.D17+"+"+this.D18+"+"+this.D19+"+"+this.D20+"+"+this.D21+"+"+this.D22+"+"+this.D23);
          this.barChartData = [
            { data: [this.D0, this.D1, this.D2, this.D3, this.D4, this.D5, this.D6, this.D7, this.D8, this.D9,
              this.D10, this.D11, this.D12, this.D13, this.D14, this.D15, this.D16, this.D17, this.D18, this.D19,
              this.D20, this.D21, this.D22, this.D23], 
              label: 'Time',
              backgroundColor: "rgba(255, 206, 0, 0.91)",
            }
          ];
        }
        if(this.sday == "16")
        {
          var p = 24*15
          this.D0 = this.PIAll[p+0].Item1
          this.D1 = this.PIAll[p+1].Item1
          this.D2 = this.PIAll[p+2].Item1
          this.D3 = this.PIAll[p+3].Item1
          this.D4 = this.PIAll[p+4].Item1
          this.D5 = this.PIAll[p+5].Item1
          this.D6 = this.PIAll[p+6].Item1
          this.D7 = this.PIAll[p+7].Item1
          this.D8 = this.PIAll[p+8].Item1
          this.D9 = this.PIAll[p+9].Item1
          this.D10 = this.PIAll[p+10].Item1
          this.D11 = this.PIAll[p+11].Item1
          this.D12 = this.PIAll[p+12].Item1
          this.D13 = this.PIAll[p+13].Item1
          this.D14 = this.PIAll[p+14].Item1
          this.D15 = this.PIAll[p+15].Item1
          this.D16 = this.PIAll[p+16].Item1
          this.D17 = this.PIAll[p+17].Item1
          this.D18 = this.PIAll[p+18].Item1
          this.D19 = this.PIAll[p+19].Item1
          this.D20 = this.PIAll[p+20].Item1
          this.D21 = this.PIAll[p+21].Item1
          this.D22 = this.PIAll[p+22].Item1
          this.D23 = this.PIAll[p+23].Item1

          console.log("d("+this.D0+"+"+this.D1+"+"+this.D2+"+"+this.D3+"+"+this.D4+"+"+this.D5+"+"+this.D6+"+"+this.D7+"+"
          +this.D8+"+"+this.D9+"+"+this.D10+"+"+this.D11+"+"+this.D12+"+"+this.D13+"+"+this.D14+"+"+this.D15+"+"
          +this.D16+"+"+this.D17+"+"+this.D18+"+"+this.D19+"+"+this.D20+"+"+this.D21+"+"+this.D22+"+"+this.D23);
          this.barChartData = [
            { data: [this.D0, this.D1, this.D2, this.D3, this.D4, this.D5, this.D6, this.D7, this.D8, this.D9,
              this.D10, this.D11, this.D12, this.D13, this.D14, this.D15, this.D16, this.D17, this.D18, this.D19,
              this.D20, this.D21, this.D22, this.D23], 
              label: 'Time',
              backgroundColor: "rgba(255, 206, 0, 0.91)",
            }
          ];
        }
        if(this.sday == "17")
        {
          var p = 24*16
          this.D0 = this.PIAll[p+0].Item1
          this.D1 = this.PIAll[p+1].Item1
          this.D2 = this.PIAll[p+2].Item1
          this.D3 = this.PIAll[p+3].Item1
          this.D4 = this.PIAll[p+4].Item1
          this.D5 = this.PIAll[p+5].Item1
          this.D6 = this.PIAll[p+6].Item1
          this.D7 = this.PIAll[p+7].Item1
          this.D8 = this.PIAll[p+8].Item1
          this.D9 = this.PIAll[p+9].Item1
          this.D10 = this.PIAll[p+10].Item1
          this.D11 = this.PIAll[p+11].Item1
          this.D12 = this.PIAll[p+12].Item1
          this.D13 = this.PIAll[p+13].Item1
          this.D14 = this.PIAll[p+14].Item1
          this.D15 = this.PIAll[p+15].Item1
          this.D16 = this.PIAll[p+16].Item1
          this.D17 = this.PIAll[p+17].Item1
          this.D18 = this.PIAll[p+18].Item1
          this.D19 = this.PIAll[p+19].Item1
          this.D20 = this.PIAll[p+20].Item1
          this.D21 = this.PIAll[p+21].Item1
          this.D22 = this.PIAll[p+22].Item1
          this.D23 = this.PIAll[p+23].Item1

          console.log("d("+this.D0+"+"+this.D1+"+"+this.D2+"+"+this.D3+"+"+this.D4+"+"+this.D5+"+"+this.D6+"+"+this.D7+"+"
          +this.D8+"+"+this.D9+"+"+this.D10+"+"+this.D11+"+"+this.D12+"+"+this.D13+"+"+this.D14+"+"+this.D15+"+"
          +this.D16+"+"+this.D17+"+"+this.D18+"+"+this.D19+"+"+this.D20+"+"+this.D21+"+"+this.D22+"+"+this.D23);
          this.barChartData = [
            { data: [this.D0, this.D1, this.D2, this.D3, this.D4, this.D5, this.D6, this.D7, this.D8, this.D9,
              this.D10, this.D11, this.D12, this.D13, this.D14, this.D15, this.D16, this.D17, this.D18, this.D19,
              this.D20, this.D21, this.D22, this.D23], 
              label: 'Time',
              backgroundColor: "rgba(255, 206, 0, 0.91)",
            }
          ];
        }
        if(this.sday == "18")
        {
          var p = 24*17
          this.D0 = this.PIAll[p+0].Item1
          this.D1 = this.PIAll[p+1].Item1
          this.D2 = this.PIAll[p+2].Item1
          this.D3 = this.PIAll[p+3].Item1
          this.D4 = this.PIAll[p+4].Item1
          this.D5 = this.PIAll[p+5].Item1
          this.D6 = this.PIAll[p+6].Item1
          this.D7 = this.PIAll[p+7].Item1
          this.D8 = this.PIAll[p+8].Item1
          this.D9 = this.PIAll[p+9].Item1
          this.D10 = this.PIAll[p+10].Item1
          this.D11 = this.PIAll[p+11].Item1
          this.D12 = this.PIAll[p+12].Item1
          this.D13 = this.PIAll[p+13].Item1
          this.D14 = this.PIAll[p+14].Item1
          this.D15 = this.PIAll[p+15].Item1
          this.D16 = this.PIAll[p+16].Item1
          this.D17 = this.PIAll[p+17].Item1
          this.D18 = this.PIAll[p+18].Item1
          this.D19 = this.PIAll[p+19].Item1
          this.D20 = this.PIAll[p+20].Item1
          this.D21 = this.PIAll[p+21].Item1
          this.D22 = this.PIAll[p+22].Item1
          this.D23 = this.PIAll[p+23].Item1

          console.log("d("+this.D0+"+"+this.D1+"+"+this.D2+"+"+this.D3+"+"+this.D4+"+"+this.D5+"+"+this.D6+"+"+this.D7+"+"
          +this.D8+"+"+this.D9+"+"+this.D10+"+"+this.D11+"+"+this.D12+"+"+this.D13+"+"+this.D14+"+"+this.D15+"+"
          +this.D16+"+"+this.D17+"+"+this.D18+"+"+this.D19+"+"+this.D20+"+"+this.D21+"+"+this.D22+"+"+this.D23);
          this.barChartData = [
            { data: [this.D0, this.D1, this.D2, this.D3, this.D4, this.D5, this.D6, this.D7, this.D8, this.D9,
              this.D10, this.D11, this.D12, this.D13, this.D14, this.D15, this.D16, this.D17, this.D18, this.D19,
              this.D20, this.D21, this.D22, this.D23], 
              label: 'Time',
              backgroundColor: "rgba(255, 206, 0, 0.91)",
            }
          ];
        }
        if(this.sday == "19")
        {
          var p = 24*18
          this.D0 = this.PIAll[p+0].Item1
          this.D1 = this.PIAll[p+1].Item1
          this.D2 = this.PIAll[p+2].Item1
          this.D3 = this.PIAll[p+3].Item1
          this.D4 = this.PIAll[p+4].Item1
          this.D5 = this.PIAll[p+5].Item1
          this.D6 = this.PIAll[p+6].Item1
          this.D7 = this.PIAll[p+7].Item1
          this.D8 = this.PIAll[p+8].Item1
          this.D9 = this.PIAll[p+9].Item1
          this.D10 = this.PIAll[p+10].Item1
          this.D11 = this.PIAll[p+11].Item1
          this.D12 = this.PIAll[p+12].Item1
          this.D13 = this.PIAll[p+13].Item1
          this.D14 = this.PIAll[p+14].Item1
          this.D15 = this.PIAll[p+15].Item1
          this.D16 = this.PIAll[p+16].Item1
          this.D17 = this.PIAll[p+17].Item1
          this.D18 = this.PIAll[p+18].Item1
          this.D19 = this.PIAll[p+19].Item1
          this.D20 = this.PIAll[p+20].Item1
          this.D21 = this.PIAll[p+21].Item1
          this.D22 = this.PIAll[p+22].Item1
          this.D23 = this.PIAll[p+23].Item1

          console.log("d("+this.D0+"+"+this.D1+"+"+this.D2+"+"+this.D3+"+"+this.D4+"+"+this.D5+"+"+this.D6+"+"+this.D7+"+"
          +this.D8+"+"+this.D9+"+"+this.D10+"+"+this.D11+"+"+this.D12+"+"+this.D13+"+"+this.D14+"+"+this.D15+"+"
          +this.D16+"+"+this.D17+"+"+this.D18+"+"+this.D19+"+"+this.D20+"+"+this.D21+"+"+this.D22+"+"+this.D23);
          this.barChartData = [
            { data: [this.D0, this.D1, this.D2, this.D3, this.D4, this.D5, this.D6, this.D7, this.D8, this.D9,
              this.D10, this.D11, this.D12, this.D13, this.D14, this.D15, this.D16, this.D17, this.D18, this.D19,
              this.D20, this.D21, this.D22, this.D23], 
              label: 'Time',
              backgroundColor: "rgba(255, 206, 0, 0.91)",
            }
          ];
        }
        if(this.sday == "20")
        {
          var p = 24*19
          this.D0 = this.PIAll[p+0].Item1
          this.D1 = this.PIAll[p+1].Item1
          this.D2 = this.PIAll[p+2].Item1
          this.D3 = this.PIAll[p+3].Item1
          this.D4 = this.PIAll[p+4].Item1
          this.D5 = this.PIAll[p+5].Item1
          this.D6 = this.PIAll[p+6].Item1
          this.D7 = this.PIAll[p+7].Item1
          this.D8 = this.PIAll[p+8].Item1
          this.D9 = this.PIAll[p+9].Item1
          this.D10 = this.PIAll[p+10].Item1
          this.D11 = this.PIAll[p+11].Item1
          this.D12 = this.PIAll[p+12].Item1
          this.D13 = this.PIAll[p+13].Item1
          this.D14 = this.PIAll[p+14].Item1
          this.D15 = this.PIAll[p+15].Item1
          this.D16 = this.PIAll[p+16].Item1
          this.D17 = this.PIAll[p+17].Item1
          this.D18 = this.PIAll[p+18].Item1
          this.D19 = this.PIAll[p+19].Item1
          this.D20 = this.PIAll[p+20].Item1
          this.D21 = this.PIAll[p+21].Item1
          this.D22 = this.PIAll[p+22].Item1
          this.D23 = this.PIAll[p+23].Item1

          console.log("d("+this.D0+"+"+this.D1+"+"+this.D2+"+"+this.D3+"+"+this.D4+"+"+this.D5+"+"+this.D6+"+"+this.D7+"+"
          +this.D8+"+"+this.D9+"+"+this.D10+"+"+this.D11+"+"+this.D12+"+"+this.D13+"+"+this.D14+"+"+this.D15+"+"
          +this.D16+"+"+this.D17+"+"+this.D18+"+"+this.D19+"+"+this.D20+"+"+this.D21+"+"+this.D22+"+"+this.D23);
          this.barChartData = [
            { data: [this.D0, this.D1, this.D2, this.D3, this.D4, this.D5, this.D6, this.D7, this.D8, this.D9,
              this.D10, this.D11, this.D12, this.D13, this.D14, this.D15, this.D16, this.D17, this.D18, this.D19,
              this.D20, this.D21, this.D22, this.D23], 
              label: 'Time',
              backgroundColor: "rgba(255, 206, 0, 0.91)",
            }
          ];
        }
        if(this.sday == "21")
        {
          var p = 24*20
          this.D0 = this.PIAll[p+0].Item1
          this.D1 = this.PIAll[p+1].Item1
          this.D2 = this.PIAll[p+2].Item1
          this.D3 = this.PIAll[p+3].Item1
          this.D4 = this.PIAll[p+4].Item1
          this.D5 = this.PIAll[p+5].Item1
          this.D6 = this.PIAll[p+6].Item1
          this.D7 = this.PIAll[p+7].Item1
          this.D8 = this.PIAll[p+8].Item1
          this.D9 = this.PIAll[p+9].Item1
          this.D10 = this.PIAll[p+10].Item1
          this.D11 = this.PIAll[p+11].Item1
          this.D12 = this.PIAll[p+12].Item1
          this.D13 = this.PIAll[p+13].Item1
          this.D14 = this.PIAll[p+14].Item1
          this.D15 = this.PIAll[p+15].Item1
          this.D16 = this.PIAll[p+16].Item1
          this.D17 = this.PIAll[p+17].Item1
          this.D18 = this.PIAll[p+18].Item1
          this.D19 = this.PIAll[p+19].Item1
          this.D20 = this.PIAll[p+20].Item1
          this.D21 = this.PIAll[p+21].Item1
          this.D22 = this.PIAll[p+22].Item1
          this.D23 = this.PIAll[p+23].Item1

          console.log("d("+this.D0+"+"+this.D1+"+"+this.D2+"+"+this.D3+"+"+this.D4+"+"+this.D5+"+"+this.D6+"+"+this.D7+"+"
          +this.D8+"+"+this.D9+"+"+this.D10+"+"+this.D11+"+"+this.D12+"+"+this.D13+"+"+this.D14+"+"+this.D15+"+"
          +this.D16+"+"+this.D17+"+"+this.D18+"+"+this.D19+"+"+this.D20+"+"+this.D21+"+"+this.D22+"+"+this.D23);
          this.barChartData = [
            { data: [this.D0, this.D1, this.D2, this.D3, this.D4, this.D5, this.D6, this.D7, this.D8, this.D9,
              this.D10, this.D11, this.D12, this.D13, this.D14, this.D15, this.D16, this.D17, this.D18, this.D19,
              this.D20, this.D21, this.D22, this.D23], 
              label: 'Time',
              backgroundColor: "rgba(255, 206, 0, 0.91)",
            }
          ];
        }
        if(this.sday == "22")
        {
          var p = 24*21
          this.D0 = this.PIAll[p+0].Item1
          this.D1 = this.PIAll[p+1].Item1
          this.D2 = this.PIAll[p+2].Item1
          this.D3 = this.PIAll[p+3].Item1
          this.D4 = this.PIAll[p+4].Item1
          this.D5 = this.PIAll[p+5].Item1
          this.D6 = this.PIAll[p+6].Item1
          this.D7 = this.PIAll[p+7].Item1
          this.D8 = this.PIAll[p+8].Item1
          this.D9 = this.PIAll[p+9].Item1
          this.D10 = this.PIAll[p+10].Item1
          this.D11 = this.PIAll[p+11].Item1
          this.D12 = this.PIAll[p+12].Item1
          this.D13 = this.PIAll[p+13].Item1
          this.D14 = this.PIAll[p+14].Item1
          this.D15 = this.PIAll[p+15].Item1
          this.D16 = this.PIAll[p+16].Item1
          this.D17 = this.PIAll[p+17].Item1
          this.D18 = this.PIAll[p+18].Item1
          this.D19 = this.PIAll[p+19].Item1
          this.D20 = this.PIAll[p+20].Item1
          this.D21 = this.PIAll[p+21].Item1
          this.D22 = this.PIAll[p+22].Item1
          this.D23 = this.PIAll[p+23].Item1

          console.log("d("+this.D0+"+"+this.D1+"+"+this.D2+"+"+this.D3+"+"+this.D4+"+"+this.D5+"+"+this.D6+"+"+this.D7+"+"
          +this.D8+"+"+this.D9+"+"+this.D10+"+"+this.D11+"+"+this.D12+"+"+this.D13+"+"+this.D14+"+"+this.D15+"+"
          +this.D16+"+"+this.D17+"+"+this.D18+"+"+this.D19+"+"+this.D20+"+"+this.D21+"+"+this.D22+"+"+this.D23);
          this.barChartData = [
            { data: [this.D0, this.D1, this.D2, this.D3, this.D4, this.D5, this.D6, this.D7, this.D8, this.D9,
              this.D10, this.D11, this.D12, this.D13, this.D14, this.D15, this.D16, this.D17, this.D18, this.D19,
              this.D20, this.D21, this.D22, this.D23], 
              label: 'Time',
              backgroundColor: "rgba(255, 206, 0, 0.91)",
            }
          ];
        }
        if(this.sday == "23")
        {
          var p = 24*22
          this.D0 = this.PIAll[p+0].Item1
          this.D1 = this.PIAll[p+1].Item1
          this.D2 = this.PIAll[p+2].Item1
          this.D3 = this.PIAll[p+3].Item1
          this.D4 = this.PIAll[p+4].Item1
          this.D5 = this.PIAll[p+5].Item1
          this.D6 = this.PIAll[p+6].Item1
          this.D7 = this.PIAll[p+7].Item1
          this.D8 = this.PIAll[p+8].Item1
          this.D9 = this.PIAll[p+9].Item1
          this.D10 = this.PIAll[p+10].Item1
          this.D11 = this.PIAll[p+11].Item1
          this.D12 = this.PIAll[p+12].Item1
          this.D13 = this.PIAll[p+13].Item1
          this.D14 = this.PIAll[p+14].Item1
          this.D15 = this.PIAll[p+15].Item1
          this.D16 = this.PIAll[p+16].Item1
          this.D17 = this.PIAll[p+17].Item1
          this.D18 = this.PIAll[p+18].Item1
          this.D19 = this.PIAll[p+19].Item1
          this.D20 = this.PIAll[p+20].Item1
          this.D21 = this.PIAll[p+21].Item1
          this.D22 = this.PIAll[p+22].Item1
          this.D23 = this.PIAll[p+23].Item1

          console.log("d("+this.D0+"+"+this.D1+"+"+this.D2+"+"+this.D3+"+"+this.D4+"+"+this.D5+"+"+this.D6+"+"+this.D7+"+"
          +this.D8+"+"+this.D9+"+"+this.D10+"+"+this.D11+"+"+this.D12+"+"+this.D13+"+"+this.D14+"+"+this.D15+"+"
          +this.D16+"+"+this.D17+"+"+this.D18+"+"+this.D19+"+"+this.D20+"+"+this.D21+"+"+this.D22+"+"+this.D23);
          this.barChartData = [
            { data: [this.D0, this.D1, this.D2, this.D3, this.D4, this.D5, this.D6, this.D7, this.D8, this.D9,
              this.D10, this.D11, this.D12, this.D13, this.D14, this.D15, this.D16, this.D17, this.D18, this.D19,
              this.D20, this.D21, this.D22, this.D23], 
              label: 'Time',
              backgroundColor: "rgba(255, 206, 0, 0.91)",
            }
          ];
        }
        if(this.sday == "24")
        {
          var p = 24*23
          this.D0 = this.PIAll[p+0].Item1
          this.D1 = this.PIAll[p+1].Item1
          this.D2 = this.PIAll[p+2].Item1
          this.D3 = this.PIAll[p+3].Item1
          this.D4 = this.PIAll[p+4].Item1
          this.D5 = this.PIAll[p+5].Item1
          this.D6 = this.PIAll[p+6].Item1
          this.D7 = this.PIAll[p+7].Item1
          this.D8 = this.PIAll[p+8].Item1
          this.D9 = this.PIAll[p+9].Item1
          this.D10 = this.PIAll[p+10].Item1
          this.D11 = this.PIAll[p+11].Item1
          this.D12 = this.PIAll[p+12].Item1
          this.D13 = this.PIAll[p+13].Item1
          this.D14 = this.PIAll[p+14].Item1
          this.D15 = this.PIAll[p+15].Item1
          this.D16 = this.PIAll[p+16].Item1
          this.D17 = this.PIAll[p+17].Item1
          this.D18 = this.PIAll[p+18].Item1
          this.D19 = this.PIAll[p+19].Item1
          this.D20 = this.PIAll[p+20].Item1
          this.D21 = this.PIAll[p+21].Item1
          this.D22 = this.PIAll[p+22].Item1
          this.D23 = this.PIAll[p+23].Item1

          console.log("d("+this.D0+"+"+this.D1+"+"+this.D2+"+"+this.D3+"+"+this.D4+"+"+this.D5+"+"+this.D6+"+"+this.D7+"+"
          +this.D8+"+"+this.D9+"+"+this.D10+"+"+this.D11+"+"+this.D12+"+"+this.D13+"+"+this.D14+"+"+this.D15+"+"
          +this.D16+"+"+this.D17+"+"+this.D18+"+"+this.D19+"+"+this.D20+"+"+this.D21+"+"+this.D22+"+"+this.D23);
          this.barChartData = [
            { data: [this.D0, this.D1, this.D2, this.D3, this.D4, this.D5, this.D6, this.D7, this.D8, this.D9,
              this.D10, this.D11, this.D12, this.D13, this.D14, this.D15, this.D16, this.D17, this.D18, this.D19,
              this.D20, this.D21, this.D22, this.D23], 
              label: 'Time',
              backgroundColor: "rgba(255, 206, 0, 0.91)",
            }
          ];
        }
        if(this.sday == "25")
        {
          var p = 24*24
          this.D0 = this.PIAll[p+0].Item1
          this.D1 = this.PIAll[p+1].Item1
          this.D2 = this.PIAll[p+2].Item1
          this.D3 = this.PIAll[p+3].Item1
          this.D4 = this.PIAll[p+4].Item1
          this.D5 = this.PIAll[p+5].Item1
          this.D6 = this.PIAll[p+6].Item1
          this.D7 = this.PIAll[p+7].Item1
          this.D8 = this.PIAll[p+8].Item1
          this.D9 = this.PIAll[p+9].Item1
          this.D10 = this.PIAll[p+10].Item1
          this.D11 = this.PIAll[p+11].Item1
          this.D12 = this.PIAll[p+12].Item1
          this.D13 = this.PIAll[p+13].Item1
          this.D14 = this.PIAll[p+14].Item1
          this.D15 = this.PIAll[p+15].Item1
          this.D16 = this.PIAll[p+16].Item1
          this.D17 = this.PIAll[p+17].Item1
          this.D18 = this.PIAll[p+18].Item1
          this.D19 = this.PIAll[p+19].Item1
          this.D20 = this.PIAll[p+20].Item1
          this.D21 = this.PIAll[p+21].Item1
          this.D22 = this.PIAll[p+22].Item1
          this.D23 = this.PIAll[p+23].Item1

          console.log("d("+this.D0+"+"+this.D1+"+"+this.D2+"+"+this.D3+"+"+this.D4+"+"+this.D5+"+"+this.D6+"+"+this.D7+"+"
          +this.D8+"+"+this.D9+"+"+this.D10+"+"+this.D11+"+"+this.D12+"+"+this.D13+"+"+this.D14+"+"+this.D15+"+"
          +this.D16+"+"+this.D17+"+"+this.D18+"+"+this.D19+"+"+this.D20+"+"+this.D21+"+"+this.D22+"+"+this.D23);
          this.barChartData = [
            { data: [this.D0, this.D1, this.D2, this.D3, this.D4, this.D5, this.D6, this.D7, this.D8, this.D9,
              this.D10, this.D11, this.D12, this.D13, this.D14, this.D15, this.D16, this.D17, this.D18, this.D19,
              this.D20, this.D21, this.D22, this.D23], 
              label: 'Time',
              backgroundColor: "rgba(255, 206, 0, 0.91)",
            }
          ];
        }
        if(this.sday == "26")
        {
          var p = 24*26
          this.D0 = this.PIAll[p+0].Item1
          this.D1 = this.PIAll[p+1].Item1
          this.D2 = this.PIAll[p+2].Item1
          this.D3 = this.PIAll[p+3].Item1
          this.D4 = this.PIAll[p+4].Item1
          this.D5 = this.PIAll[p+5].Item1
          this.D6 = this.PIAll[p+6].Item1
          this.D7 = this.PIAll[p+7].Item1
          this.D8 = this.PIAll[p+8].Item1
          this.D9 = this.PIAll[p+9].Item1
          this.D10 = this.PIAll[p+10].Item1
          this.D11 = this.PIAll[p+11].Item1
          this.D12 = this.PIAll[p+12].Item1
          this.D13 = this.PIAll[p+13].Item1
          this.D14 = this.PIAll[p+14].Item1
          this.D15 = this.PIAll[p+15].Item1
          this.D16 = this.PIAll[p+16].Item1
          this.D17 = this.PIAll[p+17].Item1
          this.D18 = this.PIAll[p+18].Item1
          this.D19 = this.PIAll[p+19].Item1
          this.D20 = this.PIAll[p+20].Item1
          this.D21 = this.PIAll[p+21].Item1
          this.D22 = this.PIAll[p+22].Item1
          this.D23 = this.PIAll[p+23].Item1

          console.log("d("+this.D0+"+"+this.D1+"+"+this.D2+"+"+this.D3+"+"+this.D4+"+"+this.D5+"+"+this.D6+"+"+this.D7+"+"
          +this.D8+"+"+this.D9+"+"+this.D10+"+"+this.D11+"+"+this.D12+"+"+this.D13+"+"+this.D14+"+"+this.D15+"+"
          +this.D16+"+"+this.D17+"+"+this.D18+"+"+this.D19+"+"+this.D20+"+"+this.D21+"+"+this.D22+"+"+this.D23);
          this.barChartData = [
            { data: [this.D0, this.D1, this.D2, this.D3, this.D4, this.D5, this.D6, this.D7, this.D8, this.D9,
              this.D10, this.D11, this.D12, this.D13, this.D14, this.D15, this.D16, this.D17, this.D18, this.D19,
              this.D20, this.D21, this.D22, this.D23], 
              label: 'Time',
              backgroundColor: "rgba(255, 206, 0, 0.91)",
            }
          ];
        }
        if(this.sday == "27")
        {
          var p = 24*26
          this.D0 = this.PIAll[p+0].Item1
          this.D1 = this.PIAll[p+1].Item1
          this.D2 = this.PIAll[p+2].Item1
          this.D3 = this.PIAll[p+3].Item1
          this.D4 = this.PIAll[p+4].Item1
          this.D5 = this.PIAll[p+5].Item1
          this.D6 = this.PIAll[p+6].Item1
          this.D7 = this.PIAll[p+7].Item1
          this.D8 = this.PIAll[p+8].Item1
          this.D9 = this.PIAll[p+9].Item1
          this.D10 = this.PIAll[p+10].Item1
          this.D11 = this.PIAll[p+11].Item1
          this.D12 = this.PIAll[p+12].Item1
          this.D13 = this.PIAll[p+13].Item1
          this.D14 = this.PIAll[p+14].Item1
          this.D15 = this.PIAll[p+15].Item1
          this.D16 = this.PIAll[p+16].Item1
          this.D17 = this.PIAll[p+17].Item1
          this.D18 = this.PIAll[p+18].Item1
          this.D19 = this.PIAll[p+19].Item1
          this.D20 = this.PIAll[p+20].Item1
          this.D21 = this.PIAll[p+21].Item1
          this.D22 = this.PIAll[p+22].Item1
          this.D23 = this.PIAll[p+23].Item1

          console.log("d("+this.D0+"+"+this.D1+"+"+this.D2+"+"+this.D3+"+"+this.D4+"+"+this.D5+"+"+this.D6+"+"+this.D7+"+"
          +this.D8+"+"+this.D9+"+"+this.D10+"+"+this.D11+"+"+this.D12+"+"+this.D13+"+"+this.D14+"+"+this.D15+"+"
          +this.D16+"+"+this.D17+"+"+this.D18+"+"+this.D19+"+"+this.D20+"+"+this.D21+"+"+this.D22+"+"+this.D23);
          this.barChartData = [
            { data: [this.D0, this.D1, this.D2, this.D3, this.D4, this.D5, this.D6, this.D7, this.D8, this.D9,
              this.D10, this.D11, this.D12, this.D13, this.D14, this.D15, this.D16, this.D17, this.D18, this.D19,
              this.D20, this.D21, this.D22, this.D23], 
              label: 'Time',
              backgroundColor: "rgba(255, 206, 0, 0.91)",
            }
          ];
        }
        if(this.sday == "28")
        {
          var p = 24*27
          this.D0 = this.PIAll[p+0].Item1
          this.D1 = this.PIAll[p+1].Item1
          this.D2 = this.PIAll[p+2].Item1
          this.D3 = this.PIAll[p+3].Item1
          this.D4 = this.PIAll[p+4].Item1
          this.D5 = this.PIAll[p+5].Item1
          this.D6 = this.PIAll[p+6].Item1
          this.D7 = this.PIAll[p+7].Item1
          this.D8 = this.PIAll[p+8].Item1
          this.D9 = this.PIAll[p+9].Item1
          this.D10 = this.PIAll[p+10].Item1
          this.D11 = this.PIAll[p+11].Item1
          this.D12 = this.PIAll[p+12].Item1
          this.D13 = this.PIAll[p+13].Item1
          this.D14 = this.PIAll[p+14].Item1
          this.D15 = this.PIAll[p+15].Item1
          this.D16 = this.PIAll[p+16].Item1
          this.D17 = this.PIAll[p+17].Item1
          this.D18 = this.PIAll[p+18].Item1
          this.D19 = this.PIAll[p+19].Item1
          this.D20 = this.PIAll[p+20].Item1
          this.D21 = this.PIAll[p+21].Item1
          this.D22 = this.PIAll[p+22].Item1
          this.D23 = this.PIAll[p+23].Item1

          console.log("d("+this.D0+"+"+this.D1+"+"+this.D2+"+"+this.D3+"+"+this.D4+"+"+this.D5+"+"+this.D6+"+"+this.D7+"+"
          +this.D8+"+"+this.D9+"+"+this.D10+"+"+this.D11+"+"+this.D12+"+"+this.D13+"+"+this.D14+"+"+this.D15+"+"
          +this.D16+"+"+this.D17+"+"+this.D18+"+"+this.D19+"+"+this.D20+"+"+this.D21+"+"+this.D22+"+"+this.D23);
          this.barChartData = [
            { data: [this.D0, this.D1, this.D2, this.D3, this.D4, this.D5, this.D6, this.D7, this.D8, this.D9,
              this.D10, this.D11, this.D12, this.D13, this.D14, this.D15, this.D16, this.D17, this.D18, this.D19,
              this.D20, this.D21, this.D22, this.D23], 
              label: 'Time',
              backgroundColor: "rgba(255, 206, 0, 0.91)",
            }
          ];
        }
        if(this.sday == "29")
        {
          var p = 24*28
          this.D0 = this.PIAll[p+0].Item1
          this.D1 = this.PIAll[p+1].Item1
          this.D2 = this.PIAll[p+2].Item1
          this.D3 = this.PIAll[p+3].Item1
          this.D4 = this.PIAll[p+4].Item1
          this.D5 = this.PIAll[p+5].Item1
          this.D6 = this.PIAll[p+6].Item1
          this.D7 = this.PIAll[p+7].Item1
          this.D8 = this.PIAll[p+8].Item1
          this.D9 = this.PIAll[p+9].Item1
          this.D10 = this.PIAll[p+10].Item1
          this.D11 = this.PIAll[p+11].Item1
          this.D12 = this.PIAll[p+12].Item1
          this.D13 = this.PIAll[p+13].Item1
          this.D14 = this.PIAll[p+14].Item1
          this.D15 = this.PIAll[p+15].Item1
          this.D16 = this.PIAll[p+16].Item1
          this.D17 = this.PIAll[p+17].Item1
          this.D18 = this.PIAll[p+18].Item1
          this.D19 = this.PIAll[p+19].Item1
          this.D20 = this.PIAll[p+20].Item1
          this.D21 = this.PIAll[p+21].Item1
          this.D22 = this.PIAll[p+22].Item1
          this.D23 = this.PIAll[p+23].Item1

          console.log("d("+this.D0+"+"+this.D1+"+"+this.D2+"+"+this.D3+"+"+this.D4+"+"+this.D5+"+"+this.D6+"+"+this.D7+"+"
          +this.D8+"+"+this.D9+"+"+this.D10+"+"+this.D11+"+"+this.D12+"+"+this.D13+"+"+this.D14+"+"+this.D15+"+"
          +this.D16+"+"+this.D17+"+"+this.D18+"+"+this.D19+"+"+this.D20+"+"+this.D21+"+"+this.D22+"+"+this.D23);
          this.barChartData = [
            { data: [this.D0, this.D1, this.D2, this.D3, this.D4, this.D5, this.D6, this.D7, this.D8, this.D9,
              this.D10, this.D11, this.D12, this.D13, this.D14, this.D15, this.D16, this.D17, this.D18, this.D19,
              this.D20, this.D21, this.D22, this.D23], 
              label: 'Time',
              backgroundColor: "rgba(255, 206, 0, 0.91)",
            }
          ];
        }
        if(this.sday == "30")
        {
          var p = 24*29
          this.D0 = this.PIAll[p+0].Item1
          this.D1 = this.PIAll[p+1].Item1
          this.D2 = this.PIAll[p+2].Item1
          this.D3 = this.PIAll[p+3].Item1
          this.D4 = this.PIAll[p+4].Item1
          this.D5 = this.PIAll[p+5].Item1
          this.D6 = this.PIAll[p+6].Item1
          this.D7 = this.PIAll[p+7].Item1
          this.D8 = this.PIAll[p+8].Item1
          this.D9 = this.PIAll[p+9].Item1
          this.D10 = this.PIAll[p+10].Item1
          this.D11 = this.PIAll[p+11].Item1
          this.D12 = this.PIAll[p+12].Item1
          this.D13 = this.PIAll[p+13].Item1
          this.D14 = this.PIAll[p+14].Item1
          this.D15 = this.PIAll[p+15].Item1
          this.D16 = this.PIAll[p+16].Item1
          this.D17 = this.PIAll[p+17].Item1
          this.D18 = this.PIAll[p+18].Item1
          this.D19 = this.PIAll[p+19].Item1
          this.D20 = this.PIAll[p+20].Item1
          this.D21 = this.PIAll[p+21].Item1
          this.D22 = this.PIAll[p+22].Item1
          this.D23 = this.PIAll[p+23].Item1

          console.log("d("+this.D0+"+"+this.D1+"+"+this.D2+"+"+this.D3+"+"+this.D4+"+"+this.D5+"+"+this.D6+"+"+this.D7+"+"
          +this.D8+"+"+this.D9+"+"+this.D10+"+"+this.D11+"+"+this.D12+"+"+this.D13+"+"+this.D14+"+"+this.D15+"+"
          +this.D16+"+"+this.D17+"+"+this.D18+"+"+this.D19+"+"+this.D20+"+"+this.D21+"+"+this.D22+"+"+this.D23);
          this.barChartData = [
            { data: [this.D0, this.D1, this.D2, this.D3, this.D4, this.D5, this.D6, this.D7, this.D8, this.D9,
              this.D10, this.D11, this.D12, this.D13, this.D14, this.D15, this.D16, this.D17, this.D18, this.D19,
              this.D20, this.D21, this.D22, this.D23], 
              label: 'Time',
              backgroundColor: "rgba(255, 206, 0, 0.91)",
            }
          ];
        }
        if(this.sday == "31")
        {
          var p = 24*30
          this.D0 = this.PIAll[p+0].Item1
          this.D1 = this.PIAll[p+1].Item1
          this.D2 = this.PIAll[p+2].Item1
          this.D3 = this.PIAll[p+3].Item1
          this.D4 = this.PIAll[p+4].Item1
          this.D5 = this.PIAll[p+5].Item1
          this.D6 = this.PIAll[p+6].Item1
          this.D7 = this.PIAll[p+7].Item1
          this.D8 = this.PIAll[p+8].Item1
          this.D9 = this.PIAll[p+9].Item1
          this.D10 = this.PIAll[p+10].Item1
          this.D11 = this.PIAll[p+11].Item1
          this.D12 = this.PIAll[p+12].Item1
          this.D13 = this.PIAll[p+13].Item1
          this.D14 = this.PIAll[p+14].Item1
          this.D15 = this.PIAll[p+15].Item1
          this.D16 = this.PIAll[p+16].Item1
          this.D17 = this.PIAll[p+17].Item1
          this.D18 = this.PIAll[p+18].Item1
          this.D19 = this.PIAll[p+19].Item1
          this.D20 = this.PIAll[p+20].Item1
          this.D21 = this.PIAll[p+21].Item1
          this.D22 = this.PIAll[p+22].Item1
          this.D23 = this.PIAll[p+23].Item1

          console.log("d("+this.D0+"+"+this.D1+"+"+this.D2+"+"+this.D3+"+"+this.D4+"+"+this.D5+"+"+this.D6+"+"+this.D7+"+"
          +this.D8+"+"+this.D9+"+"+this.D10+"+"+this.D11+"+"+this.D12+"+"+this.D13+"+"+this.D14+"+"+this.D15+"+"
          +this.D16+"+"+this.D17+"+"+this.D18+"+"+this.D19+"+"+this.D20+"+"+this.D21+"+"+this.D22+"+"+this.D23);
          this.barChartData = [
            { data: [this.D0, this.D1, this.D2, this.D3, this.D4, this.D5, this.D6, this.D7, this.D8, this.D9,
              this.D10, this.D11, this.D12, this.D13, this.D14, this.D15, this.D16, this.D17, this.D18, this.D19,
              this.D20, this.D21, this.D22, this.D23], 
              label: 'Time',
              backgroundColor: "rgba(255, 206, 0, 0.91)",
            }
          ];
        }
      },
      error => {
        alert("Can't not get pi value by tagname35");
      });
  }

  
  barChartOptions: ChartOptions = {
    maintainAspectRatio: false, 
  };
  barChartLabels: Label[] = ['00.00', '01.00', '02.00', '03.00', '04.00-', '05.00','06.00','07.00','08.00','09.00','10.00','11.00','12.00','13.00','14.00','15.00','16.00','17.00','18.00','19.00','20.00','21.00','22.00','23.00'];
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

  barChartLabels7: Label[] = ['SaleOffice', 'Inbound', 'Diesle', 'Gasohol95', 'Outbound'];
  barChartType7: ChartType = 'bar';
  barChartLegend7 = true;
  barChartPlugins7 = [];
  
  // barChartData: ChartDataSets[] = [
  //   { data: [45, 37, 60, 70, 46, 33,45, 37, 60, 70, 46, 33, 37, 60, 70, 46, 35, 37, 60, 70, 46, 33,35,40], 
  //     label: 'Time',
  //     backgroundColor: "rgba(255, 206, 0, 0.91)",
    
  //   }
  // ];
  
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

  // barChartData6: ChartDataSets[] = [
  //   { data: [666, 37, 60, 70, 46, 33,45, 37, 60, 70, 46, 33, 37, 60, 70, 46, 35, 37, 60, 70, 46, 33,35,40], 
  //     label: 'Time',
  //     backgroundColor: "rgb(204, 0, 0)",
    
  //   }
  // ];

      // barChartData7: ChartDataSets[] = [
      // { data: [666, 37, 60, 70, 46, 33,45, 37, 60, 70, 46, 33, 37, 60, 70, 46, 35, 37, 60, 70, 46, 33,35,40], 
      //   label: 'Time',
      //   backgroundColor: "rgba(216, 77, 24, 1)",
      
      // }
      // ];

}
