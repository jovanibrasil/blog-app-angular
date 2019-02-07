import { Injectable } from '@angular/core';
import { FeedbackViewModel } from '../about/feedback/feedback.component';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Feedback } from '../model/feedback';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  private BASE_URL = "http://localhost:8081";
  private SEND_FEEDBACK_URL = `${this.BASE_URL}/feedback`;
  private GET_FEEDBACK_LIST_URL = `${this.BASE_URL}/feedback/list/`;

  constructor(private http: HttpClient) { }

  postFeedback(feedback: Feedback): Observable<Feedback> {
    //this.posts.push(post);
    return this.http.post<Feedback>(this.SEND_FEEDBACK_URL, feedback);
  }

  getFeedbackList(quantity: number): Observable<Feedback[]> {
    //this.posts.push(post);
    return this.http.get<Feedback[]>(this.GET_FEEDBACK_LIST_URL + quantity);
  }

}
