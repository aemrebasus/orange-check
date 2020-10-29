import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit, OnDestroy {
  author = '...';
  subscription: Subscription;
  constructor(public store: Store<{ pages: { name: string } }>) { }

  ngOnInit(): void {
    this.subscription = this.store.subscribe(data => {
      this.author = data.pages.name;
    });
  }

  ngOnDestroy(): void {

  }

}
