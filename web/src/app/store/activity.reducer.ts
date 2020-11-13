
import { ActivityReducers } from './ApplicationState';
import { EntityActivityReducer } from './EntityActivityReducer';


export const entityActivities = {
    project: new EntityActivityReducer('project'),
    issue: new EntityActivityReducer('issue'),
    user: new EntityActivityReducer('user'),
    message: new EntityActivityReducer('message'),
};


export const reducers: ActivityReducers = {
    project: entityActivities.project.getReducer(),
    issue: entityActivities.issue.getReducer(),
    user: entityActivities.user.getReducer(),
    message: entityActivities.message.getReducer()
};

