import { Component, OnInit } from '@angular/core';
import { Customer } from '../../pojo/customer';
import { Router } from '@angular/router';
import { CustomerAuthService } from '../../services/customer-auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.scss'],
})
export class CustomerRegisterComponent implements OnInit {
  customer = new Customer();
  errorMessage: string;
  theCheckbox = false;
  marked = false;

  constructor(
    private route: Router,
    private authService: CustomerAuthService
  ) {}

  ngOnInit() {}

  toggleVisibility(e) {
    this.marked = e.target.checked;
    if (this.marked === true) {
      this.customer.type = 'company';
      // console.log(this.customer.type);
    } else {
      this.customer.type = 'customer';
      // console.log(this.customer.type);
    }
    // console.log(this.marked);
  }

  registerCustomer() {
    // console.log(this.customer);
    this.customer.password = btoa(this.customer.password);
    this.authService.registerCustomer(this.customer).subscribe(
      (data) => {
        this.route.navigate(['/customer/login']);
      },
      (error) => {
        this.errorMessage = error.error.message;
      }
    );
  }
}
