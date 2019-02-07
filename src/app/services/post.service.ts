import { Injectable } from '@angular/core';
import { Post } from '../model/post';
import { HttpClient } from '@angular/common/http';
import { Observable, fromEventPattern } from 'rxjs';

import * as CONS from './paths';
import { PostInfo } from '../model/post-info';
import { Summary } from "../model/summary";
import { ResponseWrapper } from '../model/response-wrapper';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private BASE_URL = CONS.PROD_ENV_PATH;
  
  private DELETE_POST_URL = `${this.BASE_URL}/posts/delete/`;
  private SAVE_POST_URL = `${this.BASE_URL}/posts/create`;
  private UPDATE_POST_URL = `${this.BASE_URL}/posts/update`;
  private POST_BY_ID_URL = `${this.BASE_URL}/posts/post/`;

  public GET_ALL_POSTS_URL = `${this.BASE_URL}/posts/all`;
  
  private GET_POSTS_BY_USER_URL = `${this.BASE_URL}/posts/list/`;
  private GET_LAST_POSTS_SUMMARIES = `${this.BASE_URL}/posts/summaries/`
  private GET_BEST_POSTS_TITLES = `${this.BASE_URL}/posts/top/`
  
  private posts: Post[];

  constructor(private http: HttpClient) {
    //this.setupData();
  }

  // setupData(){
    
  //   this.posts = []

  //   for (let index = 0; index < 10; index++) {
  //     let userId = index%2;
  //     this.posts.push({
  //       id: index, title: "Lorem ipsum " + index, date: new Date(), 
  //       summary: CONS.summary, body: CONS.content, userId
  //     })
  //   }
  // }

  /*
    Get a complete object with the content of the required post.
  */
  getFullPostById(id: number): Observable<ResponseWrapper> {
    //return this.posts[id];
    return this.http.get<ResponseWrapper>(this.POST_BY_ID_URL + id);
  }

  getPostsByUserId(userId: number): Observable<ResponseWrapper> {
    //return this.posts.filter(p => p.userId == userId)
    return this.http.get<ResponseWrapper>(this.GET_POSTS_BY_USER_URL  +  20 + "/" + userId);
  }

  /*
    Get a list of post summaries. The summary object also constains basic 
    post information like id, title, author and date.
  */
  getLastPostsSummaries(quantity: number): Observable<ResponseWrapper> {
    //return this.posts.slice(0, quantity);
    return this.http.get<ResponseWrapper>(this.GET_LAST_POSTS_SUMMARIES + quantity);
  }

  /*
    Get a list of post titles. Each object also contains the post id.
  */  
  getBestPostTitleList(quantity: number): Observable<ResponseWrapper> {
    //return this.posts.slice(0, quantity);
    return this.http.get<ResponseWrapper>(this.GET_BEST_POSTS_TITLES + quantity);
  }

  deletePost(post: Post): Observable<ResponseWrapper> {
    // let postIndex = this.posts.indexOf(post);
    // this.posts.splice(postIndex, 1);
    return this.http.delete<ResponseWrapper>(this.DELETE_POST_URL + post.id);
  }

  createPost(post: Post): Observable<ResponseWrapper> {
    //this.posts.push(post);
    return this.http.post<ResponseWrapper>(this.SAVE_POST_URL, post);
  }

  updatePost(post: Post): Observable<ResponseWrapper> {
    // let postIndex = this.posts.indexOf(post);
    // this.posts[postIndex] = post;
    return this.http.post<ResponseWrapper>(this.UPDATE_POST_URL, post);
  }

  updateConfiguration(post: Post){
    // TODO
  }

}
