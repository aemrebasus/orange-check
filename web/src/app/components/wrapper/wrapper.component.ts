import { AfterViewInit, Component, ComponentRef, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { MatTableDataSource } from '@angular/material/table';
import { DynamicTableComponent } from 'ae-dynamic-table';
import { AeTable, AeTableComponent, AeToolbar } from 'ae-material';
import { ToolbarBuilder, ToolbarItem, Wrapper } from './wrapper.class';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('componentRef') componentRef: ElementRef;

  /**
   * if the data is still loding, display the progress bar animation
   * Delete the input decorator.
   */
  @Input() loading = false;

  /**
   * Delete this
   */
  @Input() input: Wrapper;


  /**
   * Toolbar to modify and organize data set
   */
  toolbar: ToolbarItem[] = new ToolbarBuilder()
    .newItem(1).icon('select_all').tooltip('Select All').action(() => { console.log('Click works!'); })
    .newItem(2).icon('add').tooltip('Add').action(() => { console.log('Click works!'); })
    .newItem(3).icon('delete').tooltip('Delete').action(() => { console.log('Click works!'); })
    .getToolbar();


  /**
   *  The currently shown component.
   */
  component: 'table' | 'card' | 'list' = 'table';

  componentData: DynamicTableComponent;


  componentInput: AeTable = {
    dataSource: new MatTableDataSource([{ a: 1, b: 2 }]),
    onClick: () => { console.log('hello there'); }
  };

  /**
   * When this is true, user is able to select multiple items.
   */
  isMultiSelect = false;

  constructor() {

  }

  /**
   * Life cycle hooks
   */
  ngOnInit(): void {
    console.log('Life cycle methods...');
  }

  ngOnDestroy(): void {
    console.log('Life cycle methods...');
  }

  ngAfterViewInit(): void {
    console.log('Life cycle methods...');
  }
  // Life cycle hooks



  /**
   * When user toggles the multi-select-toggle, update the isMultiSelect property.
   */
  updateMultiSelect(event: MatSlideToggleChange): void {
    this.isMultiSelect = event.checked;
  }

}
