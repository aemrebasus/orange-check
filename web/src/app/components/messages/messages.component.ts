import { Component, OnInit } from '@angular/core';
import { MessageActivityService } from '@services/entities.activity.service';
import { MessageDataService } from '@services/entities.data.service';
import { DynamicTableConfig } from 'ae-dynamic-table';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  data = this.dataService.entities$;
  config: DynamicTableConfig;

  constructor(private dataService: MessageDataService, private activityService: MessageActivityService) { }

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
