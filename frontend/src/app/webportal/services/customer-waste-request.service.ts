import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerWasteRequestService {

  private baseUrl = 'http://localhost:8080/customerWasteRequest';
  constructor(private http:HttpClient) { }

  createCustomerWasteRequest(wasteRequest:Object):Observable<Object>{
      return this.http.post<any>(`${this.baseUrl}`,wasteRequest);
  }
}
