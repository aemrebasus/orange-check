import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ApplicationRouteMap } from './components.routes';
import { ComponentsStoreModule } from './components.store';

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
// Materials

import { ComponentsComponent } from './components.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { CreateNewIssueComponent } from './create-new-issue/create-new-issue.component';
import { CreateNewUserComponent } from './create-new-user/create-new-user.component';
import { CreateNewMessageComponent } from './create-new-message/create-new-message.component';
import { CreateNewCommentComponent } from './create-new-comment/create-new-comment.component';

import { EditCommentComponent } from './edit-comment/edit-comment.component';
import { EditIssueComponent } from './edit-issue/edit-issue.component';
import { EditMessageComponent } from './edit-message/edit-message.component';
import { EditUserComponent } from './edit-user/edit-user.component';

import { ViewOneCommentComponent } from './view-one-comment/view-one-comment.component';
import { ViewOneIssueComponent } from './view-one-issue/view-one-issue.component';
import { ViewOneMessageComponent } from './view-one-message/view-one-message.component';
import { ViewOneUserComponent } from './view-one-user/view-one-user.component';

import { ViewAllCommentsComponent } from './view-all-comments/view-all-comments.component';
import { ViewAllIssuesComponent } from './view-all-issues/view-all-issues.component';
import { ViewAllUsersComponent } from './view-all-users/view-all-users.component';
import { ViewAllMessagesComponent } from './view-all-messages/view-all-messages.component';

import { ViewOneProjectComponent } from './view-one-project/view-one-project.component';
import { ViewAllProjectsComponent } from './view-all-projects/view-all-projects.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { CreateNewProjectComponent } from './create-new-project/create-new-project.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { ProjectResolverService } from '@services/projects.resolver';
import { WrapperResolverService } from '@services/wrapper.resolver';
import { AeDynamicFormModule } from 'ae-dynamic-form';
import { AlertMessageComponent } from './alert-message/alert-message.component';



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

    // Edit
    EditProjectComponent,
    EditCommentComponent,
    EditIssueComponent,
    EditMessageComponent,
    EditUserComponent,

    // View One
    ViewOneProjectComponent,
    ViewOneIssueComponent,
    ViewOneCommentComponent,
    ViewOneUserComponent,
    ViewOneMessageComponent,

    // View All
    ViewAllProjectsComponent,
    ViewAllCommentsComponent,
    ViewAllIssuesComponent,
    ViewAllUsersComponent,
    ViewAllMessagesComponent,
    WrapperComponent,
    AlertMessageComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,

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
    // Materials

    // Form Builder Module
    AeDynamicFormModule,

    ComponentsStoreModule
  ],
  providers: [
    ProjectResolverService,
    WrapperResolverService,
  ]
})
export class ComponentsModule { }
