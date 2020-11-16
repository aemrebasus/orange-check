import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { DefaultDataServiceConfig, EntityDataModule } from '@ngrx/data';
import { defaultDataServiceConfig, entityConfig } from 'src/app/config/store.config';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DataInterceptor } from '@services/http.intercepter.service';
import { AeDynamicFormModule } from 'ae-dynamic-form';

// Pages
import { PagesComponent } from '@pages/pages.component';
import { HomeComponent } from '@pages/home/home.component';
import { LoginFormComponent } from '@pages/login-form/login-form.component';
import { SubscriptionFormComponent } from '@pages/subscription-form/subscription-form.component';
import { ChatWithUsComponent } from '@pages/chat-with-us/chat-with-us.component';
import { AboutPageComponent } from '@pages/about-page/about-page.component';
import { ContactPageComponent } from '@pages/contact-page/contact-page.component';
import { ErrorComponent } from '@pages/error/error.component';
import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
  declarations: [
    AppComponent,

    PagesComponent,
    HomeComponent,
    LoginFormComponent,
    SubscriptionFormComponent,
    ChatWithUsComponent,
    AboutPageComponent,
    ContactPageComponent,
    ErrorComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    AeDynamicFormModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    StoreModule.forRoot({}),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig),
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: DataInterceptor, multi: true },
    { provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig },

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() { }
}
