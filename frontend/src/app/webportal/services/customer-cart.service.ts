import { Injectable } from '@angular/core';
import { Cart } from '../pojo/cart';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CustomerCartService {
  constructor(private http: HttpClient) {}

  public addToCart(cart: Cart): Observable<any> {
    return this.http.post<any>('http://localhost:8080/addToCart', cart);
  }
}
