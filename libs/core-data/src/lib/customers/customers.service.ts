import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Customer } from './customer.model';

const BASE_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  model = 'customers';

  constructor(private httpClient: HttpClient) {}

  getUrl() {
    return `${BASE_URL}${this.model}`;
  }

  getUrlForId(id) {
    return `${this.getUrl()}/${id}`;
  }

  all() {
    return this.httpClient.get<Customer[]>(this.getUrl());
  }

  load(id) {
    return this.httpClient.get<Customer>(this.getUrlForId(id));
  }

  create(customer: Customer) {
    return this.httpClient.post(this.getUrl(), customer);
  }

  update(customer: Customer) {
    return this.httpClient.patch(this.getUrlForId(customer.id), customer);
  }

  delete(customer: Customer) {
    return this.httpClient.delete(this.getUrlForId(customer.id));
  }
}
