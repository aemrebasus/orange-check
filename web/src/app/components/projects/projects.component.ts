import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
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

  constructor(private dataService: ProjectDataService, private activityService: ProjectActivityService, private store: Store) {

    this.store.subscribe(data => {
      console.log(data);
    });

  }

  ngOnInit(): void {
    this.activityService.getTableConfig().subscribe(config => {
      this.config = config;
      this.config.filteredColumns = config.filteredColumns;
      console.log('table config: ', config);
    });
  }

  onItemClick(event): void {
    console.log(event);
  }

  columnFilterChange(filteredColumns): void {
    this.activityService.setTableFilteredColumns([...filteredColumns]);
  }
}
