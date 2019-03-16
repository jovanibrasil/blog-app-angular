import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Post } from 'src/app/models/post';
import { post } from 'selenium-webdriver/http';


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

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
    if(this.post.tags.length){
      this.formControlValue = "#" + this.post.tags.join(" #");
    }
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
