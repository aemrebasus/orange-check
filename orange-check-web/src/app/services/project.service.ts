import { Injectable } from '@angular/core';
import { IProject } from '@models/index';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';

@Injectable({
    providedIn: 'root'
})
export class ProjectService extends EntityCollectionServiceBase<IProject> {

    constructor(servcieElementsFactory: EntityCollectionServiceElementsFactory) {
        super('Project', servcieElementsFactory);

    }
}

