import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Wrapper } from '@components/wrapper/wrapper.class';
import { IMessage } from '@models';
import { MessageService, UserService } from '@services/entities.data.service';
import { AeTable } from 'ae-material';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-view-all-messages',
  templateUrl: './view-all-messages.component.html',
  styleUrls: ['./view-all-messages.component.scss']
})
export class ViewAllMessagesComponent implements OnInit, OnDestroy {

  eventEmitter = new EventEmitter<string>();

  wrapper: Wrapper = {
    toolbar: [
      { id: 2, icon: 'add', tooltip: 'Add New User', action: () => { this.openForm(); } },
    ]
  };


  isFormActive = false;

  dataSubscription: Subscription;
  tableData: AeTable<IMessage>;
  isReady = false;
  isEmpty = true;

  users = this.userService.entities$;


  constructor(private issueService: MessageService, private userService: UserService) {
    this.issueService.getAll();
    this.userService.getAll();
  }

  ngOnInit(): void {
    this.dataSubscription = this.issueService.entities$.subscribe(data => {
      this.tableData = {
        dataSource: new MatTableDataSource(data),
        onClick: (id: any) => { /* */ }
      };

      if (data.length > 0) {
        this.isEmpty = false;
      }
      this.isReady = true;

    });

  }


  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe();
  }


  openForm(): void {
    this.isFormActive = true;
  }
  closeForm(): void {
    this.isFormActive = false;
  }
  afterFormSubmitted(form: IMessage): void {
    console.log(form);
  }

}
