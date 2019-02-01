import { Component, OnInit } from '@angular/core';
import { Post } from '../model/post';
import { PostService } from '../post.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PostConfigModalComponent } from './post-config-modal/post-config-modal.component';
import { PostModalComponent } from './post-modal/post-modal.component';

@Component({
  selector: 'app-post-management',
  templateUrl: './post-management.component.html',
  styleUrls: ['./post-management.component.css']
})
export class PostManagementComponent implements OnInit {

  posts: Post[] = [];
  selectedPost: Post = null;

  constructor(private postService: PostService, private modalService: NgbModal) {}

  ngOnInit() {
    this.getPostsByUserId();
  }

  createPost(post: Post){
    console.log("create post");
    this.postService.createPost(post);
    this.getPostsByUserId();
  }

  updatePost(post: Post){
    console.log("update post");
    this.postService.updatePost(post);
    this.getPostsByUserId();
  }

  updatePostConfiguration(post: Post){
    console.log("update post configuration")
  }

  deletePost(post: Post){
    console.log("delete post");
    this.postService.deletePost(post);
    this.getPostsByUserId();
  }

  getPostsByUserId() {
    console.log("atualizando lista de posts")
    this.posts = [];
    return this.postService.getPostsByUserId(1).forEach(p => this.posts.push(p))
  }
  
  openPostConfiguration(post: Post){
    console.log("save post configuration")
    this.openFormModal(post, PostConfigModalComponent, "Post Configuration", this.createPost.bind(this));
  }

  openCreatePostModal(){
    let post = { id: 0, title: "", date: null, summary: "", content: "", userId: 1 };
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
      
      console.log("Retorno: ", result);
      
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
