import { ActionReducer, createReducer, on } from '@ngrx/store';
import { DEFAULT_DYNAMICTABLE_CONFIG } from 'ae-dynamic-table';
import { BaseState } from './ApplicationState';
import { EntityActionHandlers } from './EntityActionHandlers';

const initialState: BaseState<number> = {
    selected: [],
    query: '',
    current: null,
    view: 'table',
    multiselect: false,
    tableConfig: DEFAULT_DYNAMICTABLE_CONFIG
};

export function createEntityReducer(name: string): ActionReducer<BaseState> {

    const newActivityReducer = new EntityActionHandlers(name);
    const reducer = createReducer(
        initialState,
        on(newActivityReducer.selectOne$, (state, payload) => {
            if (state.selected.includes(payload.id)) {
                return state;
            }
            return ({ ...state, selected: [...state.selected, payload.id] });
        }),
        on(newActivityReducer.deselectOne$, (state, payload) => ({ ...state, selected: state.selected.filter(e => e !== payload.id) })),
        on(newActivityReducer.selectAll$, (state, payload) => ({ ...state, selected: payload.ids })),
        on(newActivityReducer.deselectAll$, (state) => ({ ...state, selected: [] })),
        on(newActivityReducer.selectCurrent$, (state, payload) => ({ ...state, current: payload.id })),
        on(newActivityReducer.filter$, (state, payload) => ({ ...state, query: payload.query })),
        on(newActivityReducer.setMultiselect$, (state, payload) => ({ ...state, multiselect: payload.active })),
        on(newActivityReducer.setView$, (state, payload) => ({ ...state, view: payload.view })),
        on(newActivityReducer.setTableConfig$,
            (state, payload) => ({ ...state, tableConfig: { ...state.tableConfig, ...payload.config } })),
    );
    return reducer;
}


