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
  dataService: EntityCollectionServiceBase<any>;
  constructor(
  ) { }

  ngOnInit(): void {
    switch (this.fromType) {
      case 'issue':
        this.form = issueForm;
        break;
      case 'project':
        this.form = projectForm;
        break;
      case 'user':
        this.form = userForm;
        break;
      case 'message':
        this.form = messageForm;
        break;
    }
  }

  submitted(formValue): void {
    this.event.emit(formValue);
    this.formElement.reset();
  }

  closeForm(): void {
    this.event.emit('close-form');
  }
}
