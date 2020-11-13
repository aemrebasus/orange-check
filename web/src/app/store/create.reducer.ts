import { ActionReducer, createAction, createReducer, on, props, ActionCreator } from '@ngrx/store';




export interface BaseState<T = number> {
    selected: T[];
    query: string;
    current: T;
    view: string;
    multiselect: boolean;
}

const initialState: BaseState<number> = {
    selected: [],
    query: '',
    current: null,
    view: '',
    multiselect: false,
};

type TAction =
    | 'selectOne'
    | 'deselectOne'
    | 'selectAll'
    | 'deselectAll'
    | 'selectCurrent'
    | 'filter'
    | 'setMultiselect'
    | 'setView';

export class EntityActivityReducer {

    private actions: { [key: string]: ActionCreator<any> } = {};
    private reducer: ActionReducer<BaseState>;

    constructor(public entityName: string) {

        const selectOne = createAction(`[${this.entityName}] Select One ${this.entityName}`, props<{ id: number }>());
        const deselectOne = createAction(`[${this.entityName}] Deselect One ${this.entityName}`, props<{ id: number }>());
        const selectAll = createAction(`[${this.entityName}] Select All ${this.entityName}`, props<{ ids: number[] }>());
        const deselectAll = createAction(`[${this.entityName}] Deselect All ${this.entityName}`);
        const selectCurrent = createAction(`[${this.entityName}] Select Current ${this.entityName}`, props<{ id: number }>());
        const filter = createAction(`[${this.entityName}] Filter ${this.entityName}s`, props<{ query: string }>());
        const setMultiselect = createAction(`[${this.entityName}] Set ${this.entityName} Multi Select `, props<{ active: boolean }>());
        const setView = createAction(`[${this.entityName}] Set ${this.entityName} View`, props<{ view: string }>());

        const reducer = createReducer(
            initialState,
            on(selectOne, (state, payload) => {
                if (state.selected.includes(payload.id)) {
                    return state;
                }
                return ({ ...state, selected: [...state.selected, payload.id] });
            }),
            on(deselectOne, (state, payload) => ({ ...state, selected: state.selected.filter(e => e !== payload.id) })),
            on(selectAll, (state, payload) => ({ ...state, selected: payload.ids })),
            on(deselectAll, (state) => ({ ...state, selected: [] })),
            on(selectCurrent, (state, payload) => ({ ...state, current: payload.id })),
            on(filter, (state, payload) => ({ ...state, query: payload.query })),
            on(setMultiselect, (state, payload) => ({ ...state, multiselect: payload.active })),
            on(setView, (state, payload) => ({ ...state, view: payload.view }))
        );

        this.reducer = reducer;
    }

    getActionByName(name: TAction): ActionCreator {
        return this.actions[name];
    }

    getReducer(): ActionReducer<BaseState> {
        return this.reducer;
    }




}

