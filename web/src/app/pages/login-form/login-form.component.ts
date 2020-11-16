import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AeFormBuilder } from 'ae-dynamic-form';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class LoginFormComponent implements OnInit {

  form = new AeFormBuilder()
    .newControl('username')
    .label('Username')
    .buildFormControl()
    .buildForm();


  constructor() { }

  ngOnInit(): void {
  }

}
