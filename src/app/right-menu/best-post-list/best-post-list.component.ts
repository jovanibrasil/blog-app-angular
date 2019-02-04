import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-best-post-list',
  templateUrl: './best-post-list.component.html',
  styleUrls: ['./best-post-list.component.css']
})
export class BestPostListComponent implements OnInit {

  posts: Post[];

  constructor(private postService: PostService) {
    this.posts = this.postService.getSimplePostTitleList(10);
  }

  ngOnInit() {}

}
