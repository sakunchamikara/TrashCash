import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewtermsService {

  private baseUrl = 'http://localhost:8080/terms';
  constructor(private http:HttpClient) { }

  createNewterm(terms: Object): Observable<Object> {
    return this.http.post<any>(`${this.baseUrl}`, terms);
    
  }
  getNewtermList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  deleteTerm(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getTerm(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  updateTerm(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
}
