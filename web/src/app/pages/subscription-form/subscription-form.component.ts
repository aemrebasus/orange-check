import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TermsAndConditionsComponent } from '@pages/terms-and-conditions/terms-and-conditions.component';
import { AeFormBuilder } from 'ae-dynamic-form';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.scss']
})
export class SubscriptionFormComponent implements OnInit {

  form = new AeFormBuilder()

    .newControl('email')
    .autocomplete('email')
    .placeholder('Type Email')
    .label('Email')
    .required()
    .buildFormControl()

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
    .autocomplete('new-password')
    .placeholder('Type Password')
    .required()
    .minLength(6)
    .buildFormControl()

    .newControl('password-again')
    .type('password')
    .placeholder('Confirm Password')
    .label('Confirm Password')
    .autocomplete('new-password')
    .required()
    .minLength(6)
    .buildFormControl()

    .newControl('terms')
    .type('checkbox')
    .label('Accept terms and conditions!')
    .required()
    .buildFormControl()

    .submitButtonLabel('Subscribe')
    .submitButtonColor('warn')
    .buildForm();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(TermsAndConditionsComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
