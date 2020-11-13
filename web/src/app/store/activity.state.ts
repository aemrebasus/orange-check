import { ActionReducer } from '@ngrx/store';
import { BaseState } from './ApplicationState';

export interface ActivityState {
    project: ActionReducer<BaseState>;
    issue: ActionReducer<BaseState>;
    message: ActionReducer<BaseState>;
    user: ActionReducer<BaseState>;
}
