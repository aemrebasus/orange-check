import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCommonModule } from '@angular/material/core';
import { MatBadgeModule } from '@angular/material/badge';

import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { ComponentsComponent } from './components.component';
import { NavigationComponent } from './navigation/navigation.component';
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

import { ApplicationRoutes } from './navigation';
import { ViewOneProjectComponent } from './view-one-project/view-one-project.component';
import { ViewAllProjectsComponent } from './view-all-projects/view-all-projects.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { CreateNewProjectComponent } from './create-new-project/create-new-project.component';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



const routes: ApplicationRoutes = [
  {
    path: '', component: ComponentsComponent, children: [

      // Dashboard
      { path: 'dashboard', component: DashboardComponent },

      // Create

      { path: 'create-new-project', component: CreateNewProjectComponent },
      { path: 'create-new-issue', component: CreateNewIssueComponent },
      { path: 'create-new-comment', component: CreateNewCommentComponent },
      { path: 'create-new-message', component: CreateNewMessageComponent },
      { path: 'create-new-user', component: CreateNewUserComponent },

      // Edit
      { path: 'edit-project', component: EditProjectComponent },
      { path: 'edit-issue', component: EditIssueComponent },
      { path: 'edit-comment', component: EditCommentComponent },
      { path: 'edit-message', component: EditMessageComponent },
      { path: 'edit-user', component: EditUserComponent },

      // View One
      { path: 'view-one-project', component: ViewOneProjectComponent },
      { path: 'view-one-issue', component: ViewOneIssueComponent },
      { path: 'view-one-comment', component: ViewOneCommentComponent },
      { path: 'view-one-user', component: ViewOneUserComponent },
      { path: 'view-one-message', component: ViewOneMessageComponent },

      // View All
      { path: 'view-all-projects', component: ViewAllProjectsComponent },
      { path: 'view-all-comments', component: ViewAllCommentsComponent },
      { path: 'view-all-issues', component: ViewAllIssuesComponent },
      { path: 'view-all-messages', component: ViewAllMessagesComponent },
      { path: 'view-all-users', component: ViewAllUsersComponent },



    ]
  }
];


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

  ],
  imports: [
    CommonModule,
    HttpClientModule,
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
    RouterModule.forChild(routes),
    StoreModule.forFeature('application', {})
  ]
})
export class ComponentsModule { }
