import { Component, OnInit, Input } from '@angular/core';
import { Summary } from '../models/summary';
import { Page } from '../models/page';

@Component({
  selector: 'app-post-card-grid',
  templateUrl: './post-card-grid.component.html',
  styleUrls: ['./post-card-grid.component.css']
})
export class PostCardGridComponent implements OnInit {
  
  content: Summary[] = [];
  pageConfig = { itemsPerPage: 0, currentPage: 0, totalItems:0 };

  constructor() { }

  ngOnInit() {}

  @Input()
  set page(page: Page){
    this.content = page.content;
    console.log(page.totalElements);
    this.pageConfig = { 
      itemsPerPage: page.size, 
      currentPage: page.number + 1, 
      totalItems: page.totalElements 
    };
  }

}
