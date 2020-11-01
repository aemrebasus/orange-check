import { Component, OnInit } from '@angular/core';
import { IUser } from '@models';
import { UserService } from '@services/entities.service';
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

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  submitForm(form: IUser): void {
    this.userService.add(form);
    this.userService.addOneToCache(form);
  }

}
