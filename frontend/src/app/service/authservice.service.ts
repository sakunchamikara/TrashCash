import { Injectable } from '@angular/core';
import { User } from '../pojo/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthserviceService {
  constructor(private http: HttpClient) {}

  public loginUserFromRemote(user: User): Observable<any> {
    return this.http.post<any>("http://localhost:8080/loginUser", user);
  }
}
