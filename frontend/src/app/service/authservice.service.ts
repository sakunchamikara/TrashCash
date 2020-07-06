import { Injectable } from "@angular/core";
import { User } from "../pojo/user";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

export const AUTHENTICATED_USER = "authenticaterUser";

@Injectable({
  providedIn: "root",
})
export class AuthserviceService {
  constructor(private http: HttpClient) {}

  public loginUserFromRemote(user: User): Observable<any> {
    return this.http.post<any>("http://localhost:8080/loginUser", user).pipe(
      map((data) => {
        sessionStorage.setItem(AUTHENTICATED_USER, user.email);
        return data;
      })
    );
  }

  public registerUserFromRemote(user: User): Observable<any> {
    return this.http.post<any>("http://localhost:8080/registerUser", user);
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }

  isUserLoggedIn() {
    // check whetheer user is loggd in
    const user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER);
  }

  getUser(email) {
    return this.http.get<User>(`http://localhost:8080/getUser/${email}`);
  }

  updateUserProfile(user) {
    return this.http.put<User>(`http://localhost:8080/updateUser`, user);
  }

  updateUserProfileWithImage(formdata: FormData): Observable<any> {
    return this.http.put(`http://localhost:8080/updateUserWithImage`, formdata);
  }
}
