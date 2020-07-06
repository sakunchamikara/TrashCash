import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { CollectedWaste } from '../pojo/collectedWaste';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CollectedWasteServiceService {

  private baseUrl = 'http://localhost:8080/collectedWaste';

  constructor(private http: HttpClient) { }

  createCollectedWaste(collectedWaste: Object) : Observable <Object>{
    return this.http.post<any>(`${this.baseUrl}`,collectedWaste);
  }

  getCollectedWasteList():Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }

  deleteCollectedWaste(id:number) :Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
  }

  getCollectedWaste(id:number) :Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  // updateCollectedWaste(id:number):Observable<Object>{
  //   return this.http.put(`${this.baseUrl}/${id}`,value)
  // }

}


