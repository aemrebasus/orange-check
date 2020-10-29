import { Component, OnDestroy, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ApplicationRoutes } from '@components/navigation';
import { Router } from '@angular/router';


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

  public navigation = NAVIGATION;
  public currentLocation = '';

  private routerSubscription: Subscription;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, public router: Router) { }

  private updateLocations(): void {
    this.currentLocation = this.router.url.split('/').pop().toUpperCase().replace(/-/g, ' ');
  }

  ngOnInit(): void {
    this.updateLocations();

    this.routerSubscription = this.router.events.subscribe(event => {
      this.updateLocations();
    });
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }



}
