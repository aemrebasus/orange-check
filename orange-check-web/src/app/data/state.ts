import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';

import { UserSession, reducer as sessionReducer } from './state.session';
import { DataState, reducer as dataReducer } from './state.data';

export interface State {
  session: UserSession;
  data: DataState;
}

export const reducers: ActionReducerMap<State> = {
  session: sessionReducer,
  data: dataReducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
