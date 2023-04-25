import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { BlogComponent } from './components/blog/blog.component';
import { ForumsComponent } from './components/forums/forums.component';
import { ForumTopicsComponent } from './components/forum-topics/forum-topics.component';
import { ForumSingleComponent } from './components/forum-single/forum-single.component';
import { CreateBlogComponent } from './components/create-blog/create-blog.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    SigninComponent,
    SignupComponent,
    BlogComponent,
    ForumsComponent,
    ForumTopicsComponent,
    ForumSingleComponent,
    CreateBlogComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
