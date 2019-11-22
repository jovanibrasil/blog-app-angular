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

  summaries: Summary[] = [];
  loading: boolean = true;

  // Pagination parameters
  p: number = 1;
  count: number = 1; // number of pages

  i: number = 0; // pagination index

  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let tag = params.get('tag');
      tag = tag ? tag : "all" ;
      this.getLastPostsSummaries(tag, 0);
    })
  }

  getLastPostsSummaries(tag: string, page: number){
    this.loading = true;
    this.postService.getLastPostsSummaries(page, tag).subscribe(
      res => { 
        this.summaries = res.data.summaries;
        this.loading = false;
        this.count = res.data.pages;
      }, 
      err => {}
    );
    this.p = page;
  }


  nextPage(){
    console.log("i="+this.i);
    if(this.p+1 <= this.count){
      this.p++;
      this.getLastPostsSummaries("all", this.p);
    }
  }

  previousPage(){
    if(this.p > 0){
      this.p--;
      this.getLastPostsSummaries("all", this.p);
    }
  }

}
