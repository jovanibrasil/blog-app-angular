import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Post } from 'src/app/models/post';


@Component({
  selector: 'app-post-modal',
  templateUrl: './post-modal.component.html',
  styleUrls: ['./post-modal.component.css']
})
export class PostModalComponent implements OnInit { 

  title: string = "Title";
  @Input() modalTitle: string = "";
  @Input() post: Post;

  @ViewChild('editor') jodit_editor: ElementRef;
  //public editorContent: string ="";

  // "{ uploader: { insertImageAsBase64URI: 'true' }}"
  // editorConfig: {
  //   uploader: { 'uploader': { 'insertImageAsBase64URI': 'true' }, 'theme': 'dark' }
  // }

  constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder) {
    //this.post = { id: 0, title: "", date: null, summary: "", body: "é isso aí ", userId: 0 };
  }

  ngOnInit() { }

  // ngAfterViewInit(): void {
  //   (<any>this.jodit_editor).value = this.post.body;
  // }

  closeModal(){
    this.activeModal.close();
  }

  // jodit_onChange($e: any){
  //   this.editorContent = $e.args[0];
  //   console.log("zr even onchange text: ",$e.args[0]);
  //   console.log("zr event: ",$e);
  // }

  submit() {
    console.log('form has been submitted');

    // this.editorContent
    console.log(this.post.body);
    this.activeModal.close(this.post);
  }

}
