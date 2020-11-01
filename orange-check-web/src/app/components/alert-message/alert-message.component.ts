import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-message',
  templateUrl: './alert-message.component.html',
  styleUrls: ['./alert-message.component.scss']
})
export class AlertMessageComponent {
  @Input() message = 'Message';
  @Input() success: boolean;
  @Input() warning: boolean;
  @Input() info: boolean;
}
