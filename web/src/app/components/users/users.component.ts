import { Component } from '@angular/core';
import { UserActivityService } from '@services/entities.activity.service';
import { UserDataService } from '@services/entities.data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
})
export class UsersComponent {

  constructor(public dataService: UserDataService, public activityService: UserActivityService) { }

}
