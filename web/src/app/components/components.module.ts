import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { routes } from './components.routes';
import { ComponentsStoreModule } from '@store/components.store';

import { ComponentsComponent } from './components.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { WrapperComponent } from './wrapper/wrapper.component';
import { RouterModule } from '@angular/router';
import { AeDynamicFormModule } from 'ae-dynamic-form';


// Ae MAterial
import { AeTableModule, AeToolbarModule } from 'ae-material';
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

// Ae Material


@NgModule({
  declarations: [
    DashboardComponent,
    ComponentsComponent,
    WrapperComponent,
    LogoComponent,
  ],
  imports: [
    CommonModule,


    HttpClientModule,
    ComponentsStoreModule,
    RouterModule.forChild(routes),

    // Ae material
    AeTableModule,
    AeDynamicTableModule,
    AeLayoutModule,
    AeToolbarModule,
    // Ae material

    // Materials
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatTooltipModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    OverlayModule,
    // MAterials


    // Form Builder Module
    AeDynamicFormModule,

  ],
  providers: []
})
export class ComponentsModule { }
