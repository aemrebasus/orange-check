import { AfterViewInit, Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Wrapper } from '@components/wrapper/wrapper.class';
import { Issue } from '@models';
import { IssueService } from '@services/entities.service';
import { AeTable } from 'ae-material';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-view-all-issues',
  templateUrl: './view-all-issues.component.html',
  styleUrls: ['./view-all-issues.component.scss']
})
export class ViewAllIssuesComponent implements OnInit, AfterViewInit, OnDestroy {
  eventEmitter = new EventEmitter<string>();

  wrapper: Wrapper = {
    toolbar: [
      { id: 2, icon: 'add', tooltip: 'Add New Issue', action: () => { this.openForm(); } },

    ]
  };


  isFormActive = false;

  dataSubscription: Subscription;
  tableData: AeTable<Issue>;
  isReady = false;
  isEmpty = true;

  constructor(private issueService: IssueService) {

  }

  ngOnInit(): void {
    this.dataSubscription = this.issueService.entities$.subscribe(data => {
      this.tableData = {
        dataSource: new MatTableDataSource(data),
        onClick: (id: any) => { /* */ }
      };

      this.isReady = true;
      if (data.length > 0) {
        this.isEmpty = false;
      }


    });


  }

  ngAfterViewInit(): void {

  }

  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe();
  }


  openForm(): void {
    this.isFormActive = true;
  }

  closeForm(): void {
    this.isFormActive = false;
  }

  afterFormSubmitted(form: Issue): void {

  }
}
