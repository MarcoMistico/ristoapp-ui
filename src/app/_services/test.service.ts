import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiConfig } from 'app/app.config';
import { Observable } from 'rxjs';

const API_URL = apiConfig.webApi + "/api/" + apiConfig.version;

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  getGuestTest(): Observable<any> {
    return this.http.get(API_URL + '/guest/test');
  }

  getWaiterTest(): Observable<any> {
    return this.http.get(API_URL + '/waiter/test');
  }
  
}
