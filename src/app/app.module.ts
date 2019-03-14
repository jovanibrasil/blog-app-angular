import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MainComponent } from './main/main.component';
import { PostComponent } from './post/post.component';
import { PostManagementComponent } from './post-management/post-management.component';
import { BlogManagementComponent } from './blog-management/blog-management.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AboutComponent } from './about/about.component';
import { ErrorViewComponent } from './error-view/error-view.component';
import { RightMenuComponent } from './right-menu/right-menu.component';
import { SearchComponent } from './right-menu/search/search.component';
import { SubscribeComponent } from './right-menu/subscribe/subscribe.component';
import { BestPostListComponent } from './right-menu/best-post-list/best-post-list.component';
import { UserInfoVbarComponent } from './post/user-info-vbar/user-info-vbar.component';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PostModalComponent } from './post-management/post-modal/post-modal.component';
import { PostConfigModalComponent } from './post-management/post-config-modal/post-config-modal.component';
import { FeedbackComponent } from './about/feedback/feedback.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToasterComponent } from './toaster/toaster.component'
import { RequestInterceptor } from './shared/interceptors/request.interceptor';
import { ResponseInterceptor } from './shared/interceptors/response.interceptor';
import { AuthGuard } from './shared/guards/auth.guard';
import { JoditAngularModule } from 'jodit-angular/';
import { SafeHtmlPipe } from './shared/pipeline/html-safe.pipe';
import { NgxCaptchaModule } from 'ngx-captcha';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RightMenuComponent,
    MainComponent,
    PostComponent,
    PostManagementComponent,
    BlogManagementComponent,
    SigninComponent,
    AboutComponent,
    ErrorViewComponent,
    SearchComponent,
    SubscribeComponent,
    BestPostListComponent,
    UserInfoVbarComponent,
    PostModalComponent,
    PostConfigModalComponent,
    FeedbackComponent,
    ToasterComponent,
    SafeHtmlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    JoditAngularModule,
    NgxCaptchaModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true }, AuthGuard],
  bootstrap: [AppComponent],
  entryComponents: [PostConfigModalComponent, PostModalComponent]
})
export class AppModule { }
