import { Injectable } from '@angular/core';
import { FeedbackViewModel } from '../about/feedback/feedback.component';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  postFeedback(model: FeedbackViewModel){
    console.log("sending feedback ...")
    return new Subject();
  }

}
