import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { createEntityReducer } from './create.activity.reducer';


@NgModule({
    imports: [
        StoreModule.forFeature('state', {
            project: createEntityReducer('project'),
            issue: createEntityReducer('issue'),
            user: createEntityReducer('user'),
            message: createEntityReducer('message'),
        })
    ]
})
export class ComponentsStoreModule { }

