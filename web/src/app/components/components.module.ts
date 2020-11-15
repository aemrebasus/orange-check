import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsRoutingModule, routes } from './components-routing.module';
import { ComponentsStoreModule } from '@store/components.store';

import { ComponentsComponent } from './components.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { WrapperComponent } from './wrapper/wrapper.component';
import { AeDynamicFormModule } from 'ae-dynamic-form';


import { AeDynamicTableModule } from 'ae-dynamic-table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { OverlayModule } from '@angular/cdk/overlay';
import { AeLayoutModule } from 'ae-layout';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LogoComponent } from './logo/logo.component';
import { ConfigComponent } from './config/config.component';
import { FormComponent } from './form/form.component';
import { HelpComponent } from './help/help.component';
import { ProjectsComponent } from './projects/projects.component';
import { IssuesComponent } from './issues/issues.component';
import { MessagesComponent } from './messages/messages.component';
import { UsersComponent } from './users/users.component';
import { ViewDataComponent } from './view-data/view-data.component';

// Ae Material


@NgModule({
  declarations: [
    DashboardComponent,
    ComponentsComponent,
    WrapperComponent,
    LogoComponent,
    ConfigComponent,
    FormComponent,
    HelpComponent,
    ProjectsComponent,
    IssuesComponent,
    MessagesComponent,
    UsersComponent,
    ViewDataComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ComponentsStoreModule,
    ComponentsRoutingModule,
    OverlayModule,

    // Ae material
    AeDynamicTableModule,
    AeLayoutModule,
    // Ae material

    // Materials
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatTooltipModule,
    // MAterials

    // Form Builder Module
    AeDynamicFormModule,

  ],
  providers: []
})
export class ComponentsModule { }
