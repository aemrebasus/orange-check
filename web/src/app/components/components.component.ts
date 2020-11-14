import { Component } from '@angular/core';
import { AeRoute } from 'ae-layout';
import { LogoComponent } from './logo/logo.component';


@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent {

  logo = LogoComponent;

  routes: AeRoute[] = [
    { path: 'users' },
    { path: 'projects' },
    { path: 'issues' },
    { path: 'messages' }
  ];

  title = 'Orange Check';

  constructor() { }
}
