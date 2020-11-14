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
    private router: Router,
    private projectActivityService: ProjectActivityService,
    private issueActivityService: IssueActivityService,
    private messageActivityService: MessageActivityService,
    private userActivityService: UserActivityService,
  ) { }

  ngOnInit(): void {

    this.routerSubscription = this.router.events.subscribe(e => {

      if (e instanceof NavigationEnd) {
        const curl = e.url;

        switch (curl) {
          case '/projects':
            this.attachViewParam(this.projectActivityService.getViewSnapshot());
            return;

          case '/issues':
            this.attachViewParam(this.issueActivityService.getViewSnapshot());
            return;

          case '/messages':
            this.attachViewParam(this.messageActivityService.getViewSnapshot());
            return;

          case '/users':
            this.attachViewParam(this.userActivityService.getViewSnapshot());
            return;

        }
      }

    });


  }

  attachViewParam(view: string): void {
    this.router.navigate([], { queryParams: { view } });
  }

  ngOnDestroy(): void {



  }



}
