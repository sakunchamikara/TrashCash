import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  
//import { ItemCat } from 'src/app/pojo/item-cat';


@Injectable({
  providedIn: 'root'
})
export class ProductcatService {

  private baseUrl = 'http://localhost:8080/productCats/';

  constructor(private http:HttpClient) { }

  getProductCatList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  createProductCat(productcat: object): Observable<object> {  
    return this.http.post<any>(`${this.baseUrl}` , productcat);  
  }  

 

}
