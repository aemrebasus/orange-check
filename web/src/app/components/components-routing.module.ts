import { RouterModule, Routes } from '@angular/router';
import { ComponentsComponent } from './components.component';
import { ConfigComponent } from './config/config.component';
import { HelpComponent } from './help/help.component';

import { WrapperComponent } from './wrapper/wrapper.component';

export const routes: Routes = [
    {
        path: '',
        component: ComponentsComponent,

        children: [
            { path: 'users', component: WrapperComponent },
            { path: 'projects', component: WrapperComponent },
            { path: 'issues', component: WrapperComponent },
            { path: 'messages', component: WrapperComponent },
            { path: 'configuration', component: ConfigComponent },
            { path: 'help', component: HelpComponent }
        ]
    }
];

import { NgModule } from '@angular/core';

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],

})
export class ComponentsRoutingModule { }
