import { Component, OnInit } from '@angular/core';
import { Post } from '../model/post';
import { post } from 'selenium-webdriver/http';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  private posts: Post[];

  constructor(private postService: PostService) { 
      this.posts = this.postService.getLastPostsSummaries(20);      
  }

  ngOnInit() {}

}
