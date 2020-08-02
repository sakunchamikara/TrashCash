import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class CustomerFeedbackService {

  private baseUrl = 'http://localhost:8080/customerFeedback';

  constructor(private http:HttpClient,private modalService: NgbModal) { }

  createCustomerFeedback(customerFeedback:Object):Observable<Object>{

    console.log(customerFeedback);
   // return this.http.post<any>(`${this.baseUrl}`,customerFeedback);
    return this.http.post<any>("http://localhost:8080/customerFeedback", customerFeedback);

  }

  getCustomerFeedbackList():Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }
}
