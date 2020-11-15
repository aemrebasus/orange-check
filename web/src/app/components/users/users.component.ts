import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ToolbarEvents } from '@components/wrapper/wrapper.component';
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
  formOpen;

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
