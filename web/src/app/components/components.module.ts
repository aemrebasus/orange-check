import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ApplicationRouteMap } from './components.routes';
import { ComponentsStoreModule } from '@store/components.store';

// Materials
import { MatCommonModule } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatBadgeModule } from '@angular/material/badge';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
// Materials

import { ComponentsComponent } from './components.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { CreateNewIssueComponent } from './create-new-issue/create-new-issue.component';
import { CreateNewUserComponent } from './create-new-user/create-new-user.component';
import { CreateNewMessageComponent } from './create-new-message/create-new-message.component';
import { CreateNewCommentComponent } from './create-new-comment/create-new-comment.component';

import { ViewAllCommentsComponent } from './view-all-comments/view-all-comments.component';
import { ViewAllIssuesComponent } from './view-all-issues/view-all-issues.component';
import { ViewAllUsersComponent } from './view-all-users/view-all-users.component';
import { ViewAllMessagesComponent } from './view-all-messages/view-all-messages.component';

import { ViewAllProjectsComponent } from './view-all-projects/view-all-projects.component';
import { CreateNewProjectComponent } from './create-new-project/create-new-project.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { AeDynamicFormModule } from 'ae-dynamic-form';
import { MatPaginatorModule } from '@angular/material/paginator';


// Ae MAterial
import { AeTableModule, AeToolbarModule } from 'ae-material';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AeDynamicTableModule } from 'ae-dynamic-table';

// Ae Material


@NgModule({
  declarations: [
    DashboardComponent,
    NavigationComponent,
    ComponentsComponent,

    CreateNewProjectComponent,
    CreateNewIssueComponent,
    CreateNewUserComponent,
    CreateNewMessageComponent,
    CreateNewCommentComponent,


    // View All
    ViewAllProjectsComponent,
    ViewAllCommentsComponent,
    ViewAllIssuesComponent,
    ViewAllUsersComponent,
    ViewAllMessagesComponent,
    WrapperComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,

    ComponentsStoreModule,
    RouterModule.forChild(ApplicationRouteMap),


    // Materials
    MatCommonModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatBadgeModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    // Materials

    // Ae material
    AeTableModule,
    AeDynamicTableModule,
    // Ae material

    AeToolbarModule,

    // Form Builder Module
    AeDynamicFormModule,

  ],
  providers: []
})
export class ComponentsModule { }
