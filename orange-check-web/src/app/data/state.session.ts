import { createReducer } from '@ngrx/store';
import { IUser } from './IUser';

export interface UserSession {
    isLoggedIn: boolean;
    user: IUser;
}

const initialState: UserSession = {
    isLoggedIn: true,
    user: {
        id: 100000,
        createdAt: '10/29/2020',
        email: 'aemrebasus@gmail.com',
        firstName: 'Ahmet',
        lastName: 'Emre',
        role: 'admin',
    }
};

export const reducer = createReducer(initialState);
