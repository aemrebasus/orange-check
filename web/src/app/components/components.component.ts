import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {
  IssueActivityService,
  MessageActivityService,
  ProjectActivityService,
  UserActivityService
} from '@services/entities.activity.service';
import { AeRoute } from 'ae-layout';
import { Subscription } from 'rxjs';
import { LogoComponent } from './logo/logo.component';


@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
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
