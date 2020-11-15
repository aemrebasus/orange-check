import { Component, OnInit } from '@angular/core';
import { ToolbarEvents } from '@components/wrapper/wrapper.component';
import { IssueActivityService } from '@services/entities.activity.service';
import { IssueDataService } from '@services/entities.data.service';
import { DynamicTableConfig } from 'ae-dynamic-table';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss']
})
export class IssuesComponent implements OnInit {

  loading = this.dataService.loading$;
  isMultiSelect = this.activityService.isMultiSelect$;
  data = this.dataService.entities$;
  config: DynamicTableConfig;
  formOpen;

  constructor(public dataService: IssueDataService, public activityService: IssueActivityService) { }

  ngOnInit(): void {
    this.activityService.getTableConfig().subscribe(config => {
      this.config = config;
    });
  }

  onRowClick(event): void {
    console.log(event);
  }

  columnFilterChange(filteredColumns): void {
    this.activityService.setTableFilteredColumns([...filteredColumns]);
  }

  toolbarEvent(event: ToolbarEvents): void {
    switch (event) {
      case 'add':
        this.formOpen = true;
        break;

    }
  }

  eventHandler(event): void {
    console.log(event);
    switch (event) {
      case 'close-form':
        this.formOpen = null;
        break;
    }
  }

}
