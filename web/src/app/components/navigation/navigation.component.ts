import { Component, OnDestroy, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ApplicationRoutes } from '@components/navigation';
import { Router } from '@angular/router';
import { ProjectDataService } from '@services/entities.data.service';
import { WrapperComponent } from '@components/wrapper/wrapper.component';

const NAVIGATION: ApplicationRoutes = [
  { path: 'dashboard', icon: 'dashboard', component: WrapperComponent, },
  { path: 'projects', icon: 'menu_book', component: WrapperComponent, },
  { path: 'issues', icon: 'view_list', component: WrapperComponent, },
  { path: 'users', icon: 'people', component: WrapperComponent, },
  { path: 'messages', icon: 'message', component: WrapperComponent, }
];

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, OnDestroy {

  navigation = NAVIGATION;
  currentLocation = '';
  currentProjectName = 'Project Name';

  routerEventSubs: Subscription;
  projectNameSubs: Subscription;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, public router: Router, public dataService: ProjectDataService) { }

  updateLocations(): void {
    this.currentLocation = this.router.url.split('/').pop().toUpperCase().replace(/-/g, ' ');
  }

  ngOnInit(): void {

    this.updateLocations();

    this.routerEventSubs = this.router.events.subscribe(event => {
      this.updateLocations();
    });
  }

  ngOnDestroy(): void {
    this.routerEventSubs.unsubscribe();
    this.projectNameSubs.unsubscribe();
  }



}
