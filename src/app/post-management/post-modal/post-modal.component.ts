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
  @Input() modalTitle: string = "";
  @Input() post: Post;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() { }

  closeModal(){
    this.activeModal.close();
  }

  submit() {
    this.activeModal.close(this.post);
  }

}
