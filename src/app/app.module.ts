import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PostListComponent } from './post-list/post-list.component';
import { AsidePostListComponent } from './aside-post-list/aside-post-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MainComponent } from './main/main.component';
import { PostComponent } from './post/post.component';
import { PostManagementComponent } from './post-management/post-management.component';
import { BlogManagementComponent } from './blog-management/blog-management.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';
import { ErrorViewComponent } from './error-view/error-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PostListComponent,
    AsidePostListComponent,
    MainComponent,
    PostComponent,
    PostManagementComponent,
    BlogManagementComponent,
    SigninComponent,
    SignupComponent,
    AboutComponent,
    ErrorViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
