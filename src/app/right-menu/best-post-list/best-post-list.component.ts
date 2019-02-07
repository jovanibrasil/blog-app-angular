import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { PostInfo } from 'src/app/model/post-info';

@Component({
  selector: 'app-best-post-list',
  templateUrl: './best-post-list.component.html',
  styleUrls: ['./best-post-list.component.css']
})
export class BestPostListComponent implements OnInit {

  posts: PostInfo[];

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.getBestPostTitleList();
  }

  getBestPostTitleList(){
    this.postService.getBestPostTitleList(10).subscribe(
      res => {
        this.posts = res.data;
        console.log(res);
      },
      err => {}
    );
  
  }

  
}
