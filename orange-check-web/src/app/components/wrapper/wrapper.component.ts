import { Component, Input } from '@angular/core';
import { Wrapper } from './wrapper.class';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent {
  @Input() loading = true;
  @Input() input: Wrapper;
}
