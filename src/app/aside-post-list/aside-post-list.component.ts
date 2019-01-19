import { Component, OnInit } from '@angular/core';
import { PostReference } from '../model/postReference';

@Component({
  selector: 'app-aside-post-list',
  templateUrl: './aside-post-list.component.html',
  styleUrls: ['./aside-post-list.component.css']
})
export class AsidePostListComponent implements OnInit {

  private posts: PostReference[];

  constructor() { 

    this.posts = [];

    for (let index = 0; index < 10; index++) {
      this.posts.push({
        id: index, title: "Lorem ipsum" + index
      });
    }

  }

  ngOnInit() {}

}
