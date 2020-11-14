import { Component, OnDestroy, OnInit } from '@angular/core';
import { IProject } from 'src/app/models';

import { Observable, } from 'rxjs';
import { ToolbarBuilder, Wrapper } from '@components/wrapper/wrapper.class';
import { IconType } from 'ng-icon-type';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProjectDataService } from '@services/entities.data.service';
import { ProjectActivityService } from '@services/entities.activity.service';


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
      .action(() => {
        // Select all
      })

      .newItem(2).icon('add').tooltip('Add New Project')
      .action(() => this.openForm())

      .newItem(4).icon('check_box_outline_blank').tooltip('Multi Select')
      .action(() => {
        // this.activityService.setMultiselect(true);
        // this.activityService.setMultiselect(false);
      })

      .newItem(5).icon('open_in_new').tooltip('Open Project')
      .disabled().action(() => { this.openCurrentProject(); })

      .newItem(3).icon('delete').tooltip('Delete Selected Projects')
      .action(() => 'Delete all selected items')
      .getToolbar()
  };

  constructor(public dataService: ProjectDataService, public activityService: ProjectActivityService, private snackBar: MatSnackBar) {

  }

  ngOnInit(): void {

    // Subscribing data
    this.projectsSubs = this.dataService.entities$.subscribe(projects => {
      this.projects = projects;
      this.projectCount = projects.length;
    });

    this.selectedProjectSubs = this.activityService.selected().subscribe(s => {
      this.selectedProjects = s;
      this.selectedProjectCount = s.length;
    });

    this.loadingSubs = this.dataService.loading$.subscribe(l => {
      this.loading = l;
    });

  }

  ngOnDestroy(): void {
    this.projectsSubs.unsubscribe();
    this.selectedProjectSubs.unsubscribe();
    this.loadingSubs.unsubscribe();
  }

  selectOneProject(id: number): void {
    this.activityService.selectOne(id);
    // this.setToolbarDisabledById(5, !this.activityService.canIOpenAnyProject());
  }

  // Form Related
  openForm(): void { this.isFormActive = true; }

  closeForm(): void { this.isFormActive = false; }

  afterFormSubmitted(form: IProject): void { this.snackMessage(`${{ name: form.name, description: form.description }} is submitted`); }

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
