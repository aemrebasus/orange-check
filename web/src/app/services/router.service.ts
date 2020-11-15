import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

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

    setMultiselect(multiselect: boolean): void {
        this.appendParam({ multiselect });
    }

    appendParam(param: { [key: string]: any }): void {
        this.router.navigate([], { queryParams: { ...this.activatedRoute.snapshot.queryParams, ...param } });
    }
}

