import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { PostComponent } from './post/post.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { PostManagementComponent } from './post-management/post-management.component';
import { BlogManagementComponent } from './blog-management/blog-management.component';
import { AboutComponent } from './about/about.component';
import { ErrorViewComponent } from './error-view/error-view.component';

const routes: Routes = [
  { path: '', component: MainComponent, pathMatch: 'full' },
  { path: 'post/:id', component: PostComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'post-management', component: PostManagementComponent },
  { path: 'blog-management', component: BlogManagementComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: ErrorViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
