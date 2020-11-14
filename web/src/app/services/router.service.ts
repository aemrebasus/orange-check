import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { TableComponent } from '@components/table/table.component';
import { CardsComponent } from '@components/cards/cards.component';

import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RouterService {

    component: Subject<any> = new Subject();

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) { }

    setView(view: string): void {
        this.appendParam({ view });

        if (view === 'table') {
            this.component.next(TableComponent);
        } else if (view === 'card') {
            this.component.next(CardsComponent);
        } else {
            this.component.next(TableComponent);
        }
    }

    setMultiselect(multiselect: boolean): void {
        this.appendParam({ multiselect });
    }

    appendParam(param: { [key: string]: any }): void {
        this.router.navigate([], { queryParams: { ...this.activatedRoute.snapshot.queryParams, ...param } });
    }
}

