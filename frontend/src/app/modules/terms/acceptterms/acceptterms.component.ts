import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/webportal/pojo/customer';
import { CustomerAuthService } from 'src/app/webportal/services/customer-auth.service';
import { Router } from '@angular/router';
import { error, log } from 'console';

@Component({
  selector: 'app-acceptterms',
  templateUrl: './acceptterms.component.html',
  styleUrls: ['./acceptterms.component.scss'],
})
export class AccepttermsComponent implements OnInit {
  customers: Array<Customer>;
  constructor(
    private customerAuthService: CustomerAuthService,
    private route: Router
  ) {}

  ngOnInit() {
    this.getTermsAcceptedCustomersList();
  }

  getTermsAcceptedCustomersList() {
    this.customerAuthService.getCustomerStatus().subscribe(
      (data) => {
        this.customers = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
