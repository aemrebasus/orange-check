import { Component, OnInit } from '@angular/core';
import { IProject } from '@data/IProject';
import { State } from '@data/state';
import { Store } from '@ngrx/store';
import { IconType } from 'ng-icon-type';

@Component({
  selector: 'app-view-all-projects',
  templateUrl: './view-all-projects.component.html',
  styleUrls: ['./view-all-projects.component.scss']
})
export class ViewAllProjectsComponent implements OnInit {
  projects: IProject[];

  // Icons
  likeIcon: IconType = 'thumb_up';
  deleteIcon: IconType = 'delete';
  shareIcon: IconType = 'share';
  constructor(public store: Store<State>) { }

  ngOnInit(): void {
    this.store.subscribe(data => {
      this.projects = data.data.projects;
    });
  }

}
