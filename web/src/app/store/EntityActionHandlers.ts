import { createAction, props, ActionCreator, Store } from '@ngrx/store';
import { DynamicTableConfig } from 'ae-dynamic-table';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApplicationState, BaseState } from './ApplicationState';

export type EntityActionType =
    | 'selectOne'
    | 'deselectOne'
    | 'selectAll'
    | 'deselectAll'
    | 'selectCurrent'
    | 'filter'
    | 'setMultiselect'
    | 'setView';

export class EntityActionHandlers<T = any> {

    public readonly initState$: ActionCreator<any, (props: BaseState) => any>;
    public readonly selectOne$: ActionCreator<any, (props: { id: number }) => any>;
    public readonly deselectOne$: ActionCreator<any, (props: { id: number }) => any>;
    public readonly selectAll$: ActionCreator<any, (props: { ids: number[] }) => any>;
    public readonly deselectAll$: ActionCreator<any, any>;
    public readonly selectCurrent$: ActionCreator<any, (props: { id: number }) => any>;
    public readonly filter$: ActionCreator<any, (props: { query: string }) => any>;
    public readonly setMultiselect$: ActionCreator<any, (props: { active: boolean }) => any>;
    public readonly setView$: ActionCreator<any, (props: { view: string }) => any>;
    public readonly setTableConfig$: ActionCreator<any, (props: DynamicTableConfig) => any>;

    public tableConfig$: Observable<DynamicTableConfig>;


    private viewSnapshot: string;
    private multiselectSnapShot: boolean;
    private tableConfigSnapshot: DynamicTableConfig;

    constructor(private entityName: string, public store: Store<ApplicationState> = null) {

        this.initState$ = createAction(`[${this.entityName}] Init State ${this.entityName}`, props<BaseState>());
        this.selectOne$ = createAction(`[${this.entityName}] Select One ${this.entityName}`, props<{ id: number }>());
        this.deselectOne$ = createAction(`[${this.entityName}] Deselect One ${this.entityName}`, props<{ id: number }>());
        this.selectAll$ = createAction(`[${this.entityName}] Select All ${this.entityName}`, props<{ ids: number[] }>());
        this.deselectAll$ = createAction(`[${this.entityName}] Deselect All ${this.entityName}`);
        this.selectCurrent$ = createAction(`[${this.entityName}] Select Current ${this.entityName}`, props<{ id: number }>());
        this.filter$ = createAction(`[${this.entityName}] Filter ${this.entityName}s`, props<{ query: string }>());
        this.setMultiselect$ = createAction(`[${this.entityName}] Set ${this.entityName} Multi Select `, props<{ active: boolean }>());
        this.setView$ = createAction(`[${this.entityName}] Set ${this.entityName} View`, props<{ view: string }>());
        this.setTableConfig$ = createAction(`[${this.entityName}] Set ${this.entityName} Table Configuration`, props<DynamicTableConfig>());


        // subscriptions
        if (store) {

            // Observable fields
            this.tableConfig$ = this.store.pipe(map(s => ({ ...s.state[this.entityName.toLowerCase()].tableConfig })));

            // Subscribing Snapshots.
            // Snapshot fields
            this.store.pipe(map(s => s.state[this.entityName.toLowerCase()])).subscribe(data => {
                this.viewSnapshot = data.view;
                this.multiselectSnapShot = data.multiselect;
                this.tableConfigSnapshot = data.tableConfig;
            });




        }

    }

    public selectOne(id: number): void {
        this.store.dispatch(this.selectOne$({ id }));
    }

    public deselectOne(id: number): void {
        this.store.dispatch(this.deselectOne$({ id }));
    }

    public selectAll(ids: number[]): void {
        this.store.dispatch(this.selectAll$({ ids }));
    }

    public deselectAll(): void {
        this.store.dispatch(this.deselectAll$());
    }

    public selectCurrent(id: number): void {
        this.store.dispatch(this.selectCurrent$({ id }));
    }

    public filter(query: string): void {
        this.store.dispatch(this.filter$({ query }));
    }

    public setMultiselect(active: boolean): void {
        this.store.dispatch(this.setMultiselect$({ active }));
    }

    public setView(view: string): any {
        this.store.dispatch(this.setView$({ view }));
    }

    public setTableConfig(config: DynamicTableConfig): void {
        this.store.dispatch(this.setTableConfig$(config));
    }

    public setTableFilteredColumns(columns: string[]): void {
        this.store.dispatch(this.setTableConfig$({ ...this.tableConfigSnapshot, filteredColumns: columns }));
    }

    public selected(): Observable<T[]> {
        return this.store.pipe(map(s => ({ ...s.state[this.entityName].selected })));
    }

    public getView(): Observable<string> {
        return this.store.pipe(map(s => ({ ...s.state[this.entityName].view })));
    }

    public getViewSnapshot(): string {
        return this.viewSnapshot;
    }

    public getMultiselect(): Observable<boolean> {
        return this.store.pipe(map(s => ({ ...s.state[this.entityName].multiselect })));
    }

    public getMultiselectSnapshot(): boolean {
        return this.multiselectSnapShot;
    }

    public getTableConfig(): Observable<DynamicTableConfig> {
        return this.store.pipe(map(s => ({ ...s.state[this.entityName].tableConfig })));
    }

    public getTableConfigSnapshot(): DynamicTableConfig {
        return this.tableConfigSnapshot;
    }

}



