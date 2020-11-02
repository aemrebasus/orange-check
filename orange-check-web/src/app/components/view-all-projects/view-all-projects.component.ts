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
      .newItem(1)('select_all')('Select All')(() => this.projectService.selectAll())
      .newItem(2)('add')('Add New Project')(() => this.openForm())
      .newItem(3)('delete')('Delete Selected Projects')(() => this.projectService.deleteSelectedProjects())
      .newItem(4)('check_box_outline_blank')('Multi Select')(() => {
        this.projectService.activateMultiSelect().toPromise().then(isMultiSelect => {
          this.setTollbarIconById(4, isMultiSelect ? 'check_box' : 'check_box_outline_blank');
        });
      }).getToolbar()
  };

  constructor(public projectService: ProjectService, private snackBar: MatSnackBar) {

  }

  ngOnInit(): void {

    // Subscribing data
    this.projectsSubs = this.projectService.getAll().subscribe(projects => {
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
  }

  // Form Related
  openForm(): void { this.isFormActive = true; }

  closeForm(): void { this.isFormActive = false; }

  afterFormSubmitted(form: IProject): void { this.snackMessage(`${form} is submitted`); }

  openCurrentProject(): void {    /* TODO **/ }

  // Alert/popup
  snackMessage(msg: string, duration = 2000): void {
    this.snackBar.open(msg, null, { duration, horizontalPosition: 'center', verticalPosition: 'top' });
  }

  // Toolbar Utils
  setTollbarIconById(id: number, icon: IconType): void {
    this.wrapper.toolbar.find(e => e.id === id).icon = icon;
  }

}
