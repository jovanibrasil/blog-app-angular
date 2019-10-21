import { Component, OnInit, Input } from '@angular/core';
import { Summary } from '../models/summary';

@Component({
  selector: 'app-post-card-grid',
  templateUrl: './post-card-grid.component.html',
  styleUrls: ['./post-card-grid.component.css']
})
export class PostCardGridComponent implements OnInit {
  
  @Input() summaries: Summary[];

  constructor() { }

  ngOnInit() {}

}
