import { EntityType } from '@models';
import { createAction, createReducer, on, props } from '@ngrx/store';

const activateEntityAction = createAction('[Active Entity] Activate Entity', props<{ typ: EntityType }>());


const activeEntityReducer = createReducer(
    { typ: null },
    on(activateEntityAction, (state, payload) => payload)
);

export const actions = {
    activateEntityAction
};

export const reducers = {
    activeEntityReducer
};
