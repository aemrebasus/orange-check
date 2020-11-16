import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AeFormBuilder } from 'ae-dynamic-form';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  form = new AeFormBuilder()
    .newControl('username')
    .autocomplete('username')
    .placeholder('Type username')
    .label('Username')
    .required()
    .maxLength(20)
    .buildFormControl()

    .newControl('password')
    .type('password')
    .label('Password')
    .autocomplete('current-password')
    .placeholder('Type Password')
    .required()
    .minLength(6)
    .buildFormControl()

    .newControl('rememberMe')
    .type('checkbox')
    .label('Remember me')
    .buildFormControl()


    .submitButtonLabel('Log In')
    .submitButtonColor('warn')
    .buildForm();


  constructor() { }

  ngOnInit(): void {
  }

}
