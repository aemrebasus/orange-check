import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Wrapper } from './wrapper.class';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit, OnDestroy, AfterViewInit {

  @Input() loading = false;

  @Input() input: Wrapper = {
    toolbar: [
      { icon: 'select_all', action: () => { } },
      { icon: 'add' },
      { icon: 'delete' },
    ]
  };

  @Input() component = null;

  constructor() { }

  ngOnInit(): void {
    console.log('Life cycle methods...');
  }
  ngOnDestroy(): void {
    console.log('Life cycle methods...');
  }
  ngAfterViewInit(): void {
    console.log('Life cycle methods...');
  }


}
