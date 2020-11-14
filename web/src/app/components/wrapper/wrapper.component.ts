import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Router } from '@angular/router';
import { TableComponent } from '@components/table/table.component';
import { ToolbarBuilder, ToolbarItem } from '@services/toolbar.builder';
import { DynamicTableComponent } from 'ae-dynamic-table';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent {

  @ViewChild('componentRef') componentRef: ElementRef;

  loading = false;

  toolbar: ToolbarItem[] = new ToolbarBuilder()

    .newItem(2).icon('add').tooltip('Add').action(() => { console.log('Click works!'); })

    .newItem(1).icon('select_all').tooltip('Select All').action(() => { console.log('Click works!'); })


    .newItem(3).icon('delete').tooltip('Delete').action(() => { console.log('Click works!'); })

    .newItem(4).icon('table_view').tooltip('Table View').action(() => { console.log('table view') })

    .newItem(5).icon('layers').tooltip('Card View').action(() => { console.log('card view') })

    .getToolbar();


  component = TableComponent;

  componentData: DynamicTableComponent;


  /**
   * When this is true, user is able to select multiple items.
   */
  isMultiSelect = false;

  constructor() {

  }



  /**
   * When user toggles the multi-select-toggle, update the isMultiSelect property.
   */
  updateMultiSelect(event: MatSlideToggleChange): void {
    this.isMultiSelect = event.checked;
  }

}
