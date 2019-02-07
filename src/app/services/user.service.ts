import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ResponseWrapper } from '../model/response-wrapper';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private BASE_URL = "http://localhost:8081";
  private USER_BY_ID_URL = `${this.BASE_URL}/user/`;

  constructor(private http: HttpClient) {}

  getUser(userId: number): Observable<ResponseWrapper> {
    //return this.users[userId];
    return this.http.get<ResponseWrapper>(this.USER_BY_ID_URL + userId);
  }

}
