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

        if (this.getStateFromLocalStorage()) {
            this.loadFromLocalStorage();
            this.setTableConfig(this.getStateFromLocalStorage().tableConfig);
        } else {
            this.setTableConfig({
                ...DEFAULT_DYNAMICTABLE_CONFIG,
                displayedColumns: ['id', 'name', 'description', 'created_at', 'updated_at'],
                filteredColumns: ['id', 'name', 'description', 'created_at', 'updated_at'],
            });
            this.storeToLocalStorage();
        }

        this.store.subscribe(___ => {
            this.storeToLocalStorage();
        });
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
        if (this.getStateFromLocalStorage()) {
            this.loadFromLocalStorage();
            this.setTableConfig(this.getStateFromLocalStorage().tableConfig);
        } else {
            this.setTableConfig({
                ...DEFAULT_DYNAMICTABLE_CONFIG,
                displayedColumns: ['id', 'subject', 'body', 'to', 'created_at', 'updated_at'],
                filteredColumns: ['id', 'subject', 'body', 'to', 'created_at', 'updated_at'],
            });
            this.storeToLocalStorage();
        }

        this.store.subscribe(___ => {
            this.storeToLocalStorage();
        });
    }
}

@Injectable({
    providedIn: 'root'
})
export class IssueActivityService extends EntityActionHandlers {
    constructor(store: Store<ApplicationState>) {

        super('issue', store);
        if (this.getStateFromLocalStorage()) {
            this.loadFromLocalStorage();
            this.setTableConfig(this.getStateFromLocalStorage().tableConfig);
        } else {
            this.setTableConfig({
                ...DEFAULT_DYNAMICTABLE_CONFIG,
                displayedColumns: ['id', 'title', 'description', 'due', 'assignee', 'status', 'created_at', 'updated_at'],
                filteredColumns: ['id', 'title', 'description', 'due', 'assignee', 'status', 'created_at', 'updated_at'],
            });
            this.storeToLocalStorage();
        }

        this.store.subscribe(___ => {
            this.storeToLocalStorage();
        });

    }
}

@Injectable({
    providedIn: 'root'
})
export class UserActivityService extends EntityActionHandlers {
    constructor(store: Store<ApplicationState>) {
        super('user', store);
        if (this.getStateFromLocalStorage()) {
            this.loadFromLocalStorage();
            this.setTableConfig(this.getStateFromLocalStorage().tableConfig);
        } else {
            this.setTableConfig({
                ...DEFAULT_DYNAMICTABLE_CONFIG,
                displayedColumns: ['id', 'firstName', 'lastName', 'email', 'role', 'created_at', 'updated_at'],
                filteredColumns: ['id', 'firstName', 'lastName', 'email', 'role', 'created_at', 'updated_at']
            });
            this.storeToLocalStorage();
        }

        this.store.subscribe(___ => {
            this.storeToLocalStorage();
        });
    }
}



