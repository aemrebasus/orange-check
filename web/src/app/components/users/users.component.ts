import { AfterViewInit, Component, OnInit } from '@angular/core';
import { UserActivityService } from '@services/entities.activity.service';
import { UserDataService } from '@services/entities.data.service';
import { DynamicTableConfig } from 'ae-dynamic-table';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, AfterViewInit {
  loading = this.dataService.loading$;
  isMultiSelect = this.activityService.isMultiSelect$;
  data = this.dataService.entities$;
  config: DynamicTableConfig;

  constructor(public dataService: UserDataService, public activityService: UserActivityService) { }

  ngOnInit(): void {
    this.activityService.getTableConfig().subscribe(config => {
      this.config = config;
    });
  }

  ngAfterViewInit(): void {
  }
  onRowClick(event): void {
    console.log(event);
  }

  columnFilterChange(filteredColumns): void {
    this.activityService.setTableFilteredColumns([...filteredColumns]);
  }
}
