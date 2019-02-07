import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilsService } from '../../services/utils.service';
import { Feedback } from 'src/app/model/feedback';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  model: Feedback;

  constructor(private http: HttpClient, private apiService: UtilsService) { }

  ngOnInit() {
    
  }

  sendFeedback(): void {
    let url = "http://localhost:8080/api/feedback";
    //alert(this.model.name);

    this.apiService.postFeedback(this.model).subscribe(
      res => {
        location.reload(); // refresh page
      },
      err => {
        alert("An error has occurred while sending feedback");
      }
    );
  }

}

export interface FeedbackViewModel{
  name: string;
  email: string;
  feedback: string;
}
