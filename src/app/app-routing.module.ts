import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ContactComponent} from "./components/contact/contact.component";
import {SigninComponent} from "./components/signin/signin.component";
import {SignupComponent} from "./components/signup/signup.component";
import {BlogComponent} from "./components/blog/blog.component";
import {ForumsComponent} from "./components/forums/forums.component";
import {ForumTopicsComponent} from "./components/forum-topics/forum-topics.component";
import {ForumSingleComponent} from "./components/forum-single/forum-single.component";
import {CreateBlogComponent} from "./components/create-blog/create-blog.component";

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'signin', component: SigninComponent
  },
  {
    path: 'signup', component: SignupComponent
  },
  {
    path: 'blog', component: BlogComponent
  },
  {
    path: 'createblog', component: CreateBlogComponent
  },
  {
    path: 'forums', component: ForumsComponent
  },
  {
    path: 'forum-topics', component: ForumTopicsComponent
  },
  {
    path: 'forum-single', component: ForumSingleComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
