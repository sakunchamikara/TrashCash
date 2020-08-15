import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SummaryStockService {

  

  private baseUrl = 'http://localhost:8080/summaryStock';

  constructor(private http:HttpClient) { }

  createSummaryStock(summaryStock: Object) : Observable <Object>{
    return this.http.post<any>(`${this.baseUrl}`,summaryStock);
  }

  getSummaryWasteListByType(): Observable<any> {
    let url = `http://localhost:8080/summaryStock/wasteType`;
    return this.http.get(url)
    
  }
}

