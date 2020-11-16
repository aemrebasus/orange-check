import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ChatWithUsComponent } from './chat-with-us/chat-with-us.component';
import { SubscriptionFormComponent } from './subscription-form/subscription-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { PagesComponent } from './pages.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StoreModule } from '@ngrx/store';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '', component: PagesComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutPageComponent },
      { path: 'contact', component: ContactPageComponent },
      { path: 'chat-with-us', component: ChatWithUsComponent },
      { path: 'login', component: LoginFormComponent },
      { path: 'subscribe', component: SubscriptionFormComponent },
      { path: 'error', component: ErrorComponent },
      { path: '**', redirectTo: '/error' },
    ]
  },
];

@NgModule({
  declarations: [
    PagesComponent,
    NavbarComponent,
    HomeComponent,
    LoginFormComponent,
    SubscriptionFormComponent,
    ChatWithUsComponent,
    AboutPageComponent,
    ContactPageComponent,
    ErrorComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature('pages', {}),
    RouterModule.forChild(routes),
  ],
  exports: [PagesComponent]
})
export class PagesModule { }
