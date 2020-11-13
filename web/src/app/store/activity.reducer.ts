
import { ActivityState } from './activity.state';
import { EntityActivityReducer } from './create.reducer';




// interface BaseState<T = number> {
//     selected: T[];
//     query: string;
//     current: T;
//     // view: string;
//     // multiselect: boolean;
// }


// const initialState = {
//     selected: [],
//     query: '',
//     current: null
// };

// const selectOneProject = createAction('[Project] Select One Project', props<{ id: number }>());
// const deselectOneProject = createAction('[Project] Deselect One Project', props<{ id: number }>());
// const selectAllProjects = createAction('[Project] Select All Project', props<{ ids: number[] }>());
// const deselectAllProjects = createAction('[Project] Deselect All Project');
// const selectCurrentProject = createAction('[Project] Select Current Project', props<{ id: number }>());
// const filterProjects = createAction('[Project] Filter Projects', props<{ query: string }>());


// const selectOneIssue = createAction('[Issue] Select One Issue', props<{ id: number }>());
// const deselectOneIssue = createAction('[Issue] Deselect One Issue', props<{ id: number }>());
// const selectAllIssues = createAction('[Issue] Select All Issues', props<{ ids: number[] }>());
// const deselectAllIssues = createAction('[Issue] Deselect All Issues');
// const selectCurrentIssue = createAction('[Issue] Select Current Issue', props<{ id: number }>());
// const filterIssues = createAction('[Issue] Filter Issues', props<{ query: string }>());

// const selectOneUser = createAction('[User] Select One User', props<{ id: number }>());
// const deselectOneUser = createAction('[User] Deselect One User', props<{ id: number }>());
// const selectAllUsers = createAction('[User] Select All Users', props<{ ids: number[] }>());
// const deselectAllUsers = createAction('[User] Deselect All Users');
// const selectCurrentUser = createAction('[User] Select Current User', props<{ id: number }>());
// const filterUsers = createAction('[User] Filter Users', props<{ query: string }>());

// const selectOneMessage = createAction('[Message] Select One Message', props<{ id: number }>());
// const deselectOneMessage = createAction('[Message] Deselect One Message', props<{ id: number }>());
// const selectAllMessages = createAction('[Message] Select All Messages', props<{ ids: number[] }>());
// const deselectAllMessages = createAction('[Message] Deselect All Messages');
// const selectCurrentMessage = createAction('[Message] Select Current Message', props<{ id: number }>());
// const filterMessages = createAction('[Message] Filter Messages', props<{ query: string }>());


// const projectSelectReducer = createReducer(
//     initialState,
//     on(selectOneProject, (state, payload) => {
//         if (state.selected.includes(payload.id)) {
//             return state;
//         }
//         return ({ ...state, selected: [...state.selected, payload.id] });
//     }),
//     on(deselectOneProject, (state, payload) => ({ ...state, selected: state.selected.filter(e => e !== payload.id) })),
//     on(selectAllProjects, (state, payload) => ({ ...state, selected: payload.ids })),
//     on(deselectAllProjects, (state) => ({ ...state, selected: [] })),
//     on(selectCurrentProject, (state, payload) => ({ ...state, current: payload.id })),
//     on(filterProjects, (state, payload) => ({ ...state, query: payload.query }))
// );

// const issueSelectReducer = createReducer(
//     initialState,
//     on(selectOneIssue, (state, payload) => {
//         if (state.selected.includes(payload.id)) {
//             return state;
//         }
//         return ({ ...state, selected: [...state.selected, payload.id] });
//     }),
//     on(deselectOneIssue, (state, payload) => ({ ...state, selected: state.selected.filter(e => e !== payload.id) })),
//     on(selectAllIssues, (state, payload) => ({ ...state, selected: payload.ids })),
//     on(deselectAllIssues, (state) => ({ ...state, selected: [] })),
//     on(selectCurrentIssue, (state, payload) => ({ ...state, current: payload.id })),
//     on(filterIssues, (state, payload) => ({ ...state, query: payload.query }))
// );

// const userSelectReducer = createReducer(
//     initialState,
//     on(selectOneUser, (state, payload) => {
//         if (state.selected.includes(payload.id)) {
//             return state;
//         }
//         return ({ ...state, selected: [...state.selected, payload.id] });
//     }),
//     on(deselectOneUser, (state, payload) => ({ ...state, selected: state.selected.filter(e => e !== payload.id) })),
//     on(selectAllUsers, (state, payload) => ({ ...state, selected: payload.ids })),
//     on(deselectAllUsers, (state) => ({ ...state, selected: [] })),
//     on(selectCurrentUser, (state, payload) => ({ ...state, current: payload.id })),
//     on(filterUsers, (state, payload) => ({ ...state, query: payload.query })),
// );

// const messageSelectReducer = createReducer(
//     initialState,
//     on(selectOneMessage, (state, payload) => {
//         if (state.selected.includes(payload.id)) {
//             return state;
//         }
//         return ({ ...state, selected: [...state.selected, payload.id] });
//     }),
//     on(deselectOneMessage, (state, payload) => ({ ...state, selected: state.selected.filter(e => e !== payload.id) })),
//     on(selectAllMessages, (state, payload) => ({ ...state, selected: payload.ids })),
//     on(deselectAllMessages, (state) => ({ ...state, selected: [] })),
//     on(selectCurrentMessage, (state, payload) => ({ ...state, current: payload.id })),
//     on(filterMessages, (state, payload) => ({ ...state, query: payload.query }))
// );

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
};


// export const actions = {
//     project: {
//         selectOneProject,
//         deselectOneProject,
//         selectAllProjects,
//         deselectAllProjects,
//         selectCurrentProject,
//         filterProjects,
//     },
//     issue: {
//         selectOneIssue,
//         deselectOneIssue,
//         selectAllIssues,
//         deselectAllIssues,
//         selectCurrentIssue,
//         filterIssues
//     },
//     user: {
//         selectOneUser,
//         deselectOneUser,
//         selectAllUsers,
//         deselectAllUsers,
//         selectCurrentUser,
//         filterUsers,
//     },
//     message: {
//         selectOneMessage,
//         deselectOneMessage,
//         selectAllMessages,
//         deselectAllMessages,
//         selectCurrentMessage,
//         filterMessages,
//     }
// };
