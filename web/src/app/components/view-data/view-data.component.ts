import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { EntityCollectionServiceBase } from '@ngrx/data';
import { Store } from '@ngrx/store';
import { IssueActivityService, MessageActivityService, ProjectActivityService, UserActivityService } from '@services/entities.activity.service';
import { IssueDataService, MessageDataService, ProjectDataService, UserDataService } from '@services/entities.data.service';
import { EntityActionHandlers } from '@store/EntityActionHandlers';
import { DynamicTableConfig } from 'ae-dynamic-table';

@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.component.html',
  styleUrls: ['./view-data.component.scss']
})
export class ViewDataComponent {

}
