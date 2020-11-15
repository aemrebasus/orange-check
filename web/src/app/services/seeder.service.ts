import { Injectable } from '@angular/core';
import { IMessage, IProject, Issue, IUser } from '@models';
import { IssueDataService, MessageDataService, ProjectDataService, UserDataService } from './entities.data.service';

// tslint:disable: max-line-length

const projects: IProject[] = [
    { id: 900000000, name: 'project 1', description: 'Project 1 descriptiopn', created_at: new Date('10/10/2020').toLocaleDateString(), updated_at: new Date('15/12/2020').toLocaleTimeString() },
    { id: 900000001, name: 'project 2', description: 'Project 2  descriptiopn', created_at: new Date('10/10/2020').toLocaleDateString(), updated_at: new Date('15/12/2020').toLocaleTimeString() },
    { id: 900000002, name: 'project 3', description: 'Project 3 descriptiopn', created_at: new Date('10/10/2020').toLocaleDateString(), updated_at: new Date('15/12/2020').toLocaleTimeString() },
    { id: 900000003, name: 'project 4', description: 'Project 3 descriptiopn', created_at: new Date('10/10/2020').toLocaleDateString(), updated_at: new Date('15/12/2020').toLocaleTimeString() },
    { id: 900000004, name: 'project 5', description: 'Project 3 descriptiopn', created_at: new Date('10/10/2020').toLocaleDateString(), updated_at: new Date('15/12/2020').toLocaleTimeString() },
    { id: 900000005, name: 'project 6', description: 'Project 3 descriptiopn', created_at: new Date('10/10/2020').toLocaleDateString(), updated_at: new Date('15/12/2020').toLocaleTimeString() },
];

const issues: Issue[] = [
    { id: 900000000, title: 'Issue  1  title', description: 'Description 1 ', status: 'inprogress', due: '10/10/2020', assignee: ' A. Emre', created_at: new Date('10/10/2020').toLocaleDateString(), updated_at: new Date('15/12/2020').toLocaleTimeString() },
    { id: 900000001, title: 'Issue  2  title', description: 'Description 2 ', status: 'inprogress', due: '10/10/2020', assignee: ' B. Emre', created_at: new Date('10/10/2020').toLocaleDateString(), updated_at: new Date('15/12/2020').toLocaleTimeString() },
    { id: 900000002, title: 'Issue  3  title', description: 'Description 3 ', status: 'inprogress', due: '10/10/2020', assignee: ' C. Emre', created_at: new Date('10/10/2020').toLocaleDateString(), updated_at: new Date('15/12/2020').toLocaleTimeString() },
    { id: 900000004, title: 'Issue  4  title', description: 'Description 3 ', status: 'inprogress', due: '10/10/2020', assignee: ' C. Emre', created_at: new Date('10/10/2020').toLocaleDateString(), updated_at: new Date('15/12/2020').toLocaleTimeString() },
    { id: 900000005, title: 'Issue  5 title', description: 'Description 3 ', status: 'inprogress', due: '10/10/2020', assignee: ' C. Emre', created_at: new Date('10/10/2020').toLocaleDateString(), updated_at: new Date('15/12/2020').toLocaleTimeString() },
    { id: 900000005, title: 'Issue  6 title', description: 'Description 3 ', status: 'inprogress', due: '10/10/2020', assignee: ' C. Emre', created_at: new Date('10/10/2020').toLocaleDateString(), updated_at: new Date('15/12/2020').toLocaleTimeString() },
    { id: 900000007, title: 'Issue  7 title', description: 'Description 3 ', status: 'inprogress', due: '10/10/2020', assignee: ' C. Emre', created_at: new Date('10/10/2020').toLocaleDateString(), updated_at: new Date('15/12/2020').toLocaleTimeString() },
];

const users: IUser[] = [
    { id: 900000000, firstName: 'F. name 1', role: 'admin', lastName: 'L. name 1', email: 'user30@gmail.com', created_at: new Date('10/10/2020').toLocaleDateString(), updated_at: new Date('15/12/2020').toLocaleTimeString() },
    { id: 900000001, firstName: 'F. name 2', role: 'scrummaster', lastName: 'L. name 2', email: 'user1@gmail.com', created_at: new Date('10/10/2020').toLocaleDateString(), updated_at: new Date('15/12/2020').toLocaleTimeString() },
    { id: 900000002, firstName: 'F. name 3', role: 'developer', lastName: 'L. name 3', email: 'user2@gmail.com', created_at: new Date('10/10/2020').toLocaleDateString(), updated_at: new Date('15/12/2020').toLocaleTimeString() },
    { id: 900000004, firstName: 'F. name 4', role: 'developer', lastName: 'L. name 3', email: 'user2@gmail.com', created_at: new Date('10/10/2020').toLocaleDateString(), updated_at: new Date('15/12/2020').toLocaleTimeString() },
    { id: 900000005, firstName: 'F. name 5', role: 'developer', lastName: 'L. name 3', email: 'user2@gmail.com', created_at: new Date('10/10/2020').toLocaleDateString(), updated_at: new Date('15/12/2020').toLocaleTimeString() },
    { id: 900000006, firstName: 'F. name 6', role: 'developer', lastName: 'L. name 3', email: 'user2@gmail.com', created_at: new Date('10/10/2020').toLocaleDateString(), updated_at: new Date('15/12/2020').toLocaleTimeString() },
];

const messages: IMessage[] = [
    { id: 900000000, body: 'Message Boddy  1', to: 'To someone 1', subject: 'subject 900000000', created_at: new Date('10/10/2020').toLocaleDateString(), updated_at: new Date('15/12/2020').toLocaleTimeString() },
    { id: 900000001, body: 'Message Boddy  2', to: 'To someone 2', subject: 'subject 900000001', created_at: new Date('10/10/2020').toLocaleDateString(), updated_at: new Date('15/12/2020').toLocaleTimeString() },
    { id: 900000002, body: 'Message Boddy  3', to: 'To someone 3', subject: 'subject 900000002', created_at: new Date('10/10/2020').toLocaleDateString(), updated_at: new Date('15/12/2020').toLocaleTimeString() },
    { id: 900000004, body: 'Message Boddy  4', to: 'To someone 3', subject: 'subject 900000002', created_at: new Date('10/10/2020').toLocaleDateString(), updated_at: new Date('15/12/2020').toLocaleTimeString() },
    { id: 900000005, body: 'Message Boddy  5', to: 'To someone 3', subject: 'subject 900000002', created_at: new Date('10/10/2020').toLocaleDateString(), updated_at: new Date('15/12/2020').toLocaleTimeString() },
    { id: 900000006, body: 'Message Boddy  6', to: 'To someone 3', subject: 'subject 900000002', created_at: new Date('10/10/2020').toLocaleDateString(), updated_at: new Date('15/12/2020').toLocaleTimeString() },
];

@Injectable({
    providedIn: 'root'
})
export class SeederService {

    constructor(private ps: ProjectDataService, private is: IssueDataService, private us: UserDataService, private ms: MessageDataService) {
        this.ps.upsertManyInCache(projects);
        this.is.upsertManyInCache(issues);
        this.us.upsertManyInCache(users);
        this.ms.upsertManyInCache(messages);
    }

}

