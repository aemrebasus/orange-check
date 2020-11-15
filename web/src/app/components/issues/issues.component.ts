import { Component } from '@angular/core';
import { IssueActivityService } from '@services/entities.activity.service';
import { IssueDataService } from '@services/entities.data.service';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
})
export class IssuesComponent {
  constructor(public dataService: IssueDataService, public activityService: IssueActivityService) { }
}
