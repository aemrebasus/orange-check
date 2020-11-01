import { Component, OnInit } from '@angular/core';
import { IMessage } from '@models';
import { MessageService } from '@services/entities.service';
import { AeDynamicForm, AeFormBuilder } from 'ae-dynamic-form';

@Component({
  selector: 'app-create-new-message',
  templateUrl: './create-new-message.component.html',
  styleUrls: ['./create-new-message.component.scss']
})
export class CreateNewMessageComponent implements OnInit {

  form: AeDynamicForm = new AeFormBuilder()
    .newControl('subject').maxLength(20).required()
    .icon('subject').placeholder('Type Subject').label('Subject').buildFormControl()

    .newControl('body').maxLength(500).required()
    .icon('message').placeholder('Type Message').label('Message').buildFormControl()

    .submitButtonLabel('Send')
    .buildForm();

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  }

  submitForm(form: IMessage): void {
    this.messageService.add(form);
    this.messageService.addOneToCache(form);
  }
}
