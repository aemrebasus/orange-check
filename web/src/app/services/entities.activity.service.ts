import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApplicationState } from '@store/ApplicationState';
import { EntityActionHandlers } from '@store/EntityActionHandlers';


@Injectable({
    providedIn: 'root'
})
export class ProjectActivityService extends EntityActionHandlers {
    constructor(store: Store<ApplicationState>) {
        super('project', store);
    }
}

@Injectable({
    providedIn: 'root'
})
export class CommentActivityService extends EntityActionHandlers {
    constructor(store: Store<ApplicationState>) {
        super('Comment', store);
    }
}

@Injectable({
    providedIn: 'root'
})
export class MessageActivityService extends EntityActionHandlers {
    constructor(store: Store<ApplicationState>) {
        super('Message', store);
    }
}

@Injectable({
    providedIn: 'root'
})
export class IssueActivityService extends EntityActionHandlers {
    constructor(store: Store<ApplicationState>) {
        super('Issue', store);
    }
}

@Injectable({
    providedIn: 'root'
})
export class UserActivityService extends EntityActionHandlers {
    constructor(store: Store<ApplicationState>) {
        super('User', store);
    }
}



