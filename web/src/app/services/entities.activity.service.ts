import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApplicationState } from '@store/ApplicationState';
import { EntityActionHandlers } from '@store/EntityActionHandlers';
import { DEFAULT_DYNAMICTABLE_CONFIG } from 'ae-dynamic-table';


@Injectable({
    providedIn: 'root'
})
export class ProjectActivityService extends EntityActionHandlers {
    constructor(store: Store<ApplicationState>) {
        super('project', store);
        this.setTableConfig(
            {
                ...DEFAULT_DYNAMICTABLE_CONFIG,
                displayedColumns: ['id', 'name', 'description', 'created_at', 'updated_at'],
                filteredColumns: ['id', 'name', 'description', 'created_at', 'updated_at'],
            }
        );
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
        super('message', store);
        this.setTableConfig(
            {
                ...DEFAULT_DYNAMICTABLE_CONFIG,
                displayedColumns: ['id', 'subject', 'body', 'to', 'created_at', 'updated_at'],
                filteredColumns: ['id', 'subject', 'body', 'to', 'created_at', 'updated_at'],
            }
        );
    }
}

@Injectable({
    providedIn: 'root'
})
export class IssueActivityService extends EntityActionHandlers {
    constructor(store: Store<ApplicationState>) {
        super('issue', store);
        this.setTableConfig(
            {
                ...DEFAULT_DYNAMICTABLE_CONFIG,
                displayedColumns: ['id', 'title', 'description', 'due', 'assignee', 'status', 'created_at', 'updated_at'],
                filteredColumns: ['id', 'title', 'description', 'due', 'assignee', 'status', 'created_at', 'updated_at'],
            }
        );
    }
}

@Injectable({
    providedIn: 'root'
})
export class UserActivityService extends EntityActionHandlers {
    constructor(store: Store<ApplicationState>) {
        super('user', store);
        this.setTableConfig(
            {
                ...DEFAULT_DYNAMICTABLE_CONFIG,
                displayedColumns: ['id', 'fistName', 'lastName', 'email', 'role', 'created_at', 'updated_at'],
                filteredColumns: ['id', 'fistName', 'lastName', 'email', 'role', 'created_at', 'updated_at']
            }
        );
    }
}



