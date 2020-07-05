import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  
//import { ItemCat } from 'src/app/pojo/item-cat';


@Injectable({
  providedIn: 'root'
})
export class ProductcatService {

  private baseUrl = 'http://localhost:8080/product-cat/';

  constructor(private http:HttpClient) { }

  getProductCat(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'products-list');  
  }

  createProductCat(productcat: object): Observable<object> {  
    return this.http.post(`${this.baseUrl}` , productcat);  
  }  

}
