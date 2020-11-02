import { Injectable } from '@angular/core';

import { ISelectItem } from './core/ISelectItem';
import { actions as ACTIONS } from '@services/core/main.reducers';
import { Observable, of } from 'rxjs';
import { IProject } from '@models';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { map } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class ProjectService extends EntityCollectionServiceBase<IProject> implements ISelectItem {

    selected$: Observable<number[]> = of(null);
    current$: Observable<number> = of(null);
    selectedCount$: Observable<number> = of(0);
    private multiSelect = false;
    private actions = ACTIONS.project;

    constructor(servcieElementsFactory: EntityCollectionServiceElementsFactory) {
        super('Project', servcieElementsFactory);
        this.getAll();
        this.selected$.subscribe(selectedProject => {
            this.selectedCount$ = of(selectedProject?.length);
        });
    }

    activateMultiSelect(): Observable<boolean> {
        if (this.multiSelect) {
            this.multiSelect = false;
            return of(false);
        } else {
            this.multiSelect = true;
            return of(true);
        }
    }

    deleteSelectedProjects(): void {
        this.selected$.toPromise().then(ids => {
            ids.forEach(id => {
                this.delete(id);
            });
        });
    }

    selectOne(id: number): void {
        if (!this.multiSelect) {
            this.deselectAll();
        }
        this.store.dispatch(this.actions.selectOneProject({ id }));
    }

    deselectOne(id: number): void {
        this.store.dispatch(this.actions.deselectOneProject({ id }));
    }

    selectAll(): void {
        this.multiSelect = true;
        this.getAll().toPromise().then(data => {
            this.store.dispatch(this.actions.selectAllProjects({ ids: data.map(e => e.id) }));
        });
    }

    deselectAll(): void {
        this.store.dispatch(this.actions.deselectAllProjects());
    }

    selectCurrent(id: number): void {
        this.store.dispatch(this.actions.selectCurrentProject({ id }));
    }



}


