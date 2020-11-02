import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IMessage, IUser } from '@models';
import { MessageService } from '@services/core/entities.service';
import { AeDynamicForm, AeFormBuilder } from 'ae-dynamic-form';

@Component({
  selector: 'app-create-new-message',
  templateUrl: './create-new-message.component.html',
  styleUrls: ['./create-new-message.component.scss']
})
export class CreateNewMessageComponent implements OnInit {

  @Output() submitted = new EventEmitter<IMessage>();
  @Input() users: IUser[] = [];

  form: AeDynamicForm;

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.form = new AeFormBuilder()
      .newControl('subject').maxLength(20).required()
      .icon('subject').placeholder('Type Subject').label('Subject').buildFormControl()

      .newControl('body').maxLength(500).required()
      .icon('message').placeholder('Type Message').label('Message').buildFormControl()

      .newControl('to').required().type('select')
      .options(this.users.map(u => ({ label: u.firstName + '  ' + u.lastName, value: u.id.toString() })))
      .buildFormControl()

      .submitButtonLabel('Send')
      .buildForm();
  }


  submitForm(form: IMessage): void {
    this.messageService.add(form);
    this.messageService.addOneToCache({ id: this.generateId(), ...form });
    this.submitted.emit(form);
  }


  generateId(): number {
    return Math.floor(Math.random() * 1000000 + 1000000);
  }
}
