import { createReducer } from '@ngrx/store';

export interface UserSession {
    isLoggedIn: boolean;
}

const userSessionInitialState: UserSession = {
    // Temporary Data
    isLoggedIn: true
};

export const userSessionReducer = createReducer(userSessionInitialState);
