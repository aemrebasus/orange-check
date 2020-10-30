import { IComment } from './IComment';
import { IMessage } from './IMessage';
import { IOrganization } from './IOrganization';
import { IProject } from './IProject';
import { Issue } from './Issue';
import { IUser } from './IUser';

export const users: IUser[] = [
    { id: 1, firstName: 'A', lastName: 'B', email: 'e1mail@email.com', role: 'admin' },
    { id: 2, firstName: 'B', lastName: 'C', email: 'e2mail@email.com', role: 'developer' },
    { id: 3, firstName: 'C', lastName: 'D', email: 'e3mail@email.com', role: 'scrummaster' },
    { id: 4, firstName: 'D', lastName: 'E', email: 'e4mail@email.com', role: 'developer' },
    { id: 5, firstName: 'E', lastName: 'F', email: 'e5mail@email.com', role: 'developer' },
];

export const messages: IMessage[] = [
    { id: 1, subject: 's1', body: 'b1', from: 'Ahmet Emreas', createdAt: '10/10/2020' },
    { id: 2, subject: 's1', body: 'b1', from: 'Ahmet Emreas', createdAt: '10/10/2020' },
    { id: 3, subject: 's1', body: 'b1', from: 'Ahmet Emreas', createdAt: '10/10/2020' },
    { id: 4, subject: 's1', body: 'b1', from: 'Ahmet Emreas', createdAt: '10/10/2020' },
];

export const comments: IComment[] = [
    { id: 1, text: 'c', from: 'Someone', createdAt: '10/10/2020' },
    { id: 2, text: 'c', from: 'Someone', createdAt: '10/10/2020' },
    { id: 3, text: 'c', from: 'Someone', createdAt: '10/10/2020' },
    { id: 4, text: 'c', from: 'Someone', createdAt: '10/10/2020' },
];

export const issues: Issue[] = [
    { id: 1, title: 'T', description: 'd', due: '10/10/2020', createdAt: '1/10/2020', assignee: 'Ahmet Emre', status: 'new' },
    { id: 2, title: 'T', description: 'd', due: '10/10/2020', createdAt: '1/10/2020', assignee: 'Ahmet Emre', status: 'done' },
    { id: 3, title: 'T', description: 'd', due: '10/10/2020', createdAt: '1/10/2020', assignee: 'Ahmet Emre', status: 'ignored' },
    { id: 4, title: 'T', description: 'd', due: '10/10/2020', createdAt: '1/10/2020', assignee: 'Ahmet Emre', status: 'inprogress' },
];

export const organizations: IOrganization[] = [
    { id: 1, name: 'o' },
    { id: 2, name: 'o' },
    { id: 3, name: 'o' },
    { id: 4, name: 'o' },
];


export const projects: IProject[] = [
    { id: 1, name: 'prj', description: 'Description' },
    { id: 2, name: 'prj', description: 'Description' },
    { id: 3, name: 'prj', description: 'Description' },
    { id: 4, name: 'prj', description: 'Description' },
];






