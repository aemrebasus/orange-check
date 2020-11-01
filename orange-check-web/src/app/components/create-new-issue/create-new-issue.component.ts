import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Issue } from '@models';
import { IssueService } from '@services/entities.service';
import { AeDynamicForm, AeFormBuilder } from 'ae-dynamic-form';

@Component({
  selector: 'app-create-new-issue',
  templateUrl: './create-new-issue.component.html',
  styleUrls: ['./create-new-issue.component.scss']
})
export class CreateNewIssueComponent implements OnInit {

  @Output() submitted = new EventEmitter<Issue>();

  form: AeDynamicForm = new AeFormBuilder().title('Issue Form')
    .newControl('title').required().maxLength(20)
    .placeholder('Type Title').label('Title').buildFormControl()

    .newControl('description').required().maxLength(400).minLength(10)
    .placeholder('Type Description').label('Description').buildFormControl()

    .newControl('due').type('date').required()
    .placeholder('Type Due Date').label('Due').buildFormControl()

    .submitButtonLabel('Create')
    .buildForm();

  constructor(private issueService: IssueService) { }

  ngOnInit(): void {
  }


  submitForm(form: Issue): void {
    this.issueService.add(form);
    this.issueService.addOneToCache({ id: this.generateId(), ...form });
    this.submitted.emit(form);
  }


  generateId(): number {
    return Math.floor(Math.random() * 1000000 + 1000000);
  }
}
