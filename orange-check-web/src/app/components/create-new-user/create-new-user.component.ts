import { Component, OnInit } from '@angular/core';
import { AeDynamicForm, AeFormBuilder } from 'ae-dynamic-form';

@Component({
  selector: 'app-create-new-user',
  templateUrl: './create-new-user.component.html',
  styleUrls: ['./create-new-user.component.scss']
})
export class CreateNewUserComponent implements OnInit {
  form: AeDynamicForm = new AeFormBuilder()
    .title('User Form')
    .newControl('firstName').placeholder('Type First Name').label('First Name').required().buildFormControl()
    .buildForm();

  constructor() { }

  ngOnInit(): void {
  }

}
