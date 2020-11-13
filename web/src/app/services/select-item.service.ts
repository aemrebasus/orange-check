


import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { actions, ApplicationState } from '@store/activity.reducer';
import { ActiveEntityService } from './active-entity.service';

@Injectable({
    providedIn: 'root'
})
export class SelectItemService {
    constructor(public activeEntityService: ActiveEntityService, public store: Store<ApplicationState>) {

    }

    selectOne(id: number): void {

    }

    deselectOne(id: number): void {

    }

    selectAll(ids: number[]): void {

    }

    deselectAll(): void {

    }

    selectCurrent(id: number): void {

    }

}
