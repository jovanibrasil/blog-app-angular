import { Injectable } from '@angular/core';
import { Post } from '../../models/post';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { PostForm } from "../../models/post-form"
import { PostInfo } from '../../models/post-info';
import { Summary } from "../../models/summary";
import { ResponseWrapper } from '../../models/response-wrapper';

import { environment } from '../../../environments/environment'



import { Observable, fromEventPattern, Subscriber } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  private BASE_URL = environment.BLOG_BASE_URL;
  
  private DELETE_POST_URL = `${this.BASE_URL}/posts/`;

  private SAVE_POST_URL = `${this.BASE_URL}/posts`;
  private SAVE_EMPTY_POST_URL = `${this.BASE_URL}/posts/empty`;
  
  private UPDATE_POST_URL = `${this.BASE_URL}/posts`;
  private POST_BY_ID_URL = `${this.BASE_URL}/posts/`;

  public GET_ALL_POSTS_URL = `${this.BASE_URL}/posts`;
  
  private GET_POSTS_BY_USER_URL = `${this.BASE_URL}/posts/byuser/`;
  private GET_LAST_POSTS_SUMMARIES = `${this.BASE_URL}/posts/summaries`
  private GET_BEST_POSTS_TITLES = `${this.BASE_URL}/posts/top/`
  
  private SEARCH_POSTS_SUMMARIES = `${this.BASE_URL}/search` 
  
  constructor(private http: HttpClient) {}

  getSearchResult(query: string): Observable<ResponseWrapper> {
    return this.http.get<ResponseWrapper>(this.SEARCH_POSTS_SUMMARIES, { params : { filter : query } } );
  }

  /*
    Get a complete object with the content of the required post.
  */
  getFullPostById(id: number): Observable<ResponseWrapper> {
    return this.http.get<ResponseWrapper>(this.POST_BY_ID_URL + id);
  }

  getPostsByUserName(userName: string, page: number, ord: string, dir: string): Observable<ResponseWrapper> {
    let params = new HttpParams();
    params = params.append('page', <string><unknown>page);
    params = params.append('ord', ord);
    params = params.append('dir', dir);
    return this.http.get<ResponseWrapper>(this.GET_POSTS_BY_USER_URL + userName, { params });
  }

  /*
    Get a list of post summaries. The summary object also constains basic 
    post information like id, title, author and date.
  */
  getLastPostsSummaries(page: number, cat: string): Observable<ResponseWrapper> {
    let params = new HttpParams();
    params = params.append('page', <string><unknown>page);
    params = params.append('category', cat);
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

  /*
    Converts a JavaScript Object to a JSON String.
  */
  convertoToJsonString(object: any){
    let replacer = (key, value) => { if(value !== null && value !== '') return value; }
    return JSON.stringify(object, replacer);
  }

  /*
    Creates a blob of json files.
  */
  createBlobOfJsonFiles(objects: any[]){
    return new Blob(objects, {
      type: 'application/json',
    });
  }

  createEmptyPost(): Observable<ResponseWrapper> {
    return this.http.post<ResponseWrapper>(this.SAVE_EMPTY_POST_URL, null);
  }

  updatePost(postForm: PostForm): Observable<ResponseWrapper> {
    
    const data = new FormData();
    let strPost = this.convertoToJsonString(postForm.post);
    const blobPost = this.createBlobOfJsonFiles([strPost]);
    
    data.append('post', blobPost);
    postForm.images.forEach(image => {
      data.append("postImages", image);
    });
    
    return this.http.put<ResponseWrapper>(this.UPDATE_POST_URL, data);
  }

  updateConfiguration(post: Post){
    // TODO
  }

  getImage(bannerUrl: string): Observable<Blob> {
    return this.http
       .get(bannerUrl, { responseType: 'blob' });
  }
  

}
