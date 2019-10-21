import { Component, OnInit } from '@angular/core';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { PostService } from '../shared/services/post.service';
import { Summary } from '../models/summary';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  summaries: Summary[];
  loading: boolean = true;

  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      //this.getFullPostById(+params.get('id'));
      let tag = params.get('tag');
      tag = tag ? tag : "all" ;
      this.getLastPostsSummaries(tag);
    })
  }

  getLastPostsSummaries(tag: string){
    this.loading = true;
    this.postService.getLastPostsSummaries(0, tag).subscribe(
      res => { 
        this.summaries = res.data;
        this.loading = false;
      }, 
      err => {}
    );
  }

}
