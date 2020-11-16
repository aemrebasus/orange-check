import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ChatWithUsComponent } from './chat-with-us/chat-with-us.component';
import { SubscriptionFormComponent } from './subscription-form/subscription-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { PagesComponent } from './pages.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {
    path: '', component: PagesComponent,
    children: [
      { path: '', component: HomePageComponent },
      { path: 'error', component: ErrorComponent },
      { path: 'about', component: AboutPageComponent },
      { path: 'contact', component: ContactPageComponent },
      { path: 'chat-with-us', component: ChatWithUsComponent },
      { path: 'login', component: LoginFormComponent },
      { path: 'subscription', component: SubscriptionFormComponent }
    ]
  }

];

@NgModule({
  declarations: [
    LoginFormComponent,
    SubscriptionFormComponent,
    ChatWithUsComponent,
    HomePageComponent,
    AboutPageComponent,
    ContactPageComponent,
    PagesComponent,
    NavbarComponent,
    ErrorComponent,
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('pages', reducer),
    RouterModule.forChild(routes)
  ]
})
export class PagesModule { }
