import { ActivityState } from './activity.state';
import { EntityActivityReducer } from './EntityActivityReducer';


export const entityActivities = {
    project: new EntityActivityReducer('project'),
    issue: new EntityActivityReducer('issue'),
    user: new EntityActivityReducer('user'),
    message: new EntityActivityReducer('message'),
};


export const reducers: ActivityState = {
    project: entityActivities.project.getReducer(),
    issue: entityActivities.issue.getReducer(),
    user: entityActivities.user.getReducer(),
    message: entityActivities.message.getReducer()
}
