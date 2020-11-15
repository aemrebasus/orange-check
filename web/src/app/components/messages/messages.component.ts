import { Component, OnInit } from '@angular/core';
import { ToolbarEvents } from '@components/wrapper/wrapper.component';
import { MessageActivityService } from '@services/entities.activity.service';
import { MessageDataService } from '@services/entities.data.service';
import { DynamicTableConfig } from 'ae-dynamic-table';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  loading = this.dataService.loading$;
  isMultiSelect = this.activityService.isMultiSelect$;
  data = this.dataService.entities$;
  config: DynamicTableConfig;
  formOpen;

  constructor(public dataService: MessageDataService, public activityService: MessageActivityService) { }

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
