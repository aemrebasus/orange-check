import { Component } from '@angular/core';
import { ProjectActivityService } from '@services/entities.activity.service';
import { ProjectDataService } from '@services/entities.data.service';

@Component({
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {
  constructor(
    public dataService: ProjectDataService,
    public activityService: ProjectActivityService
  ) { }
}
