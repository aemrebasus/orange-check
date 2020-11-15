import { Component, OnInit } from '@angular/core';

import { ProjectActivityService } from '@services/entities.activity.service';
import { ProjectDataService } from '@services/entities.data.service';
import { DynamicTableConfig } from 'ae-dynamic-table';


@Component({
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  data = this.dataService.filteredEntities$;
  config: DynamicTableConfig;

  constructor(private dataService: ProjectDataService, private activityService: ProjectActivityService) { }

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
}
