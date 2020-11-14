import { ComponentsComponent } from './components.component';
import { ConfigComponent } from './config/config.component';
import { HelpComponent } from './help/help.component';

import { ApplicationRoutes } from './navigation';
import { WrapperComponent } from './wrapper/wrapper.component';


export const routes: ApplicationRoutes = [
    {
        path: '',
        component: ComponentsComponent,

        children: [
            { path: 'users', component: WrapperComponent },
            { path: 'configuration', component: ConfigComponent },
            { path: 'help', component: HelpComponent }
        ]
    }
];
