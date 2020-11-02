import { Injectable } from '@angular/core';

import { ISelectItem } from './core/ISelectItem';
import { actions as ACTIONS, ApplicationState } from '@services/core/main.reducers';
import { Observable, of } from 'rxjs';
import { IProject } from '@models';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { map } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class ProjectService extends EntityCollectionServiceBase<IProject> implements ISelectItem {

    snapshot$: IProject[] = [];
    selectedSnapshot$: number[] = [];
    selected$: Observable<number[]> = this.store.pipe(map(s => (s as any).state.project.selected));

    isMultiSelectActive = false;
    isAllSelectActive = false;

    private actions = ACTIONS.project;
    private timer = 0;



    constructor(servcieElementsFactory: EntityCollectionServiceElementsFactory) {
        super('Project', servcieElementsFactory);
        this.getAll();

        this.entities$.subscribe(projects => {
            console.log('[ProjectService] Subscription Control -Snapshot', this.timer++);
            this.snapshot$ = [...projects];
        });

        this.selected$.subscribe(sp => {
            console.log('[ProjectService] Subscription Control -SelectedSnapSHot', sp, this.timer++);
            this.selectedSnapshot$ = [...sp];
        });
    }

    selectedProjects(): Observable<number[]> {
        return this.selected$;
    }

    activateMultiSelect(): boolean {
        if (this.isMultiSelectActive) {
            this.deselectAll();
        }
        return this.isMultiSelectActive = this.isMultiSelectActive ? false : true;
    }

    deleteSelectedProjects(): void {
        this.selected$.toPromise().then(ids => {
            ids.forEach(id => {
                this.delete(id);
            });
        });
    }

    selectOne(id: number): void {
        console.log('Snapshot', this.selectedSnapshot$);
        if (!this.isMultiSelectActive) {
            this.deselectAll();
            this.store.dispatch(this.actions.selectOneProject({ id }));
        } else {
            if (this.selectedSnapshot$.includes(id)) {
                this.deselectOne(id);
                return;
            } else {
                this.store.dispatch(this.actions.selectOneProject({ id }));
            }
        }
        console.log('After --------<> Snapshot', this.selectedSnapshot$);

    }


    deselectOne(id: number): void {
        this.store.dispatch(this.actions.deselectOneProject({ id }));
    }

    selectAll(): boolean {
        if (this.isAllSelectActive) {
            return this.deselectAll();
        }
        this.store.dispatch(this.actions.selectAllProjects({ ids: this.snapshot$.map(e => e.id) }));
        return this.isAllSelectActive = true;
    }

    deselectAll(): boolean {
        this.store.dispatch(this.actions.deselectAllProjects());
        return this.isAllSelectActive = false;
    }

    selectCurrent(id: number): void {
        this.store.dispatch(this.actions.selectCurrentProject({ id }));
    }



}


