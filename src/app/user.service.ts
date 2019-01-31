import { Injectable } from '@angular/core';
import { User } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[];

  constructor() {
    this.users = []  
    this.users.push({
      userName: "jovanibrasil1",
      fullName: "Jovani Brasil1",
      email: "jovanibrasil1@gmail.com",
      gitHubUserName: "jovanibrasil1",
      linkedInUserName: "jovanibrasil1",
      googleScholarLink: null,
      lattesLink: null
    })
    this.users.push({
      userName: "jovanibrasil2",
      fullName: "Jovani Brasil2",
      email: "jovanibrasil2@gmail.com",
      gitHubUserName: "jovanibrasil2",
      linkedInUserName: "jovanibrasil2",
      googleScholarLink: null,
      lattesLink: null
    })
  }

  getUser(userId: number): User {
    return this.users[userId];
  }

}
