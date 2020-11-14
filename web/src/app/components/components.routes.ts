import { ComponentsComponent } from './components.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { ApplicationRoutes } from './navigation';


export const routes: ApplicationRoutes = [
    {
        path: '',
        component: ComponentsComponent,
        children: [

            // Dashboard
            { path: 'dashboard', component: DashboardComponent }

        ]
    }
];
