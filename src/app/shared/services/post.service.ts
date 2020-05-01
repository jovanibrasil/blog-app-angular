import { Injectable } from '@angular/core';
import { Post } from '../../models/post';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PostForm } from "../../models/post-form"
import { environment } from '../../../environments/environment'
import { Observable } from 'rxjs';
import { Page } from 'src/app/models/page';


@Injectable({ providedIn: 'root' })
export class PostService {

  private BASE_URL = environment.BLOG_BASE_URL;
  
  private DELETE_POST_URL = `${this.BASE_URL}/posts/`;

  private SAVE_POST_URL = `${this.BASE_URL}/posts`;
  
  private UPDATE_POST_URL = `${this.BASE_URL}/posts`;
  private POST_BY_ID_URL = `${this.BASE_URL}/posts/`;

  public GET_ALL_POSTS_URL = `${this.BASE_URL}/posts`;
  
  private GET_POSTS_BY_USER_URL = `${this.BASE_URL}/posts/byuser/`;
  private GET_LAST_POSTS_SUMMARIES = `${this.BASE_URL}/posts/summaries`
  private GET_BEST_POSTS_TITLES = `${this.BASE_URL}/posts/top/`
  
  private SEARCH_POSTS_SUMMARIES = `${this.BASE_URL}/search` 
  
  constructor(private http: HttpClient) {}

  getSearchResult(query: string): Observable<Page> {
    return this.http.get<Page>(this.SEARCH_POSTS_SUMMARIES, { params : { filter : query } } );
  }

  /*
    Get a complete object with the content of the required post.
  */
  getFullPostById(id: number): Observable<Post> {
    return this.http.get<Post>(this.POST_BY_ID_URL + id);
  }

  getPostsByUserName(userName: string, page: number, ord: string, dir: string): Observable<Page> {
    let params = new HttpParams()
      .append('page', <string><unknown>page)
      .append('ord', ord)
      .append('dir', dir);
    return this.http.get<Page>(this.GET_POSTS_BY_USER_URL + userName, { params });
  }

  /*
    Get a list of post summaries. The summary object also constains basic 
    post information like id, title, author and date.
  */
  getLastPostsSummaries(page: number, cat: string): Observable<Page> {
    let params = new HttpParams()
      .append('page', <string><unknown>page)
      .append('category', cat)
      .append('ord', 'creationDate')
      .append('dir', 'DESC');
    return this.http.get<Page>(this.GET_LAST_POSTS_SUMMARIES, { params });
  }

  /*
    Get a list of post titles. Each object also contains the post id.
  */  
  getBestPostTitleList(quantity: number): Observable<Page> {
    return this.http.get<Page>(this.GET_BEST_POSTS_TITLES);
  }

  deletePost(post: Post): Observable<void> {
    return this.http.delete<void>(this.DELETE_POST_URL + post.id);
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

  updatePost(postForm: PostForm): Observable<Post> {
    
    const data = new FormData();
    let strPost = this.convertoToJsonString(postForm.post);
    const blobPost = this.createBlobOfJsonFiles([strPost]);
    
    data.append('post', blobPost);
    // postForm.images.forEach(image => {
    //   data.append("postImages", image);
    // });
    data.append("banner", postForm.images[0]);
    
    return this.http.put<Post>(this.UPDATE_POST_URL + "/" + postForm.post.id, data);
  }

  createPost(postForm: PostForm): Observable<void> {
    
    const data = new FormData();
    let strPost = this.convertoToJsonString(postForm.post);
    const blobPost = this.createBlobOfJsonFiles([strPost]);
    
    data.append('post', blobPost);
    // postForm.images.forEach(image => {
    //   data.append("postImages", image);
    // });
    data.append("banner", postForm.images[0]);
    
    return this.http.post<void>(this.UPDATE_POST_URL, data);
  }

  updateConfiguration(post: Post){
    // TODO
  }

  getImage(bannerUrl: string): Observable<Blob> {
    return this.http.get(bannerUrl, { responseType: 'blob' });
  }
  

}
