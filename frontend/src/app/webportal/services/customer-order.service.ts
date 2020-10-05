import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CustomerOrderService {
  constructor(private httpClient: HttpClient) {}

  setOrderId(order: Object): Observable<Object> {
    return this.httpClient.get<Object>(
      'http://localohiost:8080/setOrder',
      order
    );
  }
}
