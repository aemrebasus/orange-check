import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  data = this.activatedRoute.data.pipe(map(r => r.resolved.data));
  config = this.activatedRoute.data.pipe(map(r => r.resolved.config));

  constructor(public activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
