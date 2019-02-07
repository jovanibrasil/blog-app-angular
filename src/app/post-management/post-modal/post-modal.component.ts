import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Post } from 'src/app/model/post';


@Component({
  selector: 'app-post-modal',
  templateUrl: './post-modal.component.html',
  styleUrls: ['./post-modal.component.css']
})
export class PostModalComponent implements OnInit { 

  title: string = "Title";
  @Input() modalTitle: string = "";
  @Input() post: Post;

  constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder) {
    this.post = { id: 0, title: "", date: null, summary: "", body: "", userId: 0 };
  }

  ngOnInit() { }

  closeModal(){
    this.activeModal.close();
  }

  submit() {
    console.log('form has been submitted');
    this.activeModal.close(this.post);
  }

}
