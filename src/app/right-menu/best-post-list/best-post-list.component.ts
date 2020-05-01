import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/shared/services/post.service';
import { PostInfo } from 'src/app/models/post-info';

@Component({
  selector: 'app-best-post-list',
  templateUrl: './best-post-list.component.html',
  styleUrls: ['./best-post-list.component.css']
})
export class BestPostListComponent implements OnInit {

  posts: PostInfo[];
  loading: boolean = true;

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.getBestPostTitleList();
  }

  getBestPostTitleList(){
    this.postService.getBestPostTitleList(10).subscribe(
      page => {
        this.posts = page.content;
        this.loading = false;
      },
      err => {}
    );
  
  }

  
}
