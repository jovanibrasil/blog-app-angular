import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post';
import { PostService } from '../../shared/services/post.service';
import { Summary } from "src/app/models/summary";

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
      }, 
      err => {}
    );
  }

}
