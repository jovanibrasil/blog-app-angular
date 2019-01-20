import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../model/post';

@Component({
  selector: 'app-aside-post-list',
  templateUrl: './aside-post-list.component.html',
  styleUrls: ['./aside-post-list.component.css']
})
export class AsidePostListComponent implements OnInit {

  private posts: Post[];

  constructor(private postService: PostService) { 

    this.posts = this.postService.getSimplePostTitleList(10);

  }

  ngOnInit() {}

}
