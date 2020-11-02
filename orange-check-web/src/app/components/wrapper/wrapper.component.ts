import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Wrapper } from './wrapper.class';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit, OnDestroy {

  storeSubscription: Subscription;
  loadingAnimation = true;

  @Input() loading = true;
  @Input() input: Wrapper;

  constructor(public store: Store) {  }

  ngOnInit(): void {
    this.storeSubscription = this.store.subscribe(data => {
      console.log(data);
    });
  }

  ngOnDestroy(): void {
    this.storeSubscription.unsubscribe();
  }

}
