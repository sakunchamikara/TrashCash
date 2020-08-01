import { Component, OnInit } from '@angular/core';
import { Customer } from '../../pojo/customer';
import { Router } from '@angular/router';
import { CustomerAuthService } from '../../services/customer-auth.service';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.scss'],
})
export class CustomerLoginComponent implements OnInit {
  customer = new Customer();
  msg = '';
  constructor(
    private route: Router,
    private authService: CustomerAuthService
  ) {}

  ngOnInit() {}

  loginCustomer() {
    this.authService.loginCustomer(this.customer).subscribe(
      (data) => {
        this.route.navigate([`/customer/welcome`]);
      },
      (error) => {
        this.msg = error.error.message;
      }
    );
  }
}
