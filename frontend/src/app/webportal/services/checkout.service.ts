import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root",
})
export class CheckoutService {
  constructor(private http: HttpClient) {}

  makePayment(object): Observable <any> {
    return this.http.post<any>("https://localhost:8080/payment", object);
  }
}
