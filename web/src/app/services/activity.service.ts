import { Store } from '@ngrx/store';
import { ApplicationState, EntityActivityReducer } from '@store/EntityActionHandlers';

export abstract class ActivityService {

    constructor(private activities: EntityActivityReducer, private store: Store<ApplicationState>) { }

    selectOne(id: number): void {
        const s: any = {};
        this.store.dispatch(this.activities.selectOne(id));
    }


}

