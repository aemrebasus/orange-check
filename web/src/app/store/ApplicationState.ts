import { EntityCache } from '@ngrx/data';

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
}
