import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsService } from './projects/projects.service';
import { HttpClientModule } from '@angular/common/http';
import { CustomersService } from './customers/customers.service';
import { StatusPipe } from './status/status.pipe';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [ProjectsService, CustomersService],
  declarations: [StatusPipe],
  exports: [StatusPipe]
})
export class CoreDataModule {}
