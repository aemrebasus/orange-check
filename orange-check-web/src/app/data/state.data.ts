import { createReducer } from '@ngrx/store';
import { IComment } from './IComment';
import { IMessage } from './IMessage';
import { IOrganization } from './IOrganization';
import { IProject } from './IProject';
import { Issue } from './Issue';
import { IUser } from './IUser';
import { projects, users, issues, comments, messages } from './state.mock-data';

export interface DataState {
    openedMessage: IMessage;
    openedIssue: Issue;
    openedUser: IUser;
    openedProject: IProject;
    projects: IProject[];
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
    openedProject: null,
    projects,
    users,
    messages,
    issues,
    comments

};

export const reducer = createReducer(initialState);
