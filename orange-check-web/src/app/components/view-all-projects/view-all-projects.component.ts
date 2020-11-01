import { Component, EventEmitter, OnDestroy } from '@angular/core';
import { IProject } from 'src/app/models';

import { ProjectService } from '@services/entities.service';
import { Observable, Subscription } from 'rxjs';
import { ToolbarItem, Wrapper } from '@components/wrapper/wrapper.class';
import { IconType } from 'ng-icon-type';


type EventTypes = 'select' | 'select-all' | 'delete' | 'add' | 'open-project';


@Component({
  selector: 'app-view-all-projects',
  templateUrl: './view-all-projects.component.html',
  styleUrls: ['./view-all-projects.component.scss']
})
export class ViewAllProjectsComponent implements OnDestroy {

  eventEmitter = new EventEmitter<EventTypes>();
  eventSubscription: Subscription;

  wrapper: Wrapper = {
    toolbar: [{
      id: 1, icon: 'select_all', tooltip: 'Select All',
      action: () => { this.eventEmitter.emit('select-all'); }
    }, {
      id: 2, icon: 'add', tooltip: 'Add New Project',
      action: () => { this.eventEmitter.emit('add'); }
    }, {
      id: 3, icon: 'delete', tooltip: 'Delete Project', disabled: true,
      action: () => { this.eventEmitter.emit('delete'); }
    }, {
      id: 4, icon: 'open_in_new', tooltip: 'Open Project', disabled: true,
      action: () => { this.eventEmitter.emit('open-project'); }
    }, {
      id: 5, icon: 'check_box_outline_blank', tooltip: 'Multiple select',
      action: () => { this.toggleMultiSelect(); }
    }

    ]
  };

  loading: Observable<boolean> = this.projectService.loading$;
  projects: Observable<IProject[]> = this.projectService.entities$;
  isFormActive = false;
  selectedItems: IProject[] = [];
  isMultiSelectActive = false;

  constructor(public projectService: ProjectService) {
    this.projectService.getAll();
    this.initEventObserver();
  }

  ngOnDestroy(): void {
    this.eventSubscription.unsubscribe();
  }

  initEventObserver(): void {
    this.eventSubscription = this.eventEmitter.subscribe(event => {

      switch (event as EventTypes) {
        case 'select-all':
          this.selectAll();
          this.toggleIcon(1, 'select_all', 'check');
          this.eventEmitter.emit('select');
          break;
        case 'add':
          this.openForm();
          break;
        case 'delete':
          this.deleteProject();
          break;
      }
    });
  }

  openForm(): void {
    this.isFormActive = true;
  }

  closeForm(): void {
    setTimeout(() => {
      this.isFormActive = false;
    }, 100);
  }

  toggleIcon(id: number, first: IconType, next: IconType): void {
    const item = this.getToolbarItemById(id);
    if (item.icon === first) {
      item.icon = next;
    } else {
      item.icon = first;
    }
  }

  toggleMultiSelect(): void {
    this.isMultiSelectActive = this.isMultiSelectActive ? false : true;
    this.toggleIcon(5, 'check_box_outline_blank', 'check');
    if (!this.isMultiSelectActive) {
      this.deselectAll();
    }
  }

  getToolbarItemById(id: number): ToolbarItem {
    return this.wrapper.toolbar.find(e => e.id === id);
  }

  getToolbarItemByIcon(icon: IconType): ToolbarItem {
    return this.wrapper.toolbar.find(e => e.icon === icon);
  }

  deleteProject(): void {
    const isConfirmed = confirm('Are you sure to delete selected projects?');
    if (isConfirmed) {
      this.selectedItems.forEach(item => {
        this.projectService.removeOneFromCache({ ...item });
        this.projectService.delete({ ...item });
      });
      this.changeIconStatus('delete', false);
      this.changeIconStatus('open_in_new', false);
      this.toggleIcon(1, 'select_all', 'check');
    }
  }

  changeIconStatus(icon: IconType, disabled: boolean): void {
    this.wrapper.toolbar.find(e => e.icon === icon).disabled = disabled;
  }

  deselectItem(project: IProject): void {
    this.selectedItems[this.selectedItems.indexOf(project)] = null;
    this.selectedItems = this.selectedItems.filter(i => i);
  }

  selectItem(project: IProject): void {
    if (this.selectedItems.includes(project)) {
      this.deselectItem(project);
      if (this.selectedItems.length === 0) {
        this.changeIconStatus('delete', true);
        this.changeIconStatus('open_in_new', true);
      }
      return;
    }
    if (this.isMultiSelectActive) {
      this.selectedItems.push(project);
    } else {
      this.selectedItems = [project];
    }
    if (this.selectedItems.length > 0) {
      this.changeIconStatus('delete', false);
      this.changeIconStatus('open_in_new', false);
    }
  }


  selectAll(): void {
    this.projects.subscribe(data => {
      const items = data.map(e => e);
      if (items.length === this.selectedItems.length) {
        this.selectedItems = [];
        this.changeIconStatus('delete', true);
        this.changeIconStatus('open_in_new', true);
      } else {
        this.selectedItems = items;
        this.changeIconStatus('delete', false);
        this.changeIconStatus('open_in_new', false);
      }
    }).unsubscribe();
  }

  deselectAll(): void {
    this.selectAll();
    this.selectAll();
  }



}
