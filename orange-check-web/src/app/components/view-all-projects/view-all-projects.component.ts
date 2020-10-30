import { AfterViewInit, Component } from '@angular/core';
import { IProject } from 'src/app/models';

import { ProjectService } from '@services/project.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-all-projects',
  templateUrl: './view-all-projects.component.html',
  styleUrls: ['./view-all-projects.component.scss']
})
export class ViewAllProjectsComponent {

  loading: Observable<boolean> = this.projectService.loading$;
  projects: Observable<IProject[]> = this.projectService.entities$;

  constructor(public projectService: ProjectService) {
    this.projectService.getAll();
  }

}
