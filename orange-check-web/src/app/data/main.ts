import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';

import { UserSession, userSessionReducer } from './userSessionReducer';

export interface State {
  session: UserSession;
}

export const reducers: ActionReducerMap<State> = {
  session: userSessionReducer
};



export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
