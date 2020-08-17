import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class OutsourceProductAddService {

  constructor(private http:HttpClient,private modalService: NgbModal) { }

  createOutsourceProductadd(addproduct:Object):Observable<Object>{
    console.log("hello");

    console.log(addproduct);
    const baseUrl = 'http://localhost:8080/Reproducts';
    return this.http.post<any>(baseUrl,addproduct);

  }

  getaddproducts():Observable<any>{
    
    const baseUrl = 'http://localhost:8080/Reproducts';
    return this.http.get(baseUrl);
  }

  deletereProduct(id:number) :Observable<any>{
    const baseUrl = `http://localhost:8080/Reproducts/${id}`;
    return this.http.delete(baseUrl, {responseType: 'text'});
  }
}
