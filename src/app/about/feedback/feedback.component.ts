import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilsService } from '../../shared/services/utils.service';
import { Feedback } from 'src/app/models/feedback';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { FormGroup } from '@angular/forms';
import { ReCaptcha2Component } from 'ngx-captcha';
import { Globals } from 'src/app/globals';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  model: Feedback; 

  @ViewChild('captchaElem') captchaElem: ReCaptcha2Component;

  key: String = this.globals.RECAPTCHA_KEY;
  
  captchaError: boolean;
  captchaSuccess: boolean;

  constructor(private utilsService: UtilsService, private toastService: ToasterService, private globals: Globals) { }

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
        this.toastService.success("The message was successfuly sended");
      },
      err => {
        alert();
        this.toastService.error("An error has occurred while sending feedback");
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

}
