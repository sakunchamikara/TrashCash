import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CheckoutService } from '../../services/checkout.service';
import { Customer } from '../../pojo/customer';
import { CustomerAuthService } from '../../services/customer-auth.service';
import { Observable } from 'rxjs';

interface InputData {
  name: string;
  value: string;
}

interface FormInputData {
  inputData: Array<InputData>;
}

interface PaymentData {
  merchant_id: string;
  return_url: string;
  cancel_url: string;
  notify_url: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  order_id: string;
  items: string;
  currency: string;
  recurrence: string;
  duration: string;
  amount: string;
  // custom_1: string;
  // custom_2: string;
  // hash:string
}

@Component({
  selector: "app-check-out",
  templateUrl: "./check-out.component.html",
  styleUrls: ["./check-out.component.scss"],
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
  merchant_id = "1214203";
  return_url = "http://localhost:4200/customer/cart";
  cancel_url = "http://localhost:4200/customer/checckOut";
  notify_url = "http://localhost:8080/notifypayment";
  order_id = "ItemNo12345";
  items = "Door bell wireless";
  currency = "LKR";
  amount = "500";
  country = "Sri Lanka";
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
    // console.log(form);
    console.log(form.value);
    this.doPayment(form.value);
    // this.checkoutService.makePayment(form.value).subscribe(
    //   (data) => {
    //     console.log(data);
    //     this.doPayment(data);
    //   },
    //   (error) => {}
    // );
  }

  doPayment(pd: PaymentData) {
    const data = new Array<InputData>();
    data.push({ name: "merchant_id", value: `${pd.merchant_id}` });
    data.push({ name: "return_url", value: `${pd.return_url}` });
    data.push({ name: "cancel_url", value: `${pd.notify_url}` });
    data.push({ name: "notify_url", value: `${pd.notify_url}` });
    data.push({ name: "first_name", value: `${pd.first_name}` });
    data.push({ name: "last_name", value: `${pd.last_name}` });
    data.push({ name: "email", value: `${pd.email}` });
    data.push({ name: "phone", value: `${pd.phone}` });
    data.push({ name: "address", value: `${pd.address}` });
    data.push({ name: "city", value: `${pd.city}` });
    data.push({ name: "country", value: `${pd.country}` });
    data.push({ name: "order_id", value: `${pd.order_id}` });
    data.push({ name: "items", value: `${pd.items}` });
    data.push({ name: "currency", value: `${pd.currency}` });
    data.push({ name: "amount", value: `${pd.amount}` });
    // data.push({ name: "custom_1", value: `${pd.custom_1}` });
    // data.push({ name: "custom_2", value: `${pd.custom_2}` });
    // data.push({ name: 'hash', value: `${pd.hash}` });

    const form = this.createForm({ inputData: data });
    // You have to create hidden(style="display:none") div element with this "submit-form-container" id (id="submit-form-container") in the component
    // <div style="display:none" id="submit-form-container"></div>
    document.querySelector("#submit-form-container").appendChild(form);
    form.submit();
  }

  createForm(data: FormInputData): HTMLFormElement {
    const form: HTMLFormElement = document.createElement("form");
    form.setAttribute("action", `https://sandbox.payhere.lk/pay/checkout`);
    form.setAttribute("method", "POST");

    form.append(
      ...data.inputData.map((d) => {
        return this.createInput(d);
      })
    );

    return form;
  }

  createInput(data: InputData): HTMLInputElement {
    const input = document.createElement("input");
    input.setAttribute("type", "hidden");
    input.setAttribute("name", `${data.name}`);
    input.setAttribute("value", `${data.value}`);
    return input;
  }
}
