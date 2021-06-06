import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Layout/header/header.component';
import { MenuComponent } from './Layout/menu/menu.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Journal } from './Finance/journal';
import { LoginingComponent } from './logining/logining.component';
import { Ledger } from './Finance/ledger';
import { MatSliderModule } from '@angular/material/slider';
import { MDashboardComponent } from './components/dashboard/mdashboard.component';
import { Profile } from 'src/app/Home/Profile';
import { Income } from 'src/app/Finance/income';
import { Inventory } from 'src/app/Finance/inventory';
import { Invoice } from 'src/app/Finance/invoice';
import { PurchaseOrder } from 'src/app/Finance/purchase';
import { Reconciliation } from 'src/app/Finance/reconciliation';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    DashboardComponent,
    Journal,
    Ledger,
    LoginingComponent,
    MDashboardComponent,
    Profile,
    Income,
    Inventory,
    Invoice,
    PurchaseOrder,
    Reconciliation
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
