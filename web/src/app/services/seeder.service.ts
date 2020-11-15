import { Injectable } from '@angular/core';
import { IMessage, IProject, Issue, IUser } from '@models';
import { IssueDataService, MessageDataService, ProjectDataService, UserDataService } from './entities.data.service';
import { name, date, lorem, address, company, internet } from 'faker';

function guid(): number {
    return Math.floor(Math.random() * 100000 + 10000);
}

function getProject(): IProject {
    return {
        id: guid(),
        name: name.jobArea(),
        description: lorem.sentence(25),
        created_at: date.future(2020).toDateString()
    };
}

function getIssue(): Issue {
    return {
        id: guid(),
        title: name.jobArea(),
        description: lorem.sentence(25),
        status: 'new',
        assignee: guid(),
        due: date.future(2020).toDateString(),
        created_at: date.future(2020).toDateString()
    };
}


function getMessage(): IMessage {
    return {
        id: guid(),
        body: lorem.paragraph(1),
        to: guid(),
        subject: lorem.words(4),
        created_at: date.future(2020).toDateString()
    };
}


function getUser(): IUser {
    return {
        id: guid(),
        firstName: name.firstName(1),
        lastName: name.lastName(),
        email: internet.email(),
        role: name.jobTitle(),
        created_at: date.future(2020).toDateString()
    };
}


function generateMessage(count: number = 20): IMessage[] {
    return new Array(count).fill({}).map(e => getMessage());
}
function generateIssue(count: number = 20): Issue[] {
    return new Array(count).fill({}).map(e => getIssue());
}
function generateUser(count: number = 20): IUser[] {
    return new Array(count).fill({}).map(e => getUser());
}
function generateProject(count: number = 20): IProject[] {
    return new Array(count).fill({}).map(e => getProject());
}


@Injectable({
    providedIn: 'root'
})
export class SeederService {

    constructor(private ps: ProjectDataService, private is: IssueDataService, private us: UserDataService, private ms: MessageDataService) {
        this.ps.upsertManyInCache(generateIssue(1000));
        this.is.upsertManyInCache(generateIssue(1000));
        this.us.upsertManyInCache(generateUser(1000));
        this.ms.upsertManyInCache(generateMessage(1000));
    }

}

