import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Orders } from '../pojo/orders';

@Injectable({
  providedIn: 'root',
})
export class CustomerOrderService {
  public getAllOrders():Observable<Orders[]> {
    return this.httpClient.get<any>(`http://localhost:8080/getAllOrders`);
  }
  constructor(private httpClient: HttpClient) {}

  public setOrder(order: Orders, cid: number): Observable<any> {
    return this.httpClient.post<any>(`http://localhost:8080/setOrder/${cid}`, order);
  }

  public getOrdersById(id: number): Observable<Orders[]> {
    return this.httpClient.get<any>(`http://localhost:8080/getOrders/${id}`);
  }

  public getAgentPendingOders():Observable<Orders[]> {
    return this.httpClient.get<any>(`http://localhost:8080/agentPendingOrders`);
  }
}
