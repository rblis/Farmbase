import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LivestockComponent } from './livestock/livestock.component';
import { ProduceComponent } from './produce/produce.component';
import { CustomerComponent } from './customer/customer.component';
import { SupplierComponent } from './supplier/supplier.component';
import { EmployeeComponent } from './employee/employee.component';
import { FarmerComponent } from './farmer/farmer.component';
import { LandplotComponent } from './landplot/landplot.component';

@NgModule({
  declarations: [
    AppComponent,
    LivestockComponent,
    ProduceComponent,
    CustomerComponent,
    SupplierComponent,
    EmployeeComponent,
    FarmerComponent,
    LandplotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
