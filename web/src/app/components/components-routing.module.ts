import { RouterModule, Routes } from '@angular/router';
import { ComponentsComponent } from './components.component';
import { ConfigComponent } from './config/config.component';
import { HelpComponent } from './help/help.component';

export const routes: Routes = [
    {
        path: '',
        component: ComponentsComponent,

        children: [
            {
                path: 'users', component: UsersComponent

            },
            {
                path: 'projects', component: ProjectsComponent

            },
            {
                path: 'issues', component: IssuesComponent

            },
            {
                path: 'messages', component: MessagesComponent

            },
            { path: 'configuration', component: ConfigComponent },
            { path: 'help', component: HelpComponent }
        ]
    }
];

import { NgModule } from '@angular/core';
import { UsersComponent } from './users/users.component';
import { ProjectsComponent } from './projects/projects.component';
import { IssuesComponent } from './issues/issues.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],

})
export class ComponentsRoutingModule { }
