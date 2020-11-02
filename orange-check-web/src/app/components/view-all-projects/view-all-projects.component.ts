import { Component, OnDestroy, OnInit } from '@angular/core';
import { IProject } from 'src/app/models';

import { Observable, } from 'rxjs';
import { ToolbarBuilder, Wrapper } from '@components/wrapper/wrapper.class';
import { IconType } from 'ng-icon-type';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProjectService } from '@services/project.service';


@Component({
  selector: 'app-view-all-projects',
  templateUrl: './view-all-projects.component.html',
  styleUrls: ['./view-all-projects.component.scss']
})
export class ViewAllProjectsComponent implements OnInit, OnDestroy {

  // Data
  projects: IProject[];

  // Selecteds
  selectedProjects: number[] = [];
  selectedProjectCount = 0;
  projectCount = 0;

  // Conditions
  loading = false;
  isFormActive = false;

  // Subscriptions
  selectedProjectSubs;
  loadingSubs;
  projectsSubs;

  // Toolbar
  wrapper: Wrapper = {
    toolbar: new ToolbarBuilder()
      .newItem(1).icon('done_all').tooltip('Select All')
      .action(() => { this.setTollbarIconById(1, this.projectService.selectAll() ? 'close' : 'done_all'); })
      .newItem(2).icon('add').tooltip('Add New Project')
      .action(() => this.openForm())
      .newItem(3).icon('delete').tooltip('Delete Selected Projects')
      .action(() => this.projectService.deleteSelectedProjects())
      .newItem(4).icon('check_box_outline_blank').tooltip('Multi Select')
      .action(() => { this.setTollbarIconById(4, this.projectService.activateMultiSelect() ? 'check_box' : 'check_box_outline_blank'); })
      .newItem(5).icon('open_in_new').tooltip('Open Project')
      .disabled()
      .action(() => { this.openCurrentProject(); })
      .getToolbar()
  };

  constructor(public projectService: ProjectService, private snackBar: MatSnackBar) {

  }

  ngOnInit(): void {

    // Subscribing data
    this.projectsSubs = this.projectService.entities$.subscribe(projects => {
      this.projects = projects;
      this.projectCount = projects.length;
    });

    this.selectedProjectSubs = this.projectService.selectedProjects().subscribe(s => {
      this.selectedProjects = s;
      this.selectedProjectCount = s.length;
    });

    this.loadingSubs = this.projectService.loading$.subscribe(l => {
      this.loading = l;
    });

  }

  ngOnDestroy(): void {
    this.projectsSubs.unsubscribe();
    this.selectedProjectSubs.unsubscribe();
    this.loadingSubs.unsubscribe();
  }

  selectOneProject(id: number): void {
    this.projectService.selectOne(id);
    this.setToolbarDisabledById(5, !this.projectService.canIOpenAnyProject());
  }

  // Form Related
  openForm(): void { this.isFormActive = true; }

  closeForm(): void { this.isFormActive = false; }

  afterFormSubmitted(form: IProject): void { this.snackMessage(`${form} is submitted`); }

  openCurrentProject(): void {

  }

  // Alert/popup
  snackMessage(msg: string, duration = 2000): void {
    this.snackBar.open(msg, null, { duration, horizontalPosition: 'center', verticalPosition: 'top' });
  }

  // Toolbar Utils
  setTollbarIconById(id: number, icon: IconType): void {
    this.wrapper.toolbar.find(e => e.id === id).icon = icon;
  }

  setToolbarDisabledById(id: number, disabled: boolean): void {
    this.wrapper.toolbar.find(e => e.id === id).disabled = disabled;
  }

}
