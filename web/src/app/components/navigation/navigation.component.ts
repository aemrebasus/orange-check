import { Component, OnDestroy, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ApplicationRoutes } from '@components/navigation';
import { Router } from '@angular/router';
import { ProjectService } from '@services/project.service';

const NAVIGATION: ApplicationRoutes = [
  { label: 'Dashboard', path: 'dashboard', icon: 'dashboard' },
  { label: 'Projects', path: 'view-all-projects', icon: 'menu_book' },
  { label: 'Issues', path: 'view-all-issues', icon: 'view_list' },
  { label: 'Users', path: 'view-all-users', icon: 'people' },
  { label: 'Messages', path: 'view-all-messages', icon: 'message' }
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

  constructor(private breakpointObserver: BreakpointObserver, public router: Router, public projectService: ProjectService) { }

  updateLocations(): void {
    this.currentLocation = this.router.url.split('/').pop().toUpperCase().replace(/-/g, ' ');
  }

  ngOnInit(): void {
    this.projectService.currentProject$.subscribe(prc => {
      this.currentProjectName = prc.name;
    });

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
