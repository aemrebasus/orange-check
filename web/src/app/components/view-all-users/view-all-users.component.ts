import { Component, EventEmitter, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Wrapper } from '@components/wrapper/wrapper.class';
import { IUser } from '@models';
import { UserService } from '@services/entities.service';
import { AeTable } from 'ae-material';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-view-all-users',
  templateUrl: './view-all-users.component.html',
  styleUrls: ['./view-all-users.component.scss']
})
export class ViewAllUsersComponent implements OnInit {

  eventEmitter = new EventEmitter<string>();

  wrapper: Wrapper = {
    toolbar: [
      { id: 2, icon: 'add', tooltip: 'Add New User', action: () => { this.openForm(); } },

    ]
  };


  isFormActive = false;

  dataSubscription: Subscription;
  tableData: AeTable<IUser>;
  isReady = false;
  isEmpty = true;

  constructor(private issueService: UserService) {
    this.issueService.getAll();

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

  ngAfterViewInit(): void {
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
  afterFormSubmitted(form: IUser): void {
    console.log(form);
  }
}
