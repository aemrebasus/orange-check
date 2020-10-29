import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit, OnDestroy {
  author: string;
  subscription: Subscription;
  constructor(public store: Store<{ application: { name: string } }>) { }

  ngOnInit(): void {
    this.subscription = this.store.subscribe(data => {
      console.log(data);
      this.author = data.application.name;
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
