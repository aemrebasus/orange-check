import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { issueForm, messageForm, projectForm, userForm } from '@components/entity-forms';
import { EntityCollectionServiceBase, EntityPluralNames } from '@ngrx/data';
import { EntityNames } from '@store/ApplicationState';
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

  @Input() fromType: EntityNames;

  @Output() formEvent = new EventEmitter<FormEventType>();

  form = null;

  dataService: EntityCollectionServiceBase<any>;


  ngOnInit(): void {
    switch (this.fromType) {
      case 'Issue':
        this.form = issueForm;
        break;
      case 'Project':
        this.form = projectForm;
        break;
      case 'User':
        this.form = userForm;
        break;
      case 'Message':
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
