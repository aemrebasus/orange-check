import { AfterViewInit } from '@angular/core';
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
export class ComponentsComponent implements OnInit, OnDestroy, AfterViewInit {

  logo = LogoComponent;

  routes: AeRoute[] = [

    { path: 'users' },
    { path: 'projects' },
    { path: 'issues' },
    { path: 'messages' }
  ];

  title = 'Orange Check';

  routerSubscription: Subscription;

  constructor(private router: Router) {
    if (window.localStorage.getItem('loading') === 'true') {
      window.localStorage.setItem('loading', '');
    } else {
      window.localStorage.setItem('loading', 'true');
      location.reload();
    }
  }


  ngAfterViewInit(): void {

  }

  ngOnInit(): void {

  }

  attachViewParam(view: string): void {
    this.router.navigate([], { queryParams: { view } });
  }

  ngOnDestroy(): void {
  }

}
