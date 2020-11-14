import { ComponentsComponent } from './components.component';
import { ConfigComponent } from './config/config.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { ApplicationRoutes } from './navigation';
import { WrapperComponent } from './wrapper/wrapper.component';


export const routes: ApplicationRoutes = [
    {
        path: '',
        component: ComponentsComponent,

        children: [
            { path: 'users', component: WrapperComponent },
            { path: 'config', component: ConfigComponent }
        ]
    }
];
