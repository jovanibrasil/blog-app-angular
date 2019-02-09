import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../shared/services/post.service';
import { Post } from '../models/post';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';
import { User } from '../models/user';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post: Post;

  constructor(private route: ActivatedRoute, private postService: PostService) {
    this.route.paramMap.subscribe(params => {
      this.getFullPostById(+params.get('id'));      
    })
  }

  ngOnInit() {}

  getFullPostById(id: number){
    this.postService.getFullPostById(id).subscribe(
      res => { this.post = res.data },
      err => {}
    );
  }

}
