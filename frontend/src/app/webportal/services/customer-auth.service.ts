import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../pojo/customer';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export const AUTHENTICATED_CUSTOMER = 'authenticaterCustomer';
export const AUTHENTICATED_CUSTOMER_ID = 'authenticaterCustomerid';
@Injectable({
  providedIn: 'root',
})
export class CustomerAuthService {
  baseUrl: any;
  constructor(private http: HttpClient) {}

  public registerCustomer(customer: Customer): Observable<any> {
    return this.http.post<any>(
      'http://localhost:8080/registerCustomer',
      customer
    );
  }

  public loginCustomer(customer: Customer): Observable<any> {
    return this.http
      .post<any>('http://localhost:8080/loginCustomer', customer)
      .pipe(
        map((data) => {
          sessionStorage.setItem(AUTHENTICATED_CUSTOMER, customer.email);
          sessionStorage.setItem(AUTHENTICATED_CUSTOMER_ID, data.id);
          return data;
        })
      );
  }

  getCustomer(email) {
    return this.http.get<Customer>(
      `http://localhost:8080/getCustomer/${email}`
    );
  }

  getAuthenticatedCustomer() {
    return sessionStorage.getItem(AUTHENTICATED_CUSTOMER);
  }

  getAuthenticatedCustomerId() {
    return sessionStorage.getItem(AUTHENTICATED_CUSTOMER_ID);
  }

  isCustomerLoggedIn() {
    const customer = sessionStorage.getItem(AUTHENTICATED_CUSTOMER);
    return !(customer === null);
  }

  logout() {
    sessionStorage.removeItem(AUTHENTICATED_CUSTOMER);
    sessionStorage.removeItem(AUTHENTICATED_CUSTOMER_ID);
  }

  getCustomerList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getCustomerStatus(): Observable<Customer[]> {
    const uri = `http://localhost:8080/customerstatus`;
    return this.http.get<any>(uri);
  }

  updateUserProfile(customer) {
    return this.http.put<Customer>(
      `http://localhost:8080/updateCustomerProfile`,
      customer
    );
  }

  getCustomerById(id) {
    return this.http.get<Customer>(
      `http://localhost:8080/getCustomerById/${id}`
    );
  }

  getUserByType(email: string): Observable<String[]> {
    return this.http.get<any>(`http://localhost:8080/getCustomerByType/${email}`);
  }
}
