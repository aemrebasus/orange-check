import { Injectable } from '@angular/core';
import { EntityActionHandlers } from '@store/EntityActionHandlers';


@Injectable({
    providedIn: 'root'
})
export class ProjectActivityService extends EntityActionHandlers {
    constructor() {
        super('Project');
    }
}

@Injectable({
    providedIn: 'root'
})
export class CommentActivityService extends EntityActionHandlers {
    constructor() {
        super('Comment');
    }
}

@Injectable({
    providedIn: 'root'
})
export class MessageActivityService extends EntityActionHandlers {
    constructor() {
        super('Message');
    }
}

@Injectable({
    providedIn: 'root'
})
export class IssueActivityService extends EntityActionHandlers {
    constructor() {
        super('Issue');
    }
}

@Injectable({
    providedIn: 'root'
})
export class UserActivityService extends EntityActionHandlers {
    constructor() {
        super('User');
    }
}



