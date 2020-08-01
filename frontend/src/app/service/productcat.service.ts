import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
//import { ItemCat } from 'src/app/pojo/item-cat';

@Injectable({
  providedIn: "root",
})
export class ProductcatService {
  private baseUrl = "http://localhost:8080/productCats";

  constructor(private http: HttpClient) {}

  getProductCatList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  createProductCat(productcat: object): Observable<object> {
    return this.http.post<any>("http://localhost:8080/productCats", productcat);
  }
  // public registerUserFromRemote(user: User): Observable<any> {
  //   return this.http.post<any>("http://localhost:8080/registerUser", user);
  // }

  deleteProductCat(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: "text" });
  }

  getProductCat(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  updateProductCat(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
  
  getProductCatDropdownValues(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
