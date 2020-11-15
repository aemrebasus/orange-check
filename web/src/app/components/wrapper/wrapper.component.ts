import { Component, Input, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { RouterService } from '@services/router.service';
import { ToolbarBuilder, ToolbarItem } from '@services/toolbar.builder';
import { EntityActionHandlers } from '@store/EntityActionHandlers';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {


  @Input() loading;

  @Input() activityService: EntityActionHandlers;
  /**
   * When this is true, user is able to select multiple items.
   */
  @Input() isMultiSelect;

  toolbar: ToolbarItem[] = new ToolbarBuilder()

    .newItem(2).icon('add').tooltip('Add').action(() => { console.log('Click works!'); })

    .newItem(1).icon('select_all').tooltip('Select All').action(() => { console.log('Click works!'); })

    .newItem(3).icon('delete').tooltip('Delete').action(() => { console.log('Click works!'); })

    .newItem(4).icon('table_view').tooltip('Table View').action(() => {
      console.log('set table view');
    })

    .newItem(5).icon('layers').tooltip('Card View').action(() => {
      console.log('set card view');
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
