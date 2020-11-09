import { Route } from '@angular/router';
import { IconType } from 'ng-icon-type';

export type NavigationPathType =
    | 'dashboard'

    | 'create-new-project'
    | 'create-new-issue'
    | 'create-new-comment'
    | 'create-new-message'
    | 'create-new-user'

    | 'edit-project'
    | 'edit-issue'
    | 'edit-comment'
    | 'edit-message'
    | 'edit-user'

    | 'view-one-project'
    | 'view-one-issue'
    | 'view-one-comment'
    | 'view-one-message'
    | 'view-one-user'

    | 'view-all-projects'
    | 'view-all-issues'
    | 'view-all-comments'
    | 'view-all-messages'
    | 'view-all-users'
    | ''
    | string;

interface ApplicationRoute extends Route {
    path: NavigationPathType;
    label?: string;
    icon?: IconType;
}


export type ApplicationRoutes = ApplicationRoute[];
