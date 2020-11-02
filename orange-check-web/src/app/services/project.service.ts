import { Injectable } from '@angular/core';
import { ISelectItem } from './core/ISelectItem';
import { actions as ACTIONS, ApplicationState } from '@services/core/main.reducers';
import { Observable, of, Subject } from 'rxjs';
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
    currentProject$: Subject<IProject> = new Subject<IProject>();
    isMultiSelectActive = false;
    isAllSelectActive = false;

    private actions = ACTIONS.project;
    private timer = 0;

    constructor(servcieElementsFactory: EntityCollectionServiceElementsFactory) {

        super('Project', servcieElementsFactory);
        this.getAll();

        this.entities$.subscribe(projects => {
            this.snapshot$ = [...projects];
        });

        this.selected$.subscribe(sp => {
            this.selectedSnapshot$ = [...sp];
            if (this.selectedSnapshot$.length === 1) {
                this.currentProject$.next(this.snapshot$.find(e => e.id === sp[0]));
            }
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

    canIOpenAnyProject(): boolean {
        return this.selectedSnapshot$.length === 1;
    }

    deleteSelectedProjects(): void {
        this.selectedSnapshot$.forEach(e => {
            this.delete(e);
        });
        this.removeManyFromCache(this.selectedSnapshot$);
    }

    selectOne(id: number): void {
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


