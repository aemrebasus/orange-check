import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { IProject } from 'src/app/models';

import { Observable, of, Subscription } from 'rxjs';
import { ToolbarBuilder, ToolbarItem, Wrapper } from '@components/wrapper/wrapper.class';
import { IconType } from 'ng-icon-type';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProjectService } from '@services/project.service';
import { ObserveOnMessage } from 'rxjs/internal/operators/observeOn';
import { map } from 'rxjs/operators';


type EventTypes = 'select' | 'select-all' | 'delete' | 'add' | 'open-project';


@Component({
  selector: 'app-view-all-projects',
  templateUrl: './view-all-projects.component.html',
  styleUrls: ['./view-all-projects.component.scss']
})
export class ViewAllProjectsComponent implements OnInit, OnDestroy {


  // Data
  projects: Observable<IProject[]> = this.projectService.entities$;
  selectedProjects: Observable<number[]> = this.projectService.selected$;
  projectCount: Observable<number> = this.projectService.count$;
  selectedProjectCount: Observable<number> = this.projectService.selectedCount$;

  // Conditions
  loading: Observable<boolean> = this.projectService.loading$;
  isFormActive = false;

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

  ngOnInit(): void { }

  ngOnDestroy(): void {
  }


  selectOneProject(id: number): void {
    this.projectService.selectOne(id);
  }

  openForm(): void { this.isFormActive = true; }

  closeForm(): void { this.isFormActive = false; }

  openCurrentProject(): void {    /* TODO **/ }

  afterFormSubmitted(form: IProject): void { this.snackMessage(`${form} is submitted`); }

  snackMessage(msg: string, duration = 2000): void {
    this.snackBar.open(msg, null, { duration, horizontalPosition: 'center', verticalPosition: 'top' });
  }

  // Toolbar Utils
  setTollbarIconById(id: number, icon: IconType): void {
    this.wrapper.toolbar.find(e => e.id === id).icon = icon;
  }

}
