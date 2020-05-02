import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../shared/services/post.service';
import { Summary } from '../models/summary';
import { Page } from '../models/page';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent {

  summaries: Summary[] = [];
  loading: boolean = false;
  page: Page;
  actualQuery: string = '';

  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.actualQuery = params['query'];
      this.getSearchResult(this.actualQuery, 0);
    });
  }

  getSearchResult(query: string, pageNumber: number){
    this.loading = true;
    this.postService.getSearchResult(query, pageNumber).subscribe(
      page => { 
        this.page = page;
        this.summaries = page.content as Summary[];
        this.loading = false;
      }, 
      err => {
        this.loading = false;
      }
    );
  }

  pageChanged(event: any){
    this.getSearchResult(this.actualQuery, event-1);
  }

}
