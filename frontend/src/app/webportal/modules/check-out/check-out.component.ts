import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CheckoutService } from '../../services/checkout.service';
import { Customer } from '../../pojo/customer';
import { CustomerAuthService } from '../../services/customer-auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss'],
})
export class CheckOutComponent implements OnInit {
  constructor(
    private checkoutService: CheckoutService,
    private customerAuthService: CustomerAuthService
  ) {}

  customer: Customer;
  first_name: string;
  last_name: string;
  email: string;
  phone: number;
  address: string;
  merchant_id = '1214203';
  return_url = 'http://localhost:4200/customer/cart';
  cancel_url = 'http://localhost:4200/customer/home';
  notify_url = 'http://localhost:4200/customer/shop';
  order_id = 'ItemNo12345';
  items = 'Door bell wireless';
  currency = 'LKR';
  amount: '500';
  country = 'Sri Lanka';
  city: string;

  ngOnInit() {
    this.email = this.customerAuthService.getAuthenticatedCustomer();
    this.customerAuthService.getCustomer(this.email).subscribe(
      (data) => {
        this.customer = data;
        this.first_name = this.customer.firstName;
        this.last_name = this.customer.lastName;
        this.email = this.customer.email;
        this.phone = this.customer.contactNumber;
        this.address = this.customer.address;
      },
      (error) => {}
    );
  }

  checkOut(form: NgForm) {
    console.log(form);
    console.log(form.value);
    this.checkoutService.makePayment(form.value).subscribe(
      (data) => {},
      (error) => {}
    );
  }
}
