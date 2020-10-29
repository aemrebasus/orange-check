import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateNewIssueComponent } from './create-new-issue/create-new-issue.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CreateNewUserComponent } from './create-new-user/create-new-user.component';
import { CreateNewMessageComponent } from './create-new-message/create-new-message.component';
import { CreateNewCommentComponent } from './create-new-comment/create-new-comment.component';
import { EditCommentComponent } from './edit-comment/edit-comment.component';
import { EditIssueComponent } from './edit-issue/edit-issue.component';
import { EditMessageComponent } from './edit-message/edit-message.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { ComponentsComponent } from './components.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducer';

const routes: Routes = [
  {
    path: '', component: ComponentsComponent, children: [
      { path: 'dashboard', component: DashboardComponent },
      // Create
      { path: 'create-new-comment', component: CreateNewCommentComponent },
      { path: 'create-new-issue', component: CreateNewIssueComponent },
      { path: 'create-new-message', component: CreateNewMessageComponent },
      { path: 'create-new-user', component: CreateNewUserComponent },
      // Edit
      { path: 'edit-comment', component: EditCommentComponent },
      { path: 'edit-issue', component: EditIssueComponent },
      { path: 'edit-user', component: EditUserComponent },
      { path: 'edit-message', component: EditMessageComponent },


    ]
  }
];


@NgModule({
  declarations: [
    DashboardComponent,
    CreateNewIssueComponent,
    NavigationComponent,
    CreateNewUserComponent,
    CreateNewMessageComponent,
    CreateNewCommentComponent,
    EditCommentComponent,
    EditIssueComponent,
    EditMessageComponent,
    EditUserComponent,
    ComponentsComponent,
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('application', reducer)
  ]
})
export class ComponentsModule { }
