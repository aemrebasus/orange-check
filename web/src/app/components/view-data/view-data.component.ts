import { Component, Input, OnInit } from '@angular/core';
import { ToolbarEvents } from '@components/wrapper/wrapper.component';
import { EntityCollectionServiceBase } from '@ngrx/data';
import { EntityActionHandlers } from '@store/EntityActionHandlers';
import { DynamicTableConfig } from 'ae-dynamic-table';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-view-data',
    templateUrl: './view-data.component.html'
})
export class ViewDataComponent implements OnInit {

    @Input() dataService: EntityCollectionServiceBase<any>;
    @Input() activityService: EntityActionHandlers;

    loading: Observable<boolean>;
    isMultiSelect: Observable<boolean>;
    entities: Observable<any>;
    config: DynamicTableConfig;
    formOpen: boolean;

    constructor() { }

    ngOnInit(): void {
        this.activityService.getTableConfig().subscribe(config => {
            this.config = config;
        });

        this.loading = this.dataService.loading$;
        this.isMultiSelect = this.activityService.isMultiSelect$;
        this.entities = this.dataService.entities$;
    }

    onRowClick(event): void {
        console.log(event);
    }

    onSearched(event): void {
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
        switch (event) {
            case 'close-form':
                this.formOpen = null;
                break;
            default:
                this.dataService.upsertOneInCache({ id: Math.floor(Math.random() * 81923871 + 1287319), ...event });
        }
    }
}
