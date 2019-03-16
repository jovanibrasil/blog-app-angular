import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilsService } from '../../shared/services/utils.service';
import { Feedback } from 'src/app/models/feedback';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { FormGroup } from '@angular/forms';
import { ReCaptcha2Component } from 'ngx-captcha';
import { environment } from 'src/environments/environment';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NotificationModalComponent } from 'src/app/notification-modal/notification-modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  model: Feedback; 

  @ViewChild('captchaElem') captchaElem: ReCaptcha2Component;

  key: String = environment.RECAPTCHA_KEY;
  
  recaptcha: any;

  captchaError: boolean;
  captchaSuccess: boolean;

  constructor(private utilsService: UtilsService, private modalService: NgbModal,
     private toastService: ToasterService, private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.model = {
      name: "",
      email: "",
      content: "",
      captchaCode: ""
    };
    this.captchaError = false;
    this.captchaSuccess = false;
  }

  sendFeedback(): void {
    // verify recaptcha component status
    let recapchaValue = this.captchaElem.getResponse();
    if(!recapchaValue) {
      this.captchaError = true;
      return;
    }
    this.model.captchaCode = recapchaValue;

    this.utilsService.postFeedback(this.model).subscribe(
      res => {
        this.openNotificationModal("Feedback enviado com sucesso", 
          "A mensalmente foi recebida e será respondida em breve." , () => {
            this.router.navigate(['/']);  
          });
      },
      err => {
        this.openNotificationModal("Erro ao enviar inscrição", 
        "Infelizmente ocorreu um erro, tente mais tarde novamente.", null);
      }
    );
    this.reloadCaptcha();
  }

  handleSuccess(captchaResponse: string): void {
    this.captchaSuccess = true;
    this.captchaError = false;
  }

  reloadCaptcha(): void {
    this.captchaElem.reloadCaptcha();
  }

  openNotificationModal(modalTitle: string, modalContent: string, formCallback: any) {
    const modalRef = this.modalService.open(NotificationModalComponent,
       { size: 'sm', backdrop: 'static' });
    modalRef.componentInstance.modalTitle = modalTitle; 
    modalRef.componentInstance.modalContent = modalContent;
    
    modalRef.result.then((result) => {
        formCallback();
    }).catch((error) => {
      console.log(error);
    });
  }

}
