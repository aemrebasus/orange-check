import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { IProject } from '@models/index';
import { Store } from '@ngrx/store';
import { ApplicationState } from '@services/core/main.reducers';
import { Observable, Subscription } from 'rxjs';
import { APPLICATION_BASE_ROUTE, WEBSITE_BASE_ROUTE } from '@services/core/contants';


/**
 * TODO : In this component, the session of the user will be checked and redirected the user to the corresponding page .
 *
 */

@Component({
  selector: 'app-dispacher',
  templateUrl: './dispacher.component.html',
  styleUrls: ['./dispacher.component.scss']
})
export class DispacherComponent implements OnInit, AfterViewInit, OnDestroy {

  private storeSubscription: Subscription;

  loading = true;
  isLoggedIn = false;
  projects: Observable<IProject[]>;

  constructor(public router: Router, public store: Store<ApplicationState>) { }

  ngOnInit(): void {
    this.storeSubscription = this.store.subscribe(data => {
      // NOTE: do not add any code but ASSIGNMENT inside the subscription
      // because it will run each time the state chages, which causes performance problem
      // this.isLoggedIn = data.isLoggedIn;
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.isLoggedIn ?
        this.router.navigate([APPLICATION_BASE_ROUTE])
        : this.router.navigate([WEBSITE_BASE_ROUTE]);
    }, 10000);
  }

  ngOnDestroy(): void {
    this.storeSubscription.unsubscribe();
  }

}
