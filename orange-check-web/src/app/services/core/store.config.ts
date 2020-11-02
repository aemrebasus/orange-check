import { EntityMetadataMap, EntityDataModuleConfig, DefaultDataServiceConfig } from '@ngrx/data';
import { API_BASE_ROUTE } from './contants';


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


