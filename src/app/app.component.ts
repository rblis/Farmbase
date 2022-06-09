import { Component } from '@angular/core';
import { LivestockComponent } from './livestock/livestock.component';
import { ProduceComponent } from './produce/produce.component';
import { SupplierComponent } from './supplier/supplier.component';
import { FarmerComponent } from './farmer/farmer.component';
import { CustomerComponent } from './customer/customer.component';
import { EmployeeComponent } from './employee/employee.component';
import { LandplotComponent } from './landplot/landplot.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FarmBase';
}
