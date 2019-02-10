import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { PostService } from '../shared/services/post.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PostConfigModalComponent } from './post-config-modal/post-config-modal.component';
import { PostModalComponent } from './post-modal/post-modal.component';
import { ToasterService } from '../shared/services/toaster.service';

@Component({
  selector: 'app-post-management',
  templateUrl: './post-management.component.html',
  styleUrls: ['./post-management.component.css']
})
export class PostManagementComponent implements OnInit {

  posts: Post[] = [];
  selectedPost: Post = null;

  constructor(private postService: PostService, private modalService: NgbModal, private toasterService: ToasterService) {}

  ngOnInit() {
    this.getPostsByUserId();
  }

  createPost(post: Post){
    console.log("create post");
    post.summary = "Temp Summary"
    this.postService.createPost(post).subscribe(
      res => { 
        this.posts.push(res.data);
        this.toasterService.success("The post has been created successfully.");
      },
      err => {
        this.toasterService.error("It was not possible to create the post.");
      }
    );
  }

  updatePost(post: Post){
    console.log("update post");
    this.postService.updatePost(post).subscribe(
      res => { 
        let index = this.posts.indexOf(post);
        this.posts[index] = res.data; 
        this.toasterService.success("The post has been updated successfully.");
      },
      err => {
        this.toasterService.error("It was not possible to update the post.");
      }
    );
  }

  updatePostConfiguration(post: Post){
    console.log("update post configuration")
    // TODO
  }

  deletePost(post: Post){
    this.postService.deletePost(post).subscribe(
      res => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
        this.toasterService.success("The post has been deleted successfully.");
      }, 
      err => {
        this.toasterService.error("It was not possible to delete the post.");
      }
    );
  }

  getPostsByUserId() {
    let userId = 1;
    this.postService.getPostsByUserId(userId).subscribe(
      res => {
        this.posts = res.data;
      },
      err => {
        this.toasterService.error("It was not possible to get the post.");
      }
    )
  }
  
  openPostConfiguration(post: Post){
    console.log("save post configuration")
    this.openFormModal(post, PostConfigModalComponent, "Post Configuration", this.createPost.bind(this));
  }

  openCreatePostModal(){
    let post = { id: 0, title: "", date: null, summary: "", body: "", userId: 1 };
    this.openFormModal(post, PostModalComponent, "Create post", this.createPost.bind(this));
  }

  openEditPostModal(post: Post){
    this.openFormModal(post, PostModalComponent, "Edit post", this.updatePost.bind(this));
  }

  openFormModal(post: Post, component: any, modalTitle: string, formCallback: any) {
    const modalRef = this.modalService.open(component, { size: 'xl' as 'lg', backdrop: 'static' });
    modalRef.componentInstance.title = modalTitle; 
    modalRef.componentInstance.post = post;
    
    modalRef.result.then((result) => {
      
      if(result){
        formCallback(result);
        //this.createPost(result);
      }else{
        // TODO Gera mensagem de erro
      }

    }).catch((error) => {
      console.log(error);
    });
  }

}
