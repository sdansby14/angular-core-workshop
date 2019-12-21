import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerGroupStatusComponent } from './customer-group-status/customer-group-status.component';
import { CustomersStatusComponent } from './customers-status/customers-status.component';
import { MaterialModule } from '@workshop/material';
import { CoreDataModule } from '@workshop/core-data';

@NgModule({
  declarations: [CustomersStatusComponent, CustomerGroupStatusComponent],
  imports: [CommonModule, MaterialModule, CoreDataModule],
  exports: [
    CoreDataModule,
    CustomersStatusComponent,
    CustomerGroupStatusComponent
  ]
})
export class SharedModule {}
