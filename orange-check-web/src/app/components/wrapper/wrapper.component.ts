import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Wrapper } from './wrapper.class';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit, OnDestroy {

  loadingAnimation = true;
  loading = true;

  @Input() input: Wrapper;

  constructor() { }

  ngOnInit(): void {
    this.activateLoadingAnimation();
  }

  ngOnDestroy(): void {
    // TODO:
  }


  activateLoadingAnimation(): void {
    if (this.loadingAnimation) {
      const interval = setInterval(() => {
        if (this.input) {
          this.loading = false;
          clearInterval(interval);
          return;
        }
      }, 1000);
    }
  }

}
