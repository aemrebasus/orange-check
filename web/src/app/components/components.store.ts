import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../reducers/main.reducers';


@NgModule({
    imports: [
        StoreModule.forFeature('state', { ...reducers })
    ]
})
export class ComponentsStoreModule { }

