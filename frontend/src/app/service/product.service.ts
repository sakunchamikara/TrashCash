import { Injectable } from '@angular/core';
import { Item } from '../pojo/item';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
//pull
@Injectable({
  providedIn: 'root'
})
//new comment
export class ProductService {

  private baseUrl = 'http://localhost:8080/products';
  constructor(private http: HttpClient) { }
  createProduct(product: Object): Observable<Object> {
    return this.http.post<any>(`${this.baseUrl}`, product);
    
  }
  getProductList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getProduct(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  updateProduct(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
}
