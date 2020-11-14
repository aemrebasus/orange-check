import { createAction, props, ActionCreator } from '@ngrx/store';

export type EntityActionType =
    | 'selectOne'
    | 'deselectOne'
    | 'selectAll'
    | 'deselectAll'
    | 'selectCurrent'
    | 'filter'
    | 'setMultiselect'
    | 'setView';


export class EntityActionHandlers {

    public readonly selectOne$: ActionCreator<any, (props: { id: number }) => any>;
    public readonly deselectOne$: ActionCreator<any, (props: { id: number }) => any>;
    public readonly selectAll$: ActionCreator<any, (props: { ids: number[] }) => any>;
    public readonly deselectAll$: ActionCreator<any>;
    public readonly selectCurrent$: ActionCreator<any, (props: { id: number }) => any>;
    public readonly filter$: ActionCreator<any, (props: { query: string }) => any>;
    public readonly setMultiselect$: ActionCreator<any, (props: { active: boolean }) => any>;
    public readonly setView$: ActionCreator<any, (props: { view: string }) => any>;

    constructor(private entityName: string) {
        this.selectOne$ = createAction(`[${this.entityName}] Select One ${this.entityName}`, props<{ id: number }>());
        this.deselectOne$ = createAction(`[${this.entityName}] Deselect One ${this.entityName}`, props<{ id: number }>());
        this.selectAll$ = createAction(`[${this.entityName}] Select All ${this.entityName}`, props<{ ids: number[] }>());
        this.deselectAll$ = createAction(`[${this.entityName}] Deselect All ${this.entityName}`);
        this.selectCurrent$ = createAction(`[${this.entityName}] Select Current ${this.entityName}`, props<{ id: number }>());
        this.filter$ = createAction(`[${this.entityName}] Filter ${this.entityName}s`, props<{ query: string }>());
        this.setMultiselect$ = createAction(`[${this.entityName}] Set ${this.entityName} Multi Select `, props<{ active: boolean }>());
        this.setView$ = createAction(`[${this.entityName}] Set ${this.entityName} View`, props<{ view: string }>());
    }

    public selectOne(id: number): any {
        return this.selectOne$({ id });
    }

    public deselectOne(id: number): any {
        return this.deselectOne$({ id });
    }

    public selectAll(ids: number[]): any {
        return this.selectAll$({ ids });
    }

    public deselectAll(): any {
        return this.deselectAll$();
    }

    public selectCurrent(id: number): any {
        return this.selectCurrent$({ id });
    }

    public filter(query: string): any {
        return this.filter$({ query });
    }

    public setMultiselect(active: boolean): any {
        return this.setMultiselect$({ active });
    }

    public setView(view: string): any {
        return this.setView$({ view });
    }

}



