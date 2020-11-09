import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducers } from '@store/select.reducer';


@NgModule({
    imports: [
        StoreModule.forFeature('state', { ...reducers })
    ]
})
export class ComponentsStoreModule { }

