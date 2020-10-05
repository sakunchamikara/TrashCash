import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SummaryStockService {

  

  private baseUrl  = 'http://localhost:8080/summaryStock';
  
  constructor(private http:HttpClient) { }

  createSummaryStock(summaryStock: Object) : Observable <Object>{
    return this.http.post<any>(`${this.baseUrl}`,summaryStock);
  }

  getSummaryWasteListByType(): Observable<any> {
    let url = `http://localhost:8080/summaryStock/type`;
    return this.http.get(url)
    
  }

  getSummaryWasteListByCount(): Observable<any> {
    let url = `http://localhost:8080/summaryStockCount/type`;
    return this.http.get(url)
    
  }

  getSummaryWasteListById(): Observable<any> {
    let url = `http://localhost:8080/summaryStockId/type`;
    return this.http.get(url)
    
  }

  updateSummaryStock(id:number,value:any):Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`,value);
  }

  
  updatetable(type: String): Observable<any> {
    const uri = `http://localhost:8080/getwastetypeFrom/${type}`;
    return this.http.get(uri);
  }
  getWasteByType(type: String): Observable<any> {
        
    const uri = `http://localhost:8080/getwasteByType/${type}`;
    return this.http.get(uri);
  }

  getSummaryWaste(): Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }

  getSummaryWastebyId(id:number) :Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }


 



}


