import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { issueForm, messageForm, projectForm, userForm } from '@components/entity-forms';
import { EntityCollectionServiceBase } from '@ngrx/data';
import { IssueDataService, MessageDataService, ProjectDataService, UserDataService } from '@services/entities.data.service';
import { AeDynamicFormComponent } from 'ae-dynamic-form';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() fromType: 'issue' | 'project' | 'user' | 'message';
  @Output() event = new EventEmitter<'close-form'>();
  @ViewChild(AeDynamicFormComponent) formElement: AeDynamicFormComponent;

  form = null;
  servie: EntityCollectionServiceBase<any>;
  constructor(
    private router: Router,
    private projectDataService: ProjectDataService,
    private issueDataSevice: IssueDataService,
    private messageDataSevice: MessageDataService,
    private userDataSevice: UserDataService,
  ) { }

  ngOnInit(): void {
    switch (this.fromType) {
      case 'issue':
        this.form = issueForm;
        this.servie = this.issueDataSevice;
        break;
      case 'project':
        this.form = projectForm;
        this.servie = this.projectDataService;
        break;
      case 'user':
        this.form = userForm;
        this.servie = this.userDataSevice;
        break;
      case 'message':
        this.form = messageForm;
        this.servie = this.messageDataSevice;
        break;
      default:
        break;
    }
  }

  submitted(formValue): void {
    this.event.emit(formValue);
    this.formElement.reset();
    this.servie.upsert(formValue);
  }

  closeForm(): void {
    this.event.emit('close-form');
  }
}
