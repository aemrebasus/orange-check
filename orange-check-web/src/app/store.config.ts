import { EntityMetadataMap, EntityDataModuleConfig, DefaultDataServiceConfig } from '@ngrx/data';
import { environment } from 'src/environments/environment';
import { IMessage, Issue, IUser, IProject } from '@models/index';
import { API_BASE_ROUTE } from './contants';

// Use the Browser's session storage to store the application state.
export interface AppState {
  selectedMessage: IMessage;
  selectedIssue: Issue;
  selectedUser: IUser;
  selectedProject: IProject;
  isLoggedIn: boolean;
  loggedInUser: IUser;
}



const entityMetadata: EntityMetadataMap = {
  Project: {},
  Issue: {},
  Message: {},
  Comment: {},
  User: {}
};

// custom plural name configuration.
const pluralNames = {};

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames
};

// Default Configuration
export const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: API_BASE_ROUTE,
  timeout: 3000,
  getDelay: 1000,
};


