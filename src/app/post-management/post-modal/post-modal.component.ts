import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-post-modal',
  templateUrl: './post-modal.component.html',
  styleUrls: ['./post-modal.component.css']
})
export class PostModalComponent implements OnInit { 

  title: string = "Title";
  formControlValue = '';
  
  @Input() modalTitle: string = "";
  @Input() post: Post;

  public imagePath: any; 
  public bannerUploadMessage: string; // validation error

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
    if(this.post.tags.length){
      this.formControlValue = "#" + this.post.tags.join(" #");
    }
  }

  /**
   * Event that checks for upload file reference.
   * 
   * @param files 
   */
  previewBannerImg(files: any) {
    
    var mimeType = files[0].type;
    if(mimeType.match(/image\/*/) == null){
      this.bannerUploadMessage = "Only images are supported";
      return;
    }

    // load file from computer asynchronously
    const reader = new FileReader();
    const file = files[0];
    this.imagePath = files;
    reader.onload = (event: any) => { // once finished
      this.post.banner = reader.result; 
      console.log(reader.result)
    }

    reader.readAsDataURL(file); // raw binary data format
    
  }
  
  findChoices(searchText: string) {
    return [ 'ai', 'java', 'docker', 'java', 'angular' ].filter(item =>
      item.toLowerCase().includes(searchText.toLowerCase())
    );
  }
 
  getChoiceLabel(choice: string) {
    return `#${choice} `;
  }

  closeModal(){
    this.activeModal.close();
  }

  submit() {
    let tagString = this.formControlValue
      .replace(/ /g, "")
      .replace(/#/g, " ");
    let tagList = tagString.slice(1, tagString.length).split(" ");

    if(!tagList.length){
      console.log("Error. At least one tag is necessary.")
    }else{
      this.post.tags = tagList;
      this.activeModal.close(this.post);
    }
  }

}
