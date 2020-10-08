import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private httpClient: HttpClient) { }

  public  sendEmail(email: string): Observable<Object> {
      return this.httpClient.get<any>(`http://localhost:8080/sendMail/${email}`);
  }
}
