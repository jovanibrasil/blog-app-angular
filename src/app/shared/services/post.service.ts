import { Injectable } from '@angular/core';
import { Post } from '../../models/post';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, fromEventPattern } from 'rxjs';

import { PostInfo } from '../../models/post-info';
import { Summary } from "../../models/summary";
import { ResponseWrapper } from '../../models/response-wrapper';

import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private BASE_URL = environment.BLOG_BASE_URL;
  
  private DELETE_POST_URL = `${this.BASE_URL}/posts/delete/`;
  private SAVE_POST_URL = `${this.BASE_URL}/posts/create`;
  private UPDATE_POST_URL = `${this.BASE_URL}/posts/update`;
  private POST_BY_ID_URL = `${this.BASE_URL}/posts/post/`;

  public GET_ALL_POSTS_URL = `${this.BASE_URL}/posts/all`;
  
  private GET_POSTS_BY_USER_URL = `${this.BASE_URL}/posts/list/byuser/`;
  private GET_LAST_POSTS_SUMMARIES = `${this.BASE_URL}/posts/summaries/`
  private GET_BEST_POSTS_TITLES = `${this.BASE_URL}/posts/top/`
  
  private SEARCH_POSTS_SUMMARIES = `${this.BASE_URL}/search/`  

  private posts: Post[];

  constructor(private http: HttpClient) {}

  getSearchResult(query: string): Observable<ResponseWrapper> {
    return this.http.get<ResponseWrapper>(this.SEARCH_POSTS_SUMMARIES + query);
  }

  /*
    Get a complete object with the content of the required post.
  */
  getFullPostById(id: number): Observable<ResponseWrapper> {
    return this.http.get<ResponseWrapper>(this.POST_BY_ID_URL + id);
  }

  getPostsByUserId(userId: number, page: number, ord: string, dir: string): Observable<ResponseWrapper> {
    let params = new HttpParams();
    params = params.append('page', <string><unknown>page);
    params = params.append('ord', ord);
    params = params.append('dir', dir);
    return this.http.get<ResponseWrapper>(this.GET_POSTS_BY_USER_URL + userId, { params });
  }

  /*
    Get a list of post summaries. The summary object also constains basic 
    post information like id, title, author and date.
  */
  getLastPostsSummaries(page: number, cat: string): Observable<ResponseWrapper> {
    let params = new HttpParams();
    params = params.append('page', <string><unknown>page);
    params = params.append('cat', cat);
    return this.http.get<ResponseWrapper>(this.GET_LAST_POSTS_SUMMARIES, { params });
  }

  /*
    Get a list of post titles. Each object also contains the post id.
  */  
  getBestPostTitleList(quantity: number): Observable<ResponseWrapper> {
    return this.http.get<ResponseWrapper>(this.GET_BEST_POSTS_TITLES);
  }

  deletePost(post: Post): Observable<ResponseWrapper> {
    return this.http.delete<ResponseWrapper>(this.DELETE_POST_URL + post.id);
  }

  createPost(post: Post): Observable<ResponseWrapper> {
    return this.http.post<ResponseWrapper>(this.SAVE_POST_URL, post);
  }

  updatePost(post: Post): Observable<ResponseWrapper> {
    return this.http.post<ResponseWrapper>(this.UPDATE_POST_URL, post);
  }

  updateConfiguration(post: Post){
    // TODO
  }

}
