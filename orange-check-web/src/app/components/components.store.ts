import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../services/core/main.reducers';


@NgModule({
    imports: [
        StoreModule.forFeature('state', { ...reducers })
    ]
})
export class ComponentsStoreModule { }

