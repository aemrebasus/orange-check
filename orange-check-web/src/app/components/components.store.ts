import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

@NgModule({
    imports: [
        StoreModule.forFeature('application', {})
    ]
})
export class ComponentsStoreModule { }

