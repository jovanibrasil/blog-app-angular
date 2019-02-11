import { Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../shared/services/post.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post: Post;

  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit() {}

  ngAfterViewInit() {
    this.route.paramMap.subscribe(params => {
      this.getFullPostById(+params.get('id'));      
    })
  }

  getFullPostById(id: number){
    this.postService.getFullPostById(id).subscribe(
      res => { 
        this.post = res.data;      
      },
      err => {}
    );
  }

}
