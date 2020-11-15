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

  data = this.dataService.entities$;
  config: DynamicTableConfig;

  constructor(private dataService: UserDataService, private activityService: UserActivityService) {

    this.activityService.getTableConfig().subscribe(config => {
      this.config = config;
    });

  }

  ngOnInit(): void {
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
