import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  query: string = ''; 

  constructor(private router: Router) {}

  ngOnInit() {}

  submitQuery(){
    if(this.query == '') return;

    this.router.navigate(['/search', this.query]);
    this.query = ''; 
  }

}
