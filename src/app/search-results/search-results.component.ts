import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../shared/services/post.service';
import { Summary } from '../models/summary';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  summaries: Summary[] = [];
  loading: boolean = false;

  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      //this.getFullPostById(+params.get('id'));
      let query = params.get('query');
      this.getSearchResult(query);
    });
  }

  getSearchResult(query: string){
    this.loading = true;
    this.postService.getSearchResult(query).subscribe(
      res => { 
        this.summaries = res.data;
        this.loading = false;
      }, 
      err => {
        this.loading = false;
      }
    );
  }

}
