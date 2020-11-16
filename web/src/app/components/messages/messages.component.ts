import { Component } from '@angular/core';
import { MessageActivityService } from '@services/entities.activity.service';
import { MessageDataService } from '@services/entities.data.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
})
export class MessagesComponent {
  constructor(public dataService: MessageDataService, public activityService: MessageActivityService) { }
}
