import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { PostComponent } from './post/post.component';
import { SigninComponent } from './auth/signin/signin.component';
import { PostManagementComponent } from './post-management/post-management.component';
import { BlogManagementComponent } from './blog-management/blog-management.component';
import { AboutComponent } from './about/about.component';
import { ErrorViewComponent } from './error-view/error-view.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { SearchComponent } from './header/search/search.component';
import { SearchResultsComponent } from './search-results/search-results.component';

const routes: Routes = [
  { path: '', component: MainComponent, pathMatch: 'full' },
  { path: 'post/:id', component: PostComponent },
  { path: 'posts/:tag', component: MainComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'search/:query', component: SearchResultsComponent },
  { path: 'post-management', component: PostManagementComponent }, //, canActivate: [AuthGuard] },
  { path: 'blog-management', component: BlogManagementComponent, canActivate: [AuthGuard] },
  { path: 'about', component: AboutComponent },
  { path: '**', component: ErrorViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
