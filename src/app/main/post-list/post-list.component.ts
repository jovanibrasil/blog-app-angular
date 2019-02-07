import { Component, OnInit } from '@angular/core';
import { Post } from '../../model/post';
import { PostService } from '../../services/post.service';
import { Summary } from "src/app/model/summary";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  summaries: Summary[];

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.getLastPostsSummaries();
  }

  getLastPostsSummaries(){
    this.postService.getLastPostsSummaries(6).subscribe(
      res => { 
        this.summaries = res.data;
        console.log(res);
      }, 
      err => {}
    );
  }

}
