import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../pojo/customer';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export const AUTHENTICATED_CUSTOMER = 'authenticaterCustomer';
@Injectable({
  providedIn: "root",
})
export class CustomerAuthService {
  constructor(private http: HttpClient) {}

  public registerCustomer(customer: Customer): Observable<any> {
    return this.http.post<any>(
      "http://localhost:8080/registerCustomer",
      customer
    );
  }

  public loginCustomer(customer: Customer): Observable<any> {
    return this.http
      .post<any>("http://localhost:8080/loginCustomer", customer)
      .pipe(
        map((data) => {
          sessionStorage.setItem(AUTHENTICATED_CUSTOMER, customer.email);
          return data;
        })
      );
  }

  getCustomer(email) {
    return this.http.get<Customer>(`http://localhost:8080/getCustomer/${email}`);
  }

  getAuthenticatedCustomer() {
    return sessionStorage.getItem(AUTHENTICATED_CUSTOMER);
  }

  isCustomerLoggedIn() {
    const customer = sessionStorage.getItem(AUTHENTICATED_CUSTOMER);
    return !(customer === null);
  }

  logout() {
    sessionStorage.removeItem(AUTHENTICATED_CUSTOMER);
  }
}
