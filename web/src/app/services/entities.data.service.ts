import { Injectable } from '@angular/core';
import { IComment, IMessage, IUser, Issue, IProject } from '@models/index';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';


@Injectable({
    providedIn: 'root'
})
export class ProjectService extends EntityCollectionServiceBase<IProject> {
    constructor(serviceElementFactory: EntityCollectionServiceElementsFactory) {
        super('Project', serviceElementFactory);
    }
}

@Injectable({
    providedIn: 'root'
})
export class CommentService extends EntityCollectionServiceBase<IComment> {
    constructor(serviceElementFactory: EntityCollectionServiceElementsFactory) {
        super('Comment', serviceElementFactory);
    }
}

@Injectable({
    providedIn: 'root'
})
export class MessageService extends EntityCollectionServiceBase<IMessage> {
    constructor(serviceElementFactory: EntityCollectionServiceElementsFactory) {
        super('Message', serviceElementFactory);
    }
}

@Injectable({
    providedIn: 'root'
})
export class IssueService extends EntityCollectionServiceBase<Issue> {
    constructor(serviceElementFactory: EntityCollectionServiceElementsFactory) {
        super('Issue', serviceElementFactory);
    }
}

@Injectable({
    providedIn: 'root'
})
export class UserService extends EntityCollectionServiceBase<IUser> {
    constructor(serviceElementFactory: EntityCollectionServiceElementsFactory) {
        super('User', serviceElementFactory);
    }
}


