import { Component, OnInit } from '@angular/core';
import { Customer, CustomersService } from '@workshop/core-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  customers$: Observable<Customer[]>;

  constructor(private customerService: CustomersService) {}

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers() {
    this.customers$ = this.customerService.all();
  }
}
