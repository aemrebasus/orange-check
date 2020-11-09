import { Injectable } from '@angular/core';
import { IComment, IMessage, IUser, Issue, IProject } from '@models/index';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';




// @Injectable({
//     providedIn: 'root'
// })
// export class ProjectService extends EntityCollectionServiceBase<IProject> {
//     constructor(servcieElementsFactory: EntityCollectionServiceElementsFactory) {
//         super('Project', servcieElementsFactory);
//     }
// }


@Injectable({
    providedIn: 'root'
})
export class CommentService extends EntityCollectionServiceBase<IComment> {
    constructor(servcieElementsFactory: EntityCollectionServiceElementsFactory) {
        super('Comment', servcieElementsFactory);
    }
}

@Injectable({
    providedIn: 'root'
})
export class MessageService extends EntityCollectionServiceBase<IMessage> {
    constructor(servcieElementsFactory: EntityCollectionServiceElementsFactory) {
        super('Message', servcieElementsFactory);
    }
}

@Injectable({
    providedIn: 'root'
})
export class IssueService extends EntityCollectionServiceBase<Issue> {
    constructor(servcieElementsFactory: EntityCollectionServiceElementsFactory) {
        super('Issue', servcieElementsFactory);
    }
}

@Injectable({
    providedIn: 'root'
})
export class UserService extends EntityCollectionServiceBase<IUser> {
    constructor(servcieElementsFactory: EntityCollectionServiceElementsFactory) {
        super('User', servcieElementsFactory);
    }
}


