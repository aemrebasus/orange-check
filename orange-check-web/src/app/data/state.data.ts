import { createReducer } from '@ngrx/store';
import { IComment } from './IComment';
import { IMessage } from './IMessage';
import { IOrganization } from './IOrganization';
import { Issue } from './Issue';
import { IUser } from './IUser';


export interface DataState {
    openedMessage: IMessage;
    openedIssue: Issue;
    openedUser: IUser;
    users: IUser[];
    messages: IMessage[];
    issues: Issue[];
    comments: IComment[];
    organization: IOrganization;
}

const initialState: DataState = {
    openedMessage: null,
    openedIssue: null,
    openedUser: null,
    organization: null,
    users: [],
    messages: [],
    issues: [],
    comments: [],

};

export const reducer = createReducer(initialState);
