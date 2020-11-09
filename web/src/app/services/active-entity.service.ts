import { Injectable } from '@angular/core';
import { EntityType } from '@models';


/**
 * Responsive for setting the current active data set/entity.
 * Some other service will use this service and execute operation based on the activated entity.
 */


@Injectable({
    providedIn: 'root'
})
export class ActiveEntityService {
    private activeEntity: EntityType;

    public activateEntity(entityType: EntityType): void {
        this.activeEntity = entityType;
    }
}
