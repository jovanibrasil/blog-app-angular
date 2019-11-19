import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../../shared/services/auth.service';
import { TokenStorageService } from '../../shared/services/token.service';
import { IToast } from 'src/app/toaster/itoast';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { ReCaptcha2Component } from 'ngx-captcha';
import { environment } from 'src/environments/environment';

/*
  The LoginComponent contains the login form logic.
*/
@Component({
  selector: 'app-login',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  
  model: any = {};

  loading: any = null;
  recaptcha: any;

  @ViewChild('captchaElem') captchaElem: ReCaptcha2Component;

  key: String = environment.RECAPTCHA_KEY;
  
  captchaError: boolean;
  captchaSuccess: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private tokenStorageService: TokenStorageService,
     private authService: AuthService, private toasterService: ToasterService) { 
      if(this.tokenStorageService.hasValidToken()){
        this.router.navigate(['/']);  
      }
  }

  ngOnInit() {}

  parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
  };

  login(){
    // verify recaptcha component status
    let recapchaValue = this.captchaElem.getResponse();
    if(!recapchaValue) {
      this.captchaError = true;
      return;
    }
    this.model.captchaCode = recapchaValue;

    let data = {
      userName: this.model.username, 
      password: this.model.password,
      application: "BLOG_APP"
    }

    this.authService.login(data, recapchaValue).subscribe( 
      res => {
        if(res) {
          this.tokenStorageService.saveToken(res.data.token);
          this.tokenStorageService.saveUserName(this.parseJwt(res.data.token).sub);
          this.tokenStorageService.saveAuthorities([this.parseJwt(res.data.token).role]);
          this.tokenStorageService.setLoggedIn(true);
          this.router.navigate(['/post-management']);
          //window.location.reload();
        } else {
          this.reloadCaptcha();
          this.toasterService.error("Authentication error. Check your username and password!");
        }
      },
      error => {
        this.reloadCaptcha();
        this.toasterService.error("Authentication error. Check your username and password!");
      }
    );   
  }

  handleSuccess(captchaResponse: string): void {
    this.captchaSuccess = true;
    this.captchaError = false;
  }

  reloadCaptcha(): void {
    this.captchaSuccess = false;
    this.captchaError = false;
    this.captchaElem.reloadCaptcha();
  }
}
