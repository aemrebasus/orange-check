import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Wrapper } from './wrapper.class';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit, OnDestroy {

  loadingAnimation = true;
  @Input() loading = true;

  @Input() input: Wrapper;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    // TODO:
  }

}
