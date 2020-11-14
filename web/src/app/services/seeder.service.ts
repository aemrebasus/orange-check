import { Injectable } from '@angular/core';
import { IMessage, IProject, Issue, IUser } from '@models';
import { IssueService, MessageService, ProjectService, UserService } from './entities.data.service';



const projects: IProject[] = [
    { id: 1, name: 'project 1', description: 'Project 1 descriptiopn', created_at: null, updated_at: null },
    { id: 2, name: 'project 2', description: 'Project 2 descriptiopn', created_at: null, updated_at: null },
    { id: 3, name: 'project 3', description: 'Project 3 descriptiopn', created_at: null, updated_at: null },
];

const issues: Issue[] = [
    { id: 1, title: 'Issue  1 title', status: 'inprogress' },
    { id: 2, title: 'Issue  2 title', status: 'inprogress' },
    { id: 3, title: 'Issue  3 title', status: 'inprogress' },
];

const users: IUser[] = [
    { id: 1, email: 'user1@gmail.com' },
    { id: 2, email: 'user2@gmail.com' },
    { id: 3, email: 'user3@gmail.com' },
];

const messages: IMessage[] = [
    { id: 1, subject: 'subject 1' },
    { id: 2, subject: 'subject 2' },
    { id: 3, subject: 'subject 3' },
]

@Injectable({
    providedIn: 'root'
})
export class SeederService {

    constructor(private ps: ProjectService, private is: IssueService, private us: UserService, private ms: MessageService) {
        this.ps.upsertManyInCache(projects);
        this.is.upsertManyInCache(issues);
        this.us.upsertManyInCache(users);
        this.ms.upsertManyInCache(messages);
    }

}

