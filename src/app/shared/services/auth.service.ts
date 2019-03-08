import { Injectable } from "@angular/core";''
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtResponse } from '../../auth/model/jwt.response';
import { User } from '../../auth/model/user';

import { environment } from '../../../environments/environment';

/*
  The AuthService handles authentication operations using HttpClient.
*/
@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private BASE_URL = environment.AUTH_BASE_URL;
    private LOGIN_URL =  `${this.BASE_URL}/auth/login`;
    private LOGOUT_URL =  `${this.BASE_URL}/auth/logout`;
    private LOGON_URL = `${this.BASE_URL}/auth/logon`
    private GET_AUTHORITY = `${this.BASE_URL}/authorities`;
    private REFRESH_AUTH_URL =  `${this.BASE_URL}/auth/refresh`;
    
    private SIGNUP_URL =  `${this.BASE_URL}/auth/signup`;
    
    model: any = {};
  
    constructor(private http: HttpClient) { }
  
    login(data: any){
      return this.http.post<JwtResponse>(this.LOGIN_URL, data)//.shareReplay();
    }

    logout(){
      return this.http.get<JwtResponse>(this.LOGOUT_URL)//.retry(5); // retryWhen //.shareReplay();
    }

    logon(user: User){
      return this.http.post<JwtResponse>(this.LOGON_URL, user);//.shareReplay();
    }

    saveUser(user: User): Observable<User>{
      return this.http.post<User>(this.SIGNUP_URL, user);
    }
    
}