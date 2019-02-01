import { Component, OnInit } from '@angular/core';
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

  closeModal(){
    this.activeModal.close();
  }

  submit() {
    console.log('form has been submitted');
    this.activeModal.close(null);
  }

}
