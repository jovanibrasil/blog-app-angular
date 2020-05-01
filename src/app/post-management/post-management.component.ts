import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { PostService } from '../shared/services/post.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PostConfigModalComponent } from './post-config-modal/post-config-modal.component';
import { PostModalComponent } from './post-modal/post-modal.component';
import { ToasterService } from '../shared/services/toaster.service';
import { TokenStorageService } from '../shared/services/token.service';
import { PostForm } from '../models/post-form';

@Component({
  selector: 'app-post-management',
  templateUrl: './post-management.component.html',
  styleUrls: ['./post-management.component.css']
})
export class PostManagementComponent implements OnInit {

  posts: Post[] = [];
  selectedPost: Post = null;
  pageConfig = { itemsPerPage: 0, currentPage: 0, totalItems:0 };

  constructor(private postService: PostService, 
              private modalService: NgbModal,
              private toasterService: ToasterService, 
              private tokenService: TokenStorageService) {}

  ngOnInit() {
    this.getPostsByUserId(0);
  }

  createPost(postForm: PostForm){

    console.log("create post");
    this.postService.createPost(postForm).subscribe(
      post => { 
        this.posts.push(postForm.post);
        this.toasterService.success("The post has been created successfully.");
      },
      err => {
        this.toasterService.error("It was not possible to create the post.");
      }
    );
  }

  updatePost(postForm: PostForm){
    console.log("update post");
    //console.log(post);
    this.postService.updatePost(postForm).subscribe(
      post => { 
        let index = this.posts.indexOf(postForm.post);
        this.posts[index] = post; 
        this.toasterService.success("The post has been updated successfully.");
      },
      err => {
        this.toasterService.error("It was not possible to update the post.");
      }
    );
  }

  updatePostConfiguration(post: Post){
    //console.log("update post configuration")
    // TODO
  }

  deletePost(post: Post){
    this.postService.deletePost(post).subscribe(
      () => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
        this.toasterService.success("The post has been deleted successfully.");
      }, 
      err => {
        this.toasterService.error("It was not possible to delete the post.");
      }
    );
  }

  getPostsByUserId(pageNumber: number) {
    let userName = "jovanibrasil"//this.tokenService.getUserName();
    let ord = "lastUpdateDate";
    let dir = "DESC";
    this.postService.getPostsByUserName(userName, pageNumber, ord, dir).subscribe(
      page => {
        this.posts = page.content as Post[];

        this.pageConfig = { 
          itemsPerPage: page.size, 
          currentPage: page.number + 1, 
          totalItems: page.totalElements 
        };

      },
      err => {
        this.toasterService.error("It was not possible to get the post.");
      }
    )
  }
  
  openPostConfiguration(post: Post){
    //console.log("save post configuration")
    let postForm: PostForm = { images: [], post : post };
    this.openFormModal(postForm, PostConfigModalComponent, "Post Configuration", this.createPost.bind(this));
  }

  openCreatePostModal(){
    console.log("Openning post creation modal.");
    let postForm: PostForm = { images: [], post : {
      id: 0,
      title: "",
      creationDate: null,
      lastUpdateDate: null,
      summary: "",
      body: "",
      userName: "",
      tags: [],
      bannerUrl: "",
      bannerId: "1"
    } };
    this.openFormModal(postForm, PostModalComponent, "Create post", this.createPost.bind(this));
  }

  openEditPostModal(post: Post){
    let postForm: PostForm = { images: [], post : post };
    this.openFormModal(postForm, PostModalComponent, "Edit post", this.updatePost.bind(this));
  }

  openFormModal(postForm: PostForm, component: any, modalTitle: string, formCallback: any) {
    const modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.title = modalTitle; 
    modalRef.componentInstance.postForm = postForm;
    
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

  pageChanged(nextPageNumber: number){
    this.getPostsByUserId(nextPageNumber - 1)
  }

}
