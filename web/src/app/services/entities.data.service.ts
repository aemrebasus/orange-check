import { Injectable } from '@angular/core';
import { IComment, IMessage, IUser, Issue, IProject } from '@models/index';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';





@Injectable({
    providedIn: 'root'
})
export class ProjectDataService extends EntityCollectionServiceBase<IProject> {
    constructor(serviceElementFactory: EntityCollectionServiceElementsFactory) {
        super('Project', serviceElementFactory);
        this.getAll();
    }
}

@Injectable({
    providedIn: 'root'
})
export class CommentDataService extends EntityCollectionServiceBase<IComment> {
    constructor(serviceElementFactory: EntityCollectionServiceElementsFactory) {
        super('Comment', serviceElementFactory);
        this.getAll();
    }
  
}

@Injectable({
    providedIn: 'root'
})
export class MessageDataService extends EntityCollectionServiceBase<IMessage> {
    constructor(serviceElementFactory: EntityCollectionServiceElementsFactory) {
        super('Message', serviceElementFactory);
        this.getAll();
    }
}

@Injectable({
    providedIn: 'root'
})
export class IssueDataService extends EntityCollectionServiceBase<Issue> {
    constructor(serviceElementFactory: EntityCollectionServiceElementsFactory) {
        super('Issue', serviceElementFactory);
        this.getAll();
    }
}

@Injectable({
    providedIn: 'root'
})
export class UserDataService extends EntityCollectionServiceBase<IUser> {
    constructor(serviceElementFactory: EntityCollectionServiceElementsFactory) {
        super('User', serviceElementFactory);
        this.getAll();
    }
}


