import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Orders } from '../webportal/pojo/orders';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(private httpClient: HttpClient) {}

  public getOrdersByType(type: string): Observable<Orders[]> {
    return this.httpClient.get<any>(
      `http://localhost:8080/getOrdersByType/${type}`
    );
  }

  updatePendingOrderStatus(pendingOrder: Orders): Observable<Orders> {
    return this.httpClient.put<any>(
      `http://localhost:8080/updatePendingOrderStatus`,
      pendingOrder
    );
  }
}
