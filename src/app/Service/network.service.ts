import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StaffAll, Staff } from 'src/app/Model/staff.model';
import { BayStationAll } from '../Model/baystation.model';
import { CustomerAll } from '../Model/customer.model';
import { GasAll } from '../Model/gas.module';
import { InvoiceAll } from '../Model/invoice.model';
import { JournalTransactionAll } from '../Model/journaltransaction.model';
import { PaymentAll } from '../Model/payment.model';
import { PurchaseAll } from '../Model/purchase.model';
import { SaleOfficeAll } from '../Model/saleoffice.model';
import { TruckAll } from '../Model/truck.model';
import { WeightAll } from '../Model/weight.model';
import { FormControl,ReactiveFormsModule,FormsModule,FormGroup,FormBuilder,Validators,FormArray } from '@angular/forms';
import { PIData1 } from '../Model/PIData1.model';
import { InventoryNewAll } from '../Model/C5Inventory_.model';
import { PONewAll } from '../Model/C6PO_.model';
import { IncomeNewAll } from '../Model/C4Income_.model';
import { InvoiceNewAll } from '../Model/C7invoice_.model';
import { ReconNewAll } from '../Model/C3Recon_.model';
import { GernalNewAll } from '../Model/C1Jounal_.model';
import { LedgerARNewAll } from '../Model/C2Ledeger_AR__.model';
import { LedgerAPNewAll } from '../Model/C2Ledger_AP__.model';
import { LedgerCashNewAll } from '../Model/C2Ledger_Cash__.model';
import { LedgerStockDieselNewAll } from '../Model/C2Ledger_StockDeisel__.model';
import { LedgerStockGasohol95NewAll } from '../Model/C2Ledger_StockGasohol95__.model';


@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  private staffURL = `https://localhost:44339/api/auth/staff`;
  private purchaseURL = `https://localhost:44339/api/auth/purchase`;
  private journalURL = `https://localhost:44339/api/auth/journal`;
  private gasURL = `https://localhost:44339/api/auth/gas`;
  private truckURL = `https://localhost:44339/api/auth/truck`;
  private customerURL = `https://localhost:44339/api/auth/customer`;
  private bayURL = `https://localhost:44339/api/auth/bay`;
  private invoiceURL = `https://localhost:44339/api/auth/invoice`;
  private paymentURL = `https://localhost:44339/api/auth/payment`;
  private weightURL = `https://localhost:44339/api/auth/weight`;
  private saleofficeURL = `https://localhost:44339/api/auth/saleoffice`;
  private PIValueURL = `https://localhost:44339/api/pi/value/`;

  private InventoryURL = `https://localhost:44339/api/auth/Inventory`;
  private POURL = `https://localhost:44339/api/auth/PO`;
  private IncomeURL = `https://localhost:44339/api/auth/Income`;
  private InvoiceURL = `https://localhost:44339/api/auth/Invoice`;
  private ReconURL = `https://localhost:44339/api/auth/Recon`;

  private GeneralURL = `https://localhost:44339/api/auth/General`;
  private GeneralURL2 = `https://localhost:44339/api/auth/General/`;
  private LedgerARURL = `https://localhost:44339/api/auth/LedgerAR`;
  private LedgerAPURL = `https://localhost:44339/api/auth/LedgerAP`;
  private LedgerCashURL = `https://localhost:44339/api/auth/LedgerCash`;
  private LedgerStacokDieselURL = `https://localhost:44339/api/auth/LedgerStacokDiesel`;
  private LedgerStacokGasohol95URL = `https://localhost:44339/api/auth/LedgerStacokGasohol95`;
 
 
  constructor(private httpClient: HttpClient) { }

  // เขียนget 6 อันใหม่
  getJournalByDate(date: string): Observable<GernalNewAll> 
  {
    return this.httpClient.get<GernalNewAll>(this.GeneralURL2 + date);
  }

  getGeneral(): Observable<GernalNewAll> 
  {
    return this.httpClient.get<GernalNewAll>(this.GeneralURL);
  }

  getLedgerAR(): Observable<LedgerARNewAll> 
  {
    return this.httpClient.get<LedgerARNewAll>(this.LedgerARURL);
  }

  getLedgerAP(): Observable<LedgerAPNewAll> 
  {
    return this.httpClient.get<LedgerAPNewAll>(this.LedgerAPURL);
  }

  getLedgerCash(): Observable<LedgerCashNewAll> 
  {
    return this.httpClient.get<LedgerCashNewAll>(this.LedgerCashURL);
  }

  getLedgerStacokDiesel(): Observable<LedgerStockDieselNewAll> 
  {
    return this.httpClient.get<LedgerStockDieselNewAll>(this.LedgerStacokDieselURL);
  }

  getLedgerStacokGasohol95(): Observable<LedgerStockGasohol95NewAll> 
  {
    return this.httpClient.get<LedgerStockGasohol95NewAll>(this.LedgerStacokGasohol95URL);
  }

  getRecon(): Observable<ReconNewAll> 
  {
    return this.httpClient.get<ReconNewAll>(this.ReconURL);
  }

  getInvoiceNew(): Observable<InvoiceNewAll> 
  {
    return this.httpClient.get<InvoiceNewAll>(this.InvoiceURL);
  }
  
  getIncome(): Observable<IncomeNewAll> 
  {
    return this.httpClient.get<IncomeNewAll>(this.IncomeURL);
  }

  getPO(): Observable<PONewAll> 
  {
    return this.httpClient.get<PONewAll>(this.POURL);
  }

  getPIValueByTagname(tagname: string): Observable<PIData1> 
  {
    return this.httpClient.get<PIData1>(this.PIValueURL + tagname);
  }

  getInventory(): Observable<InventoryNewAll> 
  {
    return this.httpClient.get<InventoryNewAll>(this.InventoryURL);
  }

  getStaff(): Observable<StaffAll> 
  {
    return this.httpClient.get<StaffAll>(this.staffURL);
  }

  getPurchase(): Observable<PurchaseAll> 
  {
    return this.httpClient.get<PurchaseAll>(this.purchaseURL);
  }

  getJournal(): Observable<JournalTransactionAll> 
  {
    return this.httpClient.get<JournalTransactionAll>(this.journalURL);
  }

  getGas(): Observable<GasAll> 
  {
    return this.httpClient.get<GasAll>(this.gasURL);
  }

  getTruck(): Observable<TruckAll> 
  {
    return this.httpClient.get<TruckAll>(this.truckURL);
  }

  getCustomer(): Observable<CustomerAll> 
  {
    return this.httpClient.get<CustomerAll>(this.customerURL);
  }

  getBay(): Observable<BayStationAll> 
  {
    return this.httpClient.get<BayStationAll>(this.bayURL);
  }

  getInvoice(): Observable<InvoiceAll> 
  {
    return this.httpClient.get<InvoiceAll>(this.invoiceURL);
  }

  getPayment(): Observable<PaymentAll> 
  {
    return this.httpClient.get<PaymentAll>(this.paymentURL);
  }

  getWeight(): Observable<WeightAll> 
  {
    return this.httpClient.get<WeightAll>(this.weightURL);
  }

  getSaleOffice(): Observable<SaleOfficeAll> 
  {
    return this.httpClient.get<SaleOfficeAll>(this.saleofficeURL);
  }

}