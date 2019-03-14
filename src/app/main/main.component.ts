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

  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      //this.getFullPostById(+params.get('id'));
      let category = params.get('category');
      category = category ? category : "any" ;
      this.getLastPostsSummaries(category);
    })
  
  }

  getLastPostsSummaries(category: string){
    this.postService.getLastPostsSummaries(category).subscribe(
      res => { 
        this.summaries = res.data;
      }, 
      err => {}
    );
  }


}
