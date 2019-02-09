import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/services/user.service';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-user-info-vbar',
  templateUrl: './user-info-vbar.component.html',
  styleUrls: ['./user-info-vbar.component.css']
})
export class UserInfoVbarComponent implements OnInit {

  @Input() userId: number;
  
  user: User;
  
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user = { email: "teste", gitHubUserName: null, fullName: null, 
      googleScholarLink: null, lattesLink: null, linkedInUserName: null, 
    phone: null, userName: null } 
    this.getUser();
  }

  getUser(){
    this.userService.getUser(this.userId).subscribe(
      res => { this.user = res.data; },
      err => {}
    );
  }

}
