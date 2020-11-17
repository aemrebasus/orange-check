import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPageComponent } from '@pages/about-page/about-page.component';
import { ChatWithUsComponent } from '@pages/chat-with-us/chat-with-us.component';
import { ContactPageComponent } from '@pages/contact-page/contact-page.component';
import { ErrorComponent } from '@pages/error/error.component';
import { HomeComponent } from '@pages/home/home.component';
import { LoginFormComponent } from '@pages/login-form/login-form.component';
import { PagesComponent } from '@pages/pages.component';
import { SubscriptionFormComponent } from '@pages/subscription-form/subscription-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  {
    path: 'pages', component: PagesComponent, children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutPageComponent },
      { path: 'contact', component: ContactPageComponent },
      { path: 'chat-with-us', component: ChatWithUsComponent },
      { path: 'login', component: LoginFormComponent },
      { path: 'subscribe', component: SubscriptionFormComponent },
      { path: 'error', component: ErrorComponent },
      { path: '**', redirectTo: 'error' },
    ]
  },
  { path: 'app', loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
