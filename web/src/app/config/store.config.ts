import { EntityMetadataMap, EntityDataModuleConfig, DefaultDataServiceConfig } from '@ngrx/data';
import { environment } from 'src/environments/environment';
import { API_BASE } from './api.base';

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
  root: API_BASE ,
  timeout: 3000,
  getDelay: 1000,
};


