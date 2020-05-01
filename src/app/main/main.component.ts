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

  page: Page;
  content = [];
  loading: boolean = true;
  tag: string = 'all';

  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      let tag = params['tag'];
      this.tag = tag ? tag : 'all';
      
      let pageNumber = params['page'] - 1;
      this.getLastPostsSummaries(pageNumber);
    })
  }

  getLastPostsSummaries(pageNumber: number){
    this.loading = true;
    this.postService.getLastPostsSummaries(pageNumber, this.tag).subscribe(
      page => {
        this.page = page;
        this.content = page.content;
        this.loading = false;
      }, 
      err => {}
    );
  }

  pageChanged(event: any){
    this.getLastPostsSummaries(event-1);
  }

}
