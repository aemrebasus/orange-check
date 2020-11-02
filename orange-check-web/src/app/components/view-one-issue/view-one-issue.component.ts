import { Component, OnDestroy, OnInit } from '@angular/core';
import { IssueService } from '@services/core/entities.service';

@Component({
  selector: 'app-view-one-issue',
  templateUrl: './view-one-issue.component.html',
  styleUrls: ['./view-one-issue.component.scss']
})
export class ViewOneIssueComponent implements OnInit, OnDestroy {

  constructor(public issueService: IssueService) { }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {

  }

}
