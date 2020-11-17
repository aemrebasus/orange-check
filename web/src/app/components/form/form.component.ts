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

  @Input() formType: EntityNames;

  @Output() formEvent = new EventEmitter<FormEventType>();

  form = null;

  dataService: EntityCollectionServiceBase<any>;


  ngOnInit(): void {
    switch (this.formType) {
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

  getXSRF(): string {
    return this.getCookie('XSRF-TOKEN');
  }

  getCookie(cname): string {
    const name = cname + '=';
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let c of ca) {
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  }

  submitted(formValue): void {
    this.formEvent.emit({
      type: 'submit',
      data: {
        _csrf: this.getXSRF(),
        ...formValue
      }
    });
    this.formElement.reset();
  }

  closeForm(): void {
    this.formEvent.emit({
      type: 'close'
    });
  }
}
