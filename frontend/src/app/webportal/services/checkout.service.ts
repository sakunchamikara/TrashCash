import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  constructor(private http: HttpClient) {}

  makePayment(object) {
    return this.http.post<any>(
      'https://sandbox.payhere.lk/pay/checkout',
      object
    );
  }
}
