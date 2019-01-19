import { Component, OnInit } from '@angular/core';
import { PostSummary } from '../model/postSummary';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  private posts: PostSummary[];

  constructor() { 

      this.posts = [];

      let summary = "Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." + 
      " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris" + 
      "nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in" +
      "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." +
      " Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia" +  
      "deserunt mollit anim id est laborum.";

      for (let index = 0; index < 10; index++) {
        this.posts.push({
          id: index, title: "Lorem ipsum" + index, date: new Date(), userName: "Jovani Brasil", summary
        })
      }
  }

  ngOnInit() {}

}
