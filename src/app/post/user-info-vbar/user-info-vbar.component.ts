import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

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
    this.user = this.userService.getUser(this.userId);
  }

}
