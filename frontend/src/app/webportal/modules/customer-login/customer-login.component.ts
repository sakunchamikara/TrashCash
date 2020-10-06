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
    this.customer.password = btoa(this.customer.password);
    this.authService.loginCustomer(this.customer).subscribe(
      (data) => {
        console.log(data)
        console.log(data.type)
        if(data.type == 'company'){
        this.route.navigate([`/outsource/dashboard`]).then(() => {
         // window.location.reload();
        });
      }
      if(data.type == 'customer'){
        this.route.navigate([`/customer/welcome`]).then(() => {
         // window.location.reload();
        });
      }
      },
      (error) => {
        this.msg = error.error.message;
      }
    );
  }
}
