import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { ToolbarBuilder, ToolbarItem } from '@services/toolbar.builder';
import { EntityActionHandlers } from '@store/EntityActionHandlers';

export type ToolbarEventTypes = 'add' | 'select_all' | 'delete' | 'table_view' | 'card_view';


@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {

  @Output() toolbarEvent = new EventEmitter<ToolbarEventTypes>();

  @Input() loading;

  @Input() activityService: EntityActionHandlers;

  /**
   * When this is true, user is able to select multiple items.
   */
  @Input() isMultiSelect;

  toolbar: ToolbarItem[] = new ToolbarBuilder()

    .newItem(2).icon('add').tooltip('Add').action(() => { this.toolbarEvent.emit('add'); })

    .newItem(1).icon('select_all').tooltip('Select All').action(() => { this.toolbarEvent.emit('select_all'); })

    .newItem(3).icon('delete').tooltip('Delete').action(() => { this.toolbarEvent.emit('delete'); })

    .newItem(4).icon('table_view').tooltip('Table View').action(() => {
      this.toolbarEvent.emit('table_view');
    })

    .newItem(5).icon('layers').tooltip('Card View').action(() => {
      this.toolbarEvent.emit('card_view');
    })

    .getToolbar();





  ngOnInit(): void { }

  /**
   * When user toggles the multi-select-toggle, update the isMultiSelect property.
   */
  updateMultiSelect(event: MatSlideToggleChange): void {
    this.activityService.setMultiselect(event.checked);
  }

}
