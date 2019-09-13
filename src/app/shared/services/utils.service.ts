import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Feedback } from '../../models/feedback';
import { environment } from '../../../environments/environment'
import { JwtResponse } from 'src/app/auth/model/jwt.response';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  private BASE_URL = environment.BLOG_BASE_URL;

  private SEND_FEEDBACK_URL = `${this.BASE_URL}/feedbacks`;
  private GET_FEEDBACK_LIST_URL = `${this.BASE_URL}/feedbacks/`;

  private SEND_SUBSCRIPTION = `${this.BASE_URL}/subscriptions/`

  constructor(private http: HttpClient) { }

  postFeedback(feedback: Feedback): Observable<Feedback> {
    return this.http.post<Feedback>(this.SEND_FEEDBACK_URL, feedback);
  }

  getFeedbackList(quantity: number): Observable<Feedback[]> {
    return this.http.get<Feedback[]>(this.GET_FEEDBACK_LIST_URL + quantity);
  }

  postSubscription(email: String): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.SEND_SUBSCRIPTION + email, "");
  }

}
