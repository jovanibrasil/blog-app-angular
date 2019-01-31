import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PostListComponent } from './main/post-list/post-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MainComponent } from './main/main.component';
import { PostComponent } from './post/post.component';
import { PostManagementComponent } from './post-management/post-management.component';
import { BlogManagementComponent } from './blog-management/blog-management.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';
import { ErrorViewComponent } from './error-view/error-view.component';
import { RightMenuComponent } from './right-menu/right-menu.component';
import { SearchComponent } from './right-menu/search/search.component';
import { SubscribeComponent } from './right-menu/subscribe/subscribe.component';
import { BestPostListComponent } from './right-menu/best-post-list/best-post-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PostListComponent,
    RightMenuComponent,
    MainComponent,
    PostComponent,
    PostManagementComponent,
    BlogManagementComponent,
    SigninComponent,
    SignupComponent,
    AboutComponent,
    ErrorViewComponent,
    SearchComponent,
    SubscribeComponent,
    BestPostListComponent
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
