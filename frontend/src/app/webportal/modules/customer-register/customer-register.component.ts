import { Component, OnInit } from '@angular/core';
import { Customer } from '../../pojo/customer';
import { Router } from '@angular/router';
import { CustomerAuthService } from '../../services/customer-auth.service';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.scss'],
})
export class CustomerRegisterComponent implements OnInit {
  customer = new Customer();
  errorMessage: string;
  constructor(
    private route: Router,
    private authService: CustomerAuthService
  ) {}

  ngOnInit() {}

  registerCustomer() {
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
