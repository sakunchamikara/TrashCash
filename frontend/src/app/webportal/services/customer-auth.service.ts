import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../pojo/customer';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CustomerAuthService {
  constructor(private http: HttpClient) {}

  public registerCustomer(customer: Customer): Observable<any> {
    return this.http.post<any>(
      'http://localhost:8080/registerCustomer',
      customer
    );
  }
}
