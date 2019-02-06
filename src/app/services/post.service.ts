import { Injectable } from '@angular/core';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private posts: Post[];

  constructor() {
    this.setupData();
  }

  setupData(){
    let summary = "Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
    "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." + 
    " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris" + 
    "nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in" +
    "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

    let content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ipsum nisl, varius at semper a, consectetur at eros." +
    "Nulla lectus quam, consequat nec cursus sit amet, lacinia et arcu. Duis tempus sodales venenatis. Orci varius natoque " +
    "penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed ultrices odio nec neque placerat, in molestie " +
    "orci lacinia. Proin eu neque at mauris lobortis mollis. Vestibulum in consectetur tellus. Maecenas suscipit, justo " +
    "vitae maximus finibus, tortor turpis commodo ex, et varius nulla urna eu eros. Donec eget facilisis purus. Nunc" +
    "tempor accumsan sem in vestibulum." +
    "Sed ultrices mauris in lorem pellentesque, vel venenatis massa vestibulum. Praesent eu porttitor nunc. Vivamus quis " +
    "imperdiet diam. Aliquam iaculis sed turpis vitae bibendum. Sed feugiat sodales eros, quis consectetur est sollicitudin non." +
    "Nullam pretium felis vitae ex iaculis bibendum. Sed id lectus sodales, vulputate dolor id, vulputate risus. Maecenas lacinia, " +
    "quam quis luctus tincidunt, mauris lectus tristique leo, id interdum leo lorem id ligula. In convallis commodo enim" +
    "a convallis. Maecenas lorem quam, ultricies et nunc pharetra, consectetur laoreet ante. Morbi tempus quam ut urna " +
    "tincidunt, tristique eleifend dolor lacinia. Sed ut gravida quam, nec efficitur nisi. Praesent nibh est, tristique " +
    "vel gravida vitae, lacinia pharetra metus. Vestibulum aliquam pharetra odio at tristique. Curabitur id diam ligula." +
      "In sodales aliquet est, nec viverra nisl ornare in. In bibendum lectus et sodales rhoncus. Etiam iaculis, felis lobortis" +
    "iaculis faucibus, urna massa feugiat nisi, at porttitor nunc risus eu justo. Vestibulum nec dui orci. Morbi in ligula lacus." +
     "Proin vitae est at lorem tristique molestie. Nunc in quam eu metus accumsan rhoncus vel vel sapien. Etiam suscipit pharetra" +
      "massa. Curabitur congue felis a ullamcorper convallis. Morbi justo velit, tincidunt sit amet eros non, convallis viverra justo." +
       "Maecenas mollis tempor mauris. Nulla pulvinar malesuada nisl at interdum. Sed sed tortor laoreet, rhoncus mauris ut, volutpat " +
        "lacus. Praesent dictum tempor mi eu mattis. Aliquam orci augue, auctor vitae lacus in, tempus eleifend diam." +
        "Cras suscipit scelerisque eros, at fermentum elit iaculis a. Nullam dolor lorem, hendrerit et accumsan at, dapibus sit " +
    "amet enim. Sed vitae ante sed dui faucibus blandit. Nulla id interdum odio. Aenean rutrum augue tempor enim porta, eget " +
    "condimentum nulla accumsan. Phasellus sed blandit justo, in molestie orci. Aenean ut tempus risus. Proin lacinia odio metus, " +
    "sit amet dapibus ipsum congue ut. Etiam sollicitudin placerat nunc, nec tincidunt ante accumsan sed. Sed sodales dolor posuere" + 
    "nisl lacinia, et sodales metus finibus. Donec magna dolor, finibus ac fermentum in, tincidunt et nibh. Maecenas pellentesque" +
    "dignissim risus a finibus." +
     "Nunc fermentum, urna ac tempor semper, magna lorem elementum sem, a volutpat orci ex vitae erat. Integer id pulvinar neque. " +
    "Quisque auctor, ligula in viverra bibendum, risus nulla tincidunt sapien, in sollicitudin nulla magna ut augue. Cras a tempus " +
    "sapien, eu fringilla nisl. Curabitur metus ex, interdum vitae scelerisque nec, elementum id tellus. Praesent in est metus. Nunc " +
    "semper sapien sed venenatis rhoncus. Aliquam vitae quam felis.";

    this.posts = []

    for (let index = 0; index < 10; index++) {
      let userId = index%2;
      this.posts.push({
        id: index, title: "Lorem ipsum " + index, date: new Date(), 
        summary, content, userId
      })
    }
  }

  /*
    Get a complete object with the content of the required post.
  */
  getFullPostById(id: number){
    return this.posts[id];
  }

  getPostsByUserId(userId: number){
    return this.posts.filter(p => p.userId == userId)
  }

  /*
    Get a list of post summaries. The summary object also constains basic 
    post information like id, title, author and date.
  */
  getLastPostsSummaries(quantity: number){
    return this.posts.slice(0, quantity);
  }

  /*
    Get a list of post titles. Each object also contains the post id.
  */  
  getSimplePostTitleList(quantity: number){
    return this.posts.slice(0, quantity);
  }

  deletePost(post: Post){
    let postIndex = this.posts.indexOf(post);
    this.posts.splice(postIndex, 1);
  }

  createPost(post: Post){
    this.posts.push(post);
  }

  updatePost(post: Post){
    let postIndex = this.posts.indexOf(post);
    this.posts[postIndex] = post;
  }

  updateConfiguration(post: Post){

  }

}
