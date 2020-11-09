import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IUser } from '@models';
import { UserService } from '@services/entities.service';
import { AeDynamicForm, AeFormBuilder } from 'ae-dynamic-form';

@Component({
  selector: 'app-create-new-user',
  templateUrl: './create-new-user.component.html',
  styleUrls: ['./create-new-user.component.scss']
})
export class CreateNewUserComponent implements OnInit {

  @Output() submitted = new EventEmitter<IUser>();

  form: AeDynamicForm = new AeFormBuilder()
    .title('User Form')
    .newControl('firstName').required().maxLength(50).placeholder('Type First Name').label('First Name').buildFormControl()
    .newControl('lastName').required().maxLength(50).placeholder('Type Last Name').label('Last Name').buildFormControl()
    .newControl('email').type('email').required().placeholder('Type Email').label('Email').buildFormControl()

    .newControl('role').type('select').required()
    .options([
      { icon: 'admin_panel_settings', value: 'admin', label: 'Admin' },
      { icon: 'developer_mode', value: 'developer', label: 'Developer' },
      { icon: 'next_plan', value: 'scrummaster', label: 'Scrummaster' }
    ]).buildFormControl()
    .buildForm();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  submitForm(form: IUser): void {
    this.userService.upsert({ id: -1, ...form });
    this.submitted.emit(form);
  }


}
