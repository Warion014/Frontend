import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { Profile } from './Home/Profile';
import { Income } from './Finance/income';
import { Inventory } from './Finance/inventory';
import { Invoice } from './Finance/invoice';
import { Journal } from './Finance/journal';
import { Ledger } from './Finance/ledger';
import { Reconciliation } from './Finance/reconciliation';
import { PurchaseOrder } from './Finance/purchase';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginingComponent } from './logining/logining.component';
import { MDashboardComponent } from './components/dashboard/mdashboard.component';
//import { FormControl,ReactiveFormsModule,FormsModule,FormGroup,FormBuilder,Validators,FormArray } from '@angular/forms';

const routes: Routes = [
  {path: '', component: LoginingComponent},
  //{path: '**', component: Profile},
  {path: 'profile', component: Profile},
  {path: 'profile/admin', component: Profile},
  {path: 'profile/operator', component: Profile},
  {path: 'profile/manager', component: Profile},
  {path: 'journal', component: Journal},
  {path: 'ledger', component: Ledger},
  {path: 'income', component: Income},
  {path: 'reconciliation', component: Reconciliation},
  {path: 'inventory', component: Inventory},
  {path: 'purchase', component: PurchaseOrder},
  {path: 'invoice', component: Invoice},
  {path: 'operator/dashboard', component: DashboardComponent},//ยังไม่ได้แยกหน้า
  {path: 'manager/dashboard', component: MDashboardComponent},//ยังไม่ได้แยกหน้า
];
@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule,ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }