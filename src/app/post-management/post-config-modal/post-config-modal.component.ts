import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-post-config-modal',
  templateUrl: './post-config-modal.component.html',
  styleUrls: ['./post-config-modal.component.css']
})
export class PostConfigModalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder) { }

  ngOnInit() { }

  keyupHandlerFunction(any){
    console.log("keyup");
  }

  closeModal(){
    this.activeModal.close();
  }

  submit() {
    this.activeModal.close(null);
  }

}
