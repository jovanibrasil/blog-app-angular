import { Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../shared/services/post.service';
import { Post } from '../models/post';
import { User } from '../models/user';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  tags: string = "";
  post: Post;
  @Input() user: User;

  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit() {
    this.user = { 
      email: "jovanibrasil.com", 
      gitHubUserName: "jovanibrasil", 
      fullName: "Jovani Brasil", 
      googleScholarUrl: "https://scholar.google.com.br/citations?user=nQYs1z4AAAAJ&hl=en", 
      lattesUrl: "http://lattes.cnpq.br/3411257639128251", 
      linkedInUserName: "jovanibrasil",  phone: null, userName: "jovanibrasil" 
    } 
  }

  ngAfterViewInit() {
    this.route.paramMap.subscribe(params => {
      this.getFullPostById(+params.get('id'));      
    })
  }

  getFullPostById(id: number){
    this.postService.getFullPostById(id).subscribe(
      res => { 
        this.post = res.data;
        this.post.tags.forEach(tag => {
            this.tags += '#' + tag + " ";
        });
      },
      err => {}
    );
  }

  // getUser(){
  //   this.userService.getUser(this.userId).subscribe(
  //     res => { this.user = res.data; },
  //     err => {}
  //   );
  // }

}
