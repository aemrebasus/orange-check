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

import { ApplicationRoutes } from './navigation';

import { ViewAllProjectsComponent } from './view-all-projects/view-all-projects.component';
import { CreateNewProjectComponent } from './create-new-project/create-new-project.component';

import { WrapperComponent } from './wrapper/wrapper.component';

export const ApplicationRouteMap: ApplicationRoutes = [
    {
        path: '',
        component: ComponentsComponent,
        children: [

            // Dashboard
            { path: 'dashboard', component: DashboardComponent },

            // Create
            { path: 'create-new-project', component: CreateNewProjectComponent },
            { path: 'create-new-issue', component: CreateNewIssueComponent },
            { path: 'create-new-comment', component: CreateNewCommentComponent },
            { path: 'create-new-message', component: CreateNewMessageComponent },
            { path: 'create-new-user', component: CreateNewUserComponent },


            // View All
            { path: 'view-all-projects', component: ViewAllProjectsComponent },
            { path: 'view-all-comments', component: ViewAllCommentsComponent },
            { path: 'view-all-issues', component: ViewAllIssuesComponent },
            { path: 'view-all-messages', component: ViewAllMessagesComponent, },
            { path: 'view-all-users', component: ViewAllUsersComponent },

            // ForDev
            { path: 'view-all-items', component: WrapperComponent }

        ]
    }
];
