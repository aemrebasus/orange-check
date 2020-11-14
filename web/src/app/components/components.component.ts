import { animate, animateChild, query, style, transition, trigger, group, } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AeRoute } from 'ae-layout';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogoComponent } from './logo/logo.component';


@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent {

  logo = LogoComponent;

  routes: AeRoute[] = [
    { path: 'users', component: DashboardComponent, icon: '360' },
  ];

  title = 'Orange Check';



  constructor() { }
}
