import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  encapsulation:  ViewEncapsulation.Emulated
})
export class LoginFormComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

}
