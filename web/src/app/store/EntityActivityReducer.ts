import { ActionReducer, createAction, createReducer, on, props, ActionCreator } from '@ngrx/store';
import { BaseState } from './ApplicationState';

const initialState: BaseState<number> = {
    selected: [],
    query: '',
    current: null,
    view: '',
    multiselect: false,
};



export class EntityActivityReducer {

    private reducer$: ActionReducer<BaseState>;
    private selectOne$: ActionCreator<any, (props: { id: number }) => any>;
    private deselectOne$: ActionCreator<any, (props: { id: number }) => any>;
    private selectAll$: ActionCreator<any, (props: { ids: number[] }) => any>;
    private deselectAll$: ActionCreator<any>;
    private selectCurrent$: ActionCreator<any, (props: { id: number }) => any>;
    private filter$: ActionCreator<any, (props: { query: string }) => any>;
    private setMultiselect$: ActionCreator<any, (props: { active: boolean }) => any>;
    private setView$: ActionCreator<any, (props: { view: string }) => any>;

    constructor(private entityName: string) {

        this.selectOne$ = createAction(`[${this.entityName}] Select One ${this.entityName}`, props<{ id: number }>());
        this.deselectOne$ = createAction(`[${this.entityName}] Deselect One ${this.entityName}`, props<{ id: number }>());
        this.selectAll$ = createAction(`[${this.entityName}] Select All ${this.entityName}`, props<{ ids: number[] }>());
        this.deselectAll$ = createAction(`[${this.entityName}] Deselect All ${this.entityName}`);
        this.selectCurrent$ = createAction(`[${this.entityName}] Select Current ${this.entityName}`, props<{ id: number }>());
        this.filter$ = createAction(`[${this.entityName}] Filter ${this.entityName}s`, props<{ query: string }>());
        this.setMultiselect$ = createAction(`[${this.entityName}] Set ${this.entityName} Multi Select `, props<{ active: boolean }>());
        this.setView$ = createAction(`[${this.entityName}] Set ${this.entityName} View`, props<{ view: string }>());


        this.reducer$ = createReducer(
            initialState,
            on(this.selectOne$, (state, payload) => {
                if (state.selected.includes(payload.id)) {
                    return state;
                }
                return ({ ...state, selected: [...state.selected, payload.id] });
            }),
            on(this.deselectOne$, (state, payload) => ({ ...state, selected: state.selected.filter(e => e !== payload.id) })),
            on(this.selectAll$, (state, payload) => ({ ...state, selected: payload.ids })),
            on(this.deselectAll$, (state) => ({ ...state, selected: [] })),
            on(this.selectCurrent$, (state, payload) => ({ ...state, current: payload.id })),
            on(this.filter$, (state, payload) => ({ ...state, query: payload.query })),
            on(this.setMultiselect$, (state, payload) => ({ ...state, multiselect: payload.active })),
            on(this.setView$, (state, payload) => ({ ...state, view: payload.view }))
        );
    }

    getReducer(): ActionReducer<BaseState> {
        return this.reducer$;
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

