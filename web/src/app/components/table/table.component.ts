import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DynamicTableConfig } from 'ae-dynamic-table';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() data = [{ id: 1 }, { id: 2 }];
  config: DynamicTableConfig = {
    displayedColumns: ['id', 'name']
  };

  constructor(public activatedRoute: ActivatedRoute) { }

  ngOnInit(): void { }

}
