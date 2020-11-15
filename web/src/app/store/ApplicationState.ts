import { EntityCache } from '@ngrx/data';
import { ActionReducer } from '@ngrx/store';
import { DynamicTableConfig } from 'ae-dynamic-table';


export type EntityNames = 'Project' | 'Issue' | 'Message' | 'User'; 

export interface ApplicationState {
    state: EntityActivityState;
    entityCache: EntityCache;
}

export interface EntityActivityState {
    project: BaseState<number>;
    issue: BaseState<number>;
    message: BaseState<number>;
    user: BaseState<number>;
}

export interface BaseState<T = number> {
    selected: T[];
    query: string;
    current: T;
    view: string;
    multiselect: boolean;
    tableConfig: DynamicTableConfig;
}

export interface ActivityReducers {
    project: ActionReducer<BaseState>;
    issue: ActionReducer<BaseState>;
    message: ActionReducer<BaseState>;
    user: ActionReducer<BaseState>;
}

