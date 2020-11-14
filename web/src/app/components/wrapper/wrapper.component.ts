import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { ActivatedRoute, Router } from '@angular/router';
import { CardsComponent } from '@components/cards/cards.component';
import { TableComponent } from '@components/table/table.component';
import { ToolbarBuilder, ToolbarItem } from '@services/toolbar.builder';
import { DynamicTableComponent } from 'ae-dynamic-table';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {

  @ViewChild('componentRef') componentRef: ElementRef;

  loading = false;

  toolbar: ToolbarItem[] = new ToolbarBuilder()

    .newItem(2).icon('add').tooltip('Add').action(() => { console.log('Click works!'); })

    .newItem(1).icon('select_all').tooltip('Select All').action(() => { console.log('Click works!'); })

    .newItem(3).icon('delete').tooltip('Delete').action(() => { console.log('Click works!'); })

    .newItem(4).icon('table_view').tooltip('Table View').action(() => { this.setView('table'); })

    .newItem(5).icon('layers').tooltip('Card View').action(() => { this.setView('card'); })

    .getToolbar();


  component: any = TableComponent;

  componentData: DynamicTableComponent;


  /**
   * When this is true, user is able to select multiple items.
   */
  isMultiSelect = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {

    this.activatedRoute.queryParams.subscribe(params => {
      switch (params.view) {

        case 'table':
          this.component = TableComponent;
          break;

        case 'card':
          this.component = CardsComponent;
          break;

        default:
          this.component = TableComponent;
          break;

      }
    });
  }

  /**
   * When user toggles the multi-select-toggle, update the isMultiSelect property.
   */
  updateMultiSelect(event: MatSlideToggleChange): void {
    this.setMultiselect(event.checked);
    this.isMultiSelect = event.checked;
  }


  setView(view: string): void {
    this.appendParam({ view });
  }

  setMultiselect(multiselect: boolean): void {
    this.appendParam({ multiselect });
  }

  appendParam(param: { [key: string]: any }): void {
    this.router.navigate([], { queryParams: { ...this.activatedRoute.snapshot.queryParams, ...param } });
  }

}
