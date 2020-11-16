import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AeRoute } from 'ae-layout';
import { Subscription } from 'rxjs';
import { LogoComponent } from './logo/logo.component';


@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ComponentsComponent implements OnInit, OnDestroy {

  logo = LogoComponent;

  routes: AeRoute[] = [

    { path: 'users' },
    { path: 'projects' },
    { path: 'issues' },
    { path: 'messages' }
  ];

  title = 'Orange Check';

  routerSubscription: Subscription;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  attachViewParam(view: string): void {
    this.router.navigate([], { queryParams: { view } });
  }

  ngOnDestroy(): void {
  }

}
