import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-customer-group-status',
  templateUrl: './customer-group-status.component.html',
  styleUrls: ['./customer-group-status.component.css']
})
export class CustomerGroupStatusComponent {
  @Input() group;
}
