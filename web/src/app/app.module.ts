import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { DefaultDataServiceConfig, EntityDataModule } from '@ngrx/data';
import { defaultDataServiceConfig, entityConfig } from 'src/app/config/store.config';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { DispacherComponent } from './controller/dispacher.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DataInterceptor } from '@services/http.intercepter.service';
import { PagesModule } from '@pages/pages.module';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '@components/components.module';
import { AeDynamicFormModule } from 'ae-dynamic-form';


@NgModule({
  declarations: [
    AppComponent,
    DispacherComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    AeDynamicFormModule,
    StoreModule.forRoot({}),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig),
    RouterModule,
    AppRoutingModule,
    PagesModule,
    ComponentsModule,
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
