import { Component, Input, OnInit } from '@angular/core';
import { FormEventType } from '@components/form/form.component';
import { ToolbarEventTypes } from '@components/wrapper/wrapper.component';
import { EntityCollectionServiceBase, MergeStrategy } from '@ngrx/data';
import { EntityActionHandlers } from '@store/EntityActionHandlers';
import { DynamicTableConfig } from 'ae-dynamic-table';
import { Observable, Subject } from 'rxjs';

@Component({
    selector: 'app-view-data',
    templateUrl: './view-data.component.html',
    styleUrls: ['./view-data.component.scss']
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

        this.dataService.getAll();
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

    toolbarEventHandler(event: ToolbarEventTypes): void {
        switch (event) {
            case 'add':
                this.formOpen = true;
                break;
        }
    }

    formEventHandler(event: FormEventType): void {
        switch (event.type) {
            case 'close':
                this.formOpen = null;
                break;
            case 'submit':
                this.formOpen = null;
                const ndata = { id: Math.floor(Math.random() * 10000 + 1099999183), ...event.data };
                this.dataService.upsert(ndata);
                this.dataService.upsertOneInCache(ndata, { isOptimistic: true, mergeStrategy: MergeStrategy.PreserveChanges });
                break;
        }
    }
}
