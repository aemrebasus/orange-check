import { Component, OnInit } from '@angular/core';
import { IssueActivityService } from '@services/entities.activity.service';
import { IssueDataService } from '@services/entities.data.service';
import { DynamicTableConfig } from 'ae-dynamic-table';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss']
})
export class IssuesComponent implements OnInit {


  data = this.dataService.entities$;
  config: DynamicTableConfig;

  constructor(private dataService: IssueDataService, private activityService: IssueActivityService) { }

  ngOnInit(): void {
    this.activityService.getTableConfig().subscribe(config => {
      this.config = config;
    });
    this.dataService.getAll().subscribe(data => {
      console.log('issues: ', data);
    });
  }

  onRowClick(event): void {
    console.log(event);
  }

  columnFilterChange(filteredColumns): void {
    this.activityService.setTableFilteredColumns([...filteredColumns]);
  }

}
