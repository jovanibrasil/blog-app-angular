import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
import { Post } from '../model/post';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';
import { User } from '../model/user';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  private id: number;
  private post: Post;

  constructor(private route: ActivatedRoute, private postService: PostService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {

      this.id = +params['id'];
      this.post = this.postService.getFullPostById(this.id);
      
    })
  }

}
