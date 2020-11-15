import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { issueForm, messageForm, projectForm, userForm } from '@components/entity-forms';
import { EntityCollectionServiceBase } from '@ngrx/data';
import { AeDynamicFormComponent } from 'ae-dynamic-form';


export interface FormEventType {
  type: 'submit' | 'close';
  data?: any;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @ViewChild(AeDynamicFormComponent) formElement: AeDynamicFormComponent;

  @Input() fromType: 'issue' | 'project' | 'user' | 'message';

  @Output() formEvent = new EventEmitter<FormEventType>();

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
    this.formEvent.emit({
      type: 'submit',
      data: formValue
    });
    this.formElement.reset();
  }

  closeForm(): void {
    this.formEvent.emit({
      type: 'close'
    });
  }
}
