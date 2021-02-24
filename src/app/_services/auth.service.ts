import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiConfig } from 'app/app.config';
import { Observable } from 'rxjs';

const AUTH_API = apiConfig.webApi + "/api/" + apiConfig.version + "/auth/";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  
  login(credentials): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  register(user): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      name: user.name,
      surname: user.surname,
      username: user.username,
      email: user.email,
      password: user.password
    }, httpOptions);
  }

  getAnonymousToken(): Observable<any> {
    return this.http.post(AUTH_API + 'anonymousToken', httpOptions);
  }
}
