import { Component, OnInit } from '@angular/core';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { PostService } from '../shared/services/post.service';
import { Summary } from '../models/summary';
import { Page } from '../models/page';

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
  tag: string = 'all';

  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let tag = params.get('tag');
      this.tag = tag ? tag : 'all';
      this.getLastPostsSummaries(0);
    })
  }

  getLastPostsSummaries(page: number){
    this.loading = true;
    this.postService.getLastPostsSummaries(page, this.tag).subscribe(
      res => {
        let page = <Page> res.data;
        this.summaries = page.content;
        this.loading = false;
        this.count = page.totalPages;
      }, 
      err => {}
    );
    this.p = page;
  }


  nextPage(){
    if(this.p+1 <= this.count){
      this.p++;
      this.getLastPostsSummaries(this.p);
    }
  }

  previousPage(){
    if(this.p > 0){
      this.p--;
      this.getLastPostsSummaries(this.p);
    }
  }

}
